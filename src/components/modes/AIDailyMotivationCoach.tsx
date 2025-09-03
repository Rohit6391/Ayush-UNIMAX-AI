"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, AlertTriangle } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The secret of getting ahead is getting started. - Mark Twain",
  "Act as if what you do makes a difference. It does. - William James",
  "Well done is better than well said. - Benjamin Franklin"
];

export function AIDailyMotivationCoach({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'I need some motivation for a tough day ahead' or 'Give me a quote about perseverance'"
            buttonText="Get Motivation"
            generatePrompt={(p: string) => {
                const randomIndex = Math.floor(Math.random() * quotes.length);
                return quotes[randomIndex];
            }}
            resultTitle="Your Daily Motivation"
        />
    );
}

// Simplified TextGenerator for UI
function TextGenerator({ mode, promptPlaceholder, buttonText, generatePrompt, resultTitle }: any) {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultText, setResultText] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setIsLoading(true);
    setResultText('');
    setError('');

    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 250));
    
    try {
      const generatedText = generatePrompt(prompt);
      setResultText(generatedText);
    } catch (err: any) {
      setError("Failed to generate motivation.");
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
