# Gueto Joias - Guia de Produção

## Deploy Checklist

### 1. Preparação do Ambiente
- [ ] Configurar variáveis de ambiente no Vercel
- [ ] Conectar repositório GitHub
- [ ] Ativar deploy automático em push para main

### 2. Validação de Funcionalidades
- [ ] Testar página de shop com filtros
- [ ] Testar carrinho de compras
- [ ] Testar checkout com PIX
- [ ] Testar WhatsApp integration
- [ ] Testar autenticação (Google, Apple, Email)
- [ ] Testar admin dashboard
- [ ] Testar wishlist
- [ ] Testar responsividade em mobile

### 3. SEO & Performance
- [ ] Configurar meta tags em app/layout.tsx
- [ ] Adicionar sitemap.xml
- [ ] Adicionar robots.txt
- [ ] Otimizar imagens (usar next/image)
- [ ] Implementar lazy loading

### 4. Segurança
- [ ] Validar CORS
- [ ] Implementar rate limiting
- [ ] Proteger rotas admin
- [ ] Adicionar SSL/TLS
- [ ] Validar dados do formulário no backend

### 5. Analytics & Monitoring
- [ ] Integrar Google Analytics
- [ ] Configurar error tracking (Sentry)
- [ ] Monitorar performance
- [ ] Rastrear conversões

### 6. Dados Iniciais
- [ ] Correr script seed-products.js
- [ ] Popularbanco com 50+ produtos
- [ ] Adicionar imagens em alta resolução
- [ ] Configurar categorias

### 7. Integração de Pagamento
- [ ] Gerar chaves PIX reais
- [ ] Testar recebimento de PIX
- [ ] Integrar com sistema de notificação
- [ ] Configurar comprovante automático

### 8. Notificações
- [ ] Email de confirmação de pedido
- [ ] WhatsApp de rastreamento
- [ ] SMS de atualização (opcional)

## Variáveis de Ambiente Necessárias

\`\`\`env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
FIREBASE_ADMIN_SDK_KEY=

# Loja
NEXT_PUBLIC_STORE_NAME=Gueto Joias
NEXT_PUBLIC_STORE_LOCATION=Criciúma - SC
NEXT_PUBLIC_WHATSAPP_NUMBER=55XXXXXXXXXX
NEXT_PUBLIC_PIX_KEY=xxx@gueto.joias

# Stripe (opcional)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# Analytics
NEXT_PUBLIC_GA_ID=
\`\`\`

## Deploy no Vercel

1. Push para GitHub
2. Em Vercel: Settings > Environment Variables
3. Adicionar todas as variáveis necessárias
4. Deploy automático acontecerá ao fazer push

## Domínio Customizado

1. Em Vercel: Settings > Domains
2. Adicionar domínio customizado
3. Configurar DNS records

## Scripts Úteis

\`\`\`bash
# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Testar build localmente
npm run start

# Seed de produtos
node scripts/seed-products.js

# Lint
npm run lint
\`\`\`

## Suporte

Para suporte técnico, entre em contato via:
- WhatsApp: [número configurado]
- Email: contato@guetojoias.com.br
