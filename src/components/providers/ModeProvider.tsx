"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { type ModeId } from '@/lib/modes';

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
  const [activeMode, setActiveMode] = useState<ModeId>('chat');
  const [isHistoryPanelOpen, setIsHistoryPanelOpen] = useState(false);
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [activeChat, setActiveChat] = useState<any[]>([]);

  const addHistoryItem = (type: ModeId, prompt: string, data: any, fullConversation?: any[]) => {
    const newHistoryItem: HistoryItem = { id: Date.now(), type, prompt, data, date: new Date(), fullConversation };
    setHistory(prev => [newHistoryItem, ...prev]);
  };
  
  const clearHistory = () => {
    setHistory([]);
    setIsHistoryPanelOpen(false);
  };

  const loadHistoryItem = (item: HistoryItem) => {
    if (item.type === 'chat' && item.fullConversation) {
        setActiveChat(item.fullConversation);
        setActiveMode('chat');
    }
    // Add logic for other types if they need to restore state
    setIsHistoryPanelOpen(false);
  };

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
