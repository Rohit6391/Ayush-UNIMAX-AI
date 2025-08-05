
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clapperboard, Settings, AlertTriangle, Download } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateVideoFromPrompt } from '@/ai/flows/generate-video-from-prompt';
import { Progress } from '../ui/progress';

export function VideoMaker({ mode }: { mode: any }) {
  const { addHistoryItem } = useModes();
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [contentType, setContentType] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt to generate a video.');
      return;
    }
    setIsLoading(true);
    setVideoUrl('');
    setContentType('');
    setError('');
    
    try {
      const result = await generateVideoFromPrompt({ prompt });
      if (result.videoUrl) {
        setVideoUrl(result.videoUrl);
        setContentType(result.contentType);
        addHistoryItem('video_maker', prompt, result.videoUrl);
      } else {
        throw new Error("The AI did not return a video. Please try again.");
      }
    } catch (err: any) {
      setError(err.message || 'Failed to generate video.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModeWrapper mode={mode}>
        <Alert>
          <Clapperboard className="h-4 w-4" />
          <AlertTitle>Video Generation Notice</AlertTitle>
          <AlertDescription>
            Generating a video can take a minute or more. Please be patient after starting the process.
          </AlertDescription>
        </Alert>

        <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., A majestic dragon soaring over a mystical forest at dawn."
            className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors mt-4"
            rows={3}
            disabled={isLoading}
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
                    <Clapperboard className="h-16 w-16 text-muted-foreground" />
                    <p className="mt-4 text-muted-foreground">Creating video, this may take a while...</p>
                    <Progress value={33} className="w-3/4 mt-4" />
                </Card>
            )}
            {videoUrl && !isLoading && (
                <Card className="text-left">
                    <CardHeader>
                        <CardTitle>Generated Video</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative group aspect-video overflow-hidden rounded-md bg-black">
                            <video src={videoUrl} controls autoPlay loop className="w-full h-full object-contain">
                                Your browser does not support the video tag.
                            </video>
                             <a href={videoUrl} download={`unimax-video-${Date.now()}.mp4`} className="absolute bottom-4 right-4">
                                <Button size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Download />
                                </Button>
                            </a>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    </ModeWrapper>
  );
}
