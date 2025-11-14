'use client';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-12">TERMOS DE SERVIÇO</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar e usar o site da Gueto Joias, você concorda em estar vinculado por estes Termos de Serviço.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">2. Descrição do Serviço</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Gueto Joias fornece uma plataforma de e-commerce para venda de joias premium. Nós nos reservamos o direito de modificar ou descontinuar nossos serviços a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">3. Limitações de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Gueto Joias não será responsável por danos indiretos, incidentais, especiais ou consequentes decorrentes do uso ou impossibilidade de uso deste site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">4. Política de Devolução</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Devoluções aceitas em até 30 dias após recebimento</li>
              <li>Produto deve estar em perfeito estado</li>
              <li>Reembolso processado em até 7 dias úteis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">5. Proteção do Consumidor</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todos os produtos são autênticos e com garantia. Oferecemos 100% de satisfação garantida em todas as compras.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
