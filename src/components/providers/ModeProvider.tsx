
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { type ModeId } from '@/lib/modes';
import { useAuth } from './AuthProvider';
import { ModelId, availableModels } from '@/lib/models';

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
  isAboutPanelOpen: boolean;
  setIsAboutPanelOpen: (isOpen: boolean | ((isOpen: boolean) => boolean)) => void;
  history: HistoryItem[];
  addHistoryItem: (type: ModeId, prompt: string, data: any, fullConversation?: any[]) => void;
  clearHistory: () => void;
  loadHistoryItem: (item: HistoryItem) => void;
  activeChat: any[];
  setActiveChat: (chat: any[]) => void;
  model: ModelId;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

// Modes that generate large data URIs that shouldn't be stored in localStorage
const mediaGeneratingModes: ModeId[] = [
    'photo_generator', 
    'photo_editor', 
    'video_generator',
    'sound_generator',
    'video_maker'
];

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [activeMode, setActiveMode] = useState<ModeId>('chat');
  const [isHistoryPanelOpen, setIsHistoryPanelOpen] = useState(false);
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const [isAboutPanelOpen, setIsAboutPanelOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [activeChat, setActiveChat] = useState<any[]>([]);
  const model = availableModels[0];

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
    let storableData = data;
    
    // If the mode is one that generates large data, replace it with a placeholder for storage.
    if (mediaGeneratingModes.includes(type)) {
        if (typeof data === 'string' && data.startsWith('data:')) {
            storableData = `[Media data not stored for mode: ${type}]`;
        } else if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
            // Handle complex objects that might contain data URIs, like video storyboards
            storableData = `[Complex media object not stored for mode: ${type}]`;
        }
    }

    const newHistoryItem: HistoryItem = { id: Date.now(), type, prompt, data: storableData, date: new Date(), fullConversation };
    
    // The state can hold the full data for the current session, but we'll save the pruned version.
    const updatedHistoryForState = [{...newHistoryItem, data: data}, ...history];
    setHistory(updatedHistoryForState);
    
    const updatedHistoryForStorage = [newHistoryItem, ...history];

    try {
        localStorage.setItem(historyKey, JSON.stringify(updatedHistoryForStorage));
    } catch (e: any) {
        console.error("Failed to save history:", e);
        if (e.name === 'QuotaExceededError') {
            // If still over quota, prune the history log to the most recent 20 items.
            const prunedHistory = updatedHistoryForStorage.slice(0, 20);
            localStorage.setItem(historyKey, JSON.stringify(prunedHistory));
            setHistory(prunedHistory);
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
    if ((item.type === 'chat' || item.type === 'fun_chat') && item.fullConversation) {
      setActiveChat(item.fullConversation);
    } else {
      setActiveChat([]);
    }
    setIsHistoryPanelOpen(false);
  };
  
  const handleSetActiveMode = (modeId: ModeId) => {
    // Reset chat history when switching between chat modes or to other modes
    if (activeMode !== modeId && (activeMode === 'chat' || activeMode === 'fun_chat' || modeId === 'chat' || modeId === 'fun_chat')) {
        setActiveChat([]);
    }
    setActiveMode(modeId);
  }

  const value = {
    activeMode,
    setActiveMode: handleSetActiveMode,
    isHistoryPanelOpen,
    setIsHistoryPanelOpen,
    isSettingsPanelOpen,
    setIsSettingsPanelOpen,
    isAboutPanelOpen,
    setIsAboutPanelOpen,
    history,
    addHistoryItem,
    clearHistory,
    loadHistoryItem,
    activeChat,
    setActiveChat,
    model,
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
