
"use client";

import { useModes, HistoryItem } from '@/components/providers/ModeProvider';
import { useAuth } from './providers/AuthProvider';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { modes } from '@/lib/modes';
import { formatDistanceToNow } from 'date-fns';
import { Button } from './ui/button';
import { BrainCircuit, MessageSquare, PlusCircle } from 'lucide-react';
import { ChatInterface } from './modes/ChatInterface';

const getIconForType = (type: HistoryItem['type']) => {
    const mode = modes.find(m => m.id === type);
    return mode ? mode.icon : BrainCircuit;
};

export function DashboardHome() {
    const { history, setActiveMode, activeChat, setActiveChat } = useModes();
    const { user } = useAuth();
    
    // Only take the most recent 10 items to display
    const recentHistory = history.slice(0, 10);
    
    const HistoryCard = ({ item }: { item: HistoryItem }) => {
        const Icon = getIconForType(item.type);
        const mode = modes.find(m => m.id === item.type);

        const renderThumbnail = () => {
            if (typeof item.data === 'string' && item.data.startsWith('data:image')) {
                return <img src={item.data} alt={item.prompt} className="w-full h-full object-cover"/>
            }
            return <Icon className="w-8 h-8 text-muted-foreground" />;
        }

        return (
            <button 
                onClick={() => {
                    if (mode) setActiveMode(mode.id);
                }}
                className="w-full h-full text-left"
            >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex-row items-start gap-4 space-y-0">
                         <div className="w-12 h-12 flex-shrink-0 bg-muted rounded-md flex items-center justify-center overflow-hidden">
                            {renderThumbnail()}
                        </div>
                        <div>
                            <CardTitle className="text-base font-semibold leading-tight line-clamp-2">{item.prompt}</CardTitle>
                             <p className="text-xs text-muted-foreground mt-1">{mode?.name}</p>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex items-end">
                        <p className="text-xs text-muted-foreground">{formatDistanceToNow(item.date, { addSuffix: true })}</p>
                    </CardContent>
                </Card>
            </button>
        )
    };

    return (
        <div className="flex h-full">
            <div className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-2xl md:text-3xl font-bold font-headline text-foreground">
                            Welcome back, {user?.displayName?.split(' ')[0] || 'friend'}!
                        </h1>
                        <p className="text-muted-foreground mt-1 mb-8">What will you create today?</p>
                        
                        {recentHistory.length > 0 ? (
                            <div>
                                <h2 className="text-lg font-semibold mb-4">Recent Creations</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                    {recentHistory.map(item => (
                                        <HistoryCard key={item.id} item={item} />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-16 border-2 border-dashed rounded-lg">
                                <BrainCircuit className="h-16 w-16 mx-auto text-muted-foreground opacity-50" />
                                <h3 className="mt-4 text-lg font-semibold">Your dashboard is empty</h3>
                                <p className="text-muted-foreground mt-1">Start creating by selecting a mode from the sidebar.</p>
                            </div>
                        )}

                        <div className="mt-12">
                            <h2 className="text-lg font-semibold mb-4">Start a new conversation</h2>
                             <Card>
                                <CardContent className="p-0">
                                   <div className="h-[60vh] relative">
                                        <ChatInterface 
                                            mode={modes.find(m => m.id === 'chat')} 
                                            initialMessages={activeChat}
                                            setInitialMessages={setActiveChat}
                                        />
                                   </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
