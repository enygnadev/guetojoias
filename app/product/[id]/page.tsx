'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Product } from '@/types';
import { ProductGallery } from '@/components/product-gallery';
import { ProductDetails } from '@/components/product-details';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Dados mock - será substituído por Firestore
const MOCK_PRODUCTS: { [key: string]: Product } = {
  '1': {
    id: '1',
    name: 'Corrente Dourada Premium',
    category: 'correntes',
    price: 299.90,
    description: 'Corrente de ouro dourado com acabamento impecável. Perfeita para quem quer destaque e elegância. Cada elo é meticulosamente trabalhado para garantir durabilidade.',
    images: ['/corrente-dourada.jpg', '/corrente-ouro-18k.jpg'],
    videos: [],
    thumbnail: '/corrente-dourada.jpg',
    specifications: {
      weight: '25g',
      material: 'Ouro Dourado',
      dimensions: '50cm de comprimento, 5mm de espessura',
    },
    stock: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  '2': {
    id: '2',
    name: 'Ouro 18k Premium',
    category: 'correntes',
    price: 499.90,
    description: 'Corrente de ouro 18 quilates com a mais alta qualidade. Ideal para ocasiões especiais e uso diário luxuoso.',
    images: ['/corrente-ouro-18k.jpg', '/corrente-dourada.jpg'],
    videos: [],
    thumbnail: '/corrente-ouro-18k.jpg',
    specifications: {
      weight: '32g',
      material: 'Ouro 18K',
      dimensions: '55cm de comprimento, 6mm de espessura',
    },
    stock: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Em produção, fazer chamada a Firestore aqui
    setProduct(MOCK_PRODUCTS[productId] || null);
    setLoading(false);
  }, [productId]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>;
  }

  if (!product) {
    return <div className="flex items-center justify-center min-h-screen">Produto não encontrado</div>;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-primary">
            Home
          </Link>
          <ChevronRight size={16} className="text-muted-foreground" />
          <Link href="/shop" className="text-muted-foreground hover:text-primary">
            Loja
          </Link>
          <ChevronRight size={16} className="text-muted-foreground" />
          <span className="text-foreground font-bold">{product.name}</span>
        </nav>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <ProductGallery
              images={product.images}
              videos={product.videos}
              productName={product.name}
            />
          </div>

          {/* Details */}
          <div>
            <ProductDetails product={product} />
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20 py-12 border-t border-border">
          <h2 className="text-3xl font-bold mb-8">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(MOCK_PRODUCTS)
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-lg overflow-hidden group-hover:border-primary transition-colors">
                    <div className="relative aspect-square bg-muted overflow-hidden">
                      <img
                        src={relatedProduct.thumbnail || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-primary font-bold">R$ {relatedProduct.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
