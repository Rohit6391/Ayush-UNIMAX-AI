"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Settings, AlertTriangle, Sparkles, Film } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateVideo } from '@/ai/flows/video-generator';
import { editVideo } from '@/ai/flows/video-editor';
import { Checkbox } from '../ui/checkbox';

export function VideoGenerator({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [editPrompt, setEditPrompt] = useState('');
    const [negativePrompt, setNegativePrompt] = useState('');
    const [allowPersonGeneration, setAllowPersonGeneration] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!prompt.trim()) { setError('Please enter a prompt for your video.'); return; }

        setIsLoading(true); 
        setVideoUrl('');
        setError('');
        
        try {
            const result = await generateVideo({ prompt, negativePrompt, allowPersonGeneration });
            if (result.videoUrl) {
                setVideoUrl(result.videoUrl);
                addHistoryItem('video_generator', prompt, result.videoUrl);
            } else {
                throw new Error("No video data was returned from the AI. This could be due to safety filters or a temporary issue.");
            }
        } catch (err: any) {
            setError(`Video generation failed: ${err.message}. This can happen due to high demand or API quota limits. Please try again later.`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleEdit = async () => {
        if (!editPrompt.trim() || !videoUrl) { setError('Please enter an edit instruction.'); return; }
        setIsEditing(true); setError('');
        try {
            const result = await editVideo({ videoDataUri: videoUrl, prompt: editPrompt });
            if (result.videoUrl) {
                setVideoUrl(result.videoUrl);
                setEditPrompt('');
                addHistoryItem('video_generator', `Edit: ${editPrompt}`, result.videoUrl);
            } else {
                throw new Error("No video data was returned from the AI. This could be due to safety filters or a temporary issue.")
            }
        } catch (err: any) {
            setError(`Failed to edit video: ${err.message}. This can happen due to high demand or API quota limits. Please try again later.`);
        } finally {
            setIsEditing(false);
        }
    };

    return (
        <ModeWrapper mode={mode}>
             <Alert className="mb-4 text-left" variant="default">
                <Film className="h-4 w-4" />
                <AlertTitle>Billing Required & High Demand</AlertTitle>
                <AlertDescription>
                    The Veo video model requires a billing-enabled Google Cloud account. Generation can take up to a minute and may fail due to high demand or quota limits.
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
             <Textarea 
                id="negative-prompt-text"
                value={negativePrompt} 
                onChange={(e) => setNegativePrompt(e.target.value)} 
                placeholder="Negative prompt (optional): e.g., blurry, cartoon, text" 
                className="w-full mt-2 bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={1}
            />
            <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="allow-person" checked={allowPersonGeneration} onCheckedChange={(checked) => setAllowPersonGeneration(!!checked)} />
                <label htmlFor="allow-person" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Allow generating people
                </label>
            </div>
            
            <Button onClick={handleGenerate} disabled={isLoading || isEditing} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Generating Video...</> : 'Generate Video'}
            </Button>
            
            {error && (
                <Alert variant="destructive" className="mt-6 text-left">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="mt-6 w-full space-y-4">
                {(isLoading || isEditing) && (
                    <Card className="w-full aspect-video bg-muted/50 flex flex-col items-center justify-center animate-pulse">
                        <Video className="h-16 w-16 text-muted-foreground" />
                         <p className="mt-4 text-muted-foreground">Generating video, this may take up to a minute...</p>
                    </Card>
                )}
                {videoUrl && !isLoading && !isEditing && (
                   <>
                        <Card className="text-left overflow-hidden">
                            <CardHeader>
                                <CardTitle>Generated Video</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <video src={videoUrl} className="w-full aspect-video rounded-md bg-muted" controls muted autoPlay loop />
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
                                    placeholder="e.g., 'Make it black and white' or 'Add a vintage film effect'..."
                                    className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                                    rows={2}
                                />
                                <Button onClick={handleEdit} disabled={isLoading || isEditing} className="w-full mt-2">
                                    {isEditing ? <><Settings className="animate-spin mr-2" /> Refining...</> : 'Refine Video'}
                                 </Button>
                            </CardContent>
                        </Card>
                   </>
                )}
            </div>
        </ModeWrapper>
    );
};