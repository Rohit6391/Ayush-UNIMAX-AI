"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Film, Settings, AlertTriangle, UploadCloud, Download, Video } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { editVideo } from '@/ai/flows/video-editor';

export function VideoEditor({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] =useState<string | null>(null);
    const [editedVideoUrl, setEditedVideoUrl] = useState('');
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setError('');
            setEditedVideoUrl('');
            const reader = new FileReader();
            reader.onload = (event) => setPreviewUrl(event.target?.result as string);
            reader.onerror = () => setError('Failed to read file.');
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleEdit = async () => {
        if (!previewUrl || !prompt.trim()) { setError('Please upload a video and provide editing instructions.'); return; }
        setIsLoading(true); setEditedVideoUrl(''); setError('');
        
        try {
            const result = await editVideo({ videoDataUri: previewUrl, prompt });
            if (result.videoUrl) {
                setEditedVideoUrl(result.videoUrl);
                addHistoryItem('video_editor', `${prompt} on ${file?.name}`, result.videoUrl);
            } else {
                throw new Error("No video data was returned from the AI. This could be due to safety filters or a temporary issue.")
            }
        } catch (err: any) {
            setError(`Failed to edit video: ${err.message}. This can happen due to high demand or API quota limits. Please try again later.`);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <ModeWrapper mode={mode}>
            <Alert className="mb-4 text-left">
                <Film className="h-4 w-4" />
                <AlertTitle>Note on Video Editing</AlertTitle>
                <AlertDescription>
                    AI video editing is a powerful feature that can take up to a minute to process. Due to high demand, you may encounter rate limits.
                </AlertDescription>
            </Alert>
            <div 
                onClick={() => fileInputRef.current?.click()} 
                className="w-full h-48 bg-background border-2 border-dashed border-input rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
            >
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="video/mp4, video/quicktime, video/webm" />
                {previewUrl ? (
                    <video src={previewUrl} className="max-h-full max-w-full object-contain rounded-md" controls={false} muted loop autoPlay />
                ) : (
                    <div className="text-center text-muted-foreground">
                        <UploadCloud className="h-8 w-8 mx-auto" />
                        <p className="font-semibold mt-2">Click to upload a video</p>
                    </div>
                )}
            </div>
            <Textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="e.g., 'Make this video black and white' or 'Add a vintage film effect'..." 
                className="w-full mt-4 bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={2} 
            />
            <Button onClick={handleEdit} disabled={isLoading || !file} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Editing...</> : 'Edit Video'}
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
                        <p className="mt-4 text-muted-foreground">Editing video, this may take a minute...</p>
                    </Card>
                )}
                {editedVideoUrl && !isLoading && (
                     <Card className="overflow-hidden text-left">
                        <CardHeader>
                            <CardTitle>Edited Video</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                           <video
                                src={editedVideoUrl}
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
