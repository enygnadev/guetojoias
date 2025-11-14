'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';

interface MosaicItem {
  id: string;
  name: string;
  price: number;
  image: string;
  thumbnail: string;
  row: number;
  col: number;
  rowSpan: number;
  colSpan: number;
  category: string;
}

// Layout do pitbull - utiliza grid para formar a silhueta
const PITBULL_LAYOUT: MosaicItem[] = [
  // Cabeça do pitbull
  { id: '1', name: 'Corrente Dourada', price: 299.90, image: '/corrente-dourada.jpg', thumbnail: '/corrente-dourada.jpg', row: 0, col: 2, rowSpan: 2, colSpan: 2, category: 'correntes' },
  { id: '2', name: 'Ouro 18k', price: 499.90, image: '/corrente-ouro-18k.jpg', thumbnail: '/corrente-ouro-18k.jpg', row: 0, col: 4, rowSpan: 2, colSpan: 2, category: 'correntes' },
  
  // Olho esquerdo
  { id: '3', name: 'Pingente Brilho', price: 189.90, image: '/pingente-brilho.jpg', thumbnail: '/pingente-brilho.jpg', row: 1, col: 1, rowSpan: 1, colSpan: 1, category: 'pingentes' },
  { id: '4', name: 'Pingente Premium', price: 249.90, image: '/pingente-premium.jpg', thumbnail: '/pingente-premium.jpg', row: 1, col: 6, rowSpan: 1, colSpan: 1, category: 'pingentes' },

  // Focinho
  { id: '5', name: 'Pulseira Prata', price: 159.90, image: '/pulseira-prata.jpg', thumbnail: '/pulseira-prata.jpg', row: 2, col: 2, rowSpan: 2, colSpan: 2, category: 'pulseiras' },
  { id: '6', name: 'Pulseira Dourada', price: 179.90, image: '/pulseira-dourada.jpg', thumbnail: '/pulseira-dourada.jpg', row: 2, col: 4, rowSpan: 2, colSpan: 2, category: 'pulseiras' },

  // Queixo
  { id: '7', name: 'Anel Premium', price: 219.90, image: '/anel-premium.jpg', thumbnail: '/anel-premium.jpg', row: 3, col: 1, rowSpan: 1, colSpan: 1, category: 'aneis' },
  { id: '8', name: 'Anel Ouro', price: 289.90, image: '/anel-ouro.jpg', thumbnail: '/anel-ouro.jpg', row: 3, col: 6, rowSpan: 1, colSpan: 1, category: 'aneis' },

  // Pescoço
  { id: '9', name: 'Corrente Fina', price: 139.90, image: '/corrente-fina.jpg', thumbnail: '/corrente-fina.jpg', row: 4, col: 1, rowSpan: 2, colSpan: 2, category: 'correntes' },
  { id: '10', name: 'Corrente Grossa', price: 359.90, image: '/corrente-grossa.jpg', thumbnail: '/corrente-grossa.jpg', row: 4, col: 3, rowSpan: 2, colSpan: 2, category: 'correntes' },
  { id: '11', name: 'Corrente Mista', price: 199.90, image: '/corrente-mista.jpg', thumbnail: '/corrente-mista.jpg', row: 4, col: 5, rowSpan: 2, colSpan: 2, category: 'correntes' },

  // Corpo
  { id: '12', name: 'Kit Completo', price: 799.90, image: '/kit-completo-joias.jpg', thumbnail: '/kit-completo-joias.jpg', row: 6, col: 0, rowSpan: 2, colSpan: 2, category: 'kits' },
  { id: '13', name: 'Pulseira Luxo', price: 349.90, image: '/pulseira-luxo.jpg', thumbnail: '/pulseira-luxo.jpg', row: 6, col: 2, rowSpan: 2, colSpan: 2, category: 'pulseiras' },
  { id: '14', name: 'Anel Duplo', price: 279.90, image: '/anel-duplo.jpg', thumbnail: '/anel-duplo.jpg', row: 6, col: 4, rowSpan: 2, colSpan: 2, category: 'aneis' },
  { id: '15', name: 'Colar Executivo', price: 429.90, image: '/colar-executivo.jpg', thumbnail: '/colar-executivo.jpg', row: 6, col: 6, rowSpan: 2, colSpan: 1, category: 'colares' },

  // Patas
  { id: '16', name: 'Pulseira 5mm', price: 119.90, image: '/placeholder.svg?height=300&width=300', thumbnail: '/placeholder.svg?height=150&width=150', row: 8, col: 0, rowSpan: 1, colSpan: 1, category: 'pulseiras' },
  { id: '17', name: 'Pulseira 8mm', price: 149.90, image: '/placeholder.svg?height=300&width=300', thumbnail: '/placeholder.svg?height=150&width=150', row: 8, col: 2, rowSpan: 1, colSpan: 1, category: 'pulseiras' },
  { id: '18', name: 'Anel Fino', price: 99.90, image: '/placeholder.svg?height=300&width=300', thumbnail: '/placeholder.svg?height=150&width=150', row: 8, col: 4, rowSpan: 1, colSpan: 1, category: 'aneis' },
  { id: '19', name: 'Corrente 50cm', price: 199.90, image: '/placeholder.svg?height=300&width=300', thumbnail: '/placeholder.svg?height=150&width=150', row: 8, col: 6, rowSpan: 1, colSpan: 1, category: 'correntes' },
];

export function PitbullMosaic() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">COLEÇÃO PITBULL</h2>
        <p className="text-center text-secondary mb-12">
          Cada peça forma a silhueta de um pitbull - símbolo de força e exclusividade
        </p>

        <div className="grid grid-cols-8 gap-3 auto-rows-[200px] md:auto-rows-[150px]">
          {PITBULL_LAYOUT.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-card cursor-pointer"
              style={{
                gridColumn: `span ${Math.min(item.colSpan, 8 - item.col)}`,
                gridRow: `span ${item.rowSpan}`,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Imagem com efeito shimmer */}
              <div className="relative w-full h-full">
                <Image
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay escuro no hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Conteúdo - visível no hover */}
                {hoveredId === item.id && (
                  <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="flex justify-end">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(item.id);
                        }}
                        className={`p-2 rounded-full transition-all ${
                          favorites.has(item.id)
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-black/50 text-foreground hover:bg-primary'
                        }`}
                      >
                        <Heart size={16} fill={favorites.has(item.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-sm md:text-base text-foreground line-clamp-2 mb-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-lg">
                          R$ {item.price.toFixed(2)}
                        </span>
                        <Link
                          href={`/product/${item.id}`}
                          className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded hover:shadow-lg hover:shadow-primary/50 transition-all"
                        >
                          Ver
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Badge de categoria */}
                <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-bold">
                  {item.category.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
