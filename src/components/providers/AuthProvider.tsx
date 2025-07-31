"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { BrainCircuit } from 'lucide-react';

// Define a User type that matches what the app expects
interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthContextType {
  user: User | null;
  isAuthLoading: boolean;
  signIn: (email: string, pass: string) => Promise<User>;
  signUp: (email: string, pass: string) => Promise<User>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<User>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthLoading: true,
  signIn: async () => { throw new Error('signIn not implemented'); },
  signUp: async () => { throw new Error('signUp not implemented'); },
  signOut: async () => { throw new Error('signOut not implemented'); },
  signInWithGoogle: async () => { throw new Error('signInWithGoogle not implemented'); },
});

// A simple hashing function for demonstration (NOT SECURE FOR PRODUCTION)
const simpleHash = (s: string) => {
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return String(hash);
};


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    // On initial load, check if a user is stored in localStorage
    try {
      const storedUser = localStorage.getItem('unimax-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('unimax-user');
    }
    setIsAuthLoading(false);
  }, []);

  const signUp = async (email: string, pass: string): Promise<User> => {
    const users = JSON.parse(localStorage.getItem('unimax-users') || '{}');
    if (users[email]) {
      throw new Error("auth/email-already-in-use");
    }

    const newUser: User = {
      uid: `local-${Date.now()}`,
      email: email,
      displayName: email.split('@')[0],
      photoURL: `https://placehold.co/100x100.png`
    };

    users[email] = { ...newUser, passwordHash: simpleHash(pass) };
    localStorage.setItem('unimax-users', JSON.stringify(users));
    
    localStorage.setItem('unimax-user', JSON.stringify(newUser));
    setUser(newUser);
    return newUser;
  }

  const signIn = async (email: string, pass: string): Promise<User> => {
      const users = JSON.parse(localStorage.getItem('unimax-users') || '{}');
      const storedUserData = users[email];
      
      if (!storedUserData || storedUserData.passwordHash !== simpleHash(pass)) {
          throw new Error("auth/invalid-credential");
      }
      
      const loggedInUser: User = {
          uid: storedUserData.uid,
          email: storedUserData.email,
          displayName: storedUserData.displayName,
          photoURL: storedUserData.photoURL
      };

      localStorage.setItem('unimax-user', JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      return loggedInUser;
  }

  const signInWithGoogle = async (): Promise<User> => {
      // This is a fake Google sign-in for demonstration
      const email = `user${Math.floor(Math.random() * 10000)}@google.com`;
      const users = JSON.parse(localStorage.getItem('unimax-users') || '{}');
      
      const googleUser: User = {
        uid: `google-${Date.now()}`,
        email: email,
        displayName: email.split('@')[0],
        photoURL: `https://placehold.co/100x100.png`
      };

      // We can just log them in without storing a password
      users[email] = { ...googleUser };
      localStorage.setItem('unimax-users', JSON.stringify(users));
      
      localStorage.setItem('unimax-user', JSON.stringify(googleUser));
      setUser(googleUser);
      return googleUser;
  }
  
  const signOut = async () => {
    localStorage.removeItem('unimax-user');
    setUser(null);
  }

  if (isAuthLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background text-foreground">
        <BrainCircuit className="animate-pulse h-12 w-12 text-primary" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, isAuthLoading, signIn, signUp, signOut, signInWithGoogle }}>
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
