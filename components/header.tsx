'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User, Heart, Search } from 'lucide-react';
import { CartCounter } from './cart-counter';
import { useAdmin } from '@/hooks/use-admin';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin, loading } = useAdmin();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-primary font-bold text-2xl pulse-gold">
              ⧬
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">GUETO</h1>
              <p className="text-xs text-secondary">JOIAS</p>
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex gap-8">
            <Link href="/shop" className="text-foreground hover:text-primary transition-colors font-bold">
              Loja
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-bold">
              Sobre
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-bold">
              Contato
            </Link>
            {!loading && isAdmin && (
              <Link href="/admin" className="text-primary hover:text-accent transition-colors font-bold text-xs px-2 py-1 border border-primary rounded">
                Admin
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <Link href="/wishlist" className="p-2 hover:text-primary transition-colors">
              <Heart size={20} />
            </Link>
            <CartCounter />
            <Link href="/auth" className="p-2 hover:text-primary transition-colors">
              <User size={20} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border space-y-2">
            <Link href="/shop" className="block py-2 px-4 hover:text-primary transition-colors font-bold">
              Loja
            </Link>
            <Link href="/about" className="block py-2 px-4 hover:text-primary transition-colors font-bold">
              Sobre
            </Link>
            <Link href="/contact" className="block py-2 px-4 hover:text-primary transition-colors font-bold">
              Contato
            </Link>
            {!loading && isAdmin && (
              <Link href="/admin" className="block py-2 px-4 text-primary hover:text-accent transition-colors font-bold border-l-2 border-primary">
                Admin
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
