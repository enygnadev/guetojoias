'use client';

import { useEffect, useState } from 'react';
import { Plus, Trash2, Edit, ShoppingBag, Users, TrendingUp, Package } from 'lucide-react';

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: string | number;
  icon: any;
  color: string;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-3">
        <p className="text-muted-foreground font-bold">{title}</p>
        <div className={`${color} p-3 rounded-lg`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
      <p className="text-3xl font-bold text-foreground">{value}</p>
    </div>
  );
}

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: 0,
    description: '',
    stock: 0,
    material: '',
    weight: '',
  });
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    activeUsers: 0,
    productsInStock: 0,
  });

  useEffect(() => {
    // Mock data - Replace with real Firebase queries
    setStats({
      totalOrders: 24,
      totalRevenue: 15240.50,
      activeUsers: 47,
      productsInStock: 156,
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          specifications: {
            material: formData.material,
            weight: formData.weight,
          },
          images: ['/placeholder.svg'],
          videos: [],
          thumbnail: '/placeholder.svg',
        }),
      });

      if (response.ok) {
        setFormData({
          name: '',
          category: '',
          price: 0,
          description: '',
          stock: 0,
          material: '',
          weight: '',
        });
        setShowForm(false);
      }
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Dashboard Admin</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg"
          >
            <Plus size={20} />
            Novo Produto
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total de Pedidos"
            value={stats.totalOrders}
            icon={ShoppingBag}
            color="bg-blue-500"
          />
          <StatCard
            title="Faturamento"
            value={`R$ ${stats.totalRevenue.toFixed(2)}`}
            icon={TrendingUp}
            color="bg-green-500"
          />
          <StatCard
            title="Usuários Ativos"
            value={stats.activeUsers}
            icon={Users}
            color="bg-purple-500"
          />
          <StatCard
            title="Produtos em Estoque"
            value={stats.productsInStock}
            icon={Package}
            color="bg-amber-500"
          />
        </div>

        {/* Recent Activity */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Pedidos Recentes</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-background rounded">
                  <div>
                    <p className="font-bold">Pedido #{1000 + i}</p>
                    <p className="text-sm text-muted-foreground">Cliente #{i}</p>
                  </div>
                  <span className="font-bold text-primary">R$ {(300 + i * 50).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Produtos Populares</h2>
            <div className="space-y-3">
              {['Corrente Dourada Premium', 'Ouro 18k', 'Pulseira Prata', 'Anel Premium', 'Pingente Brilho'].map((name, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-background rounded">
                  <p className="font-bold">{name}</p>
                  <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">
                    {20 + i * 5} vendas
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formulário */}
        {showForm && (
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Criar Novo Produto</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome do Produto"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground"
                  required
                />
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="px-4 py-2 bg-muted border border-border rounded-lg text-foreground"
                  required
                >
                  <option value="">Selecione Categoria</option>
                  <option value="correntes">Correntes</option>
                  <option value="pulseiras">Pulseiras</option>
                  <option value="pingentes">Pingentes</option>
                  <option value="aneis">Anéis</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Preço"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                  className="px-4 py-2 bg-muted border border-border rounded-lg text-foreground"
                  required
                />
                <input
                  type="number"
                  placeholder="Estoque"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                  className="px-4 py-2 bg-muted border border-border rounded-lg text-foreground"
                  required
                />
              </div>

              <textarea
                placeholder="Descrição"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Material"
                  value={formData.material}
                  onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                  className="px-4 py-2 bg-muted border border-border rounded-lg text-foreground"
                />
                <input
                  type="text"
                  placeholder="Peso"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  className="px-4 py-2 bg-muted border border-border rounded-lg text-foreground"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg"
                >
                  Criar Produto
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-card"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Lista de Produtos */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted border-b border-border">
                <th className="px-6 py-3 text-left font-bold">Produto</th>
                <th className="px-6 py-3 text-left font-bold">Categoria</th>
                <th className="px-6 py-3 text-left font-bold">Preço</th>
                <th className="px-6 py-3 text-left font-bold">Estoque</th>
                <th className="px-6 py-3 text-left font-bold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                    Nenhum produto cadastrado
                  </td>
                </tr>
              ) : (
                products.map((product: any) => (
                  <tr key={product.id} className="border-b border-border hover:bg-muted">
                    <td className="px-6 py-3 font-bold">{product.name}</td>
                    <td className="px-6 py-3">{product.category}</td>
                    <td className="px-6 py-3">R$ {product.price.toFixed(2)}</td>
                    <td className="px-6 py-3">{product.stock}</td>
                    <td className="px-6 py-3 flex gap-2">
                      <button className="p-2 hover:bg-card rounded transition-colors">
                        <Edit size={18} className="text-primary" />
                      </button>
                      <button className="p-2 hover:bg-card rounded transition-colors">
                        <Trash2 size={18} className="text-destructive" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
