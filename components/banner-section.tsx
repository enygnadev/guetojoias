'use client';

import { useState, useEffect } from 'react';

const BANNERS = [
  {
    title: 'ESTILO GUETO',
    subtitle: 'Joias que falam',
    description: 'Luxo e autenticidade em cada detalhe',
    color: 'from-primary/20 to-accent/20',
  },
  {
    title: 'COLEÇÃO OURO',
    subtitle: 'Exclusividade Total',
    description: 'As melhores peças em ouro 18k',
    color: 'from-accent/20 to-secondary/20',
  },
  {
    title: 'PRATA PREMIUM',
    subtitle: 'Elegância Pura',
    description: 'Prata esterlina com acabamento impecável',
    color: 'from-secondary/20 to-primary/20',
  },
];

export function BannerSection() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section className="relative w-full h-96 overflow-hidden rounded-lg border border-border bg-card mb-16">
      <div className="relative w-full h-full">
        {BANNERS.map((banner, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-r ${banner.color} flex flex-col justify-center items-center text-center px-4`}>
              <p className="text-primary font-bold text-sm md:text-base mb-2 tracking-widest">
                {banner.subtitle}
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 pulse-gold">
                {banner.title}
              </h2>
              <p className="text-lg text-secondary max-w-lg">
                {banner.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {BANNERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              setAutoPlay(false);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === current ? 'bg-primary w-6' : 'bg-border'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
