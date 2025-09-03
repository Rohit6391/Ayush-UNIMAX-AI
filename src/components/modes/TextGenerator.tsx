
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { createDocumentFromPrompt } from '@/ai/flows/create-document-from-prompt';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, AlertTriangle } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt.');
      return;
    }
    setIsLoading(true);
    setResultText('');
    setError('');
    
    try {
      let result;
      if (flow) {
        result = await flow({ prompt });
        const resultKey = Object.keys(result)[0];
        setResultText(result[resultKey]);
      } else if (generatePrompt) {
        const fullPrompt = generatePrompt(prompt);
        result = await createDocumentFromPrompt({ prompt: fullPrompt, model });
        setResultText(result.document);
      } else {
        throw new Error("No generation logic provided.");
      }
      
      addHistoryItem(mode.id, prompt, resultText);

    } catch (err: any) {
        let errorMessageText = `Failed to generate: ${err.message}`;
        if (err.message && (err.message.includes('429') || err.message.toLowerCase().includes('quota'))) {
            errorMessageText = "You have exceeded your daily API quota. Please check your plan and billing details, or try again tomorrow.";
        } else if (err.message && (err.message.includes('503') || err.message.toLowerCase().includes('overloaded'))) {
            errorMessageText = "The AI model is currently busy. Please try again in a few moments.";
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
