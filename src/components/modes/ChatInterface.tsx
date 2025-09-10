
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, User, BrainCircuit, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '../providers/AuthProvider';

interface Message {
    role: 'user' | 'model';
    text: string;
}

// Offline Q&A Database
const offlineResponses: { [key: string]: string } = {
    "hello": "Hello! As an offline AI, I have a limited set of responses. How can I help you today?",
    "hi": "Hi there! I'm an offline AI assistant. Ask me about my creator or purpose.",
    "how are you": "As an AI, I don't have feelings, but I'm operating at full capacity! Thanks for asking.",
    "who are you": "I am Ayush Unimax AI, a universal AI assistant designed to help with a wide range of tasks.",
    "who made you": "I was created by Ayush Sharma of Ayush Webtor Studio.",
    "what can you do": "I have many modes! I can generate code, create images and video storyboards, write songs, translate languages, and much more. Explore the sidebar to see all my capabilities.",
    "what is your purpose": "My purpose is to be a comprehensive and powerful AI partner for developers, writers, designers, and creators of all kinds.",
    "what features do you have": "I have specialized modes for AI Chat, Photo & Video Generation, Code Generation, Website Creation, and many other creative and technical tasks.",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "help": "You can ask me questions like 'Who made you?' or 'What can you do?'.",
};

const defaultResponse = "I'm sorry, my offline capabilities are limited. I can't answer that question. Try asking 'help' to see what I can respond to.";


export function ChatInterface({ mode, isFunChat = false }: { mode: any, isFunChat?: boolean }) {
    const { addHistoryItem, activeChat, setActiveChat } = useModes();
    const { user } = useAuth();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (activeChat && activeChat.length > 0) {
            setMessages(activeChat);
        } else {
            const initialGreeting = isFunChat 
                ? "Hello! I'm the Fun Chat AI. I'm currently running in offline mode with a set of fun, pre-written responses. Ask away!"
                : "Hello! I am Ayush Unimax AI, currently in offline mode. I can answer basic questions about my purpose and creator.";
            const initialMessage = { role: 'model', text: initialGreeting };
            setMessages([initialMessage]);
            setActiveChat([initialMessage]);
        }
    }, [isFunChat, activeChat, setActiveChat]);
    
    const getOfflineResponse = (query: string): string => {
        const cleanedQuery = query.toLowerCase().trim().replace(/[?.,!]/g, '');
        return offlineResponses[cleanedQuery] || defaultResponse;
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;
        
        const userMessageText = input;
        const newUserMessage: Message = { role: 'user', text: userMessageText };
        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);
        setActiveChat(updatedMessages);
        setInput('');
        setIsLoading(true);

        // Simulate thinking and get offline response
        setTimeout(() => {
            const aiResponseText = getOfflineResponse(userMessageText);
            const aiMessage: Message = { role: 'model', text: aiResponseText };
            
            setMessages(prev => [...prev, aiMessage]);
            setActiveChat(prev => [...prev, aiMessage]);
            addHistoryItem(isFunChat ? 'fun_chat' : 'chat', userMessageText, aiResponseText, [...updatedMessages, aiMessage]);
            setIsLoading(false);
        }, 500); // 0.5 second delay
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
                 <p className="text-xs text-muted-foreground mt-2 text-center">Chat AI is in offline mode.</p>
            </div>
        </div>
    );
}
