"use client";

import { createContext, useState, useEffect, ReactNode } from 'react';
import type { User, Role } from '@/lib/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (role: Role) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// This is a mock provider for demonstration purposes.
// In a real app, you would integrate with Firebase Auth.
const mockUsers: Record<Role, User> = {
  admin: { uid: 'admin-uid', email: 'admin@timewise.com', displayName: 'Admin User', photoURL: 'https://picsum.photos/seed/1/100/100', role: 'admin' },
  'project-manager': { uid: 'pm-uid', email: 'pm@timewise.com', displayName: 'Project Manager', photoURL: 'https://picsum.photos/seed/2/100/100', role: 'project-manager' },
  finance: { uid: 'finance-uid', email: 'finance@timewise.com', displayName: 'Finance User', photoURL: 'https://picsum.photos/seed/3/100/100', role: 'finance' },
  developer: { uid: 'dev-uid', email: 'developer@timewise.com', displayName: 'Developer User', photoURL: 'https://picsum.photos/seed/4/100/100', role: 'developer' },
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('timewise-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('timewise-user');
    } finally {
      setLoading(false);
    }
  }, []);

  const signIn = (role: Role) => {
    setLoading(true);
    const mockUser = mockUsers[role];
    setUser(mockUser);
    localStorage.setItem('timewise-user', JSON.stringify(mockUser));
    setLoading(false);
  };

  const signOut = () => {
    setLoading(true);
    setUser(null);
    localStorage.removeItem('timewise-user');
    setLoading(false);
  };

  const value = { user, loading, signIn, signOut };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
