'use client';

import { useCart } from '@/hooks/use-cart';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export function CartCounter() {
  const { itemCount } = useCart();

  return (
    <Link href="/cart" className="relative p-2 hover:text-primary transition-colors">
      <ShoppingCart size={20} />
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
