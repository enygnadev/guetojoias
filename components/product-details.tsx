'use client';

import { useState, Suspense } from 'react';
import { Product } from '@/types';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { PixQrcodeDisplay } from './pix-qrcode-display';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [showPixQr, setShowPixQr] = useState(false);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.productId === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ productId: product.id, quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
  };

  const handleBuyViaWhatsapp = () => {
    const total = (product.price * quantity).toFixed(2);
    const message = `Olá! Gostaria de comprar:
*${product.name}* x${quantity}
Valor: R$ ${total}

Por favor, confirme a disponibilidade!`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`);
  };

  return (
    <div className="space-y-6">
      {/* Nome e Preço */}
      <div>
        <p className="text-primary text-sm font-bold uppercase mb-2">Premium Collection</p>
        <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-primary">R$ {product.price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground">Parcelado em até 12x</span>
        </div>
      </div>

      {/* Descrição */}
      <div>
        <h3 className="font-bold text-foreground mb-2">Descrição</h3>
        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
      </div>

      {/* Especificações */}
      {product.specifications && (
        <div>
          <h3 className="font-bold text-foreground mb-3">Especificações</h3>
          <div className="grid grid-cols-2 gap-3 bg-card border border-border rounded-lg p-4">
            {product.specifications.material && (
              <div>
                <p className="text-sm text-muted-foreground">Material</p>
                <p className="font-bold text-foreground">{product.specifications.material}</p>
              </div>
            )}
            {product.specifications.weight && (
              <div>
                <p className="text-sm text-muted-foreground">Peso</p>
                <p className="font-bold text-foreground">{product.specifications.weight}</p>
              </div>
            )}
            {product.specifications.dimensions && (
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">Dimensões</p>
                <p className="font-bold text-foreground">{product.specifications.dimensions}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quantidade */}
      <div>
        <h3 className="font-bold text-foreground mb-3">Quantidade</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 border border-border rounded-lg hover:bg-card transition-colors"
          >
            -
          </button>
          <span className="px-4 font-bold text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 border border-border rounded-lg hover:bg-card transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Botões de Compra */}
      <div className="space-y-3">
        <button
          onClick={handleAddToCart}
          className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
        >
          <ShoppingCart size={20} />
          Adicionar ao Carrinho
        </button>

        <button
          onClick={handleBuyViaWhatsapp}
          className="w-full py-4 bg-secondary text-secondary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          Comprar via WhatsApp
        </button>

        <button
          onClick={() => setShowPixQr(!showPixQr)}
          className="w-full py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all"
        >
          Pagar via PIX
        </button>
      </div>

      {/* PIX QR Code */}
      {showPixQr && (
        <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Carregando...</div>}>
          <PixQrcodeDisplay total={product.price * quantity} />
        </Suspense>
      )}

      {/* Stock */}
      <div className="bg-card border border-border rounded-lg p-4">
        <p className="text-sm text-muted-foreground">
          Em estoque: <span className="font-bold text-primary">{product.stock} unidades</span>
        </p>
      </div>
    </div>
  );
}
