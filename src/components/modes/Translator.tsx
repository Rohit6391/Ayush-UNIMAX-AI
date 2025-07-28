"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Globe, AlertTriangle } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { translateText } from '@/ai/flows/translate-text-ai';

const languages = ["English", "French", "Spanish", "German", "Japanese", "Hindi", "Russian", "Chinese", "Italian", "Portuguese", "Arabic", "Korean", "Turkish"];

export function Translator({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('French');
    const [isLoading, setIsLoading] = useState(false);
    const [translation, setTranslation] = useState('');
    const [error, setError] = useState('');

    const handleTranslate = async () => {
        if (!text.trim()) { setError('Please enter text to translate.'); return; }
        setIsLoading(true); setTranslation(''); setError('');
        
        try {
            const result = await translateText({ text, language });
            setTranslation(result.translation);
            addHistoryItem('translator', `Translate to ${language}: ${text.substring(0, 40)}...`, result.translation);
        } catch (err: any) {
            setError(`Translation failed: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ModeWrapper mode={mode}>
            <Textarea 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Enter text to translate..." 
                className="w-full h-32 bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-y transition-colors" 
            />
            <div className="flex items-center gap-2 mt-4">
                <span className="font-semibold text-sm">Translate to:</span>
                <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                        {languages.map(lang => <SelectItem key={lang} value={lang}>{lang}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
            <Button onClick={handleTranslate} disabled={isLoading} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Translating...</> : 'Translate'}
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
                    <Card className="w-full h-32 bg-muted/50 flex items-center justify-center animate-pulse">
                        <Globe className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {translation && !isLoading && (
                    <Card className="text-left">
                        <CardHeader>
                            <CardTitle>Translation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="whitespace-pre-wrap leading-relaxed">{translation}</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
};
