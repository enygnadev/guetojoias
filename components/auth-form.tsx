'use client';

import { useState } from 'react';
import { registerUser, loginUser } from '@/lib/auth-service';
import { Mail, Lock, User, LogIn } from 'lucide-react';

interface AuthFormProps {
  onSuccess?: () => void;
}

export function AuthForm({ onSuccess }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await loginUser(formData.email, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('As senhas não correspondem');
        }
        await registerUser(formData.email, formData.password, formData.name);
      }

      // Limpar form
      setFormData({ email: '', password: '', name: '', confirmPassword: '' });
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
        {isLogin ? 'Login' : 'Criar Conta'}
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-destructive/20 border border-destructive text-destructive rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">Nome</label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-3 text-muted-foreground" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                placeholder="Seu nome"
                required
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-bold text-foreground mb-2">Email</label>
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-3 text-muted-foreground" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
              placeholder="seu@email.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-foreground mb-2">Senha</label>
          <div className="relative">
            <Lock size={18} className="absolute left-3 top-3 text-muted-foreground" />
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        {!isLogin && (
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">Confirmar Senha</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-3 text-muted-foreground" />
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <LogIn size={20} />
          {loading ? 'Processando...' : isLogin ? 'Entrar' : 'Criar Conta'}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-border">
        <button
          onClick={() => {
            setIsLogin(!isLogin);
            setError('');
            setFormData({ email: '', password: '', name: '', confirmPassword: '' });
          }}
          className="w-full text-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {isLogin ? 'Não tem conta? Criar agora' : 'Já tem conta? Fazer login'}
        </button>
      </div>
    </div>
  );
}
