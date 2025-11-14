'use client';

import { useState } from 'react';
import { Percent } from 'lucide-react';

interface CartSummaryProps {
  subtotal: number;
  onApplyCoupon: (code: string, discount: number) => void;
}

export function CartSummary({ subtotal, onApplyCoupon }: CartSummaryProps) {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState('');

  const VALID_COUPONS: { [key: string]: number } = {
    'GUETO10': 0.10,
    'DESCONTO20': 0.20,
    'PRIMEIRACOMPRA15': 0.15,
  };

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) return;

    const discountRate = VALID_COUPONS[couponCode.toUpperCase()];
    if (discountRate) {
      const discountAmount = subtotal * discountRate;
      setDiscount(discountAmount);
      setAppliedCoupon(couponCode.toUpperCase());
      onApplyCoupon(couponCode.toUpperCase(), discountAmount);
      setCouponCode('');
    } else {
      alert('Cupom inválido');
    }
  };

  const total = subtotal - discount;
  const shipping = total > 100 ? 0 : 15; // Frete grátis acima de R$ 100

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-4">
      <h3 className="font-bold text-lg text-foreground">Resumo do Pedido</h3>

      {/* Cupom */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Cupom de Desconto (opcional)</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Digite seu cupom"
            className="flex-1 px-3 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            disabled={appliedCoupon !== ''}
          />
          <button
            onClick={handleApplyCoupon}
            disabled={appliedCoupon !== ''}
            className="px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50"
          >
            Aplicar
          </button>
        </div>
        {appliedCoupon && (
          <p className="text-sm text-primary font-bold flex items-center gap-1">
            <Percent size={14} />
            Cupom {appliedCoupon} aplicado!
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Valores */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>R$ {subtotal.toFixed(2)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-primary">
            <span>Desconto</span>
            <span>-R$ {discount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between">
          <span className="text-muted-foreground">Frete</span>
          <span>{shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}</span>
        </div>

        <div className="border-t border-border pt-2 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span className="text-primary">R$ {(total + shipping).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
