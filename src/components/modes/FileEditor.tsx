
"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileEdit, Settings, AlertTriangle, Download, UploadCloud, FileText } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { editFilesFromPrompt } from '@/ai/flows/edit-files-from-prompt';

export function FileEditor({ mode }: { mode: any }) {
    const { addHistoryItem, model } = useModes();
    const [file, setFile] = useState<File | null>(null);
    const [fileContent, setFileContent] = useState('');
    const [editedContent, setEditedContent] = useState('');
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setError('');
            setEditedContent('');
            const reader = new FileReader();
            reader.onload = (event) => setFileContent(event.target?.result as string);
            reader.onerror = () => setError('Failed to read file.');
            reader.readAsText(selectedFile);
        }
    };

    const handleEdit = async () => {
        if (!fileContent || !prompt.trim()) { setError('Please upload a file and provide editing instructions.'); return; }
        setIsLoading(true); setEditedContent(''); setError('');
        
        try {
            const result = await editFilesFromPrompt({ fileContent, prompt, model });
            setEditedContent(result.fileContent);
            addHistoryItem('file_editor', `${prompt} on ${file?.name}`, result.fileContent);
        } catch (err: any) {
            setError(`Failed to edit file: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleDownload = () => {
        if (!file) return;
        const blob = new Blob([editedContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `edited-${file.name}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <ModeWrapper mode={mode}>
            <div 
                onClick={() => fileInputRef.current?.click()} 
                className="w-full h-32 bg-background border-2 border-dashed border-input rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
            >
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".txt,.md,.json,.csv,.html,.css,.js,.py,.java,.c,.cpp" />
                {file ? (
                    <div className="text-center">
                        <FileText className="h-8 w-8 mx-auto text-primary" />
                        <p className="font-semibold mt-2">{file.name}</p>
                    </div>
                ) : (
                    <div className="text-center text-muted-foreground">
                        <UploadCloud className="h-8 w-8 mx-auto" />
                        <p className="font-semibold mt-2">Click to upload a file</p>
                    </div>
                )}
            </div>
            <Textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="e.g., 'Summarize this text' or 'Translate this to French'..." 
                className="w-full mt-4 bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={2} 
            />
            <Button onClick={handleEdit} disabled={isLoading || !file} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Editing...</> : 'Edit File'}
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
                    <Card className="w-full h-40 bg-muted/50 flex items-center justify-center animate-pulse">
                        <FileEdit className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {editedContent && !isLoading && (
                    <Card className="text-left">
                        <CardHeader>
                            <CardTitle>Edited File Preview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <pre className="whitespace-pre-wrap bg-background p-4 rounded-md max-h-60 overflow-y-auto border">{editedContent}</pre>
                            <Button onClick={handleDownload} className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                                <Download className="mr-2 h-4 w-4"/> Download Edited File
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
};
