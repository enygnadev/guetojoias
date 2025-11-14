'use client';

import { BannerSection } from '@/components/banner-section';
import { PitbullMosaic } from '@/components/pitbull-mosaic';

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-b from-background via-card to-background">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
            GUETO <span className="text-primary">JOIAS</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8 font-bold">
            LUXO, ESTILO E EXCLUSIVIDADE
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Descubra nossa coleção revolucionária de joias premium com design único. Cada peça é uma obra de arte que celebra o estilo gueto.
          </p>
          <a
            href="#collection"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            EXPLORAR COLEÇÃO
          </a>
        </div>
      </div>

      {/* Banner Carrossel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <BannerSection />
      </div>

      {/* Mosaico Pitbull */}
      <div id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PitbullMosaic />
      </div>

      {/* CTA Section */}
      <section className="mt-20 py-16 px-4 bg-card border-t border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary">ESTILO GUETO</h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Cada peça conta uma história de luxo, autenticidade e poder. Somos mais que uma loja - somos um movimento de estilo e exclusividade.
          </p>
          <a
            href="/shop"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            VER TODAS AS PEÇAS
          </a>
        </div>
      </section>
    </main>
  );
}
