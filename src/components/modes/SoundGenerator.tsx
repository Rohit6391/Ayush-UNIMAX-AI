
"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AudioLines, Settings, AlertTriangle, Play, Download } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateSound } from '@/ai/flows/sound-generator';

export function SoundGenerator({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError('Please enter a description for the sound.');
            return;
        }
        setIsLoading(true);
        setError('');
        setAudioUrl(null);
        
        try {
            const result = await generateSound({ prompt });
            setAudioUrl(result.audioDataUri);
            addHistoryItem('sound_generator', prompt, result.audioDataUri);
        } catch (err: any) {
            setError(`Sound generation failed: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleDownload = () => {
        if (!audioUrl) return;
        const a = document.createElement('a');
        a.href = audioUrl;
        a.download = `${prompt.replace(/ /g, '_').slice(0, 20)}.wav`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <ModeWrapper mode={mode}>
            <Textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="e.g., a laser blast, a dog barking, ocean waves crashing..." 
                className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={3} 
            />
            <Button onClick={handleGenerate} disabled={isLoading} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Generating Sound...</> : 'Generate Sound'}
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
                    <Card className="w-full h-48 bg-muted/50 flex items-center justify-center animate-pulse">
                        <AudioLines className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {audioUrl && !isLoading && (
                    <Card className="text-left">
                        <CardHeader>
                            <CardTitle>Generated Audio</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-4">
                           <audio ref={audioRef} controls src={audioUrl} className="w-full">
                                Your browser does not support the audio element.
                           </audio>
                           <Button onClick={handleDownload} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                               <Download className="mr-2 h-4 w-4" /> Download Sound
                           </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
}
