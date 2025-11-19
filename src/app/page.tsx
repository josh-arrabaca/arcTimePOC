"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/hooks';
import { Skeleton } from '@/components/ui/skeleton';
import { AppLogo } from '@/components/icons/app-logo';

export default function RootPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace('/dashboard');
      } else {
        router.replace('/login');
      }
    }
  }, [user, loading, router]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-background">
      <div className="flex items-center gap-3">
        <AppLogo className="h-12 w-12 text-primary" />
        <h1 className="font-headline text-5xl font-bold text-primary">ArcTimeIn</h1>
      </div>
      <div className="w-1/4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-3/4" />
      </div>
    </div>
  );
}
