"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, AlertTriangle } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const affirmations = [
  "I am capable of achieving my goals.",
  "I choose to be happy and to love myself today.",
  "I am resilient and can overcome any challenge.",
  "I am worthy of love and respect.",
  "I am grateful for all the good in my life.",
  "I trust in my ability to make the right decisions.",
  "I am creative, and I express myself with ease.",
  "I attract positivity and abundance into my life.",
  "I am strong, confident, and courageous.",
  "I release all that no longer serves me."
];

export function AffirmationGenerator({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Affirmations for self-confidence' or 'Affirmations for a positive morning'"
            buttonText="Generate Affirmations"
            generatePrompt={(prompt: string) => {
                const results = [];
                for (let i = 0; i < 5; i++) {
                    const randomIndex = Math.floor(Math.random() * affirmations.length);
                    results.push(affirmations[randomIndex]);
                }
                return results.join('\n');
            }}
            resultTitle="Your Affirmations"
        />
    );
}

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
      setError("Failed to generate.");
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