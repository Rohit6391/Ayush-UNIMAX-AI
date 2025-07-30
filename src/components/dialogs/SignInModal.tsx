"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { auth } from '@/lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { AlertTriangle } from 'lucide-react';

interface SignInModalProps {
  setIsOpen: (isOpen: boolean) => void;
}

export function SignInModal({ setIsOpen }: SignInModalProps) {
  const { toast } = useToast();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAuthAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (isSignUp) {
        // Sign Up
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, {
            displayName: email.split('@')[0],
            photoURL: `https://placehold.co/100x100.png`
        });
        toast({ title: "Account created successfully!" });
      } else {
        // Sign In
        await signInWithEmailAndPassword(auth, email, password);
        toast({ title: "Signed in successfully!" });
      }
      setIsOpen(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError('');
    try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        toast({ title: "Signed in with Google successfully!"});
        setIsOpen(false);
    } catch (err: any) {
        setError(err.message);
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <Dialog open onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isSignUp ? 'Create an Account' : 'Sign In'}</DialogTitle>
          <DialogDescription>
            {isSignUp ? 'Enter your details to get started.' : 'Welcome back! Sign in to continue.'}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
            Sign In with Google
          </Button>
          <div className="flex items-center space-x-2">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>
          {error && (
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Authentication Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleAuthAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
            </Button>
          </form>
          <p className="text-center text-sm">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <Button variant="link" onClick={() => { setIsSignUp(!isSignUp); setError(''); }}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </Button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
