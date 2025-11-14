'use client';

import { CartItem } from '@/hooks/use-cart';
import { X, Minus, Plus } from 'lucide-react';
import Image from 'next/image';

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export function CartItemCard({ item, onUpdateQuantity, onRemove }: CartItemCardProps) {
  return (
    <div className="flex gap-4 bg-card border border-border rounded-lg p-4">
      {/* Imagem */}
      <div className="flex-shrink-0 w-24 h-24 bg-muted rounded-lg overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-foreground mb-1">{item.name}</h3>
          <p className="text-primary font-bold">R$ {item.price.toFixed(2)}</p>
        </div>

        {/* Quantidade */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
            className="p-1 hover:bg-muted rounded transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center font-bold">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
            className="p-1 hover:bg-muted rounded transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex flex-col justify-between items-end">
        <button
          onClick={() => onRemove(item.productId)}
          className="p-1 hover:text-destructive transition-colors"
        >
          <X size={20} />
        </button>
        <p className="font-bold text-foreground">
          R$ {(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
