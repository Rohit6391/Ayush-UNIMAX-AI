
"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Play, Square, Music, AlertTriangle, Loader2, LinkIcon, Clipboard, Check } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { writeSongAndMusic } from '@/ai/flows/write-song-and-music';
import { findLyricsFromUrl } from '@/ai/flows/find-lyrics-from-url';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function SongWriter({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [composition, setComposition] = useState<any[] | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [copied, setCopied] = useState(false);
    
    // For lyric finder
    const [url, setUrl] = useState('');
    const [isFindingLyrics, setIsFindingLyrics] = useState(false);

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
        if (!url.trim()) { setError('Please enter a valid URL.'); return; }
        setIsFindingLyrics(true); setError(''); setLyrics(''); setComposition(null); cleanup();
        try {
            const result = await findLyricsFromUrl({ url });
            setLyrics(result.lyrics);
             addHistoryItem('song_writer', `Find lyrics from ${url}`, result.lyrics);
        } catch (err: any) {
            setError(`Failed to find lyrics: ${err.message}`);
        } finally {
            setIsFindingLyrics(false);
        }
    }

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
            <Tabs defaultValue="generate" className="w-full mb-4">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="generate">Generate Song</TabsTrigger>
                    <TabsTrigger value="find">Find Lyrics from URL</TabsTrigger>
                </TabsList>
                <TabsContent value="generate">
                    <Textarea 
                        value={prompt} 
                        onChange={(e) => setPrompt(e.target.value)} 
                        placeholder="e.g., A song about rain on a quiet city street in Japanese..." 
                        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors" 
                        rows={3} 
                    />
                    <Button onClick={handleGenerate} disabled={isLoading || isPlaying || isFindingLyrics} className="w-full mt-4">
                        {isLoading ? <><Loader2 className="animate-spin mr-2" /> Writing Song...</> : 'Write Song'}
                    </Button>
                </TabsContent>
                 <TabsContent value="find">
                    <div className="space-y-2 text-left">
                        <Label htmlFor="url-input">Song URL</Label>
                        <Input 
                            id="url-input" 
                            placeholder="e.g., https://genius.com/queen-bohemian-rhapsody-lyrics" 
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            disabled={isFindingLyrics}
                        />
                        <Button onClick={handleFindLyrics} disabled={isLoading || isFindingLyrics} className="w-full">
                            {isFindingLyrics ? <><Loader2 className="animate-spin mr-2" /> Finding Lyrics...</> : 'Find Lyrics'}
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
                {(isLoading || isFindingLyrics) && (
                    <Card className="w-full h-64 bg-muted/50 flex items-center justify-center animate-pulse">
                        <Music className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {lyrics && !isLoading && !isFindingLyrics && (
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
