# Gueto Joias - Loja de Joias Luxuosas

Plataforma completa de e-commerce para loja de joias com design premium estilo gueto/funk, desenvolvida com Next.js 16, Firebase e Tailwind CSS.

## Funcionalidades

- **Homepage com Mosaico Pitbull**: Produtos organizados em grid que forma silhueta de pitbull
- **Página de Produto Completa**: Galeria com zoom, múltiplas imagens/vídeos, PIX com QR Code, WhatsApp
- **Carrinho Inteligente**: Adicionar, remover, atualizar quantidades, cupons de desconto
- **Autenticação Firebase**: Email/Senha, Google, Apple
- **Dashboard do Cliente**: Pedidos, endereços, wishlist, configurações
- **Painel Admin**: CRUD de produtos, categorias, pedidos com status
- **Pagamento PIX**: QR Code dinâmico com integração
- **Integração WhatsApp**: Carrinho com produtos listados enviados via mensagem

## Setup Inicial

### 1. Instalar Dependências

\`\`\`bash
npm install
\`\`\`

### 2. Configurar Variáveis de Ambiente

Crie arquivo `.env.local` com:

\`\`\`env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=seu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id

# Firebase Admin (apenas server-side)
FIREBASE_ADMIN_SDK_KEY=seu_admin_sdk_json

# Loja
NEXT_PUBLIC_STORE_NAME=Gueto Joias
NEXT_PUBLIC_STORE_LOCATION=Criciúma - SC - Brasil
NEXT_PUBLIC_WHATSAPP_NUMBER=55XXXXXXXXXX
NEXT_PUBLIC_PIX_KEY=sua_chave_pix
NEXT_PUBLIC_PIX_HOLDER_NAME=Gueto Joias LTDA
\`\`\`

### 3. Seed de Produtos (opcional)

\`\`\`bash
npm run seed-products
\`\`\`

## Scripts Disponíveis

\`\`\`bash
npm run dev       # Modo desenvolvimento
npm run build     # Build production
npm run export    # Export estático
npm run start     # Iniciar servidor production
npm run seed-products  # Popular banco com produtos iniciais
\`\`\`

## Estrutura do Projeto

\`\`\`
├── app/                    # App Router pages
│   ├── page.tsx           # Homepage com pitbull
│   ├── product/           # Página de produto
│   ├── cart/              # Página do carrinho
│   ├── auth/              # Autenticação
│   ├── dashboard/         # Área do cliente
│   ├── admin/             # Painel admin
│   └── api/               # Route handlers
├── components/            # Componentes reutilizáveis
├── lib/                   # Funções utilitárias
├── hooks/                 # Custom hooks
├── types/                 # TypeScript types
├── scripts/               # Scripts de seed
└── public/                # Imagens e assets
\`\`\`

## Padrões de Design

- **Cores**: Preto (#0a0a0a), Dourado (#d4af37), Prata (#c0c0c0), Amarelo (#ffd700)
- **Tipografia**: Arial Black para headings, Geist para corpo
- **Animações**: Hover scales, glows, shimmer effects
- **Responsive**: Mobile-first, grid responsivo

## Domínios Suportados

- Vercel Deployment
- Suporte para Firebase Hosting
- Static Export possível

## Licença

Proprietário - Gueto Joias 2025

## Suporte

Para dúvidas ou issues, entre em contato via WhatsApp da loja.
