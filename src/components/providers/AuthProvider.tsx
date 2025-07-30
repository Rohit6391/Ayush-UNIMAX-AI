"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { BrainCircuit } from 'lucide-react';

interface AuthContextType {
  user: User | null;
  isAuthLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthLoading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (isAuthLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background text-foreground">
        <BrainCircuit className="animate-pulse h-12 w-12 text-primary" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, isAuthLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
