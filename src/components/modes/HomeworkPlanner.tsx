"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { School, Plus, Trash2, BrainCircuit, Loader2, AlertTriangle } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { useModes } from '@/components/providers/ModeProvider';
import { createDocumentFromPrompt } from '@/ai/flows/create-document-from-prompt';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export function HomeworkPlanner({ mode }: { mode: any }) {
    const { addHistoryItem } = useModes();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [aiHelp, setAiHelp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleToggleTask = (id: number) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleGetHelp = async (task: Task) => {
        setSelectedTask(task);
        setAiHelp('');
        setError('');
        setIsLoading(true);

        const prompt = `Provide a helpful and detailed answer to the following homework question, in the same language as the question. Question: "${task.text}"`;
        try {
            const result = await createDocumentFromPrompt({ prompt });
            setAiHelp(result.document);
            addHistoryItem('homework_helper', task.text, result.document);
        } catch (err: any) {
            setError(`Failed to get help: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ModeWrapper mode={mode}>
            <div className="flex gap-2">
                <Input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleAddTask(); }}
                    placeholder="e.g., Solve for x in 2x + 5 = 15"
                    className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 transition-colors"
                />
                <Button onClick={handleAddTask}><Plus /></Button>
            </div>
            
            <Card className="mt-6 text-left">
                <CardHeader>
                    <CardTitle>My Assignments</CardTitle>
                </CardHeader>
                <CardContent>
                    {tasks.length > 0 ? (
                        <div className="space-y-4">
                            {tasks.map(task => (
                                <div key={task.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Checkbox
                                            id={`task-${task.id}`}
                                            checked={task.completed}
                                            onCheckedChange={() => handleToggleTask(task.id)}
                                        />
                                        <Label htmlFor={`task-${task.id}`} className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                                            {task.text}
                                        </Label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Button size="sm" variant="outline" onClick={() => handleGetHelp(task)}>
                                            <BrainCircuit className="mr-2 h-4 w-4" /> Get Help
                                        </Button>
                                         <Button size="icon" variant="ghost" className="text-destructive h-8 w-8" onClick={() => handleDeleteTask(task.id)}>
                                            <Trash2 size={16} />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-muted-foreground py-6">
                            <School className="h-10 w-10 mx-auto opacity-50 mb-2" />
                            No assignments yet. Add one above to get started.
                        </div>
                    )}
                </CardContent>
            </Card>

            {selectedTask && (
                <Dialog open={!!selectedTask} onOpenChange={(open) => { if (!open) setSelectedTask(null) }}>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>AI Homework Help</DialogTitle>
                            <DialogDescription className="pt-2">{selectedTask.text}</DialogDescription>
                        </DialogHeader>
                        <div className="my-4 max-h-[60vh] overflow-y-auto pr-4">
                            {isLoading ? (
                                <div className="flex items-center justify-center h-40">
                                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                </div>
                            ) : error ? (
                                <Alert variant="destructive">
                                    <AlertTriangle className="h-4 w-4" />
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            ) : (
                                <pre className="whitespace-pre-wrap font-sans leading-relaxed">{aiHelp}</pre>
                            )}
                        </div>
                         <DialogFooter>
                            <Button variant="outline" onClick={() => setSelectedTask(null)}>Close</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}

        </ModeWrapper>
    );
}
