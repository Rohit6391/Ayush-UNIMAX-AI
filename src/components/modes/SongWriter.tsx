
"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Play, Square, Music, AlertTriangle, Loader2, Clipboard, Check } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { writeSongAndMusic } from '@/ai/flows/write-song-and-music';

export function SongWriter({ mode }: { mode: any }) {
    const { addHistoryItem, model } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [composition, setComposition] = useState<any[] | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [copied, setCopied] = useState(false);

    const cleanup = () => {
        if (window.Tone) {
            window.Tone.Transport.stop();
            window.Tone.Transport.cancel();
        }
        setIsPlaying(false);
    };

    useEffect(() => {
        return () => cleanup();
    }, []);
    
    const playMusic = (notes: any[]) => {
        if (!window.Tone || !notes || notes.length === 0) {
            setError("Cannot play music. Invalid composition.");
            return;
        }
        cleanup();
        
        const synth = new window.Tone.PolySynth(window.Tone.Synth).toDestination();
        let time = 0;
        notes.forEach(event => {
            window.Tone.Transport.scheduleOnce((t: any) => {
                synth.triggerAttackRelease(event.note, event.duration, t);
            }, time);
            time += window.Tone.Time(event.duration).toSeconds();
        });

        window.Tone.Transport.scheduleOnce(() => {
            setIsPlaying(false);
        }, time);

        window.Tone.start().then(() => {
            window.Tone.Transport.start();
            setIsPlaying(true);
        });
    };

    const handleGenerate = async () => {
        if (!prompt.trim()) { setError('Please enter a song concept.'); return; }
        setIsLoading(true); setError(''); setLyrics(''); setComposition(null); cleanup();
        
        try {
            const result = await writeSongAndMusic({ concept: prompt, model });
            setLyrics(result.lyrics);
            setComposition(result.composition);
            addHistoryItem('song_writer', prompt, `Generated a song with lyrics and a ${result.composition.length}-note melody.`);
        } catch (err: any) {
            let errorMessage = `Song creation failed: ${err.message}.`;
            if (err.message && err.message.includes('429')) {
                errorMessage = "You have exceeded your daily API quota. Please check your plan and billing details, or try again tomorrow.";
            }
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleCopy = () => {
        if (navigator.clipboard && lyrics) {
            navigator.clipboard.writeText(lyrics).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };

    return (
        <ModeWrapper mode={mode}>
            <Textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="e.g., A song about rain on a quiet city street in Japanese..." 
                className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                rows={3} 
            />
            <Button onClick={handleGenerate} disabled={isLoading || isPlaying} className="w-full mt-4">
                {isLoading ? <><Loader2 className="animate-spin mr-2" /> Writing Song...</> : 'Write Song'}
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
                    <Card className="w-full h-64 bg-muted/50 flex items-center justify-center animate-pulse">
                        <Music className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {lyrics && !isLoading && (
                    <Card className="text-left">
                         <CardHeader className="flex-row items-center justify-between">
                            <CardTitle>Generated Song</CardTitle>
                             <Button onClick={handleCopy} size="icon" variant="ghost" className="h-8 w-8">
                                {copied ? <Check size={16}/> : <Clipboard size={16}/>}
                            </Button>
                        </CardHeader>
                        <CardContent>
                             <div className="p-4 border rounded-lg bg-background">
                                <h3 className="font-bold text-lg mb-2">Lyrics</h3>
                                <p className="whitespace-pre-wrap leading-relaxed">{lyrics}</p>
                            </div>
                            {composition && (
                                <div className="mt-6 pt-6 border-t border-border text-center">
                                    <h3 className="font-semibold mb-4 text-lg">Melody</h3>
                                    <Button onClick={() => isPlaying ? cleanup() : playMusic(composition)} className="bg-accent text-accent-foreground hover:bg-accent/90">
                                        {isPlaying ? <Square className="mr-2" /> : <Play className="mr-2" />}
                                        {isPlaying ? 'Stop' : 'Play Melody'}
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
}
