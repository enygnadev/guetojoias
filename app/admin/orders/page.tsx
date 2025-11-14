'use client';

import { useState } from 'react';
import { Package, Check, Clock, Truck } from 'lucide-react';

const MOCK_ORDERS = [
  {
    id: 'ORD001',
    customer: 'João Silva',
    total: 599.80,
    status: 'pending',
    date: '2025-01-10',
    items: 2,
  },
  {
    id: 'ORD002',
    customer: 'Maria Santos',
    total: 299.90,
    status: 'paid',
    date: '2025-01-09',
    items: 1,
  },
  {
    id: 'ORD003',
    customer: 'Carlos Oliveira',
    total: 799.70,
    status: 'shipped',
    date: '2025-01-08',
    items: 3,
  },
];

const statusColors: Record<string, { bg: string; text: string; icon: any }> = {
  pending: { bg: 'bg-yellow-500/20', text: 'text-yellow-500', icon: Clock },
  paid: { bg: 'bg-blue-500/20', text: 'text-blue-500', icon: Check },
  shipped: { bg: 'bg-purple-500/20', text: 'text-purple-500', icon: Truck },
  delivered: { bg: 'bg-green-500/20', text: 'text-green-500', icon: Package },
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const filtered = selectedStatus
    ? orders.filter(o => o.status === selectedStatus)
    : orders;

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const totalOrders = orders.length;

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-5xl font-bold mb-8">GERENCIAR PEDIDOS</h1>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground text-sm mb-2">Total de Pedidos</p>
            <p className="text-4xl font-bold text-primary">{totalOrders}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground text-sm mb-2">Faturamento Total</p>
            <p className="text-4xl font-bold text-primary">R$ {totalRevenue.toFixed(2)}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground text-sm mb-2">Ticket Médio</p>
            <p className="text-4xl font-bold text-primary">R$ {(totalRevenue / totalOrders).toFixed(2)}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedStatus(null)}
            className={`px-4 py-2 rounded font-bold whitespace-nowrap ${
              !selectedStatus
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border border-border hover:border-primary'
            }`}
          >
            Todos
          </button>
          {['pending', 'paid', 'shipped', 'delivered'].map(status => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded font-bold whitespace-nowrap capitalize ${
                selectedStatus === status
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:border-primary'
              }`}
            >
              {status === 'pending' && 'Pendente'}
              {status === 'paid' && 'Pago'}
              {status === 'shipped' && 'Enviado'}
              {status === 'delivered' && 'Entregue'}
            </button>
          ))}
        </div>

        {/* Orders Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-card border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Pedido</th>
                <th className="px-6 py-4 text-left font-bold">Cliente</th>
                <th className="px-6 py-4 text-left font-bold">Itens</th>
                <th className="px-6 py-4 text-left font-bold">Total</th>
                <th className="px-6 py-4 text-left font-bold">Status</th>
                <th className="px-6 py-4 text-left font-bold">Data</th>
                <th className="px-6 py-4 text-left font-bold">Ação</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(order => {
                const statusConfig = statusColors[order.status];
                return (
                  <tr key={order.id} className="border-b border-border hover:bg-background transition-colors">
                    <td className="px-6 py-4 font-bold">{order.id}</td>
                    <td className="px-6 py-4">{order.customer}</td>
                    <td className="px-6 py-4">{order.items}</td>
                    <td className="px-6 py-4 font-bold">R$ {order.total.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded font-bold text-sm ${statusConfig.bg} ${statusConfig.text}`}>
                        {order.status === 'pending' && 'Pendente'}
                        {order.status === 'paid' && 'Pago'}
                        {order.status === 'shipped' && 'Enviado'}
                        {order.status === 'delivered' && 'Entregue'}
                      </span>
                    </td>
                    <td className="px-6 py-4">{new Date(order.date).toLocaleDateString('pt-BR')}</td>
                    <td className="px-6 py-4">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className="px-3 py-1 bg-background border border-border rounded text-sm font-bold focus:outline-none focus:border-primary"
                      >
                        <option value="pending">Pendente</option>
                        <option value="paid">Pago</option>
                        <option value="shipped">Enviado</option>
                        <option value="delivered">Entregue</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
