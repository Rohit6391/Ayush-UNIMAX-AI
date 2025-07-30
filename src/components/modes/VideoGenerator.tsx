"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Settings, AlertTriangle, Sparkles, Film, Image as ImageIcon } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateVideoWithNarration, Scene } from '@/ai/flows/generate-video-with-narration';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export function VideoGenerator({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [scenes, setScenes] = useState<Scene[]>([]);
    const [narrationAudio, setNarrationAudio] = useState<string | null>(null);
    const [error, setError] = useState('');
    const audioRef = useRef<HTMLAudioElement>(null);
    
    useEffect(() => {
        if (narrationAudio && audioRef.current) {
            audioRef.current.src = narrationAudio;
            audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
        }
    }, [narrationAudio]);

    const handleGenerate = async () => {
        if (!prompt.trim()) { setError('Please enter a prompt for your video storyboard.'); return; }

        setIsLoading(true); 
        setScenes([]);
        setNarrationAudio(null);
        setError('');
        
        try {
            const result = await generateVideoWithNarration({ prompt });
            if (result.scenes.length > 0) {
                setScenes(result.scenes);
                setNarrationAudio(result.narrationAudioUrl);
                addHistoryItem('video_generator', prompt, { scenes: result.scenes, audio: result.narrationAudioUrl });
            } else {
                throw new Error("The AI failed to generate a storyboard. Please try a different prompt.");
            }
        } catch (err: any) {
            setError(`Storyboard generation failed: ${err.message}. Please try again.`);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <ModeWrapper mode={mode}>
             <Alert className="mb-4 text-left" variant="default">
                <Film className="h-4 w-4" />
                <AlertTitle>Storyboard Video Creator</AlertTitle>
                <AlertDescription>
                   This tool creates a narrated video by generating a series of images and an audio track. Press play to watch your story unfold.
                </AlertDescription>
            </Alert>
            
            <Textarea 
                id="prompt-text"
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="e.g., A short story about a cat who learns to fly." 
                className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={3} 
            />
            
            <Button onClick={handleGenerate} disabled={isLoading} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Generating Storyboard...</> : 'Generate Video'}
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
                    <Card className="w-full aspect-video bg-muted/50 flex flex-col items-center justify-center animate-pulse">
                        <Video className="h-16 w-16 text-muted-foreground" />
                         <p className="mt-4 text-muted-foreground">Generating scenes & narration...</p>
                    </Card>
                )}
                {scenes.length > 0 && !isLoading && (
                   <>
                        <Card className="text-left overflow-hidden">
                            <CardHeader>
                                <CardTitle>Your Video Storyboard</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <Carousel className="w-full" autoplay a11y>
                                   <CarouselContent>
                                        {scenes.map((scene, index) => (
                                            <CarouselItem key={index}>
                                                <div className="aspect-video w-full overflow-hidden rounded-md flex flex-col justify-center items-center bg-black">
                                                    <img src={scene.imageUrl} alt={`Scene ${index + 1}`} className="max-w-full max-h-full object-contain" />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                   </CarouselContent>
                                   <CarouselPrevious />
                                   <CarouselNext />
                               </Carousel>
                               {narrationAudio && (
                                   <div className="mt-4">
                                       <audio ref={audioRef} controls src={narrationAudio} className="w-full">
                                            Your browser does not support the audio element.
                                       </audio>
                                   </div>
                               )}
                            </CardContent>
                        </Card>
                   </>
                )}
            </div>
        </ModeWrapper>
    );
};
