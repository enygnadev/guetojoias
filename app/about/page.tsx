'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="mb-20">
          <h1 className="text-6xl font-bold mb-6">SOBRE GUETO JOIAS</h1>
          <p className="text-xl text-secondary mb-8 max-w-3xl">
            Somos uma marca de joias luxuosas que celebra o estilo, a autenticidade e o poder da exclusividade.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">Nossa Missão</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Criar joias de alta qualidade que expressem a personalidade e o estilo único de cada cliente. Cada peça é cuidadosamente confeccionada para garantir durabilidade e beleza incomparáveis.
            </p>
            <p className="text-lg text-muted-foreground">
              Acreditamos que a verdadeira riqueza está em vestir qualidade e autenticidade. Nossas joias não são apenas acessórios, são declarações de estilo e poder.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="text-6xl font-bold text-primary mb-4">100%</div>
            <p className="text-lg font-bold">Satisfação Garantida</p>
            <p className="text-muted-foreground mt-2">Qualidade premium em cada peça</p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-primary">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Qualidade',
                description: 'Utilizamos apenas os melhores materiais e técnicas de fabricação para garantir durabilidade.',
              },
              {
                title: 'Autenticidade',
                description: 'Cada peça é única e reflete a personalidade exclusiva de quem a veste.',
              },
              {
                title: 'Poder',
                description: 'Nossas joias são símbolos de confiança, força e presença marcante.',
              },
            ].map((value, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-primary">Localização</h2>
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-2xl font-bold mb-2">{process.env.NEXT_PUBLIC_STORE_NAME}</p>
            <p className="text-xl text-secondary mb-4">{process.env.NEXT_PUBLIC_STORE_LOCATION}</p>
            <p className="text-muted-foreground mb-6">
              Enviamos para todo o Brasil com rastreamento garantido.
            </p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre a loja.`}
              className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Entrar em Contato
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
