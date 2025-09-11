
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, User, BrainCircuit, Bot, WifiOff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '../providers/AuthProvider';
import { offlineResponses, defaultOfflineResponse, getOfflineResponse } from '@/lib/offline-data';

interface Message {
    role: 'user' | 'model';
    text: string;
}

export function ChatInterface({ mode, isFunChat = false }: { mode: any, isFunChat?: boolean }) {
    const { addHistoryItem, activeChat, setActiveChat } = useModes();
    const { user } = useAuth();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isOffline, setIsOffline] = useState(false);

    useEffect(() => {
        const handleOnlineStatus = () => setIsOffline(!navigator.onLine);
        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOnlineStatus);
        handleOnlineStatus(); // Set initial state

        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOnlineStatus);
        };
    }, []);

    useEffect(() => {
        if (activeChat && activeChat.length > 0) {
            setMessages(activeChat);
        } else {
            let initialGreeting = "Hello! I am Ayush Unimax AI. How can I assist you today?";
            if (isFunChat) {
                initialGreeting = "Hello! I'm the Fun Chat AI. Ready for some creative brainstorming or a playful chat? Let's get weird!";
            }
            if (isOffline) {
                 initialGreeting += " I am currently in offline mode and can answer a wide range of general questions.";
            }

            const initialMessage = { role: 'model', text: initialGreeting };
            setMessages([initialMessage]);
            setActiveChat([initialMessage]);
        }
    }, [isFunChat, activeChat, setActiveChat, isOffline]);
    
    const handleSend = async () => {
        if (!input.trim() || isLoading) return;
        
        const userMessageText = input;
        const newUserMessage: Message = { role: 'user', text: userMessageText };
        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);
        setActiveChat(updatedMessages);
        setInput('');
        setIsLoading(true);

        if (isOffline) {
             setTimeout(() => {
                const aiResponseText = getOfflineResponse(userMessageText);
                const aiMessage: Message = { role: 'model', text: aiResponseText };
                
                setMessages(prev => [...prev, aiMessage]);
                setActiveChat(prev => [...prev, aiMessage]);
                addHistoryItem(isFunChat ? 'fun_chat' : 'chat', userMessageText, aiResponseText, [...updatedMessages, aiMessage]);
                setIsLoading(false);
            }, 500);
            return;
        }

        try {
            // This part will only run when online
            const { chatResearchAssistance } = await import('@/ai/flows/chat-research-assistance');
            const result = await chatResearchAssistance({ prompt: userMessageText, isDeepResearch: false, history: messages, isFunChat });
            const aiMessage: Message = { role: 'model', text: result.response };
            setMessages(prev => [...prev, aiMessage]);
            setActiveChat(prev => [...prev, aiMessage]);
            addHistoryItem(isFunChat ? 'fun_chat' : 'chat', userMessageText, result.response, [...updatedMessages, aiMessage]);
        } catch (error: any) {
            const errorMessage: Message = { role: 'model', text: `An error occurred: ${error.message}.` };
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
             <div className='transition-transform duration-500'>
                {isFunChat ? <Bot size={24} /> : <BrainCircuit size={24} />}
             </div>
        </Avatar>
    )

    return (
        <div className="flex flex-col h-full max-w-4xl mx-auto">
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-6">
                    {messages.map((msg, index) => (
                        <div key={index} className={`group flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'model' && <ModelAvatar />}
                            <div className={`relative max-w-xl p-4 rounded-2xl shadow-md ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-card text-card-foreground rounded-bl-none'}`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                            </div>
                            {msg.role === 'user' && <UserAvatar />}
                        </div>
                    ))}
                    {isLoading && (
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
                <div className="relative">
                    <Textarea 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }} 
                        placeholder={isFunChat ? "Ask me something fun..." : "Message Ayush Unimax AI..."}
                        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 pr-12 resize-none transition-colors min-h-[52px]" 
                        rows={1}
                        disabled={isLoading}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <Button onClick={() => handleSend()} disabled={isLoading || !input.trim()} size="icon">
                            <Send size={20} />
                        </Button>
                    </div>
                </div>
                 {isOffline && (
                    <p className="text-xs text-amber-500 mt-2 text-center flex items-center justify-center gap-2">
                        <WifiOff size={14} /> You are currently offline. Responses are generated locally.
                    </p>
                 )}
            </div>
        </div>
    );
}
