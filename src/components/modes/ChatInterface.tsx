"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Mic, BrainCircuit, Speaker, Sparkles, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useModes } from '@/components/providers/ModeProvider';
import { chatResearchAssistance } from '@/ai/flows/chat-research-assistance';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '../providers/AuthProvider';

interface Message {
    role: 'user' | 'model';
    text: string;
}

export function ChatInterface({ mode, initialMessages, setInitialMessages }: { mode: any, initialMessages: Message[], setInitialMessages: (messages: Message[]) => void }) {
    const { addHistoryItem } = useModes();
    const { user } = useAuth();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isDeepResearch, setIsDeepResearch] = useState(false);
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        if (initialMessages && initialMessages.length > 0) {
            setMessages(initialMessages);
        } else {
            setMessages([{ role: 'model', text: `Hello! I am Unimax AI. How can I assist you today?` }]);
        }
    }, [initialMessages]);

    useEffect(() => {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US';
            recognitionRef.current.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);
                setIsListening(false);
            };
            recognitionRef.current.onerror = (event: any) => {
                console.error('Speech recognition error:', event.error);
                setIsListening(false);
            };
        }
    }, []);

    const handleListen = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
        } else {
            recognitionRef.current?.start();
            setIsListening(true);
        }
    };

    const handleSpeak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;
        
        const newUserMessage: Message = { role: 'user', text: input };
        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);

        const currentInput = input;
        setInput('');
        setIsLoading(true);

        try {
            const result = await chatResearchAssistance({ prompt: currentInput, isDeepResearch });
            const aiMessage: Message = { role: 'model', text: result.response };
            const finalMessages = [...updatedMessages, aiMessage];
            setMessages(finalMessages);
            setInitialMessages([]); 
            addHistoryItem('chat', currentInput, result.response, finalMessages);
        } catch (error: any) {
            const errorMessage: Message = { role: 'model', text: `An error occurred: ${error.message}. Please try again.` };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
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
             <BrainCircuit size={24} />
        </Avatar>
    )

    return (
        <div className="flex flex-col h-full max-w-4xl mx-auto">
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-6">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                            {msg.role === 'model' && <ModelAvatar />}
                            <div className={`max-w-xl p-4 rounded-2xl shadow-md ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-card text-card-foreground rounded-bl-none'}`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                                {msg.role === 'model' && msg.text && (
                                    <Button onClick={() => handleSpeak(msg.text)} variant="ghost" size="icon" className="mt-2 h-7 w-7 text-muted-foreground">
                                        <Speaker size={16}/>
                                    </Button>
                                )}
                            </div>
                            {msg.role === 'user' && <UserAvatar />}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start gap-4">
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
                <div className="relative">
                    <Textarea 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }} 
                        placeholder="Message Unimax AI..." 
                        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 pl-12 pr-12 resize-none transition-colors min-h-[52px]" 
                        rows={1} 
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <Button onClick={handleListen} variant="ghost" size="icon" className={isListening ? 'text-red-500' : ''}>
                            <Mic size={20} />
                        </Button>
                    </div>
                    <Button onClick={handleSend} disabled={isLoading} className="absolute right-3 top-1/2 -translate-y-1/2" size="icon">
                        <Send size={20} />
                    </Button>
                </div>
                <div className="flex items-center justify-center mt-2">
                    <label htmlFor="deep-research" className="flex items-center gap-2 text-sm cursor-pointer text-muted-foreground hover:text-foreground">
                        <input type="checkbox" id="deep-research" checked={isDeepResearch} onChange={() => setIsDeepResearch(!isDeepResearch)} className="w-4 h-4 rounded text-primary focus:ring-primary" />
                        <Sparkles size={16} className={isDeepResearch ? 'text-primary' : ''}/>
                        Deep Research
                    </label>
                </div>
            </div>
        </div>
    );
}
