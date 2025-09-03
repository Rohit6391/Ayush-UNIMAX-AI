"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, AlertTriangle } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "What do you call a fake noodle? An Impasta!",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
  "Why did the bicycle fall over? Because it was two tired!",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "I would tell you a joke about construction, but I'm still working on it."
];

export function AIJokeWriter({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [resultText, setResultText] = useState('');
    const [error, setError] = useState('');

    const handleGenerate = () => {
        setIsLoading(true);
        setResultText('');
        setError('');
        
        try {
            const randomIndex = Math.floor(Math.random() * jokes.length);
            const randomJoke = jokes[randomIndex];
            setResultText(randomJoke);
            addHistoryItem(mode.id, prompt || `A joke about ${prompt}`, randomJoke);
        } catch (err: any) {
            setError("Failed to generate joke.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Give me a topic for a joke."
            buttonText="Generate Joke"
            generatePrompt={(prompt) => `Write a joke about: "${prompt}"`}
            resultTitle="Generated Joke"
        />
    );
}

// Re-using TextGenerator for UI, but the logic is self-contained above.
// This is a simplified version of TextGenerator to show UI structure.
function TextGenerator({ mode, promptPlaceholder, buttonText, resultTitle }: any) {
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
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomIndex];
        setResultText(randomJoke);
    } catch (err: any) {
        setError("Failed to generate joke.");
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
