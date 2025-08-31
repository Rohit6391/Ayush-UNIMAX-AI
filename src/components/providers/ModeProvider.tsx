
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
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

export interface Memory {
  id: string;
  text: string;
  timestamp: number;
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
  memories: Memory[];
  addMemory: (text: string) => void;
  deleteMemory: (id: string) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

// Modes that generate large data URIs that shouldn't be stored in localStorage
const mediaGeneratingModes: ModeId[] = [
    'photo_generator', 
    'photo_editor', 
    'video_generator',
    'sound_generator',
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

  // Memory State
  const [memories, setMemories] = useState<Memory[]>([]);
  const memoryKey = user ? `memory_${user.uid}` : 'memory_guest';
  const historyKey = user ? `history_${user.uid}` : 'history_guest';

  // Load Memories
  useEffect(() => {
    const loadMemories = () => {
      try {
        const localMemories = localStorage.getItem(memoryKey);
        if (localMemories) {
          const parsedMemories: Memory[] = JSON.parse(localMemories);
          setMemories(parsedMemories.sort((a, b) => b.timestamp - a.timestamp));
        } else {
          setMemories([]);
        }
      } catch (e) {
        console.error("Failed to load memories from localStorage", e);
        setMemories([]);
      }
    };
    loadMemories();
  }, [user, memoryKey]);

  const saveMemories = useCallback((updatedMemories: Memory[]) => {
      try {
          localStorage.setItem(memoryKey, JSON.stringify(updatedMemories));
      } catch (e) {
          console.error("Failed to save memories to localStorage", e);
      }
  }, [memoryKey]);

  const addMemory = useCallback((text: string) => {
    const newMemory: Memory = {
      id: `${Date.now()}-${Math.random()}`,
      text,
      timestamp: Date.now(),
    };
    setMemories(prev => {
        const updated = [newMemory, ...prev];
        saveMemories(updated);
        return updated;
    });
  }, [saveMemories]);

  const deleteMemory = useCallback((id: string) => {
    setMemories(prev => {
        const updated = prev.filter(m => m.id !== id);
        saveMemories(updated);
        return updated;
    });
  }, [saveMemories]);


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
    
    if (mediaGeneratingModes.includes(type)) {
        if (typeof data === 'string' && data.startsWith('data:')) {
            storableData = `[Media data not stored for mode: ${type}]`;
        } else if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
            storableData = `[Complex media object not stored for mode: ${type}]`;
        }
    }

    const newHistoryItem: HistoryItem = { id: Date.now(), type, prompt, data: storableData, date: new Date(), fullConversation };
    
    const updatedHistoryForState = [{...newHistoryItem, data: data}, ...history];
    setHistory(updatedHistoryForState);
    
    const updatedHistoryForStorage = [newHistoryItem, ...history];

    try {
        localStorage.setItem(historyKey, JSON.stringify(updatedHistoryForStorage));
    } catch (e: any) {
        console.error("Failed to save history:", e);
        if (e.name === 'QuotaExceededError') {
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
    memories,
    addMemory,
    deleteMemory,
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
