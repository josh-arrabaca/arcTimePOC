"use client";

import { useAuth } from '@/lib/auth/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import type { Role } from '@/lib/types';
import { LogIn } from 'lucide-react';
import { AppLogo } from '@/components/icons/app-logo';

export default function LoginPage() {
  const { user, loading, signIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace('/dashboard');
    }
  }, [user, loading, router]);

  if (loading || (!loading && user)) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="flex items-center gap-2 text-muted-foreground">
          <LogIn className="h-6 w-6 animate-spin" />
          <span>Loading your workspace...</span>
        </div>
      </div>
    );
  }

  const handleLogin = (role: Role) => {
    signIn(role);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-center">
      <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <AppLogo className="h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl font-bold text-primary">
            ArcTimeIn
          </h1>
        </div>
        <p className="mt-2 text-lg text-muted-foreground">
          Track your time, master your work.
        </p>
        <div className="mt-8 space-y-4">
          <p className="text-sm text-muted-foreground">For demonstration, please sign in as:</p>
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={() => handleLogin('developer')}>Developer</Button>
            <Button onClick={() => handleLogin('project-manager')}>Project Manager</Button>
            <Button onClick={() => handleLogin('finance')}>Finance</Button>
            <Button onClick={() => handleLogin('admin')}>Admin</Button>
          </div>
          <p className="text-xs text-muted-foreground/80">In a real app, this would be a single 'Sign in with Google' button.</p>
        </div>
      </div>
    </main>
  );
}
