
"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { createDocumentFromPrompt } from '@/ai/flows/create-document-from-prompt';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, AlertTriangle, WifiOff } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { getOfflineResponse } from '@/lib/offline-data';

interface TextGeneratorProps {
  mode: any;
  promptPlaceholder: string;
  buttonText: string;
  generatePrompt?: (prompt: string) => string;
  resultTitle: string;
  flow?: (input: { prompt: string } | any) => Promise<{ [key: string]: any }>;
}

export function TextGenerator({ mode, promptPlaceholder, buttonText, generatePrompt, resultTitle, flow }: TextGeneratorProps) {
  const { addHistoryItem, model } = useModes();
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultText, setResultText] = useState('');
  const [error, setError] = useState('');
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnlineStatus = () => setIsOffline(!navigator.onLine);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);
    handleOnlineStatus();

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt.');
      return;
    }
    setIsLoading(true);
    setResultText('');
    setError('');

    if (isOffline) {
        setTimeout(() => {
            const response = getOfflineResponse(prompt);
            setResultText(response);
            addHistoryItem(mode.id, prompt, response);
            setIsLoading(false);
        }, 500);
        return;
    }
    
    try {
      let result;
      let finalResultText = '';
      if (flow) {
        result = await flow({ prompt });
        const resultKey = Object.keys(result)[0];
        finalResultText = result[resultKey];
      } else {
        const fullPrompt = generatePrompt ? generatePrompt(prompt) : prompt;
        result = await createDocumentFromPrompt({ prompt: fullPrompt, model });
        finalResultText = result.document;
      }
      
      setResultText(finalResultText);
      addHistoryItem(mode.id, prompt, finalResultText);

    } catch (err: any) {
      let errorMessageText = `Failed to generate: ${err.message}`;
      if (err.message) {
        if (err.message.includes('429') || err.message.toLowerCase().includes('quota')) {
            if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
                errorMessageText = "The public quota has been reached. To unlock unlimited use, please add your personal, free Gemini API key to the .env file as instructed in the README.";
            } else {
                errorMessageText = "You have exceeded your daily API quota. Please check your plan and billing details, or try again tomorrow.";
            }
        } else if (err.message.includes('503') || err.message.toLowerCase().includes('overloaded')) {
            errorMessageText = "The AI model is currently busy or overloaded. Please try again in a few moments.";
        }
      }
      setError(errorMessageText);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModeWrapper mode={mode}>
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={promptPlaceholder}
        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors"
        rows={4}
      />
      <Button onClick={handleGenerate} disabled={isLoading} className="w-full mt-4">
        {isLoading ? <><Settings className="animate-spin mr-2" /> Generating...</> : buttonText}
      </Button>
      
      {isOffline && (
        <p className="text-xs text-amber-500 mt-2 text-center flex items-center justify-center gap-2">
            <WifiOff size={14} /> You are currently offline. Responses are generated from a local knowledge base.
        </p>
      )}

      {error && (
        <Alert variant="destructive" className="mt-6 text-left">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="mt-6 w-full">
        {isLoading && (
          <Card className="w-full h-64 bg-muted/50 flex items-center justify-center animate-pulse">
            <mode.icon className="h-16 w-16 text-muted-foreground" />
          </Card>
        )}
        {resultText && !isLoading && (
          <Card className="text-left">
            <CardHeader>
              <CardTitle>{resultTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap leading-relaxed font-sans">{resultText}</pre>
            </CardContent>
          </Card>
        )}
      </div>
    </ModeWrapper>
  );
}
