"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Settings, AlertTriangle, Clipboard, Check, Sparkles } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { createDocumentFromPrompt } from '@/ai/flows/create-document-from-prompt';
import { editFilesFromPrompt } from '@/ai/flows/edit-files-from-prompt';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CodeGenerator({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [editPrompt, setEditPrompt] = useState('');
    const [language, setLanguage] = useState('python');
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [code, setCode] = useState('');
    const [explanation, setExplanation] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (code && window.hljs) {
            if (codeRef.current) {
                codeRef.current.innerHTML = window.hljs.highlight(code, { language }).value;
            }
        }
    }, [code, language]);

    const handleGenerate = async () => {
        if (!prompt.trim()) { setError('Please enter a prompt.'); return; }
        setIsLoading(true); setCode(''); setError(''); setExplanation('');
        const fullPrompt = `Generate a code snippet in ${language} for the following request: "${prompt}". Also, provide a brief, one-sentence explanation of what the code does. The response should be a JSON object with two keys: "code" and "explanation". The "code" value should be only the raw code, without any markdown backticks.`;
        try {
            const result = await createDocumentFromPrompt({ prompt: fullPrompt });
            const parsedResult = JSON.parse(result.document);
            setCode(parsedResult.code);
            setExplanation(parsedResult.explanation);
            addHistoryItem('code_generator', prompt, result.document);
        } catch (err: any) {
            setError(`Failed to generate code: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleEdit = async () => {
        if (!editPrompt.trim() || !code) { setError('Please enter an edit instruction.'); return; }
        setIsEditing(true); setError('');
        try {
            const result = await editFilesFromPrompt({ fileContent: code, prompt: editPrompt });
            setCode(result);
            setEditPrompt('');
             addHistoryItem('code_generator', `Edit: ${editPrompt}`, result);
        } catch (err:any) {
            setError(`Failed to edit code: ${err.message}`);
        } finally {
            setIsEditing(false);
        }
    }

    const handleCopy = () => {
        if (navigator.clipboard && code) {
            navigator.clipboard.writeText(code).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };
    
    return (
        <ModeWrapper mode={mode}>
            <Tabs defaultValue="prompt" className="w-full mb-4">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="prompt">Make with AI</TabsTrigger>
                    <TabsTrigger value="url">Import from URL</TabsTrigger>
                </TabsList>
                <TabsContent value="prompt">
                    <div className="flex flex-col md:flex-row gap-2 mb-2">
                        <Select value={language} onValueChange={setLanguage}>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="python">Python</SelectItem>
                                <SelectItem value="javascript">JavaScript</SelectItem>
                                <SelectItem value="typescript">TypeScript</SelectItem>
                                <SelectItem value="html">HTML</SelectItem>
                                <SelectItem value="css">CSS</SelectItem>
                                <SelectItem value="java">Java</SelectItem>
                                <SelectItem value="cpp">C++</SelectItem>
                                <SelectItem value="sql">SQL</SelectItem>
                            </SelectContent>
                        </Select>
                        <Textarea 
                            value={prompt} 
                            onChange={(e) => setPrompt(e.target.value)} 
                            placeholder="e.g., A function to sort a list of numbers" 
                            className="flex-1 w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                            rows={2} 
                        />
                    </div>
                    <Button onClick={handleGenerate} disabled={isLoading || isEditing} className="w-full mt-2">
                        {isLoading ? <><Settings className="animate-spin mr-2" /> Generating...</> : 'Generate Code'}
                    </Button>
                </TabsContent>
                <TabsContent value="url">
                    <div className="space-y-2 text-left">
                        <Label htmlFor="url-input">Import from URL</Label>
                        <Input id="url-input" placeholder="https://example.com/code.js" />
                        <Button className="w-full">Import</Button>
                    </div>
                </TabsContent>
            </Tabs>
            
            {error && (
                <Alert variant="destructive" className="mt-6 text-left">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="mt-6 w-full space-y-4">
                {isLoading && (
                    <Card className="w-full h-64 bg-muted/50 flex items-center justify-center animate-pulse">
                        <Code className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {code && !isLoading && (
                    <>
                        <Card className="text-left">
                           <CardHeader>
                               <CardTitle>Generated Code</CardTitle>
                           </CardHeader>
                           <CardContent>
                                {explanation && <p className="text-sm text-muted-foreground mb-4 italic">{explanation}</p>}
                                <div className="relative group bg-[#282c34] rounded-lg">
                                    <pre className="p-4 overflow-auto rounded-lg"><code ref={codeRef} className={`language-${language} text-sm`}></code></pre>
                                    <Button onClick={handleCopy} size="icon" variant="ghost" className="absolute top-2 right-2 text-white h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {copied ? <Check size={16}/> : <Clipboard size={16}/>}
                                    </Button>
                                </div>
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
                                    placeholder="e.g., 'Add comments to the code' or 'Refactor to use a while loop'..."
                                    className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                                    rows={2}
                                />
                                <Button onClick={handleEdit} disabled={isLoading || isEditing} className="w-full mt-2">
                                    {isEditing ? <><Settings className="animate-spin mr-2" /> Refining...</> : 'Refine Code'}
                                 </Button>
                            </CardContent>
                        </Card>
                    </>
                )}
            </div>
        </ModeWrapper>
    );
};
