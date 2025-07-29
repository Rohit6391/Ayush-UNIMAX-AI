"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Settings, AlertTriangle, Sparkles, UploadCloud, Download, Mic, VideoIcon } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateVideo } from '@/ai/flows/video-generator';
import { generateVideoWithNarration } from '@/ai/flows/generate-video-with-narration';
import { editVideo } from '@/ai/flows/video-editor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

export function VideoGenerator({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [editPrompt, setEditPrompt] = useState('');
    const [negativePrompt, setNegativePrompt] = useState('');
    const [allowPersonGeneration, setAllowPersonGeneration] = useState(false);
    const [includeNarration, setIncludeNarration] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [error, setError] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [activeTab, setActiveTab] = useState("text");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setImageFile(selectedFile);
            const reader = new FileReader();
            reader.onload = (event) => setImagePreviewUrl(event.target?.result as string);
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleGenerate = async () => {
        if (!prompt.trim()) { setError('Please enter a prompt for your video.'); return; }
        if (activeTab === 'image' && !imagePreviewUrl) { setError('Please upload an image to generate a video from.'); return; }

        setIsLoading(true); 
        setVideoUrl(null);
        setAudioUrl(null);
        setError('');
        
        const input = { 
            prompt,
            photoDataUri: activeTab === 'image' ? imagePreviewUrl! : undefined,
            negativePrompt: negativePrompt || undefined,
            allowPersonGeneration
        };

        try {
            if (includeNarration) {
                const result = await generateVideoWithNarration(input);
                if (result.videoUrl && result.audioUrl) {
                    setVideoUrl(result.videoUrl);
                    setAudioUrl(result.audioUrl);
                    addHistoryItem('video_generator', prompt, `Generated a video with narration.`);
                } else {
                    throw new Error("Video or narration generation failed to return a URL.");
                }
            } else {
                const result = await generateVideo(input);
                if (result.videoUrl) {
                    setVideoUrl(result.videoUrl);
                    addHistoryItem('video_generator', prompt, `Generated a video.`);
                } else {
                    throw new Error("Video generation failed to return a URL.");
                }
            }
        } catch (err: any) {
            setError(`Video generation failed: ${err.message}. This can happen with high demand. Please try again later.`);
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
                setAudioUrl(null); // Clear old audio if it exists
                setEditPrompt('');
                addHistoryItem('video_generator', `Edit: ${editPrompt}`, result.videoUrl);
            } else {
                throw new Error("No video data received from AI.")
            }
        } catch (err: any) {
            setError(`Failed to edit video: ${err.message}. This can happen with high demand. Please try again later.`);
        } finally {
            setIsEditing(false);
        }
    };

    return (
        <ModeWrapper mode={mode}>
            <Tabs defaultValue="text" className="w-full mb-4" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="text">From Text</TabsTrigger>
                    <TabsTrigger value="image">From Image</TabsTrigger>
                </TabsList>
                <TabsContent value="text" className="space-y-4 text-left pt-2">
                    <Label htmlFor="prompt-text">Prompt</Label>
                    <Textarea 
                        id="prompt-text"
                        value={prompt} 
                        onChange={(e) => setPrompt(e.target.value)} 
                        placeholder="e.g., A majestic dragon soaring over a mystical forest at dawn." 
                        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                        rows={3} 
                    />
                </TabsContent>
                <TabsContent value="image" className="space-y-4 text-left pt-2">
                     <div 
                        onClick={() => fileInputRef.current?.click()} 
                        className="w-full h-40 bg-background border-2 border-dashed border-input rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/png, image/jpeg, image/webp" />
                        {imagePreviewUrl ? (
                            <img src={imagePreviewUrl} alt="Selected preview" className="max-h-full max-w-full object-contain rounded-md" />
                        ) : (
                            <div className="text-center text-muted-foreground">
                                <UploadCloud className="h-8 w-8 mx-auto" />
                                <p className="font-semibold mt-2">Click to upload an image</p>
                            </div>
                        )}
                    </div>
                     <Label htmlFor="prompt-image">Animation Prompt</Label>
                    <Textarea 
                        id="prompt-image"
                        value={prompt} 
                        onChange={(e) => setPrompt(e.target.value)} 
                        placeholder="e.g., Make the dragon fly across the screen, breathing fire."
                        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                        rows={2} 
                    />
                </TabsContent>
            </Tabs>
            
            <div className="space-y-4 text-left w-full">
                <div>
                    <Label htmlFor="negative-prompt">Negative Prompt (Optional)</Label>
                    <Input 
                        id="negative-prompt"
                        value={negativePrompt}
                        onChange={(e) => setNegativePrompt(e.target.value)}
                        placeholder="e.g., blurry, low quality, text"
                        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 transition-colors"
                    />
                </div>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Switch id="person-generation" checked={allowPersonGeneration} onCheckedChange={setAllowPersonGeneration} />
                        <Label htmlFor="person-generation">Allow Generating People</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="narration" checked={includeNarration} onCheckedChange={setIncludeNarration} />
                        <Label htmlFor="narration">Include AI Narration</Label>
                    </div>
                </div>
            </div>

            <Button onClick={handleGenerate} disabled={isLoading || isEditing} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Generating...</> : 'Generate Video'}
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
                        <p className="mt-4 text-muted-foreground">Generating video, this may take a minute...</p>
                    </Card>
                )}
                {videoUrl && !isLoading && (
                   <>
                        <Card className="text-left overflow-hidden">
                            <CardHeader>
                                <CardTitle>Generated Video</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                     <video
                                        src={videoUrl}
                                        controls
                                        className="w-full aspect-video rounded-md bg-black"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                    {audioUrl && (
                                        <div className="space-y-2">
                                            <Label>AI Narration</Label>
                                            <audio src={audioUrl} controls className="w-full" />
                                        </div>
                                    )}
                                     <div className="flex items-center justify-end gap-2">
                                         <a href={videoUrl} download={`unimax-ai-video.mp4`}>
                                            <Button variant="outline"><Download className="mr-2 h-4 w-4"/>Video</Button>
                                         </a>
                                         {audioUrl && (
                                             <a href={audioUrl} download={`unimax-ai-narration.wav`}>
                                                <Button variant="outline"><Mic className="mr-2 h-4 w-4"/>Narration</Button>
                                             </a>
                                         )}
                                    </div>
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
                                    placeholder="e.g., 'Make the video black and white' or 'Add a vintage film grain effect'..."
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
