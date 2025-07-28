"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Settings, AlertTriangle, UploadCloud, Image as ImageIcon, Download } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateImageFromStoryboard } from '@/ai/flows/generate-image-from-storyboard';

export function PhotoEditor({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] =useState<string | null>(null);
    const [editedImageUrl, setEditedImageUrl] = useState('');
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setError('');
            setEditedImageUrl('');
            const reader = new FileReader();
            reader.onload = (event) => setPreviewUrl(event.target?.result as string);
            reader.onerror = () => setError('Failed to read file.');
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleEdit = async () => {
        if (!prompt.trim()) { setError('Please provide editing instructions.'); return; }
        setIsLoading(true); setEditedImageUrl(''); setError('');
        
        try {
            const fullPrompt = `Edit the provided image based on the following instruction: "${prompt}".`;
            const result = await generateImageFromStoryboard({ imagePrompt: fullPrompt });
            if (result.imageUrl) {
                setEditedImageUrl(result.imageUrl);
                addHistoryItem('photo_editor', `${prompt} on ${file?.name}`, result.imageUrl);
            } else {
                throw new Error("No image data received from AI.")
            }
        } catch (err: any) {
            setError(`Failed to edit image: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <ModeWrapper mode={mode}>
            <div 
                onClick={() => fileInputRef.current?.click()} 
                className="w-full h-48 bg-background border-2 border-dashed border-input rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
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
            <Textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="e.g., 'Make this black and white' or 'Add a cat wearing a party hat'..." 
                className="w-full mt-4 bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={2} 
            />
            <Button onClick={handleEdit} disabled={isLoading || !file} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Editing...</> : 'Edit Image'}
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
                    <Card className="w-full aspect-square bg-muted/50 flex items-center justify-center animate-pulse">
                        <Palette className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {editedImageUrl && !isLoading && (
                    <Card className="text-left">
                        <CardHeader>
                            <CardTitle>Edited Image</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative group aspect-square overflow-hidden rounded-md">
                                <img src={editedImageUrl} alt={prompt} className="w-full h-full object-cover" />
                                <a href={editedImageUrl} download={`edited-${file?.name || 'image.png'}`} className="absolute bottom-4 right-4">
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
};
