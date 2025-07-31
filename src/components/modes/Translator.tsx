"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Globe, AlertTriangle, ArrowRightLeft, Loader2, Copy, Check } from 'lucide-react';
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
    const [copied, setCopied] = useState(false);

    const handleTranslate = async () => {
        if (!text.trim()) { return; }
        setIsLoading(true); 
        setTranslation(''); 
        setError('');
        
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
    
    const handleSwap = () => {
        if (translation) {
            setText(translation);
            setTranslation('');
        }
    };

    const handleCopy = () => {
        if (navigator.clipboard && translation) {
            navigator.clipboard.writeText(translation).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };

    return (
        <ModeWrapper mode={mode}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
                {/* Input Panel */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg text-left">Your Text</h3>
                    <div className="relative flex-1">
                        <Textarea 
                            value={text} 
                            onChange={(e) => setText(e.target.value)} 
                            placeholder="Enter text to translate..." 
                            className="w-full h-48 bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-y transition-colors"
                        />
                        <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                            {text.length} / 5000
                        </div>
                    </div>
                </div>

                {/* Output Panel */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                         <h3 className="font-semibold text-lg text-left">Translation</h3>
                         <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" onClick={handleSwap} title="Swap languages" disabled={!translation}>
                                <ArrowRightLeft className="h-5 w-5" />
                            </Button>
                            <Select value={language} onValueChange={setLanguage}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                    {languages.map(lang => <SelectItem key={lang} value={lang}>{lang}</SelectItem>)}
                                </SelectContent>
                            </Select>
                         </div>
                    </div>
                    <div className="relative w-full h-48 bg-muted/50 rounded-lg p-3 text-left overflow-auto">
                        {isLoading ? (
                            <div className="flex items-center justify-center h-full">
                                <Loader2 className="h-8 w-8 text-primary animate-spin" />
                            </div>
                        ) : translation ? (
                            <>
                                <p className="whitespace-pre-wrap">{translation}</p>
                                <Button size="icon" variant="ghost" className="absolute top-2 right-2 h-8 w-8" onClick={handleCopy}>
                                    {copied ? <Check className="h-5 w-5 text-primary" /> : <Copy className="h-5 w-5" />}
                                </Button>
                            </>
                        ) : (
                            <span className="text-muted-foreground">Translation will appear here.</span>
                        )}
                    </div>
                </div>
            </div>
             <Button onClick={handleTranslate} disabled={isLoading || !text.trim()} className="w-full mt-6">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Translating...</> : 'Translate'}
            </Button>
             {error && (
                 <Alert variant="destructive" className="mt-6 text-left">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
        </ModeWrapper>
    );
};
