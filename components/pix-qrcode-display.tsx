'use client';

import { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { getPixKey } from '@/app/actions/pix';

interface PixQrcodeDisplayProps {
  total: number;
}

export function PixQrcodeDisplay({ total }: PixQrcodeDisplayProps) {
  const [pixKey, setPixKey] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPixKey = async () => {
      const key = await getPixKey();
      setPixKey(key);
      setLoading(false);
    };
    fetchPixKey();
  }, []);

  if (loading) {
    return (
      <div className="border border-primary rounded-lg p-6 bg-card">
        <h4 className="font-bold text-foreground mb-4 text-center">Carregando PIX...</h4>
      </div>
    );
  }

  if (!pixKey) {
    return null;
  }

  return (
    <div className="border border-primary rounded-lg p-6 bg-card">
      <h4 className="font-bold text-foreground mb-4 text-center">Pagamento PIX</h4>
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 bg-white rounded-lg">
          <QRCode
            value={pixKey}
            size={200}
            level="H"
            includeMargin={true}
          />
        </div>
        <div className="w-full">
          <p className="text-sm text-muted-foreground mb-2">Chave PIX:</p>
          <div className="px-4 py-2 bg-muted text-muted-foreground rounded-lg">
            <span className="font-mono text-sm truncate">{pixKey}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Total a pagar: R$ {total.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
