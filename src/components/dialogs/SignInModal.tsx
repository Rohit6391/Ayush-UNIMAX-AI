
"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth } from '@/lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile
} from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '../ui/alert';

interface SignInModalProps {
  setIsOpen: (isOpen: boolean) => void;
}

export function SignInModal({ setIsOpen }: SignInModalProps) {
  const { toast } = useToast();
  
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const [registerMessage, setRegisterMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);
  const [signInMessage, setSignInMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);

  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [isSignInLoading, setIsSignInLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegisterLoading(true);
    setRegisterMessage(null);

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        await updateProfile(userCredential.user, {
            displayName: registerEmail.split('@')[0],
            photoURL: `https://placehold.co/100x100.png`
        });
        setRegisterMessage({ text: 'Registration successful! You can now sign in.', type: 'success' });
        toast({ title: "Account created successfully!" });
        setTimeout(() => setIsOpen(false), 2000);
    } catch (err: any) {
        setRegisterMessage({ text: err.message, type: 'error' });
    } finally {
        setIsRegisterLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignInLoading(true);
    setSignInMessage(null);

    try {
        await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
        setSignInMessage({ text: 'Welcome back! You are signed in.', type: 'success' });
        toast({ title: "Signed in successfully!" });
        setIsOpen(false);
    } catch (err: any) {
        setSignInMessage({ text: err.message, type: 'error' });
    } finally {
        setIsSignInLoading(false);
    }
  };
  
  const MessageDisplay = ({ message }: { message: {text: string, type: 'success' | 'error'} | null}) => {
    if (!message) return null;
    return (
        <Alert variant={message.type === 'error' ? 'destructive' : 'default'} className="mt-4">
            <AlertDescription>{message.text}</AlertDescription>
        </Alert>
    )
  }

  return (
    <Dialog open onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl p-0">
        <div className="flex flex-col md:flex-row gap-0">
            {/* Registration Section */}
            <div className="flex-1 p-8 bg-blue-50/50 dark:bg-blue-900/20 rounded-l-lg">
                <DialogHeader className="mb-6 text-center">
                    <DialogTitle className="text-3xl font-bold text-blue-800 dark:text-blue-300">Register</DialogTitle>
                </DialogHeader>
                 <form id="registerForm" className="space-y-4" onSubmit={handleRegister}>
                    <div>
                        <Label htmlFor="registerEmail" className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Email:</Label>
                        <Input type="email" id="registerEmail" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} required />
                    </div>
                    <div>
                        <Label htmlFor="registerPassword"
                               className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Password:</Label>
                        <Input type="password" id="registerPassword" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required />
                    </div>
                    <Button type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                            disabled={isRegisterLoading}>
                        {isRegisterLoading ? "Registering..." : "Register"}
                    </Button>
                </form>
                <MessageDisplay message={registerMessage} />
            </div>

            {/* Sign-In Section */}
            <div className="flex-1 p-8 bg-green-50/50 dark:bg-green-900/20 rounded-r-lg">
                 <DialogHeader className="mb-6 text-center">
                    <DialogTitle className="text-3xl font-bold text-green-800 dark:text-green-300">Sign In</DialogTitle>
                </DialogHeader>
                <form id="signInForm" className="space-y-4" onSubmit={handleSignIn}>
                    <div>
                        <Label htmlFor="signInEmail" className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Email:</Label>
                        <Input type="email" id="signInEmail" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <Label htmlFor="signInPassword"
                               className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Password:</Label>
                        <Input type="password" id="signInPassword" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} required/>
                    </div>
                    <Button type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                            disabled={isSignInLoading}>
                        {isSignInLoading ? "Signing In..." : "Sign In"}
                    </Button>
                </form>
                <MessageDisplay message={signInMessage} />
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
