# 📂 Estrutura do Projeto Gueto Joias

## Árvore de Arquivos Completa

\`\`\`
gueto-joias/
├── app/                              # Next.js 16 App Router
│   ├── layout.tsx                   # Root layout
│   ├── globals.css                  # Estilos globais
│   ├── page.tsx                     # Homepage com pitbull
│   ├── shop/
│   │   └── page.tsx                 # Catálogo com filtros
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx             # Página do produto
│   ├── cart/
│   │   └── page.tsx                 # Carrinho de compras
│   ├── wishlist/
│   │   └── page.tsx                 # Lista de desejos
│   ├── about/
│   │   └── page.tsx                 # Página sobre
│   ├── contact/
│   │   └── page.tsx                 # Contato
│   ├── privacy/
│   │   └── page.tsx                 # Política de privacidade
│   ├── terms/
│   │   └── page.tsx                 # Termos de serviço
│   ├── auth/
│   │   └── page.tsx                 # Login/Registro
│   ├── dashboard/
│   │   └── page.tsx                 # Área do cliente
│   ├── order-success/
│   │   └── page.tsx                 # Sucesso do pedido
│   ├── admin/
│   │   ├── page.tsx                 # Admin home
│   │   ├── products/
│   │   │   └── page.tsx             # Gerenciar produtos
│   │   └── orders/
│   │       └── page.tsx             # Gerenciar pedidos
│   └── api/
│       ├── admin/
│       │   └── products/
│       │       └── route.ts         # CRUD de produtos
│       └── checkout/
│           └── route.ts             # Checkout API
│
├── components/                       # Componentes React
│   ├── header.tsx                   # Header navegação
│   ├── footer.tsx                   # Footer
│   ├── layout.tsx                   # Layout wrapper
│   ├── cart-counter.tsx             # Contador carrinho
│   ├── pitbull-mosaic.tsx           # Grid de produtos pitbull
│   ├── banner-section.tsx           # Banner carrossel
│   ├── product-gallery.tsx          # Galeria com zoom
│   ├── product-details.tsx          # Detalhes do produto
│   ├── cart-item-card.tsx           # Item do carrinho
│   ├── cart-summary.tsx             # Resumo do carrinho
│   ├── auth-form.tsx                # Formulário auth
│   ├── theme-provider.tsx           # Tema provider
│   └── ui/                          # shadcn components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── dialog.tsx
│       └── ... (50+ componentes)
│
├── lib/                              # Utilitários
│   ├── firebase.ts                  # Configuração Firebase
│   ├── firebase-admin.ts            # Admin SDK
│   ├── auth-service.ts              # Serviço de autenticação
│   ├── product-service.ts           # Serviço de produtos
│   ├── admin-service.ts             # Serviço admin
│   └── utils.ts                     # Funções utilitárias
│
├── hooks/                            # React Hooks customizados
│   ├── use-cart.ts                  # Hook do carrinho
│   ├── use-mobile.ts                # Detecção mobile
│   ├── use-toast.ts                 # Notificações
│
├── types/                            # TypeScript Types
│   └── index.ts                     # Types do projeto
│
├── scripts/                          # Scripts executáveis
│   ├── seed-products.js             # Popular banco
│   └── example-products.json        # Dados exemplo
│
├── public/                           # Arquivos estáticos
│   ├── corrente-dourada.jpg
│   ├── corrente-ouro-18k.jpg
│   ├── pingente-brilho.jpg
│   ├── pingente-premium.jpg
│   ├── pulseira-prata.jpg
│   ├── pulseira-dourada.jpg
│   ├── anel-premium.jpg
│   ├── anel-duplo.jpg
│   ├── anel-ouro.jpg
│   ├── colar-executivo.jpg
│   ├── kit-completo-joias.jpg
│   ├── placeholder.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── styles/                           # Estilos adicionais
│   └── globals.css                  # Importado em app/globals.css
│
├── .env.local                        # Variáveis (NÃO commitar)
├── .env.local.example                # Template de variáveis
├── .gitignore                        # Arquivos ignorados
├── components.json                  # shadcn config
├── next.config.mjs                  # Configuração Next.js
├── package.json                     # Dependências e scripts
├── tsconfig.json                    # Configuração TypeScript
├── postcss.config.mjs                # PostCSS config
├── pnpm-lock.yaml                   # Lock file
│
├── README.md                        # Descrição do projeto
├── INSTALLATION.md                  # Como instalar
├── QUICKSTART.md                    # Início rápido
├── DEPLOY.md                        # Deploy detalhado
├── DEPLOY_VERCEL.md                 # Deploy no Vercel
├── SETUP_FINAL.md                   # Setup completo (COMECE AQUI)
├── PRODUCTION_GUIDE.md              # Guia produção
├── TROUBLESHOOTING.md               # Soluções de problemas
├── FINAL_CHECKLIST.md               # Checklist final
├── CHECKLIST_PRODUCAO.md            # Checklist produção
├── PROJECT_STRUCTURE.md             # Este arquivo
└── ENTREGA_FINAL.md                 # Resumo entrega (LEIA PRIMEIRO)
\`\`\`

## 📋 Descrição dos Arquivos Principais

### App Router (`app/`)

**Páginas Públicas:**
- `page.tsx` - Homepage com hero, banner e mosaico pitbull
- `shop/page.tsx` - Catálogo com filtros, busca e ordenação
- `product/[id]/page.tsx` - Detalhe do produto com galeria e PIX
- `cart/page.tsx` - Carrinho com resumo e checkout
- `wishlist/page.tsx` - Lista de produtos salvos
- `about/page.tsx` - Informações sobre loja
- `contact/page.tsx` - Formulário de contato
- `privacy/page.tsx` - Política de privacidade
- `terms/page.tsx` - Termos de serviço

**Páginas Autenticadas:**
- `auth/page.tsx` - Login e registro
- `dashboard/page.tsx` - Área do cliente (abas)
- `order-success/page.tsx` - Confirmação de pedido

**Admin:**
- `admin/page.tsx` - Painel principal admin
- `admin/products/page.tsx` - CRUD de produtos
- `admin/orders/page.tsx` - Gerenciar pedidos

**API Routes:**
- `api/admin/products/route.ts` - Criar/atualizar produtos
- `api/checkout/route.ts` - Processar checkout

### Componentes (`components/`)

**Layout:**
- `header.tsx` - Navegação com logo e menu
- `footer.tsx` - Footer com links e info
- `layout.tsx` - Wrapper de layout
- `theme-provider.tsx` - Provider de tema

**Produto:**
- `pitbull-mosaic.tsx` - Grid de produtos em forma de pitbull
- `banner-section.tsx` - Carrossel de banners
- `product-gallery.tsx` - Galeria com zoom
- `product-details.tsx` - Detalhes e opções de compra
- `cart-item-card.tsx` - Item do carrinho
- `cart-summary.tsx` - Resumo e cupons
- `cart-counter.tsx` - Badge com quantidade

**Auth:**
- `auth-form.tsx` - Formulário login/registro

**UI shadcn:**
- 50+ componentes prontos (button, card, input, etc)

### Serviços (`lib/`)

**Firebase:**
- `firebase.ts` - Cliente Firebase (Auth, Firestore, Storage)
- `firebase-admin.ts` - Admin SDK para servidor

**Autenticação:**
- `auth-service.ts` - Funções login, registro, logout
- Suporta: Email/Senha, Google, Apple

**Produtos:**
- `product-service.ts` - CRUD e busca de produtos
- `admin-service.ts` - Gerenciamento admin

### Hooks (`hooks/`)

- `use-cart.ts` - Estado do carrinho com localStorage
- `use-mobile.ts` - Detecta viewport mobile
- `use-toast.ts` - Notificações

### Types (`types/`)

\`\`\`typescript
interface Product { ... }
interface CartItem { ... }
interface Order { ... }
interface User { ... }
interface Address { ... }
\`\`\`

## 🎨 Design System

### Cores (`app/globals.css`)
\`\`\`css
--primary: #d4af37;          /* Dourado */
--secondary: #c0c0c0;        /* Prata */
--accent: #ffd700;           /* Amarelo */
--background: #0a0a0a;       /* Preto */
--foreground: #ffffff;       /* Branco */
\`\`\`

### Animações
\`\`\`css
@keyframes shimmer { ... }   /* Efeito brilho */
@keyframes glow { ... }      /* Efeito glow */
@keyframes pulse-gold { ... } /* Pulsação */
\`\`\`

### Tipografia
- Headings: Arial Black
- Body: Geist

## 📦 Dependências Principais

\`\`\`json
{
  "next": "16.0.3",
  "react": "19.2.0",
  "firebase": "12.6.0",
  "tailwindcss": "4.1.9",
  "lucide-react": "0.454.0",
  "qrcode.react": "4.2.0",
  "zod": "3.25.76"
}
\`\`\`

## 🚀 Scripts Disponíveis

\`\`\`bash
npm run dev              # Desenvolvimento
npm run build            # Build production
npm run start            # Iniciar production
npm run lint             # ESLint
npm run seed-products    # Popular banco com 13 produtos
npm run export           # Export estático
\`\`\`

## 🔐 Segurança

**Variáveis Sensíveis:**
- Todas em `.env.local` (não commitadas)
- Replicadas em Vercel Environment Variables

**Firestore Rules:**
- Produtos: read-only
- Usuários: apenas dono acessa
- Pedidos: read-only para dono
- Admin: write apenas via API

## 📊 Banco de Dados (Firestore)

\`\`\`
collections:
├── products/
│   ├── id: "1"
│   ├── name: "Corrente..."
│   ├── category: "correntes"
│   └── ... (10+ campos)
│
├── users/
│   ├── uid (Firebase UID)
│   ├── email
│   └── ... (perfil)
│
└── orders/
    ├── id
    ├── userId
    ├── items[]
    └── ... (dados pedido)
\`\`\`

## 🎯 Fluxos Principais

### Compra
\`\`\`
Homepage → Shop → Produto → Carrinho → WhatsApp/PIX → Sucesso
\`\`\`

### Autenticação
\`\`\`
Auth Page → Email/Google/Apple → Dashboard → Logout
\`\`\`

### Admin
\`\`\`
Admin Home → Produtos/Pedidos → CRUD/Atualizar Status
\`\`\`

## 📱 Responsive Breakpoints

\`\`\`
Mobile:    320px - 767px
Tablet:    768px - 1023px
Desktop:   1024px - 1919px
Ultra:     1920px+
\`\`\`

## 🧪 Testando Localmente

\`\`\`bash
# Terminal 1: Desenvolvimento
npm run dev

# Terminal 2: Seed produtos (opcional)
npm run seed-products

# Navegador
http://localhost:3000
\`\`\`

## 🌐 URLs Importantes

- Local Dev: `http://localhost:3000`
- Vercel Prod: `https://seu-projeto.vercel.app`
- Firebase Console: `https://console.firebase.google.com`
- GitHub: `https://github.com/seu-usuario/gueto-joias`

## 📚 Documentação

1. **COMECE AQUI:** `ENTREGA_FINAL.md`
2. **Setup:** `SETUP_FINAL.md`
3. **Deploy:** `DEPLOY_VERCEL.md`
4. **Produção:** `CHECKLIST_PRODUCAO.md`
5. **Problemas:** `TROUBLESHOOTING.md`

## ✅ Tudo Incluído

- ✅ Código-fonte completo
- ✅ Documentação extensiva
- ✅ Scripts de seed
- ✅ Design system
- ✅ Admin dashboard
- ✅ Autenticação completa
- ✅ PIX integrado
- ✅ WhatsApp integrado
- ✅ Pronto para produção
- ✅ SEO otimizado
- ✅ Responsivo
- ✅ Performance otimizada

**Projeto 100% pronto para deploy! 🚀**
