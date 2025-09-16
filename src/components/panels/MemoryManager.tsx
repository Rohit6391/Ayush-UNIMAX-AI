
"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Brain, Plus, Loader2, Trash2, Lightbulb } from 'lucide-react';
import { useMemory } from '@/hooks/use-memory';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '../ui/scroll-area';
import { formatDistanceToNow } from 'date-fns';

export function MemoryManager() {
    const { toast } = useToast();
    const { memories, addMemory, deleteMemory } = useMemory();
    const [newMemory, setNewMemory] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAddMemory = () => {
        if (!newMemory.trim()) return;
        setIsLoading(true);
        try {
            addMemory(newMemory);
            setNewMemory('');
            toast({
                title: "Memory Saved",
                description: "The AI will now remember this information in new conversations.",
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: "Failed to save",
                description: "Could not save this memory. Please try again.",
            });
        }
        setIsLoading(false);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>AI Memory</CardTitle>
                <CardDescription>
                    Add facts for the AI to remember across conversations. This helps personalize your experience.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex gap-2">
                        <Input
                            placeholder="e.g., My name is John"
                            value={newMemory}
                            onChange={(e) => setNewMemory(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') handleAddMemory(); }}
                            disabled={isLoading}
                        />
                        <Button onClick={handleAddMemory} disabled={isLoading}>
                            {isLoading ? <Loader2 className="animate-spin" /> : <Plus />}
                            <span className="sr-only">Add Memory</span>
                        </Button>
                    </div>
                </div>

                <Alert>
                    <Lightbulb className="h-4 w-4" />
                    <AlertTitle>How does this work?</AlertTitle>
                    <AlertDescription>
                        The AI will use these facts to better understand your context in the "AI Chat" and "Fun Chat" modes.
                    </AlertDescription>
                </Alert>
                
                <Card className='mt-4'>
                    <CardHeader>
                        <CardTitle>Remembered Facts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-64">
                            {memories.length > 0 ? (
                                <div className="space-y-2">
                                    {memories.map((memory) => (
                                        <div key={memory.id} className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                                            <div className='flex flex-col'>
                                                <span className="text-sm">{memory.text}</span>
                                                <span className='text-xs text-muted-foreground'>{formatDistanceToNow(memory.timestamp, { addSuffix: true })}</span>
                                            </div>
                                            <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => deleteMemory(memory.id)}>
                                                <Trash2 size={16} />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-center text-muted-foreground py-8">No memories saved yet.</p>
                            )}
                        </ScrollArea>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    );
}
