import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Layout } from '@/components/layout';
import '@/app/globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Gueto Joias - Joias Luxuosas',
  description: 'Joias de alta qualidade com estilo gueto, funk e exclusividade.',
  icons: {
    icon: '/favicon.ico',
  },
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d4af37" />
      </head>
      <body className="bg-background text-foreground font-sans">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
