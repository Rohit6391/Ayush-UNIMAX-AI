"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useModes } from '@/components/providers/ModeProvider';
import { Settings, AlertTriangle, ArrowRightLeft, Loader2, Copy, Check, FileUp } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { translateText } from '@/ai/flows/translate-text-ai';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { languages } from '@/lib/languages';


export function Translator({ mode }: { mode: any }) {
    const { addHistoryItem, model } = useModes();
    const [text, setText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('Auto-detect');
    const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null);
    const [targetLanguage, setTargetLanguage] = useState('French');
    const [isLoading, setIsLoading] = useState(false);
    const [translation, setTranslation] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);
    
    // For file input
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setText(''); // Clear text when file is selected
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setPreviewUrl(result);
                handleTranslate(undefined, result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };


    const handleTranslate = async (currentText?: string, fileDataUri?: string) => {
        const textToTranslate = currentText ?? text;
        const fileToTranslate = fileDataUri ?? (file ? previewUrl : undefined);

        if (!textToTranslate.trim() && !fileToTranslate) { return; }

        setIsLoading(true); 
        setTranslation(''); 
        setError('');
        
        try {
            const result = await translateText({ 
                text: textToTranslate, 
                targetLanguage,
                sourceLanguage: sourceLanguage === 'Auto-detect' ? undefined : sourceLanguage,
                fileDataUri: fileToTranslate as string,
                model
            });

            setTranslation(result.translation);
            
            // If text was extracted from a file, update the input text area
            if (result.extractedText) {
                setText(result.extractedText);
            }
            // If the source language was auto-detected, update the state
            if (result.detectedSourceLanguage) {
                // Find the language name that matches the detected code for display
                const detectedLangName = languages.find(lang => lang.toLowerCase().includes(result.detectedSourceLanguage!.toLowerCase()));
                if (detectedLangName && languages.includes(detectedLangName)) {
                     setDetectedLanguage(detectedLangName);
                } else {
                     setDetectedLanguage(result.detectedSourceLanguage);
                }
            } else {
                setDetectedLanguage(null);
            }

            addHistoryItem('translator', `Translate to ${targetLanguage}: ${textToTranslate.substring(0, 40)}...`, result.translation);
        } catch (err: any) {
            setError(`Translation failed: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleSwap = () => {
        const langToSwap = detectedLanguage || sourceLanguage;
        if (translation && langToSwap !== 'Auto-detect' && languages.includes(targetLanguage) && languages.includes(langToSwap)) {
            setSourceLanguage(targetLanguage);
            setTargetLanguage(langToSwap);
            setText(translation);
            setTranslation('');
            setDetectedLanguage(null);
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

    const resetInputs = () => {
        setText('');
        setFile(null);
        setPreviewUrl(null);
        setTranslation('');
        setError('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }
    
    const effectiveSourceLanguage = detectedLanguage || sourceLanguage;

    return (
        <ModeWrapper mode={mode}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
                {/* Input Panel */}
                <div className="flex flex-col gap-2">
                     <Select value={sourceLanguage} onValueChange={(val) => { setSourceLanguage(val); setDetectedLanguage(null); }}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Auto-detect">Auto-detect {detectedLanguage ? `(${detectedLanguage})` : ''}</SelectItem>
                            {languages.map(lang => <SelectItem key={`src-${lang}`} value={lang}>{lang}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <div className="relative flex-1 bg-background rounded-lg border">
                         <Tabs defaultValue="text" className="h-full flex flex-col" onValueChange={resetInputs}>
                            <TabsList className="m-2 grid grid-cols-2">
                                <TabsTrigger value="text">Text</TabsTrigger>
                                <TabsTrigger value="file">Documents</TabsTrigger>
                            </TabsList>
                            <TabsContent value="text" className="flex-1 m-2 mt-0">
                                <Textarea 
                                    value={text} 
                                    onChange={(e) => setText(e.target.value)} 
                                    placeholder="Enter text to translate..." 
                                    className="w-full h-full border-none focus:ring-0 resize-none p-3"
                                />
                            </TabsContent>
                             <TabsContent value="file" className="flex-1 flex flex-col items-center justify-center p-4">
                                <div 
                                    onClick={() => fileInputRef.current?.click()} 
                                    className="w-full h-full border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50"
                                >
                                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".txt,.pdf,.png,.jpeg,.webp" />
                                    {previewUrl && file?.type.startsWith('image/') ? (
                                        <img src={previewUrl} alt="Upload preview" className="max-h-full max-w-full p-2 object-contain" />
                                    ) : (
                                        <>
                                            <FileUp className="h-10 w-10 text-muted-foreground" />
                                            <p className="mt-2 text-sm text-muted-foreground">
                                                {file ? file.name : 'Upload an image or document'}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                {/* Output Panel */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                         <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                                {languages.map(lang => <SelectItem key={`tgt-${lang}`} value={lang}>{lang}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <Button variant="ghost" size="icon" onClick={handleSwap} title="Swap languages" disabled={!translation || effectiveSourceLanguage === 'Auto-detect'}>
                            <ArrowRightLeft className="h-5 w-5" />
                        </Button>
                    </div>
                    <div className="relative w-full h-48 md:h-[calc(100%-48px)] bg-muted/50 rounded-lg p-3 text-left overflow-auto">
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
             <Button onClick={() => handleTranslate()} disabled={isLoading || (!text.trim() && !file)} className="w-full mt-6">
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
