
"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clapperboard, Settings, AlertTriangle, Download, UploadCloud } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateVideoFromPrompt } from '@/ai/flows/generate-video-from-prompt';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function VideoMaker({ mode }: { mode: any }) {
  const { addHistoryItem } = useModes();
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [contentType, setContentType] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('prompt');

  // For file input
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    if (!prompt.trim()) {
      setError('Please enter a prompt to generate a video.');
      return;
    }
    if (activeTab === 'image' && !file) {
      setError('Please upload an image to animate.');
      return;
    }

    setIsLoading(true);
    setVideoUrl('');
    setContentType('');
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

      const result = await generateVideoFromPrompt({ prompt, photoDataUri: fileDataUri });
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

        <Tabs defaultValue="prompt" className="w-full my-4" onValueChange={setActiveTab}>
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
              ? "e.g., Make the subject in the photo move"
              : "e.g., A majestic dragon soaring over a mystical forest at dawn."
            }
            className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors"
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
