
"use client";

import React, { createContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';

export interface Memory {
  id: string;
  text: string;
  timestamp: number;
}

interface MemoryContextType {
  memories: Memory[];
  addMemory: (text: string) => void;
  deleteMemory: (id: string) => void;
}

export const MemoryContext = createContext<MemoryContextType | undefined>(undefined);

export const MemoryProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [memories, setMemories] = useState<Memory[]>([]);

  const memoryKey = user ? `memory_${user.uid}` : 'memory_guest';

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

  const value = {
    memories,
    addMemory,
    deleteMemory,
  };

  return <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>;
};
