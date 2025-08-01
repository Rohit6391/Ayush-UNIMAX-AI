
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, User, BrainCircuit, Sparkles, Plus, X, Mic, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useModes } from '@/components/providers/ModeProvider';
import { chatResearchAssistance } from '@/ai/flows/chat-research-assistance';
import { textToSpeech } from '@/ai/flows/text-to-speech';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '../providers/AuthProvider';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';

interface Message {
    role: 'user' | 'model';
    text: string;
}

export function ChatInterface({ mode, initialMessages, setInitialMessages }: { mode: any, initialMessages: Message[], setInitialMessages: (messages: Message[]) => void }) {
    const { addHistoryItem, activeChat, setActiveChat, model } = useModes();
    const { user } = useAuth();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDeepResearch, setIsDeepResearch] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Voice & Hands-Free States
    const [isHandsFree, setIsHandsFree] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const recognitionRef = useRef<any>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);


    useEffect(() => {
        if (activeChat && activeChat.length > 0) {
            setMessages(activeChat);
        } else {
            setMessages([{ role: 'model', text: `Hello! I am Ayush Unimax AI. How can I assist you today?` }]);
        }
    }, [activeChat]);
    
     // Initialize SpeechRecognition and Audio elements
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                if (isHandsFree) {
                    handleSend(transcript);
                } else {
                    setInput(prev => prev ? `${prev} ${transcript}` : transcript);
                }
            };

            recognitionRef.current.onerror = (event: any) => console.error('Speech recognition error:', event.error);
            recognitionRef.current.onend = () => setIsListening(false);
        }

        audioRef.current = new Audio();
        const audio = audioRef.current;
        const onSpeakingEnd = () => {
            setIsSpeaking(false);
            if (isHandsFree) {
                handleListen(); // Listen for the next command after AI finishes speaking
            }
        };
        audio.addEventListener('ended', onSpeakingEnd);
        audio.addEventListener('pause', onSpeakingEnd);

        return () => {
            audio.removeEventListener('ended', onSpeakingEnd);
             audio.removeEventListener('pause', onSpeakingEnd);
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, [isHandsFree]);


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploadedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const removeFile = () => {
        setUploadedFile(null);
        setPreviewUrl(null);
        if(fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };


    const handleSend = async (text?: string) => {
        const currentInput = typeof text === 'string' ? text : input;
        if ((!currentInput.trim() && !uploadedFile) || isLoading) return;
        
        setIsLoading(true);
        const userMessageText = currentInput;
        const newUserMessage: Message = { role: 'user', text: userMessageText };
        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);
        setActiveChat(updatedMessages);
        setInput('');

        try {
            let fileDataUri: string | undefined;
            if (uploadedFile) {
                fileDataUri = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (event) => resolve(event.target?.result as string);
                    reader.onerror = (error) => reject(error);
                    reader.readAsDataURL(uploadedFile);
                });
            }

            const result = await chatResearchAssistance({ prompt: userMessageText, isDeepResearch, history: messages, fileDataUri, model: 'gemini-1.5-flash-latest' });
            const aiMessage: Message = { role: 'model', text: result.response };
            setMessages(prev => [...prev, aiMessage]);
            setActiveChat(prev => [...prev, aiMessage]);
            addHistoryItem('chat', userMessageText, result.response, [...updatedMessages, aiMessage]);

            if (isHandsFree && result.response) {
                try {
                    const audioResult = await textToSpeech({ text: result.response });
                    if (audioResult.audioDataUri && audioRef.current) {
                        setIsSpeaking(true);
                        audioRef.current.src = audioResult.audioDataUri;
                        audioRef.current.play().catch(e => console.error("Audio playback error:", e));
                    }
                } catch (audioError: any) {
                    console.error("TTS Error:", audioError);
                    const errorMessage: Message = { role: 'model', text: `I couldn't generate audio for my response. Reason: ${audioError.message}` };
                     setMessages(prev => [...prev, errorMessage]);
                    setActiveChat(prev => [...prev, errorMessage]);
                     if (isHandsFree) {
                        setIsSpeaking(false);
                        handleListen();
                    }
                }
            }

        } catch (error: any) {
            const errorMessage: Message = { role: 'model', text: `An error occurred: ${error.message}.` };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
            removeFile();
            if (!isHandsFree) setIsListening(false);
        }
    };
    
    const handleListen = () => {
        if (!recognitionRef.current) return;
        if (isListening) {
            recognitionRef.current.stop();
        } else {
            setIsListening(true);
            recognitionRef.current.start();
        }
    };

    const UserAvatar = () => (
        <Avatar className="h-10 w-10">
            <AvatarImage src={user?.photoURL || undefined} />
            <AvatarFallback><User /></AvatarFallback>
        </Avatar>
    )

    const ModelAvatar = () => (
        <Avatar className="h-10 w-10 bg-primary text-primary-foreground flex items-center justify-center">
             <div className='transition-transform duration-500'>
                <BrainCircuit size={24} />
             </div>
        </Avatar>
    )

    return (
        <div className="flex flex-col h-full max-w-4xl mx-auto">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-6">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'model' && <ModelAvatar />}
                            <div className={`max-w-xl p-4 rounded-2xl shadow-md ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-card text-card-foreground rounded-bl-none'}`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                            </div>
                            {msg.role === 'user' && <UserAvatar />}
                        </div>
                    ))}
                    {(isLoading || isListening || isSpeaking) && (
                        <div className="flex items-start gap-4 justify-start">
                             <ModelAvatar />
                             <div className="max-w-xl p-4 rounded-2xl bg-card text-card-foreground rounded-bl-none">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <div className="h-2 w-2 bg-primary rounded-full animate-bounce" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>
            <div className="p-4 bg-card/50 backdrop-blur-sm border-t border-border">
                {previewUrl && (
                    <div className="relative mb-2 w-24 h-24 rounded-md overflow-hidden border">
                        {uploadedFile?.type.startsWith('image/') ? (
                            <img src={previewUrl} alt="File preview" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground text-xs p-2">
                               {uploadedFile?.name}
                            </div>
                        )}
                        <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-1 right-1 h-6 w-6"
                            onClick={removeFile}
                        >
                            <X size={14} />
                        </Button>
                    </div>
                )}
                <div className="relative">
                    <Textarea 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }} 
                        placeholder={"Message Ayush Unimax AI..."}
                        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 pl-12 pr-24 resize-none transition-colors min-h-[52px]" 
                        rows={1}
                        disabled={isHandsFree}
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <Button onClick={() => fileInputRef.current?.click()} variant="ghost" size="icon" title="Upload File" disabled={isHandsFree}>
                            <Plus size={20} />
                        </Button>
                    </div>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <Button 
                            onClick={handleListen} 
                            variant="ghost" 
                            size="icon" 
                            title="Dictate" 
                            className={isListening ? 'text-destructive' : ''}
                            disabled={isHandsFree}
                        >
                            {isListening ? <Waves size={20} /> : <Mic size={20} />}
                        </Button>
                        <Button onClick={() => handleSend()} disabled={isLoading || isHandsFree} size="icon">
                            <Send size={20} />
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                    <label htmlFor="deep-research" className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                        <input type="checkbox" id="deep-research" checked={isDeepResearch} onChange={() => setIsDeepResearch(!isDeepResearch)} className="w-4 h-4 rounded text-primary focus:ring-primary" />
                        <Sparkles size={16} className={isDeepResearch ? 'text-primary' : ''}/>
                        Deep Research
                    </label>
                    <div className="flex items-center gap-2">
                        <Label htmlFor="hands-free-mode" className="cursor-pointer">Hands-Free</Label>
                        <Switch id="hands-free-mode" checked={isHandsFree} onCheckedChange={setIsHandsFree} />
                    </div>
                </div>
            </div>
        </div>
    );
}
