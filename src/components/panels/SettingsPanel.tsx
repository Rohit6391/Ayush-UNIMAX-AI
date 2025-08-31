
"use client";

import { useModes, HistoryItem } from "@/components/providers/ModeProvider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Moon, Sun, BarChart3, BrainCircuit, MemoryStick, Trash2, Plus } from "lucide-react";
import { useTheme } from "next-themes";
import { modes } from "@/lib/modes";
import { ScrollArea } from "../ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { useMemory, Memory } from "@/providers/MemoryProvider";
import { formatDistanceToNow } from 'date-fns';
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { Input } from "../ui/input";

const getIconForType = (type: HistoryItem['type']) => {
    const mode = modes.find(m => m.id === type);
    return mode ? mode.icon : BrainCircuit;
};

const HistoryCard = ({ item }: { item: HistoryItem }) => {
    const { setActiveMode } = useModes();
    const Icon = getIconForType(item.type);
    const mode = modes.find(m => m.id === item.type);

    const renderThumbnail = () => {
        if (typeof item.data === 'string' && item.data.startsWith('data:image')) {
            return <img src={item.data} alt={item.prompt} className="w-full h-full object-cover"/>
        }
        return <Icon className="w-6 h-6 text-muted-foreground" />;
    }

    return (
        <button 
            onClick={() => {
                if (mode) setActiveMode(mode.id);
            }}
            className="w-full text-left"
        >
            <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex-row items-center gap-3 space-y-0 p-3">
                     <div className="w-10 h-10 flex-shrink-0 bg-muted rounded-md flex items-center justify-center overflow-hidden">
                        {renderThumbnail()}
                    </div>
                    <div>
                        <p className="text-sm font-semibold leading-tight line-clamp-2">{item.prompt}</p>
                         <p className="text-xs text-muted-foreground mt-1">{mode?.name}</p>
                    </div>
                </CardHeader>
            </Card>
        </button>
    )
};

const MemoryManager = () => {
    const { memories, addMemory, deleteMemory } = useMemory();
    const [newMemory, setNewMemory] = useState("");

    const handleAddMemory = () => {
        if (newMemory.trim()) {
            addMemory(newMemory.trim());
            setNewMemory("");
        }
    };

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Textarea 
                    placeholder="Add a new memory or fact..." 
                    value={newMemory}
                    onChange={(e) => setNewMemory(e.target.value)}
                    className="bg-background"
                />
                <Button onClick={handleAddMemory} className="w-full">
                    <Plus className="mr-2" /> Add Memory
                </Button>
            </div>
            <div className="space-y-3">
                 {memories.length > 0 ? (
                    memories.map(memory => (
                        <div key={memory.id} className="text-left p-3 rounded-lg bg-muted/50 flex items-start justify-between gap-2">
                            <div className="flex-1">
                                <p className="text-sm">{memory.text}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {formatDistanceToNow(new Date(memory.timestamp), { addSuffix: true })}
                                </p>
                            </div>
                            <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => deleteMemory(memory.id)}>
                                <Trash2 size={16}/>
                            </Button>
                        </div>
                    ))
                 ) : (
                    <p className="text-center text-sm text-muted-foreground py-4">No memories saved yet.</p>
                 )}
            </div>
        </div>
    )
}


export function SettingsPanel() {
  const { isSettingsPanelOpen, setIsSettingsPanelOpen, history, setActiveMode } = useModes();
  const { theme, setTheme } = useTheme();

  const recentHistory = history.slice(0, 20);

  return (
    <Sheet open={isSettingsPanelOpen} onOpenChange={setIsSettingsPanelOpen}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Dashboard & Settings</SheetTitle>
          <SheetDescription>
            Manage your AI's memory, view creations, and customize your experience.
          </SheetDescription>
        </SheetHeader>
        <Tabs defaultValue="creations" className="flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full grid-cols-3 shrink-0">
            <TabsTrigger value="creations">Creations</TabsTrigger>
            <TabsTrigger value="memory">Memory</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-1 -mx-6 mt-4">
            <div className="px-6 pb-6">
                <TabsContent value="creations">
                    {recentHistory.length > 0 ? (
                        <div className="grid grid-cols-1 gap-3">
                            {recentHistory.map(item => (
                                <HistoryCard key={item.id} item={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 text-sm text-muted-foreground">
                            <BrainCircuit className="h-12 w-12 mx-auto opacity-30 mb-2"/>
                            No creations yet. Start using a mode to see your work here.
                        </div>
                    )}
                </TabsContent>
                <TabsContent value="memory">
                    <MemoryManager />
                </TabsContent>
                <TabsContent value="settings">
                    <div className="space-y-6">
                         <div>
                            <h3 className="text-sm font-medium mb-2">Theme</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <Button variant={theme === 'light' ? 'default' : 'outline'} onClick={() => setTheme('light')}>
                                    <Sun className="mr-2 h-4 w-4" />
                                    Light
                                </Button>
                                <Button variant={theme === 'dark' ? 'default' : 'outline'} onClick={() => setTheme('dark')}>
                                    <Moon className="mr-2 h-4 w-4" />
                                    Dark
                                </Button>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
