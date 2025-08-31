
"use client";

import { useContext } from 'react';
import { MemoryContext } from '@/components/providers/MemoryProvider';

export const useMemory = () => {
  const context = useContext(MemoryContext);
  if (context === undefined) {
    throw new Error('useMemory must be used within a MemoryProvider');
  }
  return context;
};
