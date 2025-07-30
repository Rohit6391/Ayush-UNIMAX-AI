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

interface SignInModalProps {
  setIsOpen: (isOpen: boolean) => void;
}

export function SignInModal({ setIsOpen }: SignInModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleFakeAction = () => {
    // Simply close the modal on any button click
    setIsOpen(false);
  };

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
          <Button variant="outline" className="w-full" onClick={handleFakeAction}>
            Sign In with Google
          </Button>
          <div className="flex items-center space-x-2">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleFakeAction(); }} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                defaultValue="user@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                defaultValue="password"
              />
            </div>
            <Button type="submit" className="w-full">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>
          <p className="text-center text-sm">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <Button variant="link" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </Button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
