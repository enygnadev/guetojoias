import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">GUETO JOIAS</h3>
            <p className="text-muted-foreground text-sm">
              Joias luxuosas com estilo, qualidade e exclusividade.
            </p>
            <p className="text-secondary text-xs mt-2">Criciúma - SC - Brasil</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Loja
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="font-bold text-foreground mb-4">CATEGORIAS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop?cat=correntes" className="text-muted-foreground hover:text-primary transition-colors">
                  Correntes
                </Link>
              </li>
              <li>
                <Link href="/shop?cat=pulseiras" className="text-muted-foreground hover:text-primary transition-colors">
                  Pulseiras
                </Link>
              </li>
              <li>
                <Link href="/shop?cat=pingentes" className="text-muted-foreground hover:text-primary transition-colors">
                  Pingentes
                </Link>
              </li>
              <li>
                <Link href="/shop?cat=aneis" className="text-muted-foreground hover:text-primary transition-colors">
                  Anéis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-foreground mb-4">CONTATO</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Criciúma, SC - Brasil</span>
              </div>
              <div className="flex gap-2 items-start">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} className="text-muted-foreground hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </div>
              <div className="flex gap-2 items-start">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:contato@guetojoias.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 Gueto Joias. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">TikTok</a>
              <a href="#" className="hover:text-primary transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
