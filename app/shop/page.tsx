'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types';
import Link from 'next/link';
import { Search, Filter, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Corrente Dourada Premium',
    category: 'correntes',
    price: 299.90,
    description: 'Corrente de ouro dourado com acabamento impecável.',
    images: ['/corrente-dourada.jpg'],
    videos: [],
    thumbnail: '/corrente-dourada.jpg',
    specifications: { weight: '25g', material: 'Ouro Dourado', dimensions: '50cm' },
    stock: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Ouro 18k Premium',
    category: 'correntes',
    price: 499.90,
    description: 'Corrente de ouro 18 quilates premium.',
    images: ['/corrente-ouro-18k.jpg'],
    videos: [],
    thumbnail: '/corrente-ouro-18k.jpg',
    specifications: { weight: '32g', material: 'Ouro 18K', dimensions: '55cm' },
    stock: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'Pingente Brilho',
    category: 'pingentes',
    price: 189.90,
    description: 'Pingente brilhante com design sofisticado.',
    images: ['/pingente-brilho.jpg'],
    videos: [],
    thumbnail: '/pingente-brilho.jpg',
    specifications: { weight: '12g', material: 'Ouro Dourado', dimensions: '2cm' },
    stock: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    name: 'Pulseira Prata Premium',
    category: 'pulseiras',
    price: 159.90,
    description: 'Pulseira em prata com acabamento impecável.',
    images: ['/pulseira-prata.jpg'],
    videos: [],
    thumbnail: '/pulseira-prata.jpg',
    specifications: { weight: '18g', material: 'Prata Esterlina', dimensions: '18cm' },
    stock: 8,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    name: 'Anel Premium',
    category: 'aneis',
    price: 219.90,
    description: 'Anel de design premium para ocasiões especiais.',
    images: ['/anel-premium.jpg'],
    videos: [],
    thumbnail: '/anel-premium.jpg',
    specifications: { weight: '8g', material: 'Ouro Dourado', dimensions: 'Tamanho 20' },
    stock: 15,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '6',
    name: 'Pulseira Dourada Luxo',
    category: 'pulseiras',
    price: 279.90,
    description: 'Pulseira dourada com design luxuoso e elegante.',
    images: ['/pulseira-dourada.jpg'],
    videos: [],
    thumbnail: '/pulseira-dourada.jpg',
    specifications: { weight: '22g', material: 'Ouro Dourado', dimensions: '19cm' },
    stock: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [filtered, setFiltered] = useState<Product[]>(MOCK_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    let result = products;

    // Filtro de busca
    if (searchTerm) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro de categoria
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Ordenação
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result = [...result].sort((a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      default:
        break;
    }

    setFiltered(result);
  }, [searchTerm, selectedCategory, sortBy, products]);

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-5xl font-bold mb-8">NOSSA COLEÇÃO</h1>

        {/* Search Bar */}
        <div className="mb-8 flex gap-4 flex-col md:flex-row">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-4 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Buscar joias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex md:hidden items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors"
          >
            <Filter size={20} />
            Filtros
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block md:col-span-1`}>
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-4">Categorias</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                      !selectedCategory ? 'bg-primary text-primary-foreground' : 'hover:bg-card'
                    }`}
                  >
                    Todas
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors capitalize ${
                        selectedCategory === cat ? 'bg-primary text-primary-foreground' : 'hover:bg-card'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4">Ordenar</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="relevance">Relevância</option>
                  <option value="price-low">Menor Preço</option>
                  <option value="price-high">Maior Preço</option>
                  <option value="newest">Mais Novo</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">Nenhum produto encontrado</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg"
                >
                  Limpar Filtros
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-6">
                  Mostrando {filtered.length} de {products.length} produtos
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map(product => (
                    <div key={product.id} className="group">
                      <Link href={`/product/${product.id}`}>
                        <div className="bg-card border border-border rounded-lg overflow-hidden group-hover:border-primary transition-colors">
                          <div className="relative aspect-square bg-muted overflow-hidden">
                            <img
                              src={product.thumbnail || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-bold">
                              R$ {product.price.toFixed(2)}
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold text-foreground mb-2 group-hover:text-primary line-clamp-2">
                              {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                              {product.description}
                            </p>
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
                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded hover:shadow-lg transition-all text-sm font-bold"
                              >
                                <ShoppingCart size={16} />
                              </button>
                              <button className="px-3 py-2 bg-card border border-border rounded hover:border-primary transition-colors">
                                <Heart size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
