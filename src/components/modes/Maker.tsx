
"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, AlertTriangle, Download, Copy, Check, Sparkles, Upload } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { createDocumentFromPrompt } from '@/ai/flows/create-document-from-prompt';
import { editFilesFromPrompt } from '@/ai/flows/edit-files-from-prompt';
import { importFromUrl } from '@/ai/flows/import-from-url';
import { MakerOptions } from './MakerOptions';
import { PublishDialog } from '@/components/dialogs/PublishDialog';

interface MakerProps {
  mode: any;
  generatePrompt: (prompt: string) => string;
  resultTitle: string;
  resultType: 'website' | 'code';
  codeLanguage?: string;
  promptPlaceholder: string;
  showMakerOptions?: boolean;
}

export function Maker({ mode, generatePrompt, resultTitle, resultType, codeLanguage, promptPlaceholder, showMakerOptions = false }: MakerProps) {
    const { addHistoryItem, model } = useModes();
    const [prompt, setPrompt] = useState('');
    const [editPrompt, setEditPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isImporting, setIsImporting] = useState(false);
    const [result, setResult] = useState('');
    const [explanation, setExplanation] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);
    const [isPublishing, setIsPublishing] = useState(false);
    const codeRef = useRef<HTMLElement>(null);
    const [activeTab, setActiveTab] = useState('prompt');

    useEffect(() => {
        if (result && resultType === 'code' && window.hljs) {
            if (codeRef.current) {
                codeRef.current.innerHTML = window.hljs.highlight(result, { language: codeLanguage || 'plaintext' }).value;
            }
        }
    }, [result, resultType, codeLanguage]);

    const handleGenerate = async () => {
        if (!prompt.trim()) { setError(`Please describe the ${mode.name.toLowerCase()} you want to build.`); return; }
        setIsLoading(true); setResult(''); setError(''); setExplanation('');
        
        const fullPrompt = generatePrompt(prompt);

        try {
            const apiResult = await createDocumentFromPrompt({ prompt: fullPrompt, model });
            let generatedResult = apiResult.document.replace(/^```(html|json)?\n?/, '').replace(/```$/, '').trim();
            
            let generatedExplanation: string | undefined;

            if (resultType === 'website') {
                generatedExplanation = "Your website has been generated. You can preview it below, download the HTML file, or publish it to Firebase."
            } else {
                 try {
                    const parsedResult = JSON.parse(generatedResult);
                    generatedResult = parsedResult.code || generatedResult;
                    generatedExplanation = parsedResult.explanation;
                } catch(e) {
                    generatedExplanation = "Your plan has been generated. You can review the details below.";
                }
            }

            setResult(generatedResult);
            if (generatedExplanation) setExplanation(generatedExplanation);
            addHistoryItem(mode.id, prompt, generatedResult);
        } catch (err: any) {
            setError(`Failed to generate: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleEdit = async () => {
        if (!editPrompt.trim() || !result) { setError('Please enter an edit instruction.'); return; }
        setIsEditing(true); setError('');
        
        try {
            const editResult = await editFilesFromPrompt({fileContent: result, prompt: editPrompt, model});
            let finalResult = editResult.fileContent.replace(/^```(html|json)?\n?/, '').replace(/```$/, '').trim();
            setResult(finalResult);
            setEditPrompt('');
            addHistoryItem(mode.id, `Edit: ${editPrompt}`, finalResult);
        } catch(err: any) {
             setError(`Failed to edit: ${err.message}`);
        } finally {
            setIsEditing(false);
        }
    }

    const handleCopy = () => {
        if (navigator.clipboard && result) {
            navigator.clipboard.writeText(result).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };

    const handleDownload = () => {
        const fileExtension = resultType === 'website' ? 'html' : 'md';
        const mimeType = resultType === 'website' ? 'text/html' : 'text/markdown';
        const blob = new Blob([result], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `index.${fileExtension}`; // Changed to index.html for web deployment
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    const handlePastedCode = (code: string) => {
        setResult(code);
        setActiveTab('prompt'); // Switch back to the main view
        setError('');
        setExplanation("Previewing your pasted code. You can now use the 'Refine with AI' feature to modify it.");
        addHistoryItem(mode.id, "Pasted Code", code);
    }
    
    const handleUrlImport = async (url: string) => {
        if (!url.trim()) { setError('Please enter a URL.'); return; }
        setIsImporting(true); setResult(''); setError(''); setExplanation('');
        try {
            const importResult = await importFromUrl({ url });
            let finalResult = importResult.content;
            if (resultType === 'website') {
                finalResult = finalResult.replace(/^```html\n?/, '').replace(/```$/, '').trim();
            }
            setResult(finalResult);
            setActiveTab('prompt'); // Switch back to main view
            setExplanation(`Successfully imported content from ${url}. You can now use the 'Refine with AI' feature.`);
            addHistoryItem(mode.id, `Import from ${url}`, finalResult);
        } catch(err: any) {
             setError(`Failed to import from URL: ${err.message}`);
        } finally {
            setIsImporting(false);
        }
    }

    return (
        <ModeWrapper mode={mode}>
            {isPublishing && <PublishDialog setIsOpen={setIsPublishing} siteContent={result} />}
            {showMakerOptions && <MakerOptions activeTab={activeTab} onTabChange={(tab) => { setActiveTab(tab); setError(''); }} onCodeCreate={handlePastedCode} onUrlImport={handleUrlImport} isImporting={isImporting} />}
            
            {activeTab === 'prompt' && (
                <>
                    <Textarea 
                        value={prompt} 
                        onChange={(e) => setPrompt(e.target.value)} 
                        placeholder={promptPlaceholder} 
                        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                        rows={3} 
                    />
                    <Button onClick={handleGenerate} disabled={isLoading || isEditing || isImporting} className="w-full mt-4">
                        {isLoading ? <><Settings className="animate-spin mr-2" /> Creating...</> : `Create ${mode.name}`}
                    </Button>
                </>
            )}
            
            {error && (
                <Alert variant="destructive" className="mt-6 text-left">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="mt-6 w-full space-y-4">
                {(isLoading || isImporting) && (
                    <Card className="w-full h-96 bg-muted/50 flex items-center justify-center animate-pulse">
                        <mode.icon className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {result && !isLoading && !isImporting && (
                    <>
                        <Card className="text-left">
                            <CardHeader className='flex-row items-center justify-between'>
                                <CardTitle>Canvas</CardTitle>
                                <div className='flex items-center gap-2'>
                                    {resultType === 'website' && (
                                        <Button onClick={() => setIsPublishing(true)} size="icon" variant="ghost" className="h-8 w-8">
                                            <Upload size={16}/>
                                        </Button>
                                    )}
                                    <Button onClick={handleCopy} size="icon" variant="ghost" className="h-8 w-8">
                                        {copied ? <Check size={16}/> : <Copy size={16}/>}
                                    </Button>
                                    <Button onClick={handleDownload} size="icon" variant="ghost" className="h-8 w-8">
                                        <Download size={16}/>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {explanation && <p className="text-sm text-muted-foreground mb-4 italic">{explanation}</p>}
                                {resultType === 'website' ? (
                                    <iframe srcDoc={result} title={resultTitle} className="w-full h-[75vh] border rounded-md" sandbox="allow-scripts allow-same-origin" />
                                ) : (
                                    <div className="relative group bg-[#282c34] rounded-lg">
                                        <pre className="p-4 overflow-auto rounded-lg max-h-[75vh]"><code ref={codeRef} className={`language-${codeLanguage} text-sm`}></code></pre>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <Card className="text-left">
                             <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Sparkles className="text-primary h-5 w-5" />
                                    Refine with AI
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Textarea
                                    value={editPrompt}
                                    onChange={(e) => setEditPrompt(e.target.value)}
                                    placeholder={`e.g., "Change the theme to dark mode" or "Add a section for testimonials"`}
                                    className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                                    rows={2}
                                />
                                <Button onClick={handleEdit} disabled={isLoading || isEditing} className="w-full mt-2">
                                    {isEditing ? <><Settings className="animate-spin mr-2" /> Refining...</> : 'Refine Result'}
                                 </Button>
                            </CardContent>
                        </Card>
                    </>
                )}
            </div>
        </ModeWrapper>
    );
};
