'use client';

import Link from 'next/link';
import { CheckCircle, Download, Share2 } from 'lucide-react';

export default function OrderSuccessPage() {
  const orderId = Math.random().toString(36).substring(7).toUpperCase();

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-center mb-8">
          <CheckCircle className="w-24 h-24 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-2">Pedido Realizado!</h1>
          <p className="text-muted-foreground mb-4">Seu pedido foi enviado com sucesso.</p>
          <div className="bg-card border border-border rounded-lg p-4 mb-8">
            <p className="text-sm text-muted-foreground mb-1">Número do Pedido</p>
            <p className="text-2xl font-bold text-primary">{orderId}</p>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          <p className="text-center text-muted-foreground mb-4">
            Você receberá em breve um PIX para confirmar o pagamento. Após confirmação, seu pedido será processado.
          </p>

          <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors font-bold">
            <Download size={20} />
            Baixar Recibo
          </button>

          <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors font-bold">
            <Share2 size={20} />
            Compartilhar
          </button>
        </div>

        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="block text-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg font-bold"
          >
            Ver Meus Pedidos
          </Link>
          <Link
            href="/shop"
            className="block text-center px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors font-bold"
          >
            Continuar Comprando
          </Link>
        </div>
      </div>
    </main>
  );
}
