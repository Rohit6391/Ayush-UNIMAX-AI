
"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Play, Square, Music, AlertTriangle, Link, Loader2 } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { writeSongAndMusic, findLyricsFromUrl } from '@/ai/flows/write-song-and-music';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function SongWriter({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isFetchingLyrics, setIsFetchingLyrics] = useState(false);
    const [error, setError] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [composition, setComposition] = useState<any[] | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

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
            const result = await writeSongAndMusic({ concept: prompt });
            setLyrics(result.lyrics);
            setComposition(result.composition);
            addHistoryItem('song_writer', prompt, `Generated a song with lyrics and a ${result.composition.length}-note melody.`);
        } catch (err: any) {
            setError(`Song creation failed: ${err.message}.`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleFindLyrics = async () => {
        if (!url.trim()) { setError('Please enter a song URL.'); return; }
        setIsFetchingLyrics(true); setError(''); setLyrics(''); setComposition(null); cleanup();
        try {
            const result = await findLyricsFromUrl({ songUrl: url });
            setLyrics(result.lyrics);
             addHistoryItem('song_writer', `Find lyrics for ${url}`, result.lyrics);
        } catch(err: any) {
            setError(`Failed to find lyrics: ${err.message}`);
        } finally {
            setIsFetchingLyrics(false);
        }
    };

    return (
        <ModeWrapper mode={mode}>
            <Tabs defaultValue="create" className="w-full mb-4">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="create">Create Song</TabsTrigger>
                    <TabsTrigger value="find">Find Lyrics from URL</TabsTrigger>
                </TabsList>
                <TabsContent value="create">
                     <Textarea 
                        value={prompt} 
                        onChange={(e) => setPrompt(e.target.value)} 
                        placeholder="e.g., A song about rain on a quiet city street in Japanese..." 
                        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                        rows={3} 
                    />
                    <Button onClick={handleGenerate} disabled={isLoading || isPlaying} className="w-full mt-4">
                        {isLoading ? <><Settings className="animate-spin mr-2" /> Writing Song...</> : 'Write Song'}
                    </Button>
                </TabsContent>
                <TabsContent value="find">
                    <div className="space-y-2">
                        <Label htmlFor="song-url">Song URL</Label>
                        <Input 
                            id="song-url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="e.g., https://www.youtube.com/watch?v=..."
                        />
                        <Button onClick={handleFindLyrics} disabled={isFetchingLyrics} className="w-full">
                            {isFetchingLyrics ? <><Loader2 className="animate-spin mr-2" /> Finding Lyrics...</> : <><Link className="mr-2"/>Find Lyrics</>}
                        </Button>
                    </div>
                </TabsContent>
            </Tabs>
            
            {error && (
                <Alert variant="destructive" className="mt-6 text-left">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="mt-6 w-full">
                {isLoading || isFetchingLyrics && (
                    <Card className="w-full h-64 bg-muted/50 flex items-center justify-center animate-pulse">
                        <Music className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {lyrics && !isLoading && !isFetchingLyrics && (
                    <Card className="text-left">
                        <CardHeader>
                            <CardTitle>Canvas</CardTitle>
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
