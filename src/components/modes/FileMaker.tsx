
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FilePlus, Settings, AlertTriangle, Download, Sparkles } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { createDocumentFromPrompt } from '@/ai/flows/create-document-from-prompt';
import { editFilesFromPrompt } from '@/ai/flows/edit-files-from-prompt';

export function FileMaker({ mode }: { mode: any }) {
    const { addHistoryItem, model } = useModes();
    const [prompt, setPrompt] = useState('');
    const [editPrompt, setEditPrompt] = useState('');
    const [filename, setFilename] = useState('file.txt');
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [fileContent, setFileContent] = useState('');
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!prompt.trim() || !filename.trim()) { setError('Please enter a prompt and filename.'); return; }
        setIsLoading(true); setFileContent(''); setError('');
        const fullPrompt = `Generate the content for a file named "${filename}" based on the following prompt. Only return the raw text content for the file, with no explanation. Prompt: ${prompt}`;
        try {
            const result = await createDocumentFromPrompt({ prompt: fullPrompt, model });
            setFileContent(result.document);
            addHistoryItem('file_maker', prompt, result.document);
        } catch (err: any) {
            setError(`Failed to generate file: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleEdit = async () => {
        if (!editPrompt.trim() || !fileContent) { setError('Please enter an edit instruction.'); return; }
        setIsEditing(true); setError('');
        try {
            const result = await editFilesFromPrompt({ fileContent, prompt: editPrompt, model });
            setFileContent(result.fileContent);
            setEditPrompt('');
            addHistoryItem('file_maker', `Edit: ${editPrompt}`, result.fileContent);
        } catch (err:any) {
            setError(`Failed to edit file: ${err.message}`);
        } finally {
            setIsEditing(false);
        }
    }

    const handleDownload = () => {
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <ModeWrapper mode={mode}>
            <Input 
                type="text" 
                value={filename} 
                onChange={e => setFilename(e.target.value)} 
                placeholder="e.g., my-story.txt" 
                className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 transition-colors mb-2" 
            />
            <Textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="e.g., A short story about a space explorer..." 
                className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={3} 
            />
            <Button onClick={handleGenerate} disabled={isLoading || isEditing} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Generating...</> : 'Make File'}
            </Button>
            
            {error && (
                <Alert variant="destructive" className="mt-6 text-left">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="mt-6 w-full space-y-4">
                {isLoading && (
                    <Card className="w-full h-40 bg-muted/50 flex items-center justify-center animate-pulse">
                        <FilePlus className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {fileContent && !isLoading && (
                    <>
                        <Card className="text-left">
                            <CardHeader>
                                <CardTitle>Canvas</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-sm text-muted-foreground mb-2'>File: {filename}</p>
                                <pre className="whitespace-pre-wrap bg-background p-4 rounded-md max-h-60 overflow-y-auto border">{fileContent}</pre>
                                <Button onClick={handleDownload} className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                                    <Download className="mr-2 h-4 w-4"/> Download {filename}
                                </Button>
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
                                    placeholder="e.g., 'Make the story longer' or 'Translate this to French'..."
                                    className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                                    rows={2}
                                />
                                <Button onClick={handleEdit} disabled={isLoading || isEditing} className="w-full mt-2">
                                    {isEditing ? <><Settings className="animate-spin mr-2" /> Refining...</> : 'Refine File'}
                                 </Button>
                            </CardContent>
                        </Card>
                    </>
                )}
            </div>
        </ModeWrapper>
    );
};
