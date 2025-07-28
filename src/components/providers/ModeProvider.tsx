"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { type ModeId } from '@/lib/modes';
import { useAuth } from './AuthProvider';
import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';

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

  useEffect(() => {
    const loadHistory = async () => {
      if (user) {
        const historyRef = doc(db, "history", user.uid);
        const historySnap = await getDoc(historyRef);
        if (historySnap.exists()) {
          const data = historySnap.data();
          const loadedHistory = data.items.map((item: any) => ({
            ...item,
            date: item.date.toDate()
          })).sort((a: HistoryItem, b: HistoryItem) => b.date.getTime() - a.date.getTime());
          setHistory(loadedHistory);
        } else {
          setHistory([]);
        }
      } else {
        // Load from local storage for guests
        const localHistory = localStorage.getItem('guestHistory');
        if (localHistory) {
          setHistory(JSON.parse(localHistory).map((item: any) => ({ ...item, date: new Date(item.date) })));
        } else {
            setHistory([]);
        }
      }
    };
    loadHistory();
  }, [user]);

  const addHistoryItem = async (type: ModeId, prompt: string, data: any, fullConversation?: any[]) => {
    const newHistoryItem: HistoryItem = { id: Date.now(), type, prompt, data, date: new Date(), fullConversation };
    
    const updatedHistory = [newHistoryItem, ...history];
    setHistory(updatedHistory);

    if (user) {
        const historyRef = doc(db, "history", user.uid);
        const historySnap = await getDoc(historyRef);
        if (historySnap.exists()) {
            await updateDoc(historyRef, {
                items: arrayUnion({ ...newHistoryItem, date: newHistoryItem.date })
            });
        } else {
            await setDoc(historyRef, { items: [{...newHistoryItem, date: newHistoryItem.date}] });
        }
    } else {
        // Save to local storage for guests
        localStorage.setItem('guestHistory', JSON.stringify(updatedHistory));
    }
  };
  
  const clearHistory = async () => {
    setHistory([]);
    if (user) {
        const historyRef = doc(db, "history", user.uid);
        await setDoc(historyRef, { items: [] });
    } else {
        localStorage.removeItem('guestHistory');
    }
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
    setActiveChat
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
