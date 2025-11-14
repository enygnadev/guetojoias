'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types';
import Link from 'next/link';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const { addItem } = useCart();
  const MOCK_PRODUCTS = [
    {
      id: '1',
      name: 'Corrente Dourada Premium',
      price: 299.90,
      thumbnail: '/corrente-dourada.jpg',
    },
    {
      id: '2',
      name: 'Ouro 18k Premium',
      price: 499.90,
      thumbnail: '/corrente-ouro-18k.jpg',
    },
  ];

  useEffect(() => {
    const saved = localStorage.getItem('wishlist');
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  const removeFromWishlist = (id: string) => {
    const updated = wishlist.filter(item => item !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  const wishlisted = MOCK_PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-12">MINHA LISTA DE DESEJOS</h1>

        {wishlisted.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-xl text-muted-foreground mb-8">Sua lista de desejos está vazia</p>
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg"
            >
              Explorar Joias
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlisted.map(product => (
              <div key={product.id} className="group">
                <Link href={`/product/${product.id}`}>
                  <div className="bg-card border border-border rounded-lg overflow-hidden group-hover:border-primary transition-colors">
                    <div className="relative aspect-square bg-muted overflow-hidden">
                      <img
                        src={product.thumbnail || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-foreground mb-2">{product.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-4">R$ {product.price.toFixed(2)}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addItem({
                              productId: product.id,
                              quantity: 1,
                              name: product.name,
                              price: product.price,
                              image: product.thumbnail,
                            });
                          }}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded hover:shadow-lg transition-all font-bold"
                        >
                          <ShoppingCart size={16} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            removeFromWishlist(product.id);
                          }}
                          className="px-3 py-2 bg-destructive text-destructive-foreground rounded hover:shadow-lg transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
