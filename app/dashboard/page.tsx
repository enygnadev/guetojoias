'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthChange, logoutUser } from '@/lib/auth-service';
import { User } from 'firebase/auth';
import { LogOut, ShoppingBag, MapPin, Heart, Settings, Plus } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthChange((currentUser) => {
      if (!currentUser) {
        router.push('/auth');
      } else {
        setUser(currentUser);
        // Load user data from localStorage
        const savedOrders = localStorage.getItem(`orders_${currentUser.uid}`);
        const savedAddresses = localStorage.getItem(`addresses_${currentUser.uid}`);
        const savedWishlist = localStorage.getItem(`wishlist_${currentUser.uid}`);
        
        if (savedOrders) setOrders(JSON.parse(savedOrders));
        if (savedAddresses) setAddresses(JSON.parse(savedAddresses));
        if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [router]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      router.push('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const addAddress = () => {
    const newAddress = {
      id: Date.now(),
      street: '',
      number: '',
      city: '',
      state: '',
      zipCode: '',
      default: addresses.length === 0,
    };
    const updated = [...addresses, newAddress];
    setAddresses(updated);
    if (user) localStorage.setItem(`addresses_${user.uid}`, JSON.stringify(updated));
  };

  const deleteAddress = (id: number) => {
    const updated = addresses.filter(a => a.id !== id);
    setAddresses(updated);
    if (user) localStorage.setItem(`addresses_${user.uid}`, JSON.stringify(updated));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground font-bold">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Bem-vindo, {user.displayName || user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:opacity-90 transition-opacity font-bold"
          >
            <LogOut size={20} />
            Sair
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 border-b border-border overflow-x-auto">
          {[
            { id: 'orders', label: 'Meus Pedidos', icon: ShoppingBag },
            { id: 'addresses', label: 'Endereços', icon: MapPin },
            { id: 'wishlist', label: 'Desejados', icon: Heart },
            { id: 'settings', label: 'Configurações', icon: Settings },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-3 font-bold whitespace-nowrap transition-colors ${
                activeTab === id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon size={20} />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-card border border-border rounded-lg p-6">
          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Meus Pedidos</h2>
              {orders.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">Nenhum pedido realizado ainda.</p>
                  <Link
                    href="/shop"
                    className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg font-bold"
                  >
                    Começar Compras
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order: any) => (
                    <div key={order.id} className="p-4 bg-background rounded-lg border border-border">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold">Pedido #{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded text-sm font-bold ${
                          order.status === 'completed'
                            ? 'bg-green-500/20 text-green-500'
                            : order.status === 'pending'
                            ? 'bg-yellow-500/20 text-yellow-500'
                            : 'bg-blue-500/20 text-blue-500'
                        }`}>
                          {order.status === 'completed' && 'Entregue'}
                          {order.status === 'pending' && 'Pendente'}
                          {order.status === 'shipped' && 'Enviado'}
                        </span>
                      </div>
                      <p className="font-bold text-primary">R$ {order.total.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === 'addresses' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Meus Endereços</h2>
              <div className="space-y-4">
                {addresses.length === 0 ? (
                  <p className="text-muted-foreground">Nenhum endereço cadastrado.</p>
                ) : (
                  addresses.map((address: any) => (
                    <div key={address.id} className="p-4 bg-background rounded-lg border border-border flex justify-between items-start">
                      <div>
                        <p className="font-bold">{address.street}, {address.number}</p>
                        <p className="text-sm text-muted-foreground">
                          {address.city}, {address.state} - {address.zipCode}
                        </p>
                        {address.default && <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded mt-2 inline-block">Padrão</span>}
                      </div>
                      <button
                        onClick={() => deleteAddress(address.id)}
                        className="text-destructive hover:bg-destructive/10 px-3 py-1 rounded font-bold"
                      >
                        Remover
                      </button>
                    </div>
                  ))
                )}
                <button
                  onClick={addAddress}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-lg hover:bg-background font-bold transition-colors"
                >
                  <Plus size={20} />
                  Adicionar Endereço
                </button>
              </div>
            </div>
          )}

          {/* Wishlist Tab */}
          {activeTab === 'wishlist' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Lista de Desejados</h2>
              {wishlist.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">Você não salvou nenhum item ainda.</p>
                  <Link
                    href="/shop"
                    className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg font-bold"
                  >
                    Ver Produtos
                  </Link>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {wishlist.map((item: any) => (
                    <div key={item.id} className="p-4 bg-background rounded-lg border border-border">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-primary font-bold">R$ {item.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Configurações da Conta</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-bold text-foreground">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Nome</p>
                  <p className="font-bold text-foreground">{user.displayName || 'Não configurado'}</p>
                </div>
                <div className="border-t border-border pt-4 mt-4">
                  <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:opacity-90 font-bold">
                    Alterar Senha
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
