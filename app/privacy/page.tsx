'use client';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-12">POLÍTICA DE PRIVACIDADE</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Gueto Joias ("nós", "nosso" ou "nos") está comprometida com a proteção de sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">2. Informações que Coletamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Podemos coletar informações sobre você da seguinte forma:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Informações fornecidas voluntariamente (nome, email, telefone)</li>
              <li>Dados de transação (histórico de compras, endereço de entrega)</li>
              <li>Informações técnicas (endereço IP, tipo de navegador, páginas visitadas)</li>
              <li>Cookies e dados de rastreamento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">3. Como Usamos Suas Informações</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Processar suas compras e envios</li>
              <li>Enviar comunicações sobre pedidos e promoções</li>
              <li>Melhorar nossos produtos e serviços</li>
              <li>Cumprir obrigações legais</li>
              <li>Prevenir fraudes e atividades ilícitas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">4. Segurança de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de segurança técnicas, administrativas e físicas adequadas para proteger suas informações pessoais contra acesso, alteração, divulgação ou destruição não autorizada.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">5. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco via WhatsApp ou email.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
