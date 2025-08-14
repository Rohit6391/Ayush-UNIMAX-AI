"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useModes } from '@/components/providers/ModeProvider';
import { chatResearchAssistance } from '@/ai/flows/chat-research-assistance';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Send, Loader2 } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

export function HelpPanel() {
  const { isHelpPanelOpen, setIsHelpPanelOpen, model } = useModes();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');

  const systemPrompt = `You are a helpful AI assistant for the "Unimax AI Studio" application. Your purpose is to answer user questions about how to use the app and its various modes. Be concise, friendly, and clear in your explanations. Do not go off-topic.

  Here is a summary of the available modes:
  - **AI Chat & Fun Chat**: General purpose conversational AI.
  - **Voice Chat**: Hands-free conversational AI.
  - **Photo/Logo/Design Modes**: Generate and edit images, logos, and get design advice.
  - **Video/Animation Modes**: Create video storyboards, generate actual videos, and get editing analysis.
  - **Code/App/Game/Website Modes**: Generate, analyze, and edit code and web-based applications.
  - **Audio/Music Modes**: Generate songs, sound effects, and find lyrics.
  - **Text Generation Modes**: A wide variety of tools for writing, summarizing, translating, and more.
  - **Planner/Analyzer Modes**: Tools for planning homework, travel, analyzing study material, etc.
  - **Shopping Modes**: Tools to find products and brands.

  When a user asks a question, provide a direct answer based on this information.
  `;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    setIsLoading(true);
    setResponse('');

    try {
        const result = await chatResearchAssistance({
            prompt: `User is asking for help about the Unimax AI Studio app. Their question is: "${input}"\n\nBased on your system prompt, provide a helpful answer.`,
            history: [{ role: 'system', text: systemPrompt }],
            isDeepResearch: false,
            model,
        });
        setResponse(result.response);
    } catch (error: any) {
        setResponse(`Sorry, an error occurred: ${error.message}`);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <Sheet open={isHelpPanelOpen} onOpenChange={setIsHelpPanelOpen}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Help & Support</SheetTitle>
          <SheetDescription>
            Ask any questions about how to use the app, and I'll do my best to help!
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex-1 flex flex-col gap-4 py-4">
            <div className="relative flex-grow">
                <ScrollArea className="h-full w-full rounded-md border p-4">
                    {isLoading && !response && (
                        <div className="flex items-center justify-center h-full">
                             <Loader2 className="h-6 w-6 animate-spin text-primary" />
                        </div>
                    )}
                    {response ? (
                        <p className="whitespace-pre-wrap text-sm">{response}</p>
                    ) : (
                         <p className="text-sm text-muted-foreground">Ask a question below, e.g., "How do I use the Photo Editor?"</p>
                    )}
                </ScrollArea>
            </div>
            <div className="relative">
                <Textarea 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }} 
                    placeholder="Ask a question..."
                    className="w-full pr-12"
                    rows={2}
                />
                 <Button onClick={handleSend} disabled={isLoading} size="icon" className="absolute right-2 bottom-2 h-8 w-8">
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin"/> : <Send size={16} />}
                </Button>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
