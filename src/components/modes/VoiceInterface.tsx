
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Mic, Waves, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useModes } from '@/components/providers/ModeProvider';
import { chatResearchAssistance } from '@/ai/flows/chat-research-assistance';
import { textToSpeech } from '@/ai/flows/text-to-speech';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { languages, languageToCode } from '@/lib/languages';

interface Message {
    role: 'user' | 'model';
    text: string;
}

export function VoiceInterface({ mode }: { mode: any }) {
    const { addHistoryItem, model } = useModes();
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [status, setStatus] = useState('Tap to speak');
    const [voiceLanguage, setVoiceLanguage] = useState('English');
    const recognitionRef = useRef<any>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize SpeechRecognition
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            
            recognitionRef.current.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setStatus(`You said: "${transcript}"`);
                handleSend(transcript);
            };

            recognitionRef.current.onerror = (event: any) => {
                console.error('Speech recognition error:', event.error);
                setStatus('Error listening. Try again.');
                setIsListening(false);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
                 if (!status.startsWith('You said') && !status.startsWith('Thinking...')) {
                     setStatus('Tap to speak');
                }
            };
        } else {
            setStatus('Speech recognition not supported.');
        }
    }, [status]);
    
    // Manage audio playback events
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        
        const handlePlay = () => setIsSpeaking(true);
        const handleEnd = () => {
            setIsSpeaking(false);
            setStatus('Tap to speak');
            // After AI finishes speaking, listen again for the next command
            handleListen();
        };
        
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('ended', handleEnd);
        audio.addEventListener('pause', handleEnd);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('ended', handleEnd);
            audio.removeEventListener('pause', handleEnd);
        };
    }, [audioRef.current]);

    const playAudio = (audioDataUri: string) => {
        if (audioRef.current) {
            audioRef.current.src = audioDataUri;
            audioRef.current.play().catch(e => {
                console.error("Audio playback failed:", e);
                setStatus('Could not play audio.');
                setIsSpeaking(false);
                 // Reset to listen again even if audio fails
                handleListen();
            });
        }
    };

    const handleListen = () => {
        if (!recognitionRef.current) return;

        if (isListening) {
            recognitionRef.current.stop();
        } else if (!isLoading && !isSpeaking) {
            recognitionRef.current.lang = languageToCode[voiceLanguage] || 'en-US';
            recognitionRef.current.start();
            setIsListening(true);
            setStatus('Listening...');
        }
    };

    const handleSend = async (text: string) => {
        if (!text.trim()) return;
        
        setIsListening(false);
        setIsLoading(true);
        setStatus('Thinking...');

        const newUserMessage: Message = { role: 'user', text };
        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);

        try {
            const result = await chatResearchAssistance({ prompt: text, isDeepResearch: false, history: messages, model });
            const aiMessage: Message = { role: 'model', text: result.response };
            setMessages(prev => [...prev, aiMessage]);
            addHistoryItem('voice_chat', text, result.response, [...updatedMessages, aiMessage]);

            if (result.response) {
                setStatus('Speaking...');
                const languageCode = languageToCode[voiceLanguage] || 'en-US';
                const audioResult = await textToSpeech({ text: result.response, language: languageCode });
                setIsLoading(false); // Finished with AI calls
                if (audioResult.audioDataUri) {
                    playAudio(audioResult.audioDataUri);
                } else {
                    setStatus('Could not generate audio.');
                    handleListen();
                }
            } else {
                setIsLoading(false);
                setStatus('I don\'t have a response for that.');
                handleListen();
            }
        } catch (error: any) {
            setStatus(error.message || `An error occurred.`);
            console.error(error);
            setIsLoading(false);
             // After an error, go back to listening state
            setTimeout(() => {
                setStatus('Tap to speak');
                handleListen();
            }, 1000);
        }
    };
    
    const MicIcon = isListening || isLoading || isSpeaking ? Waves : Mic;
    const isIdle = !isListening && !isLoading && !isSpeaking;

    return (
        <div className="flex flex-col h-full items-center justify-center text-center p-8 bg-background">
            <audio ref={audioRef} className="hidden" />
            
            <div className="w-64 h-64 rounded-full flex items-center justify-center bg-muted/50 transition-all duration-300 ease-in-out"
                style={{ transform: `scale(${isListening || isSpeaking ? 1.1 : 1})` }}
            >
                {isSpeaking ? (
                    <BrainCircuit className="h-24 w-24 text-primary animate-pulse" />
                ) : (
                    <Button 
                        onClick={handleListen} 
                        size="icon" 
                        className={`h-40 w-40 rounded-full transition-colors ${isListening ? 'bg-destructive' : 'bg-primary'}`}
                        disabled={!isIdle}
                    >
                        <MicIcon size={72} />
                    </Button>
                )}
            </div>
            <p className="mt-8 text-2xl font-medium text-foreground h-8">
                {status}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
                This is a hands-free conversational experience.
            </p>

            <div className='mt-8 w-full max-w-xs'>
                <Label htmlFor="voice-lang">Language</Label>
                <Select value={voiceLanguage} onValueChange={setVoiceLanguage} disabled={!isIdle}>
                    <SelectTrigger id="voice-lang">
                        <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.keys(languageToCode).map(lang => <SelectItem key={`voice-${lang}`} value={lang}>{lang}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
