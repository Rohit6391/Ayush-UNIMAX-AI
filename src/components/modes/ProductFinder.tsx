
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Settings, AlertTriangle, LinkIcon } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { productFinder, ProductFinderOutput } from '@/ai/flows/product-finder';

export function ProductFinder({ mode }: { mode: any }) {
    const { addHistoryItem, model } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<ProductFinderOutput['suggestions'] | null>(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!prompt.trim()) {
            setError('Please enter a product name.');
            return;
        }
        setIsLoading(true);
        setResults(null);
        setError('');
        
        try {
            const searchResult = await productFinder({ productName: prompt });
            if (searchResult.suggestions && searchResult.suggestions.length > 0) {
                setResults(searchResult.suggestions);
                addHistoryItem('product_finder', prompt, searchResult);
            } else {
                setError("Sorry, I couldn't find any stores for that product.");
            }
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
                     onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
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
                {results && !isLoading && (
                    <Card className="text-left">
                        <CardHeader>
                            <CardTitle>Where to Buy '{prompt}'</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                           {results.map((result, index) => (
                             <a key={index} href={result.websiteUrl} target="_blank" rel="noopener noreferrer" className="block">
                                <Button className="w-full h-12 text-lg justify-start" variant="outline">
                                    <LinkIcon className="mr-3"/>
                                    {result.websiteName}
                                </Button>
                            </a>
                           ))}
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
};

    
