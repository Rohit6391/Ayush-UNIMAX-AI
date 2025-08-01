
"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Film, Settings, AlertTriangle, UploadCloud } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { analyzeVideo } from '@/ai/flows/video-editor';

export function VideoEditor({ mode }: { mode: any }) {
    const { addHistoryItem, model } = useModes();
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] =useState<string | null>(null);
    const [analysisResult, setAnalysisResult] = useState('');
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);


    const getFrameAsDataURI = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            const video = videoRef.current;
            if (!video) {
                return reject('Video element not found.');
            }

            const canvas = document.createElement('canvas');
            
            const onSeeked = () => {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    return reject('Could not get canvas context.');
                }
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg'));
                video.removeEventListener('seeked', onSeeked);
            };

            video.addEventListener('seeked', onSeeked);
            video.currentTime = 0.1; // Seek to a very early frame
        });
    }


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.size > 20 * 1024 * 1024) { // 20MB limit
                setError('File size exceeds 20MB. Please upload a smaller video.');
                return;
            }
            setFile(selectedFile);
            setError('');
            setAnalysisResult('');
            const reader = new FileReader();
            reader.onload = (event) => setPreviewUrl(event.target?.result as string);
            reader.onerror = () => setError('Failed to read file.');
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleAnalyze = async () => {
        if (!previewUrl || !prompt.trim()) { setError('Please upload a video and provide analysis instructions.'); return; }
        setIsLoading(true); setAnalysisResult(''); setError('');
        
        try {
            const frameDataUri = await getFrameAsDataURI();
            const result = await analyzeVideo({ videoDataUri: frameDataUri, prompt, model });
            if (result.analysis) {
                setAnalysisResult(result.analysis);
                addHistoryItem('video_editor', `${prompt} on ${file?.name}`, result.analysis);
            } else {
                throw new Error("No analysis was returned from the AI.")
            }
        } catch (err: any) {
            setError(`Failed to analyze video: ${err.message}.`);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <ModeWrapper mode={mode}>
            <Alert className="mb-4 text-left" variant="default">
                <Film className="h-4 w-4" />
                <AlertTitle>Video Analyzer</AlertTitle>
                <AlertDescription>
                   This tool uses AI to analyze your video. Upload a clip, provide a prompt, and get AI-powered feedback and suggestions.
                </AlertDescription>
            </Alert>
            <div 
                onClick={() => fileInputRef.current?.click()} 
                className="w-full h-48 bg-background border-2 border-dashed border-input rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
            >
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="video/mp4, video/quicktime, video/webm" />
                {previewUrl ? (
                    <video ref={videoRef} src={previewUrl} className="max-h-full max-w-full object-contain rounded-md" controls={false} muted loop autoPlay crossOrigin="anonymous" />
                ) : (
                    <div className="text-center text-muted-foreground">
                        <UploadCloud className="h-8 w-8 mx-auto" />
                        <p className="font-semibold mt-2">Click to upload a video (Max 20MB)</p>
                    </div>
                )}
            </div>
            <Textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="e.g., 'Suggest a more cinematic color grade for this shot' or 'Analyze the composition of this scene.'" 
                className="w-full mt-4 bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={2}
                disabled={!previewUrl}
            />
            <Button onClick={handleAnalyze} disabled={isLoading || !previewUrl} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Analyzing...</> : 'Analyze Video'}
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
                    <Card className="w-full h-40 bg-muted/50 flex flex-col items-center justify-center animate-pulse">
                        <Film className="h-16 w-16 text-muted-foreground" />
                        <p className="mt-4 text-muted-foreground">Analyzing video...</p>
                    </Card>
                )}
                {analysisResult && !isLoading && (
                    <Card className="text-left">
                        <CardHeader>
                            <CardTitle>AI Analysis & Suggestions</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="whitespace-pre-wrap leading-relaxed">{analysisResult}</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
};
