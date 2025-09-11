
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, User, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { aboutAiChat } from '@/ai/flows/about-ai-chat';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '../providers/AuthProvider';
import { AvatarImage } from '../ui/avatar';

interface Message {
    role: 'user' | 'model';
    text: string;
}

export function AboutAiChat() {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: "Hello! I'm the assistant for the AI Studio. Ask me anything about its features or purpose." }
    ]);
    const { user } = useAuth();
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;
        
        const newUserMessage: Message = { role: 'user', text: input };
        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);
        setInput('');
        setIsLoading(true);

        try {
            const result = await aboutAiChat({ 
                prompt: input, 
                history: messages 
            });
            const aiMessage: Message = { role: 'model', text: result.response };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error: any) {
            const errorMessage: Message = { role: 'model', text: `Sorry, an error occurred: ${error.message}` };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages]);

    const UserAvatar = () => (
        <Avatar className="h-8 w-8">
            <AvatarImage src={user?.photoURL || undefined} />
            <AvatarFallback><User size={18}/></AvatarFallback>
        </Avatar>
    )

    const ModelAvatar = () => (
         <Avatar className="h-8 w-8 bg-primary text-primary-foreground flex items-center justify-center">
            <BrainCircuit size={18} />
        </Avatar>
    )


    return (
        <div className="flex flex-col h-96 bg-background border rounded-lg">
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 text-sm ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'model' && <ModelAvatar />}
                            <div className={`max-w-xs p-3 rounded-lg ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                            </div>
                            {msg.role === 'user' && <UserAvatar/>}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start gap-3 justify-start">
                            <ModelAvatar />
                             <div className="max-w-xs p-3 rounded-lg bg-muted">
                                <div className="flex items-center justify-center gap-1.5">
                                    <div className="h-1.5 w-1.5 bg-foreground rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <div className="h-1.5 w-1.5 bg-foreground rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <div className="h-1.5 w-1.5 bg-foreground rounded-full animate-bounce" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>
            <div className="p-2 border-t">
                <div className="relative">
                    <Input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }} 
                        placeholder="Ask a question..."
                        className="pr-10"
                        disabled={!user}
                    />
                    <Button onClick={handleSend} disabled={isLoading || !input.trim() || !user} size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
                        <Send size={16} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
