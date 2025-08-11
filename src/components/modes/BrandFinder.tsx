
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Settings, AlertTriangle, Crown } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { brandFinder, BrandFinderOutput } from '@/ai/flows/brand-finder';

export function BrandFinder({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<BrandFinderOutput['suggestions'] | null>(null);
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
            const searchResult = await brandFinder({ productName: prompt });
            if (searchResult.suggestions && searchResult.suggestions.length > 0) {
                setResults(searchResult.suggestions);
                addHistoryItem('brand_finder', prompt, searchResult);
            } else {
                setError("Sorry, I couldn't find any brand suggestions for that product.");
            }
        } catch (err: any) {
            setError(`Failed to find brands: ${err.message}`);
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
                    placeholder="e.g., Laptops, running shoes, coffee makers..."
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
                    <Card className="w-full h-48 bg-muted/50 flex items-center justify-center animate-pulse">
                        <Crown className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {results && !isLoading && (
                    <Card className="text-left">
                        <CardHeader>
                            <CardTitle>Top Brands for '{prompt}'</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           {results.map((result, index) => (
                             <div key={index} className="p-4 border rounded-lg bg-muted/50">
                                 <h3 className="font-bold text-lg flex items-center gap-2"><Crown className="text-primary" /> {result.brandName}</h3>
                                 <p className="text-muted-foreground mt-1">{result.reason}</p>
                             </div>
                           ))}
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
};
