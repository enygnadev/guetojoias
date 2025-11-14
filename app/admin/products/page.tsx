'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import Link from 'next/link';

const MOCK_PRODUCTS = [
  { id: '1', name: 'Corrente Dourada Premium', price: 299.90, stock: 5, category: 'correntes' },
  { id: '2', name: 'Ouro 18k Premium', price: 499.90, stock: 3, category: 'correntes' },
];

export default function AdminProductsPage() {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteProduct = (id: string) => {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold">GERENCIAR PRODUTOS</h1>
          <Link
            href="/admin/products/new"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg"
          >
            <Plus size={20} />
            Novo Produto
          </Link>
        </div>

        {/* Search */}
        <div className="mb-8 relative">
          <Search className="absolute left-4 top-4 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
          />
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-card border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Nome</th>
                <th className="px-6 py-4 text-left font-bold">Preço</th>
                <th className="px-6 py-4 text-left font-bold">Estoque</th>
                <th className="px-6 py-4 text-left font-bold">Categoria</th>
                <th className="px-6 py-4 text-left font-bold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(product => (
                <tr key={product.id} className="border-b border-border hover:bg-background transition-colors">
                  <td className="px-6 py-4 font-bold">{product.name}</td>
                  <td className="px-6 py-4">R$ {product.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded font-bold ${
                      product.stock > 0 ? 'bg-primary/20 text-primary' : 'bg-destructive/20 text-destructive'
                    }`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 capitalize">{product.category}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className="p-2 bg-primary text-primary-foreground rounded hover:shadow-lg transition-all"
                    >
                      <Edit size={16} />
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="p-2 bg-destructive text-destructive-foreground rounded hover:shadow-lg transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
