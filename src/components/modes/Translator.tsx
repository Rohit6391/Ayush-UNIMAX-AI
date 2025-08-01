"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Globe, AlertTriangle, ArrowRightLeft, Loader2, Copy, Check, Mic, FileUp } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { translateText } from '@/ai/flows/translate-text-ai';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const languages = [
    "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani", "Basque", "Belarusian", "Bengali", "Bosnian",
    "Bulgarian", "Catalan", "Cebuano", "Chinese (Simplified)", "Chinese (Traditional)", "Corsican", "Croatian", "Czech",
    "Danish", "Dutch", "English", "Esperanto", "Estonian", "Finnish", "French", "Frisian", "Galician", "Georgian",
    "German", "Greek", "Gujarati", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hmong", "Hungarian",
    "Icelandic", "Igbo", "Indonesian", "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer",
    "Kinyarwanda", "Korean", "Kurdish", "Kyrgyz", "Lao", "Latin", "Latvian", "Lithuanian", "Luxembourgish", "Macedonian",
    "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Mongolian", "Myanmar (Burmese)", "Nepali",
    "Norwegian", "Nyanja (Chichewa)", "Odia (Oriya)", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi",
    "Romanian", "Russian", "Samoan", "Scots Gaelic", "Serbian", "Sesotho", "Shona", "Sindhi", "Sinhala (Sinhalese)",
    "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog (Filipino)", "Tajik",
    "Tamil", "Tatar", "Telugu", "Thai", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uyghur", "Uzbek", "Vietnamese",
    "Welsh", "Xhosa", "Yiddish", "Yoruba", "Zulu"
];


export function Translator({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [text, setText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('Auto-detect');
    const [targetLanguage, setTargetLanguage] = useState('French');
    const [isLoading, setIsLoading] = useState(false);
    const [translation, setTranslation] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);
    
    // For voice input
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<any>(null);

    // For file input
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US';
            
            recognitionRef.current.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setText(transcript);
                setIsListening(false);
                handleTranslate(transcript);
            };
            recognitionRef.current.onerror = (event: any) => {
                console.error('Speech recognition error:', event.error);
                setError(`Speech recognition failed: ${event.error}. Please check your microphone permissions.`);
                setIsListening(false);
            };
            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }
    }, []);

    const handleListen = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
        } else {
            if (!recognitionRef.current) {
                setError("Speech recognition is not supported by your browser.");
                return;
            }
            setText('');
            recognitionRef.current?.start();
            setIsListening(true);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
                handleTranslate(undefined, reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };


    const handleTranslate = async (inputText?: string, fileDataUri?: string) => {
        const currentText = inputText ?? text;
        if (!currentText.trim() && !fileDataUri) { return; }

        setIsLoading(true); 
        setTranslation(''); 
        setError('');
        
        try {
            const result = await translateText({ 
                text: currentText, 
                targetLanguage,
                sourceLanguage: sourceLanguage === 'Auto-detect' ? undefined : sourceLanguage,
                fileDataUri: fileDataUri
            });
            setTranslation(result.translation);
            // If text was extracted, update the input text area
            if (result.extractedText) {
                setText(result.extractedText);
            }
            addHistoryItem('translator', `Translate to ${targetLanguage}: ${currentText.substring(0, 40)}...`, result.translation);
        } catch (err: any) {
            setError(`Translation failed: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleSwap = () => {
        if (translation && sourceLanguage !== 'Auto-detect') {
            const oldSource = sourceLanguage;
            setSourceLanguage(targetLanguage);
            setTargetLanguage(oldSource);
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

    return (
        <ModeWrapper mode={mode}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
                {/* Input Panel */}
                <div className="flex flex-col gap-2">
                    <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Auto-detect">Auto-detect</SelectItem>
                            {languages.map(lang => <SelectItem key={`src-${lang}`} value={lang}>{lang}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <div className="relative flex-1 bg-background rounded-lg border">
                         <Tabs defaultValue="text" className="h-full flex flex-col" onValueChange={resetInputs}>
                            <TabsList className="m-2">
                                <TabsTrigger value="text">Text</TabsTrigger>
                                <TabsTrigger value="voice">Voice</TabsTrigger>
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
                             <TabsContent value="voice" className="flex-1 flex flex-col items-center justify-center gap-4 p-4">
                                <Button onClick={handleListen} size="icon" className={`h-20 w-20 rounded-full ${isListening ? 'bg-red-500 hover:bg-red-600' : ''}`}>
                                    <Mic size={40} />
                                </Button>
                                <p className="text-muted-foreground">{isListening ? 'Listening...' : 'Tap microphone to start'}</p>
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
                    <div className="flex items-center justify-between">
                         <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                                {languages.map(lang => <SelectItem key={`tgt-${lang}`} value={lang}>{lang}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <Button variant="ghost" size="icon" onClick={handleSwap} title="Swap languages" disabled={!translation || sourceLanguage === 'Auto-detect'}>
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
