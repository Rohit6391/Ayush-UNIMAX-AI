
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Settings, AlertTriangle, LinkIcon } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { shoppingAssistant, ShoppingAssistantOutput } from '@/ai/flows/shopping-assistant';

export function ShoppingAssistant({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<ShoppingAssistantOutput | null>(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!prompt.trim()) {
            setError('Please enter a product name.');
            return;
        }
        setIsLoading(true);
        setResult(null);
        setError('');
        
        try {
            const searchResult = await shoppingAssistant({ productName: prompt });
            setResult(searchResult);
            addHistoryItem('shopping_assistant', prompt, searchResult);
        } catch (err: any) {
            setError(`Failed to find a shopping link: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <ModeWrapper mode={mode}>
            <div className="flex w-full gap-2">
                <Input 
                    value={prompt} 
                    onChange={e => setPrompt(e.target.value)} 
                    placeholder="e.g., Sony WH-1000XM5 Headphones"
                    className="flex-grow bg-background border-2 border-input focus:border-primary focus:ring-0"
                />
                <Button onClick={handleSearch} disabled={isLoading}>
                    {isLoading ? <Settings className="animate-spin" /> : <ShoppingCart />}
                </Button>
            </div>
            
            {error && (
                <Alert variant="destructive" className="mt-6 text-left">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="mt-6 w-full">
                {isLoading && (
                    <Card className="w-full h-32 bg-muted/50 flex items-center justify-center animate-pulse">
                        <ShoppingCart className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {result && !isLoading && (
                    <Card className="text-left">
                        <CardHeader>
                            <CardTitle>Shopping Result</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-muted-foreground mb-4">Here's a link to buy '{prompt}':</p>
                            <a href={result.websiteUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full h-12 text-lg">
                                    <LinkIcon className="mr-2"/>
                                    Visit {result.websiteName}
                                </Button>
                            </a>
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
};
