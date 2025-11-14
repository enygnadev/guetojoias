'use client';

import { useState } from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const message = `*CONTATO GUETO JOIAS*

Nome: ${formData.name}
Email: ${formData.email}
Assunto: ${formData.subject}

Mensagem:
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`);
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-6xl font-bold mb-8">ENTRE EM CONTATO</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Informações de Contato</h2>
            </div>

            {[
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                description: 'Resposta rápida',
                link: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais.`,
                text: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
              },
              {
                icon: Mail,
                title: 'Email',
                description: 'Envie sua mensagem',
                link: 'mailto:contato@guetojoias.com.br',
                text: 'contato@guetojoias.com.br',
              },
              {
                icon: Phone,
                title: 'Telefone',
                description: 'Chamada direta',
                link: `tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
                text: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
              },
            ].map((contact, i) => {
              const Icon = contact.icon;
              return (
                <a
                  key={i}
                  href={contact.link}
                  className="group flex gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex-shrink-0">
                    <Icon className="text-primary group-hover:scale-110 transition-transform" size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{contact.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{contact.description}</p>
                    <p className="text-primary font-bold">{contact.text}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Envie uma Mensagem</h2>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Nome</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Assunto</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                  placeholder="Assunto"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Mensagem</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
