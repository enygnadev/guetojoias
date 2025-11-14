'use client';

import { useState, useEffect } from 'react';

export interface CartItem {
  productId: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Carregar carrinho do localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Erro ao carregar carrinho:', error);
      }
    }
    setIsLoading(false);

    // Listener para atualizações
    const handleCartUpdate = () => {
      const updated = localStorage.getItem('cart');
      if (updated) {
        setCart(JSON.parse(updated));
      }
    };

    window.addEventListener('cart-updated', handleCartUpdate);
    return () => window.removeEventListener('cart-updated', handleCartUpdate);
  }, []);

  const addItem = (item: CartItem) => {
    setCart(prev => {
      const existingItem = prev.find(i => i.productId === item.productId);
      let newCart;
      if (existingItem) {
        newCart = prev.map(i =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        newCart = [...prev, item];
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      window.dispatchEvent(new Event('cart-updated'));
      return newCart;
    });
  };

  const removeItem = (productId: string) => {
    setCart(prev => {
      const newCart = prev.filter(i => i.productId !== productId);
      localStorage.setItem('cart', JSON.stringify(newCart));
      window.dispatchEvent(new Event('cart-updated'));
      return newCart;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setCart(prev => {
      const newCart = prev.map(i =>
        i.productId === productId ? { ...i, quantity } : i
      );
      localStorage.setItem('cart', JSON.stringify(newCart));
      window.dispatchEvent(new Event('cart-updated'));
      return newCart;
    });
  };

  const clear = () => {
    setCart([]);
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cart-updated'));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    total,
    itemCount,
    isLoading,
  };
}
