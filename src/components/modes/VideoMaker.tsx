"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Settings, AlertTriangle, UploadCloud } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateVideoFromPrompt } from '@/ai/flows/generate-video-from-prompt';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function VideoMaker({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const { toast } = useToast();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [error, setError] = useState('');
    
    // For file input
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [activeTab, setActiveTab] = useState('prompt');


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleGenerate = async () => {
        if (!prompt.trim()) { setError('Please enter a prompt for your video.'); return; }
        if (activeTab === 'image' && !file) { setError('Please upload an image to animate.'); return; }

        setIsLoading(true); 
        setVideoUrl(null);
        setError('');

        toast({
            title: "Video Generation Started",
            description: "This may take a minute or two. Please be patient.",
        });
        
        try {
            let fileDataUri: string | undefined;
            if (activeTab === 'image' && file) {
                 fileDataUri = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (event) => resolve(event.target?.result as string);
                    reader.onerror = (error) => reject(error);
                    reader.readAsDataURL(file);
                });
            }

            const result = await generateVideoFromPrompt({ 
                prompt, 
                photoDataUri: fileDataUri 
            });

            if (result.videoUrl) {
                setVideoUrl(result.videoUrl);
                addHistoryItem('video_maker', prompt, result.videoUrl);
            } else {
                throw new Error("The AI failed to generate a video. Please try a different prompt.");
            }
        } catch (err: any) {
            setError(`Video generation failed: ${err.message}. Please try again.`);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <ModeWrapper mode={mode}>
             <Tabs defaultValue="prompt" className="w-full mb-4" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="prompt">Make with AI</TabsTrigger>
                    <TabsTrigger value="image">Animate Image</TabsTrigger>
                </TabsList>
                <TabsContent value="prompt">
                    {/* Content is handled below */}
                </TabsContent>
                <TabsContent value="image">
                    <div 
                        onClick={() => fileInputRef.current?.click()} 
                        className="w-full mt-2 h-48 bg-background border-2 border-dashed border-input rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/png, image/jpeg, image/webp" />
                        {previewUrl ? (
                            <img src={previewUrl} alt="Selected preview" className="max-h-full max-w-full object-contain rounded-md" />
                        ) : (
                            <div className="text-center text-muted-foreground">
                                <UploadCloud className="h-8 w-8 mx-auto" />
                                <p className="font-semibold mt-2">Click to upload an image</p>
                            </div>
                        )}
                    </div>
                </TabsContent>
            </Tabs>

            <Textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder={
                    activeTab === 'image' 
                    ? "e.g., Make the clouds move and the water ripple."
                    : "e.g., A cinematic shot of a majestic dragon soaring over a mystical forest at dawn."
                }
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

            <div className="mt-6 w-full space-y-4">
                {isLoading && (
                    <Card className="w-full aspect-video bg-muted/50 flex flex-col items-center justify-center animate-pulse">
                        <Video className="h-16 w-16 text-muted-foreground" />
                         <p className="mt-4 text-muted-foreground">Generating video, please wait...</p>
                    </Card>
                )}
                {videoUrl && !isLoading && (
                   <>
                        <Card className="text-left overflow-hidden">
                            <CardHeader>
                                <CardTitle>Generated Video</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <div className="aspect-video w-full overflow-hidden rounded-md flex flex-col justify-center items-center bg-black">
                                    <video src={videoUrl} controls autoPlay loop className="max-w-full max-h-full object-contain" />
                               </div>
                            </CardContent>
                        </Card>
                   </>
                )}
            </div>
        </ModeWrapper>
    );
};