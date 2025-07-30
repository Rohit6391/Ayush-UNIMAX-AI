"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Settings, AlertTriangle, Sparkles, Film, Image as ImageIcon } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateStoryboard } from '@/ai/flows/generate-storyboard';
import { generateImageFromStoryboard } from '@/ai/flows/generate-image-from-storyboard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function VideoGenerator({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [scenes, setScenes] = useState<any[]>([]);
    const [error, setError] = useState('');
    const [generationProgress, setGenerationProgress] = useState(0);

    const handleGenerate = async () => {
        if (!prompt.trim()) { setError('Please enter a prompt for your storyboard.'); return; }

        setIsLoading(true); 
        setScenes([]);
        setError('');
        setGenerationProgress(0);
        
        try {
            // 1. Generate the storyboard scenes (text prompts)
            const storyboardResult = await generateStoryboard({ prompt });
            if (!storyboardResult.scenes || storyboardResult.scenes.length === 0) {
                throw new Error("The AI could not create a storyboard from your prompt. Try being more descriptive.");
            }

            // Initialize scenes with prompts
            const initialScenes = storyboardResult.scenes.map(scene => ({ prompt: scene.imagePrompt, imageUrl: null }));
            setScenes(initialScenes);
            
            // 2. Generate image for each scene
            const totalScenes = initialScenes.length;
            for (let i = 0; i < totalScenes; i++) {
                try {
                    const imageResult = await generateImageFromStoryboard({ imagePrompt: initialScenes[i].prompt });
                    setScenes(prevScenes => {
                        const newScenes = [...prevScenes];
                        newScenes[i].imageUrl = imageResult.imageUrl;
                        return newScenes;
                    });
                    setGenerationProgress(((i + 1) / totalScenes) * 100);
                } catch (imageError) {
                    console.error(`Failed to generate image for scene ${i+1}:`, imageError);
                    // We can decide to continue or stop. Let's continue but mark it as failed.
                    setScenes(prevScenes => {
                        const newScenes = [...prevScenes];
                        newScenes[i].imageUrl = 'error'; // Mark as failed
                        return newScenes;
                    });
                }
            }
            addHistoryItem('video_generator', prompt, `Generated a ${totalScenes}-scene storyboard.`);

        } catch (err: any) {
            setError(`Storyboard generation failed: ${err.message}.`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ModeWrapper mode={mode}>
             <Alert className="mb-4 text-left">
                <Film className="h-4 w-4" />
                <AlertTitle>Storyboard Generator</AlertTitle>
                <AlertDescription>
                    This tool creates a visual story by generating a sequence of images. It does not create a video file.
                </AlertDescription>
            </Alert>
            
            <Textarea 
                id="prompt-text"
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="e.g., A majestic dragon soaring over a mystical forest at dawn." 
                className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={3} 
            />
            
            <Button onClick={handleGenerate} disabled={isLoading} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Generating Storyboard...</> : 'Generate Storyboard'}
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
                        <ImageIcon className="h-16 w-16 text-muted-foreground" />
                        <p className="mt-4 text-muted-foreground">Generating scenes, this may take a moment...</p>
                        {scenes.length > 0 && (
                             <div className="w-full max-w-sm px-4 mt-4">
                                <div className="h-2 bg-muted rounded-full">
                                    <div className="h-2 bg-primary rounded-full transition-all" style={{ width: `${generationProgress}%`}}></div>
                                </div>
                                <p className="text-xs text-center mt-1">{Math.round(generationProgress)}% complete</p>
                             </div>
                        )}
                    </Card>
                )}
                {scenes.length > 0 && !isLoading && (
                   <>
                        <Card className="text-left overflow-hidden">
                            <CardHeader>
                                <CardTitle>Generated Storyboard</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <Carousel className="w-full max-w-xl mx-auto" autoplay a11y>
                                    <CarouselContent>
                                        {scenes.map((scene, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                            <Card className='aspect-video overflow-hidden'>
                                                <CardContent className="flex items-center justify-center p-0 h-full w-full">
                                                    {scene.imageUrl === 'error' ? (
                                                        <div className="w-full h-full bg-destructive/20 flex flex-col items-center justify-center text-destructive">
                                                            <AlertTriangle className="h-8 w-8" />
                                                            <p>Image failed</p>
                                                        </div>
                                                    ) : scene.imageUrl ? (
                                                        <img src={scene.imageUrl} alt={scene.prompt} className="w-full h-full object-cover"/>
                                                    ) : (
                                                         <div className="w-full h-full bg-muted/50 flex flex-col items-center justify-center animate-pulse">
                                                            <ImageIcon className="h-16 w-16 text-muted-foreground" />
                                                        </div>
                                                    )}
                                                </CardContent>
                                            </Card>
                                            <p className='text-center text-sm text-muted-foreground mt-2 px-4 h-10'>{scene.prompt}</p>
                                            </div>
                                        </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </CardContent>
                        </Card>
                   </>
                )}
            </div>
        </ModeWrapper>
    );
};

    