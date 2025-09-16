
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, User, BrainCircuit, Sparkles, Plus, X, Mic, Waves, Bot, SlidersHorizontal, BookOpen, Languages, Save, WifiOff, Volume2, Loader2, Copy, Check, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { chatResearchAssistance } from '@/ai/flows/chat-research-assistance';
import { textToSpeech } from '@/ai/flows/text-to-speech';
import { enhancePrompt } from '@/ai/flows/prompt-enhancer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '../providers/AuthProvider';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { useToast } from '@/hooks/use-toast';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Separator } from '../ui/separator';
import { useMemory } from '@/hooks/use-memory';
import { getOfflineResponse } from '@/lib/offline-data';

interface Message {
    id: string;
    role: 'user' | 'model';
    text: string;
}

export function ChatInterface({ mode, isFunChat = false }: { mode: any, isFunChat?: boolean }) {
    const { addHistoryItem, activeChat, setActiveChat, model } = useModes();
    const { memories, addMemory } = useMemory();
    const { user } = useAuth();
    const { toast } = useToast();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    // Tools State
    const [isDeepResearch, setIsDeepResearch] = useState(false);
    const [isStudyMode, setIsStudyMode] = useState(false);
    const [isTranslatorMode, setIsTranslatorMode] = useState(false);
    const [targetLanguage, setTargetLanguage] = useState('English');

    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Voice & Hands-Free States
    const [isHandsFree, setIsHandsFree] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);
    const recognitionRef = useRef<any>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    
    const [isOffline, setIsOffline] = useState(false);
    const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);

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
            setMessages(activeChat.map(m => ({...m, id: m.id || `${m.role}-${Math.random()}`})));
        } else {
            let initialGreeting = "Hello! I am Ayush Unimax AI. How can I assist you today?";
            if (isFunChat) {
                initialGreeting = "Hello! I'm the Fun Chat AI. Ready for some creative brainstorming or a playful chat? Let's get weird!";
            }
             if (isOffline) {
                 initialGreeting += " I am currently in offline mode and can answer a wide range of general questions.";
            }
            const initialMessage: Message = { id: 'initial-greeting', role: 'model', text: initialGreeting };
            setMessages([initialMessage]);
            setActiveChat([initialMessage]);
        }
    }, [isFunChat, activeChat, setActiveChat, isOffline]);
    
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

            recognitionRef.current.onerror = (event: any) => {
                 if (event.error !== 'no-speech' && event.error !== 'aborted') {
                    console.error('Speech recognition error:', event.error);
                }
                 setIsListening(false);
            };
            recognitionRef.current.onend = () => setIsListening(false);
        }

        audioRef.current = new Audio();
        const audio = audioRef.current;
        const onSpeakingEnd = () => {
            setIsSpeaking(false);
            setSpeakingMessageId(null);
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
    
    const handleEnhancePrompt = async () => {
        if (!input.trim() || isLoading) return;
        setIsLoading(true);
        try {
            const { enhancedPrompt } = await enhancePrompt({ prompt: input });
            setInput(enhancedPrompt);
            toast({ title: "Prompt Enhanced", description: "Your prompt has been improved." });
        } catch (error: any) {
            toast({ variant: "destructive", title: "Enhancement Failed", description: error.message });
            console.error("Failed to enhance prompt:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const playAudio = (audioDataUri: string, messageId: string) => {
        if (audioRef.current) {
            setSpeakingMessageId(messageId);
            setIsSpeaking(true);
            audioRef.current.src = audioDataUri;
            audioRef.current.play().catch(e => {
                console.error("Audio playback error:", e);
                setIsSpeaking(false);
                setSpeakingMessageId(null);
            });
        }
    };
    
    const handleListenToMessage = async (message: Message) => {
        if (isSpeaking) {
            audioRef.current?.pause();
            return;
        }

        setSpeakingMessageId(message.id);
        setIsSpeaking(true);
        
        try {
            const audioResult = await textToSpeech({ text: message.text });
            playAudio(audioResult.audioDataUri, message.id);
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: 'Audio Failed',
                description: error.message,
            });
            setIsSpeaking(false);
            setSpeakingMessageId(null);
        }
    };

    const handleCopy = (message: Message) => {
        navigator.clipboard.writeText(message.text).then(() => {
            setCopiedMessageId(message.id);
            setTimeout(() => setCopiedMessageId(null), 2000);
        });
    };

    const handleShare = async (message: Message) => {
        const shareData = {
            title: 'AI Chat Response',
            text: message.text,
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                throw new Error("Web Share API not supported");
            }
        } catch (err) {
            // Fallback to copy
            handleCopy(message);
            toast({
                title: "Share not available",
                description: "Message copied to clipboard instead.",
            });
        }
    };

    const handleSend = async (text?: string) => {
        const currentInput = typeof text === 'string' ? text : input;
        if ((!currentInput.trim() && !uploadedFile) || isLoading) return;

        const userMessageText = currentInput;
        const newUserMessage: Message = { id: `user-${Date.now()}`, role: 'user', text: userMessageText };
        
        setMessages(prev => [...prev, newUserMessage]);
        setInput('');
        setIsLoading(true);

        const historyToSend = [...messages, newUserMessage].map(m => ({ role: m.role, text: m.text }));

         if (isOffline) {
             setTimeout(async () => {
                const aiResponseText = getOfflineResponse(userMessageText, mode.id);
                const aiMessage: Message = { id: `model-${Date.now()}`, role: 'model', text: aiResponseText };
                
                setMessages(prev => [...prev, aiMessage]);
                setActiveChat(prev => [...prev, aiMessage]);
                addHistoryItem(isFunChat ? 'fun_chat' : 'chat', userMessageText, aiResponseText, [...historyToSend, aiMessage]);
                
                 if (isHandsFree) {
                    try {
                        const audioResult = await textToSpeech({ text: aiResponseText });
                        if (audioResult.audioDataUri && audioRef.current) {
                            playAudio(audioResult.audioDataUri, aiMessage.id);
                        }
                    } catch (audioError) {
                        console.error("TTS failed in offline mode:", audioError);
                        setIsSpeaking(false);
                        handleListen();
                    }
                }
                
                setIsLoading(false);
            }, 500);
            removeFile();
            return;
        }

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

            const memoryToUse = memories.map(m => m.text);

            const result = await chatResearchAssistance({ 
                prompt: userMessageText, 
                isDeepResearch, 
                history: historyToSend, 
                fileDataUri: fileDataUri, 
                isFunChat,
                isStudyMode,
                isTranslatorMode,
                targetLanguage,
                memory: memoryToUse.length > 0 ? memoryToUse : undefined,
                model
             });
            const aiMessage: Message = { id: `model-${Date.now()}`, role: 'model', text: result.response };
            setMessages(prev => [...prev, aiMessage]);
            setActiveChat(prev => [...prev, aiMessage]);
            addHistoryItem(isFunChat ? 'fun_chat' : 'chat', userMessageText, result.response, [...historyToSend, aiMessage]);

            if (isHandsFree && result.response) {
                try {
                    const audioResult = await textToSpeech({ text: result.response });
                    if (audioResult.audioDataUri && audioRef.current) {
                        playAudio(audioResult.audioDataUri, aiMessage.id);
                    }
                } catch (audioError: any) {
                    const errorMsg: Message = { id: `model-error-${Date.now()}`, role: 'model', text: `I couldn't generate audio for my response. Reason: ${audioError.message}` };
                    setMessages(prev => [...prev, errorMsg]);
                     if (isHandsFree) {
                        setIsSpeaking(false);
                        handleListen();
                    }
                }
            }

        } catch (error: any) {
            const errorMessage: Message = { id: `model-error-${Date.now()}`, role: 'model', text: `An error occurred: ${error.message}.` };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
            removeFile();
        }
    };
    
    const handleListen = () => {
        if (!recognitionRef.current) return;
        if (isListening) {
            recognitionRef.current.stop();
        } else if (!isSpeaking && !isLoading) {
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
                {isFunChat ? <Bot size={24} /> : <BrainCircuit size={24} />}
             </div>
        </Avatar>
    )

    return (
        <div className="flex flex-col h-full max-w-4xl mx-auto">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*,text/plain,application/pdf"
            />
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-6">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'model' && <ModelAvatar />}
                            <div className="flex flex-col gap-2 max-w-xl">
                                <div className={`p-4 rounded-2xl shadow-md ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-card text-card-foreground rounded-bl-none'}`}>
                                    <p className="whitespace-pre-wrap">{msg.text}</p>
                                </div>
                                {msg.role === 'model' && msg.id !== 'initial-greeting' && msg.text && msg.text.length > 1 && !isLoading && (
                                     <div className="flex items-center gap-1 self-start">
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="h-7 w-7 text-muted-foreground"
                                            title="Listen to this message"
                                            onClick={() => handleListenToMessage(msg)}
                                        >
                                            {isSpeaking && speakingMessageId === msg.id ? <Loader2 className="animate-spin" size={16} /> : <Volume2 size={16} />}
                                        </Button>
                                         <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="h-7 w-7 text-muted-foreground"
                                            title="Copy message"
                                            onClick={() => handleCopy(msg)}
                                        >
                                             {copiedMessageId === msg.id ? <Check size={16} className="text-primary"/> : <Copy size={16} />}
                                        </Button>
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="h-7 w-7 text-muted-foreground"
                                            title="Share message"
                                            onClick={() => handleShare(msg)}
                                        >
                                             <Share2 size={16} />
                                        </Button>
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="h-7 w-7 text-muted-foreground"
                                            title="Save to Memory"
                                            onClick={() => {
                                                addMemory(msg.text)
                                                toast({title: "Memory Saved", description: "The AI will remember this information."})
                                            }}
                                        >
                                            <Save size={16} />
                                        </Button>
                                    </div>
                                )}
                            </div>
                            {msg.role === 'user' && <UserAvatar/>}
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
                        placeholder={isHandsFree ? "Hands-free mode is active..." : (isFunChat ? "Ask me something fun..." : "Message Ayush Unimax AI...")}
                        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 pl-24 pr-24 resize-none transition-colors min-h-[52px]" 
                        rows={1}
                        disabled={isHandsFree || isLoading}
                    />
                     <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <Button onClick={() => fileInputRef.current?.click()} variant="ghost" size="icon" title="Upload File" disabled={isHandsFree || isLoading}>
                            <Plus size={20} />
                        </Button>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" size="icon" title="Tools" disabled={isHandsFree || isLoading}>
                                    <SlidersHorizontal size={20} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className="grid gap-4">
                                    <div className="space-y-2">
                                        <h4 className="font-medium leading-none">Tools</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Adjust settings to tailor the AI's response.
                                        </p>
                                    </div>
                                    <Separator />
                                    <div className="grid gap-4">
                                        {!isFunChat && (
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="deep-research" className="flex items-center gap-2">
                                                    <Sparkles size={16} /> Deep Research
                                                </Label>
                                                <Switch id="deep-research" checked={isDeepResearch} onCheckedChange={setIsDeepResearch} />
                                            </div>
                                        )}
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="study-mode" className="flex items-center gap-2">
                                                <BookOpen size={16} /> Study Mode
                                            </Label>
                                            <Switch id="study-mode" checked={isStudyMode} onCheckedChange={setIsStudyMode} />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="hands-free-mode" className="flex items-center gap-2">
                                                <Mic size={16} /> Hands-Free
                                            </Label>
                                            <Switch id="hands-free-mode" checked={isHandsFree} onCheckedChange={setIsHandsFree} />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="translator-mode" className="flex items-center gap-2">
                                                    <Languages size={16} /> Translator
                                                </Label>
                                                <Switch id="translator-mode" checked={isTranslatorMode} onCheckedChange={setIsTranslatorMode} />
                                            </div>
                                             {isTranslatorMode && (
                                                <Input 
                                                    placeholder="Target Language (e.g., French)" 
                                                    value={targetLanguage} 
                                                    onChange={(e) => setTargetLanguage(e.target.value)}
                                                    className="h-9"
                                                />
                                             )}
                                        </div>
                                        <Separator />
                                         <Button variant="outline" onClick={handleEnhancePrompt} disabled={!input || isLoading}>
                                            <Sparkles className="mr-2" size={16}/> Enhance Prompt
                                        </Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                         <Button 
                            onClick={handleListen} 
                            variant="ghost" 
                            size="icon" 
                            title="Dictate" 
                            className={isListening ? 'text-destructive' : ''}
                            disabled={isHandsFree || isLoading}
                        >
                            {isListening ? <Waves size={20} /> : <Mic size={20} />}
                        </Button>
                        <Button onClick={() => handleSend()} disabled={isLoading || isHandsFree || (!input.trim() && !uploadedFile)} size="icon">
                            <Send size={20} />
                        </Button>
                    </div>
                </div>
                 {isOffline && (
                    <p className="text-xs text-amber-500 mt-2 text-center flex items-center justify-center gap-2">
                        <WifiOff size={14} /> You are currently offline. Responses are generated from a local knowledge base.
                    </p>
                 )}
            </div>
        </div>
    );
}
