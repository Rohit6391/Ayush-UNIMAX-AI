"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, AlertTriangle, Download, Copy, Check } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { createDocumentFromPrompt } from '@/ai/flows/create-document-from-prompt';

interface MakerProps {
  mode: any;
  generatePrompt: (prompt: string) => string;
  resultTitle: string;
  resultType: 'website' | 'code';
  codeLanguage?: string;
  promptPlaceholder: string;
}

export function Maker({ mode, generatePrompt, resultTitle, resultType, codeLanguage, promptPlaceholder }: MakerProps) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (result && resultType === 'code' && window.hljs) {
            if (codeRef.current) {
                codeRef.current.innerHTML = window.hljs.highlight(result, { language: codeLanguage || 'plaintext' }).value;
            }
        }
    }, [result, resultType, codeLanguage]);

    const handleGenerate = async () => {
        if (!prompt.trim()) { setError(`Please describe the ${mode.name.toLowerCase()} you want to build.`); return; }
        setIsLoading(true); setResult(''); setError('');
        
        const fullPrompt = generatePrompt(prompt);

        try {
            const apiResult = await createDocumentFromPrompt({ prompt: fullPrompt });
            let generatedResult = apiResult.document;
            if (resultType === 'website') {
                generatedResult = generatedResult.replace(/^```html\n?/, '').replace(/```$/, '').trim();
            }
            setResult(generatedResult);
            addHistoryItem(mode.id, prompt, generatedResult);
        } catch (err: any) {
            setError(`Failed to generate: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleCopy = () => {
        if (navigator.clipboard && result) {
            navigator.clipboard.writeText(result).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };

    const handleDownload = () => {
        const fileExtension = resultType === 'website' ? 'html' : 'txt';
        const mimeType = resultType === 'website' ? 'text/html' : 'text/plain';
        const blob = new Blob([result], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${mode.id}.${fileExtension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    return (
        <ModeWrapper mode={mode}>
            <Textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder={promptPlaceholder} 
                className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={3} 
            />
            <Button onClick={handleGenerate} disabled={isLoading} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Creating...</> : `Create ${mode.name}`}
            </Button>
            
            {error && (
                <Alert variant="destructive" className="mt-6 text-left">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="mt-6 w-full">
                {isLoading && (
                    <Card className="w-full h-96 bg-muted/50 flex items-center justify-center animate-pulse">
                        <mode.icon className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {result && !isLoading && (
                    <Card className="text-left">
                        <CardHeader className='flex-row items-center justify-between'>
                            <CardTitle>{resultTitle}</CardTitle>
                            <div className='flex items-center gap-2'>
                                <Button onClick={handleCopy} size="icon" variant="ghost" className="h-8 w-8">
                                    {copied ? <Check size={16}/> : <Copy size={16}/>}
                                </Button>
                                <Button onClick={handleDownload} size="icon" variant="ghost" className="h-8 w-8">
                                    <Download size={16}/>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {resultType === 'website' ? (
                                <iframe srcDoc={result} title={resultTitle} className="w-full h-[75vh] border rounded-md" sandbox="allow-scripts allow-same-origin" />
                            ) : (
                                <div className="relative group bg-[#282c34] rounded-lg">
                                    <pre className="p-4 overflow-auto rounded-lg max-h-[75vh]"><code ref={codeRef} className={`language-${codeLanguage} text-sm`}></code></pre>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
};
