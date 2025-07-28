"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Settings, AlertTriangle } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { createDocumentFromPrompt } from '@/ai/flows/create-document-from-prompt';

export function PhotoEditor({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [analysis, setAnalysis] = useState('');
    const [error, setError] = useState('');

    const handleAnalyze = async () => {
        if (!prompt.trim()) { setError('Please describe an image first.'); return; }
        setIsLoading(true); setAnalysis(''); setError('');
        
        const fullPrompt = `A user has described an image and wants suggestions for how to edit it. Provide creative and technical feedback. User's description: "${prompt}"`;
        
        try {
            const result = await createDocumentFromPrompt({ prompt: fullPrompt });
            setAnalysis(result.document);
            addHistoryItem('photo_editor', `Suggestions for: ${prompt}`, result.document);
        } catch (err: any) {
            setError(`Analysis failed: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ModeWrapper mode={mode}>
            <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe an image you want to edit. For example: 'A photo of a sunset over the ocean, but the colors look a bit dull.'"
                className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors"
                rows={4}
            />
            <Button onClick={handleAnalyze} disabled={isLoading} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Analyzing...</> : 'Get Editing Suggestions'}
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
                        <Palette className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {analysis && !isLoading && (
                    <Card className="text-left">
                         <CardHeader>
                            <CardTitle>AI Editing Suggestions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="whitespace-pre-wrap leading-relaxed">{analysis}</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
};
