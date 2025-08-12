"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Settings, AlertTriangle, UploadCloud } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateVideoWithNarration, Scene } from '@/ai/flows/generate-video-with-narration';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function VideoGenerator({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [language, setLanguage] = useState('English');
    const [isLoading, setIsLoading] = useState(false);
    const [scenes, setScenes] = useState<Scene[]>([]);
    const [narrationAudio, setNarrationAudio] = useState<string | null>(null);
    const [error, setError] = useState('');
    const audioRef = useRef<HTMLAudioElement>(null);
    const [activeTab, setActiveTab] = useState('prompt');

    // For file input
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        if (narrationAudio && audioRef.current) {
            audioRef.current.src = narrationAudio;
            audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
        }
    }, [narrationAudio]);

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
        if (!prompt.trim()) { setError('Please enter a prompt for your video storyboard.'); return; }
        if (activeTab === 'image' && !file) { setError('Please upload an image to animate.'); return; }

        setIsLoading(true); 
        setScenes([]);
        setNarrationAudio(null);
        setError('');
        
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

            const result = await generateVideoWithNarration({ 
                prompt, 
                language, 
                photoDataUri: fileDataUri 
            });

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
            
            <div className="space-y-4">
                <Textarea 
                    id="prompt-text"
                    value={prompt} 
                    onChange={(e) => setPrompt(e.target.value)} 
                    placeholder={
                        activeTab === 'image' 
                        ? "e.g., Make the person wave and say hello."
                        : "e.g., A short story about a cat who learns to fly."
                    }
                    className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                    rows={3} 
                />
                <div>
                    <Label htmlFor='language-input'>Narration Language</Label>
                    <Input
                        id="language-input"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        placeholder="e.g., Spanish, Japanese, French"
                        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 transition-colors"
                    />
                </div>
            </div>

            
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
                        <Video className="h-16 w-16 text-muted-foreground" />
                         <p className="mt-4 text-muted-foreground">Generating scenes & narration...</p>
                    </Card>
                )}
                {scenes.length > 0 && !isLoading && (
                   <>
                        <Card className="text-left overflow-hidden">
                            <CardHeader>
                                <CardTitle>Canvas</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <Carousel className="w-full" opts={{loop: true}} plugins={[ Autoplay({ delay: 3000, stopOnInteraction: true }) ]}>
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
