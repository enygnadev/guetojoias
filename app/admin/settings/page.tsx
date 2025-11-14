'use client';

import { useState } from 'react';
import { Save } from 'lucide-react';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    storeName: process.env.NEXT_PUBLIC_STORE_NAME || 'Gueto Joias',
    storeLocation: process.env.NEXT_PUBLIC_STORE_LOCATION || 'São Paulo, SP',
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
    pixKey: '***',
    shippingFree: 100,
    shippingCost: 15,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Configurações</h1>

      <div className="bg-card border border-border rounded-lg p-8 max-w-2xl">
        <div className="space-y-6">
          {/* Store Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Informações da Loja</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-foreground">Nome da Loja</label>
                <input
                  type="text"
                  value={settings.storeName}
                  onChange={(e) => setSettings({ ...settings, storeName: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-foreground">Localização</label>
                <input
                  type="text"
                  value={settings.storeLocation}
                  onChange={(e) => setSettings({ ...settings, storeLocation: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-foreground">WhatsApp</label>
                <input
                  type="text"
                  value={settings.whatsappNumber}
                  onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                  placeholder="55 (11) 9XXXX-XXXX"
                />
              </div>
            </div>
          </div>

          {/* Shipping Settings */}
          <div className="border-t border-border pt-6">
            <h2 className="text-2xl font-bold mb-4">Configurações de Envio</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-foreground">Frete Grátis Acima de</label>
                <input
                  type="number"
                  value={settings.shippingFree}
                  onChange={(e) => setSettings({ ...settings, shippingFree: parseFloat(e.target.value) })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-foreground">Custo do Frete</label>
                <input
                  type="number"
                  value={settings.shippingCost}
                  onChange={(e) => setSettings({ ...settings, shippingCost: parseFloat(e.target.value) })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Payment Settings */}
          <div className="border-t border-border pt-6">
            <h2 className="text-2xl font-bold mb-4">Pagamentos</h2>
            <div>
              <label className="block text-sm font-bold mb-2 text-foreground">Chave PIX</label>
              <p className="px-4 py-2 bg-background border border-border rounded-lg text-muted-foreground">
                {settings.pixKey} (Configure via .env.local)
              </p>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg transition-all"
          >
            <Save size={20} />
            Salvar Configurações
          </button>

          {saved && (
            <div className="px-4 py-3 bg-green-500/20 text-green-500 rounded-lg font-bold text-center">
              Configurações salvas com sucesso!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
