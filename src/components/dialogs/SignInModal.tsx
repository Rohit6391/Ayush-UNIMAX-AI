
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
import { auth } from '@/lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '../ui/alert';
import { Separator } from '../ui/separator';

interface SignInModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function SignInModal({ isOpen, setIsOpen }: SignInModalProps) {
  const { toast } = useToast();
  
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [message, setMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleAuthAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    if (isRegistering) {
        if (password !== confirmPassword) {
            setMessage({ text: "Passwords do not match.", type: 'error' });
            setIsLoading(false);
            return;
        }
        // Handle Registration
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: email.split('@')[0],
                photoURL: `https://placehold.co/100x100.png`
            });
            toast({ title: `Welcome, ${userCredential.user.displayName || 'friend'}!`, description: "Your account has been created successfully." });
            setIsOpen(false);
        } catch (err: any) {
            setMessage({ text: err.message, type: 'error' });
        } finally {
            setIsLoading(false);
        }
    } else {
        // Handle Sign In
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast({ title: "Signed in successfully!", description: "Welcome back!" });
            setIsOpen(false);
        } catch (err: any) {
            setMessage({ text: err.message, type: 'error' });
        } finally {
            setIsLoading(false);
        }
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setMessage(null);
    try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        toast({ title: "Signed in with Google successfully!"});
        setIsOpen(false);
    } catch (err: any) {
        setMessage({ text: err.message, type: 'error' });
    } finally {
        setIsLoading(false);
    }
  }

  const MessageDisplay = ({ message }: { message: {text: string, type: 'success' | 'error'} | null}) => {
    if (!message) return null;
    return (
        <Alert variant={message.type === 'error' ? 'destructive' : 'default'} className="mt-4">
            <AlertDescription>{message.text}</AlertDescription>
        </Alert>
    )
  }
  
  const toggleMode = () => {
    setIsRegistering(!isRegistering);
    setMessage(null);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{isRegistering ? 'Create an Account' : 'Welcome Back!'}</DialogTitle>
          <DialogDescription>
            {isRegistering ? 'Enter your details to create a new account.' : 'Sign in to continue to your dashboard.'}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
            <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
                 <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 21.5 174.3 57.9l-67.4 64.4C309.1 98.2 280.7 84 248 84c-83.8 0-152 68.2-152 152s68.2 152 152 152c93.2 0 135-67.6 140.8-105.3H248v-85.3h236.1c2.3 12.7 3.9 26.9 3.9 41.4z"></path></svg>
                 Sign {isRegistering ? 'up' : 'in'} with Google
            </Button>
            <div className="relative">
                <Separator className="my-4" />
                <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-background px-2 text-sm text-muted-foreground">OR</span>
            </div>
            <form id="emailForm" className="space-y-4" onSubmit={handleAuthAction}>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                {isRegistering && (
                    <div>
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" placeholder="••••••••" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                    </div>
                )}
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Processing..." : (isRegistering ? 'Create Account' : 'Sign In')}
                </Button>
            </form>
            <MessageDisplay message={message} />
        </div>
        <div className="mt-4 text-center text-sm">
            {isRegistering ? "Already have an account?" : "Don't have an account?"}
            <Button variant="link" className="p-1" onClick={toggleMode}>
                {isRegistering ? 'Sign In' : 'Sign Up'}
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
