"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Settings, AlertTriangle } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateVideo } from '@/ai/flows/video-generator';

export function VideoGenerator({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!prompt.trim()) { setError('Please enter a prompt for your video.'); return; }
        setIsLoading(true); setVideoUrl(null); setError('');
        
        try {
            const result = await generateVideo({ prompt });
            if (result.videoUrl) {
                setVideoUrl(result.videoUrl);
                addHistoryItem('video_generator', prompt, `Generated a video.`);
            } else {
                throw new Error("Video generation failed to return a URL.");
            }
        } catch (err: any) {
            setError(`Video generation failed: ${err.message}. This can happen with high demand. Please try again later.`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ModeWrapper mode={mode}>
            <Textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="e.g., A majestic dragon soaring over a mystical forest at dawn." 
                className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={3} 
            />
            <Button onClick={handleGenerate} disabled={isLoading} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Generating Video...</> : 'Generate Video'}
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
                    <Card className="w-full aspect-video bg-muted/50 flex flex-col items-center justify-center animate-pulse">
                        <Video className="h-16 w-16 text-muted-foreground" />
                        <p className="mt-4 text-muted-foreground">Generating video, this may take a minute...</p>
                    </Card>
                )}
                {videoUrl && !isLoading && (
                    <Card className="overflow-hidden text-left">
                        <CardContent className="p-0">
                           <video
                                src={videoUrl}
                                controls
                                className="w-full aspect-video"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
};
