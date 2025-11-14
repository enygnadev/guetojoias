'use client';

import { useCart } from '@/hooks/use-cart';
import { CartItemCard } from '@/components/cart-item-card';
import { CartSummary } from '@/components/cart-summary';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeItem, updateQuantity, total, clear } = useCart();
  const [discount, setDiscount] = useState(0);

  const handleBuyViaWhatsapp = () => {
    if (cart.length === 0) return;

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const cartItems = cart.map(item => `${item.name} x${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`).join('\n');
    const finalTotal = (total - discount).toFixed(2);

    const message = `Olá! Gostaria de fazer um pedido:

*ITENS:*
${cartItems}

*SUBTOTAL:* R$ ${total.toFixed(2)}
${discount > 0 ? `*DESCONTO:* -R$ ${discount.toFixed(2)}\n` : ''}*TOTAL:* R$ ${finalTotal}

Por favor, confirme a disponibilidade!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft size={20} />
          Voltar
        </Link>

        <h1 className="text-4xl font-bold mb-8">Seu Carrinho</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">Seu carrinho está vazio</p>
            <Link
              href="/shop"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50"
            >
              Voltar à Loja
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <CartItemCard
                  key={item.productId}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </div>

            {/* Summary */}
            <div className="space-y-4">
              <CartSummary
                subtotal={total}
                onApplyCoupon={(code, discountAmount) => setDiscount(discountAmount)}
              />

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleBuyViaWhatsapp}
                  className="w-full py-4 bg-secondary text-secondary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Finalizar Compra no WhatsApp
                </button>

                <Link
                  href="/shop"
                  className="block text-center py-3 bg-muted text-muted-foreground font-bold rounded-lg hover:bg-card transition-colors"
                >
                  Continuar Comprando
                </Link>
              </div>

              {/* Aviso */}
              <div className="bg-card border border-border rounded-lg p-4 text-sm text-muted-foreground">
                <p className="font-bold text-foreground mb-2">Segurança Garantida</p>
                <p>Transações criptografadas via PIX ou WhatsApp. Seus dados estão sempre seguros.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
