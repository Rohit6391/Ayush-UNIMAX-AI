"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { generateImageFromStoryboard } from '@/ai/flows/generate-image-from-storyboard';
import { Card, CardContent } from '@/components/ui/card';
import { Image as ImageIcon, Download, Settings, AlertTriangle } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function PhotoGenerator({ mode }: { mode: any }) {
  const { addHistoryItem } = useModes();
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt.');
      return;
    }
    setIsLoading(true);
    setImageUrl('');
    setError('');
    try {
      const result = await generateImageFromStoryboard({ imagePrompt: prompt });
      if (result.imageUrl) {
        setImageUrl(result.imageUrl);
        addHistoryItem('photo_generator', prompt, result.imageUrl);
      } else {
        throw new Error("No image data received from AI.");
      }
    } catch (err: any) {
      setError(err.message || 'Failed to generate image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModeWrapper mode={mode}>
        <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., A cinematic shot of a raccoon astronaut in a retro spaceship, 4k"
            className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors"
            rows={3}
        />
        <Button onClick={handleGenerate} disabled={isLoading} className="w-full mt-4">
            {isLoading ? <><Settings className="animate-spin mr-2" /> Generating...</> : 'Generate Image'}
        </Button>
      
        {error && (
            <Alert variant="destructive" className="mt-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        <div className="mt-6 w-full">
            {isLoading && (
                <Card className="w-full aspect-square bg-muted/50 flex items-center justify-center animate-pulse">
                    <ImageIcon className="h-16 w-16 text-muted-foreground" />
                </Card>
            )}
            {imageUrl && !isLoading && (
                <Card className="relative group aspect-square overflow-hidden">
                    <img src={imageUrl} alt={prompt} className="w-full h-full object-cover" />
                    <a href={imageUrl} download={`unimax-ai-${Date.now()}.png`} className="absolute bottom-4 right-4">
                        <Button size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Download />
                        </Button>
                    </a>
                </Card>
            )}
        </div>
    </ModeWrapper>
  );
}
