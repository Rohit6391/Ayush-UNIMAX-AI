
"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Loader2, AlertTriangle, Send, Check, X, Award } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { analyzeStudyMaterial, MCQ } from '@/ai/flows/study-material-analyzer';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export function StudyMaterialAnalyzer({ mode }: { mode: any }) {
    const { addHistoryItem, model } = useModes();
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [mcqs, setMcqs] = useState<MCQ[]>([]);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [results, setResults] = useState<{ score: number; total: number } | null>(null);

    const handleAnalyze = async () => {
        if (!url.trim()) {
            setError('Please enter a URL for the study material.');
            return;
        }
        setIsLoading(true);
        setError('');
        setMcqs([]);
        setAnswers({});
        setResults(null);
        
        try {
            const result = await analyzeStudyMaterial({ materialUrl: url });
            if (result.questions.length > 0) {
                setMcqs(result.questions);
                addHistoryItem('study_material_analyzer', `Analyze: ${url}`, result.questions);
            } else {
                setError("The AI couldn't generate any questions from the provided material. Please try a different link.");
            }
        } catch (err: any) {
            setError(`Failed to analyze material: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleSubmit = () => {
        let score = 0;
        mcqs.forEach(mcq => {
            if (answers[mcq.id] === mcq.correct_option) {
                score++;
            }
        });
        setResults({ score, total: mcqs.length });
    };

    return (
        <ModeWrapper mode={mode}>
            <div className="flex w-full gap-2">
                <Input 
                    value={url} 
                    onChange={e => setUrl(e.target.value)} 
                    placeholder="e.g., https://en.wikipedia.org/wiki/Roman_Empire"
                    className="flex-grow bg-background border-2 border-input focus:border-primary focus:ring-0"
                />
                <Button onClick={handleAnalyze} disabled={isLoading}>
                    {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
                </Button>
            </div>
            
            {error && (
                <Alert variant="destructive" className="mt-6 text-left">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="mt-6 w-full text-left">
                {isLoading && (
                    <Card className="w-full h-64 bg-muted/50 flex flex-col items-center justify-center animate-pulse">
                        <GraduationCap className="h-16 w-16 text-muted-foreground" />
                        <p className="mt-4 text-muted-foreground">Analyzing material and building your quiz...</p>
                    </Card>
                )}
                {mcqs.length > 0 && !isLoading && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Interactive Quiz</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {mcqs.map((mcq, index) => (
                                    <div key={mcq.id} className="p-4 border rounded-lg">
                                        <p className="font-semibold mb-3">{index + 1}. {mcq.question}</p>
                                        <RadioGroup 
                                            value={answers[mcq.id]}
                                            onValueChange={(value) => handleAnswerChange(mcq.id, value)}
                                            disabled={!!results}
                                        >
                                            {mcq.options.map((option, i) => (
                                                <div key={i} className="flex items-center space-x-2">
                                                    <RadioGroupItem value={option} id={`${mcq.id}-${i}`} />
                                                    <Label htmlFor={`${mcq.id}-${i}`}>{option}</Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                        {results && (
                                            <div className={`mt-3 text-sm flex items-center ${answers[mcq.id] === mcq.correct_option ? 'text-green-600' : 'text-red-600'}`}>
                                                {answers[mcq.id] === mcq.correct_option ? <Check className="mr-2 h-4 w-4"/> : <X className="mr-2 h-4 w-4" />}
                                                Correct Answer: {mcq.correct_option}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {!results ? (
                                <Button onClick={handleSubmit} className="w-full mt-6" disabled={Object.keys(answers).length !== mcqs.length}>
                                    Submit Answers
                                </Button>
                            ) : (
                                <div className="mt-8 text-center p-6 bg-accent/20 rounded-lg">
                                    <Award className="h-12 w-12 mx-auto text-accent" />
                                    <h3 className="text-2xl font-bold mt-2">Quiz Complete!</h3>
                                    <p className="text-4xl font-bold my-2">{results.score} / {results.total}</p>
                                    <Button onClick={() => { setMcqs([]); setUrl(''); }} variant="outline" className="mt-4">
                                        Start a New Quiz
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
}
