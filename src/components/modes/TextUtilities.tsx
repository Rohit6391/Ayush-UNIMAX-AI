"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { createDocumentFromPrompt } from '@/ai/flows/create-document-from-prompt';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, AlertTriangle, Clipboard, Check } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface TextUtilitiesProps {
  mode: any;
  promptPlaceholder: string;
  buttonText: string;
  generatePrompt: (prompt: string) => string;
  resultTitle: string;
}

export function TextUtilities({ mode, promptPlaceholder, buttonText, generatePrompt, resultTitle }: TextUtilitiesProps) {
  const { addHistoryItem, model } = useModes();
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultText, setResultText] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter some text.');
      return;
    }
    setIsLoading(true);
    setResultText('');
    setError('');
    const fullPrompt = generatePrompt(prompt);
    try {
      const result = await createDocumentFromPrompt({ prompt: fullPrompt, model });
      const generatedText = result.document;
      setResultText(generatedText);
      addHistoryItem(mode.id, prompt, generatedText);
    } catch (err: any) {
      setError(`Failed to generate: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = () => {
    if (navigator.clipboard && resultText) {
        navigator.clipboard.writeText(resultText).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }
  };

  return (
    <ModeWrapper mode={mode}>
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={promptPlaceholder}
        className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors"
        rows={6}
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
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>{resultTitle}</CardTitle>
               <Button onClick={handleCopy} size="icon" variant="ghost" className="h-8 w-8">
                    {copied ? <Check size={16}/> : <Clipboard size={16}/>}
                </Button>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap leading-relaxed font-sans bg-muted/50 p-4 rounded-md">{resultText}</pre>
            </CardContent>
          </Card>
        )}
      </div>
    </ModeWrapper>
  );
}
