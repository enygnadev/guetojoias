# Checklist Produção - Gueto Joias

## Fase 1: Configuração Inicial

### Firebase Setup
- [ ] Projeto Firebase criado
- [ ] Firestore Database criado
- [ ] Authentication habilitada (Email, Google, Apple)
- [ ] Storage configurado
- [ ] Admin SDK key gerada
- [ ] Firestore Rules configuradas

### Variáveis de Ambiente
- [ ] `.env.local` criado localmente
- [ ] Todas as 12 variáveis preenchidas
- [ ] FIREBASE_ADMIN_SDK_KEY é JSON válido
- [ ] NEXT_PUBLIC_WHATSAPP_NUMBER tem formato correto (55XXXXXXXXXXX)
- [ ] Variáveis adicionadas no Vercel

### Projeto Node.js
- [ ] Node.js v18+ instalado
- [ ] `npm install` executado
- [ ] `npm run dev` funciona
- [ ] Sem erros no console

## Fase 2: Teste Local

### Homepage
- [ ] Carrega sem erros
- [ ] Mosaico pitbull se renderiza
- [ ] Animações funcionam
- [ ] Responsive em mobile

### Shop
- [ ] Produtos carregam
- [ ] Filtros funcionam
- [ ] Busca funciona
- [ ] Categoria filtra
- [ ] Sorting funciona

### Produto
- [ ] Galeria com zoom funciona
- [ ] PIX mostra QR Code
- [ ] WhatsApp link funciona
- [ ] Adicionar ao carrinho funciona
- [ ] Especificações mostram

### Carrinho
- [ ] Produtos adicionados mostram
- [ ] Quantidade atualiza
- [ ] Remover funciona
- [ ] Total calcula correto
- [ ] Cupons funcionam
- [ ] Checkout via WhatsApp funciona

### Autenticação
- [ ] Registro com email funciona
- [ ] Login com email funciona
- [ ] Login Google funciona
- [ ] Dashboard acessa após login
- [ ] Logout funciona

### Admin
- [ ] Acessa /admin/products
- [ ] Lista de produtos mostra
- [ ] Pode criar novo produto
- [ ] Pode editar produto
- [ ] Pode deletar produto
- [ ] Aceita /admin/orders

## Fase 3: Deploy

### GitHub
- [ ] Repositório criado
- [ ] Todos arquivos commitados
- [ ] Push para main funciona
- [ ] GitHub sem erros

### Vercel
- [ ] Projeto criado no Vercel
- [ ] GitHub connectado
- [ ] Environment variables adicionadas
- [ ] Build sem erros
- [ ] Deploy sucesso
- [ ] URL Vercel funciona

### Testes em Produção
- [ ] URL Vercel abre homepage
- [ ] Compra via WhatsApp funciona
- [ ] PIX QR Code aparece
- [ ] Autenticação funciona
- [ ] Admin acessa
- [ ] Sem erros 404

## Fase 4: Otimização

### Performance
- [ ] Lighthouse score > 80
- [ ] Images otimizadas
- [ ] CSS minificado
- [ ] JS bundle otimizado

### SEO
- [ ] Meta tags corretas
- [ ] Title e description
- [ ] Open Graph tags
- [ ] robots.txt existe
- [ ] sitemap.xml existe

### Segurança
- [ ] HTTPS habilitado (Vercel default)
- [ ] Firestore rules configuradas
- [ ] Dados sensíveis em variáveis
- [ ] No hardcoded keys

### Responsividade
- [ ] Mobile (320px) funciona
- [ ] Tablet (768px) funciona
- [ ] Desktop (1920px) funciona
- [ ] Todos links funcionam em mobile

## Fase 5: Dados

### Produtos
- [ ] Produtos seedados no Firestore
- [ ] 13+ produtos iniciais
- [ ] Imagens carregam
- [ ] Categorias corretas
- [ ] Preços e estoque

### Categorias
- [ ] Correntes
- [ ] Pulseiras
- [ ] Pingentes
- [ ] Anéis

## Fase 6: Customização (Opcional)

### Branding
- [ ] Logo customizado
- [ ] Cores da loja ajustadas
- [ ] Fontes customizadas
- [ ] Imagens hero customizadas

### Domínio
- [ ] Domínio registrado
- [ ] DNS configurado
- [ ] SSL/TLS ativo
- [ ] www redirect

## Fase 7: Monitoramento

### Analytics
- [ ] Google Analytics configurado
- [ ] Tracking pixels
- [ ] Conversões rastreadas

### Alertas
- [ ] Alertas Vercel configurados
- [ ] Email notificações
- [ ] Deploy alerts

## Final

- [ ] Tudo testado
- [ ] Documentação atualizada
- [ ] Cliente treinado
- [ ] Pronto para produção ✓

**Status:** _______________
**Data:** _______________
**Responsável:** _______________
