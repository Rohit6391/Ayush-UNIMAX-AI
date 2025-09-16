
"use client";

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { KeyRound, Plus, Loader2, ServerCrash, CheckCircle, Wand2 } from 'lucide-react';
import { addApiKey } from '@/app/actions/env';
import { useToast } from '@/hooks/use-toast';

// A pre-configured public key for the auto-generate feature.
const PRECONFIGURED_PUBLIC_KEY = "AIzaSyAfoObMQyAIyEj44MD6FJi1G6-4kcPjLgg";

export function ApiKeyManager() {
    const { toast } = useToast();
    const [apiKeyCount, setApiKeyCount] = useState(0);
    const [newApiKey, setNewApiKey] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

    useEffect(() => {
        const keys = process.env.NEXT_PUBLIC_GEMINI_API_KEYS || process.env.GEMINI_API_KEYS || '';
        const count = keys.split(',').filter(k => k.trim() !== '').length;
        setApiKeyCount(count);
    }, []);

    const handleAddKey = async () => {
        if (!newApiKey.trim()) {
            setMessage({ type: 'error', text: 'Please enter an API key.' });
            return;
        }
        setIsLoading(true);
        setMessage(null);

        const result = await addApiKey(newApiKey);

        if (result.success) {
            setNewApiKey('');
            toast({
                title: "Success!",
                description: result.message,
            });
            setApiKeyCount(prev => prev + 1);
        } else {
            setMessage({ type: 'error', text: result.error || 'An unknown error occurred.' });
        }
        setIsLoading(false);
    };

    const handleAutoGenerate = () => {
        setNewApiKey(PRECONFIGURED_PUBLIC_KEY);
        toast({
            title: "Public Key Generated",
            description: "The public API key has been added to the input field. Click 'Add Key' to save it.",
        });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>API Key Manager</CardTitle>
                <CardDescription>
                    Manage your Google AI API keys. Add new keys to rotate them and avoid rate limits.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2">
                        <KeyRound className="text-primary" />
                        <span className="font-semibold">Active Keys:</span>
                    </div>
                    <span className="font-mono text-lg font-bold">{apiKeyCount}</span>
                </div>

                <div className="space-y-2">
                    <div className="flex gap-2">
                        <Input
                            placeholder="Paste new API key here"
                            value={newApiKey}
                            onChange={(e) => setNewApiKey(e.target.value)}
                            disabled={isLoading}
                        />
                        <Button onClick={handleAddKey} disabled={isLoading}>
                            {isLoading ? <Loader2 className="animate-spin" /> : <Plus />}
                            <span className="sr-only">Add Key</span>
                        </Button>
                    </div>
                     <Button variant="outline" onClick={handleAutoGenerate} className="w-full">
                        <Wand2 className="mr-2 h-4 w-4" />
                        Auto-Generate a Public Key
                    </Button>
                     <p className="text-xs text-muted-foreground px-1">
                        This provides a temporary, public key with shared usage limits.
                    </p>
                    {message && (
                        <Alert variant={message.type === 'error' ? 'destructive' : 'default'}>
                            {message.type === 'error' ? <ServerCrash className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
                            <AlertTitle>{message.type === 'error' ? 'Error' : 'Success'}</AlertTitle>
                            <AlertDescription>{message.text}</AlertDescription>
                        </Alert>
                    )}
                </div>
                 <Alert>
                    <KeyRound className="h-4 w-4" />
                    <AlertTitle>How to get unlimited keys?</AlertTitle>
                    <AlertDescription>
                        You can get free, personal API keys from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Google AI Studio</a>.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
    );
}
