'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthChange } from '@/lib/auth-service';
import { AuthForm } from '@/components/auth-form';
import { User } from 'firebase/auth';

export default function AuthPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthChange((currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        router.push('/dashboard');
      }
    });

    return unsubscribe;
  }, [router]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>;
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">
            GUETO <span className="text-primary">JOIAS</span>
          </h1>
          <p className="text-muted-foreground">Acesse sua conta</p>
        </div>
        <AuthForm onSuccess={() => router.push('/dashboard')} />
      </div>
    </main>
  );
}
