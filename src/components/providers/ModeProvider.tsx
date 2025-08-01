
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { type ModeId } from '@/lib/modes';
import { useAuth } from './AuthProvider';

export interface HistoryItem {
  id: number;
  type: ModeId;
  prompt: string;
  data: any;
  date: Date;
  fullConversation?: any[];
}

interface ModeContextType {
  activeMode: ModeId;
  setActiveMode: (mode: ModeId) => void;
  isHistoryPanelOpen: boolean;
  setIsHistoryPanelOpen: (isOpen: boolean | ((isOpen: boolean) => boolean)) => void;
  isSettingsPanelOpen: boolean;
  setIsSettingsPanelOpen: (isOpen: boolean | ((isOpen: boolean) => boolean)) => void;
  history: HistoryItem[];
  addHistoryItem: (type: ModeId, prompt: string, data: any, fullConversation?: any[]) => void;
  clearHistory: () => void;
  loadHistoryItem: (item: HistoryItem) => void;
  activeChat: any[];
  setActiveChat: (chat: any[]) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [activeMode, setActiveMode] = useState<ModeId>('chat');
  const [isHistoryPanelOpen, setIsHistoryPanelOpen] = useState(false);
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [activeChat, setActiveChat] = useState<any[]>([]);

  // Use user's UID for localStorage key, or a generic key for guests.
  const historyKey = user ? `history_${user.uid}` : 'history_guest';

  useEffect(() => {
    const loadHistory = () => {
        try {
            const localHistory = localStorage.getItem(historyKey);
            if (localHistory) {
                const parsedHistory = JSON.parse(localHistory).map((item: any) => ({
                    ...item,
                    date: new Date(item.date) 
                }));
                setHistory(parsedHistory.sort((a: HistoryItem, b: HistoryItem) => b.date.getTime() - a.date.getTime()));
            } else {
                setHistory([]);
            }
        } catch (e) {
            console.error("Failed to load or parse history from localStorage", e);
            setHistory([]);
        }
    };
    loadHistory();
  }, [user, historyKey]);
  

  const addHistoryItem = async (type: ModeId, prompt: string, data: any, fullConversation?: any[]) => {
    const newHistoryItem: HistoryItem = { id: Date.now(), type, prompt, data, date: new Date(), fullConversation };
    
    const updatedHistory = [newHistoryItem, ...history];
    setHistory(updatedHistory);

    try {
        // Save to local storage
        localStorage.setItem(historyKey, JSON.stringify(updatedHistory));
    } catch (e: any) {
        console.error("Failed to save history:", e);
        // If it fails (e.g., QuotaExceededError), prune the history to make space.
        if (e.name === 'QuotaExceededError') {
            const prunedHistory = updatedHistory.slice(0, 50); // Keep only the 50 most recent items
            localStorage.setItem(historyKey, JSON.stringify(prunedHistory));
        }
    }
  };
  
  const clearHistory = async () => {
    setHistory([]);
    localStorage.removeItem(historyKey);
    setIsHistoryPanelOpen(false);
  };

  const loadHistoryItem = (item: HistoryItem) => {
    setActiveMode(item.type);
    if (item.type === 'chat' && item.fullConversation) {
      setActiveChat(item.fullConversation);
    } else {
      setActiveChat([]);
    }
    // Add logic for other types if they need to restore state from `item.data`
    setIsHistoryPanelOpen(false);
  };
  
  useEffect(() => {
    const handleModeChange = () => {
        if (activeMode !== 'chat') {
            setActiveChat([]);
        }
    };
    handleModeChange();
  }, [activeMode]);


  const value = {
    activeMode,
    setActiveMode,
    isHistoryPanelOpen,
    setIsHistoryPanelOpen,
    isSettingsPanelOpen,
    setIsSettingsPanelOpen,
    history,
    addHistoryItem,
    clearHistory,
    loadHistoryItem,
    activeChat,
    setActiveChat,
  };

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};

export const useModes = () => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useModes must be used within a ModeProvider');
  }
  return context;
};
