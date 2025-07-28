"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Settings, AlertTriangle, Image as ImageIcon } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { createDocumentFromPrompt } from '@/ai/flows/create-document-from-prompt';
import { generateImageFromStoryboard } from '@/ai/flows/generate-image-from-storyboard';

interface Scene {
  scene: number;
  description: string;
  image_prompt: string;
  imageUrl?: string | null;
}

export function VideoStoryboarder({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [scenes, setScenes] = useState<Scene[]>([]);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!prompt.trim()) { setError('Please enter a prompt for your video.'); return; }
        setIsLoading(true); setScenes([]); setError('');
        
        try {
            const storyboardPrompt = `Create a 4-scene storyboard for a video about "${prompt}". For each scene, provide a "description" and a short, descriptive "image_prompt" for an AI image generator. Respond with ONLY a valid JSON array in the format: [{"scene": 1, "description": "...", "image_prompt": "..."}, ...].`;
            
            const storyboardResult = await createDocumentFromPrompt({ prompt: storyboardPrompt });
            const generatedScenes: Scene[] = JSON.parse(storyboardResult.document);

            if (!generatedScenes || generatedScenes.length === 0) throw new Error("Could not generate storyboard scenes.");

            const imagePromises = generatedScenes.map(async (scene) => {
                try {
                    const imageResult = await generateImageFromStoryboard({ imagePrompt: scene.image_prompt });
                    return { ...scene, imageUrl: imageResult.imageUrl };
                } catch (e) {
                    return { ...scene, imageUrl: null };
                }
            });

            const scenesWithImages = await Promise.all(imagePromises);
            setScenes(scenesWithImages);
            addHistoryItem('video_generator', prompt, `Generated a ${scenesWithImages.length}-scene storyboard.`);
        } catch (err: any) {
            setError(`Storyboard creation failed: ${err.message}.`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ModeWrapper mode={mode}>
            <Textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="e.g., A short, emotional ad for a pet adoption agency..." 
                className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={3} 
            />
            <Button onClick={handleGenerate} disabled={isLoading} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Generating...</> : 'Generate Storyboard'}
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
                        <Video className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {scenes.length > 0 && !isLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {scenes.map(scene => (
                            <Card key={scene.scene} className="overflow-hidden text-left">
                                <div className="w-full h-48 bg-muted/50 flex items-center justify-center">
                                    {scene.imageUrl ? (
                                        <img src={scene.imageUrl} alt={`Scene ${scene.scene}`} className="w-full h-full object-cover" />
                                    ) : (
                                        <ImageIcon className="h-12 w-12 text-muted-foreground"/>
                                    )}
                                </div>
                                <CardHeader>
                                    <CardTitle>Scene {scene.scene}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{scene.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </ModeWrapper>
    );
};
