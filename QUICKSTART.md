# Quick Start - Gueto Joias em 5 Minutos

## Início Rápido

### 1. Clone/Download
\`\`\`bash
# Ou download do ZIP
git clone seu-repositorio.git
cd gueto-joias
\`\`\`

### 2. Instale
\`\`\`bash
npm install
\`\`\`

### 3. Configure Firebase
\`\`\`bash
# Crie .env.local
NEXT_PUBLIC_FIREBASE_API_KEY=abc123
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu-projeto
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456:web:abc123

# Loja
NEXT_PUBLIC_WHATSAPP_NUMBER=5547999999999
NEXT_PUBLIC_PIX_KEY=seu-email@email.com
\`\`\`

### 4. Rode Localmente
\`\`\`bash
npm run dev
# Abra http://localhost:3000
\`\`\`

### 5. Seed de Produtos (opcional)
\`\`\`bash
npm run seed-products
\`\`\`

## URLs Úteis

- **Home**: http://localhost:3000
- **Admin**: http://localhost:3000/admin
- **Dashboard**: http://localhost:3000/dashboard
- **Carrinho**: http://localhost:3000/cart

## Teste Rápido

1. Abra home - veja o mosaico pitbull
2. Clique em um produto
3. Adicione ao carrinho
4. Vá para checkout
5. Teste PIX ou WhatsApp

## Credenciais de Teste

- Email: test@example.com
- Senha: Test@123456

## Próximas Ações

1. [ ] Configurar Firebase correctamente
2. [ ] Fazer seed de produtos
3. [ ] Testar fluxo de compra
4. [ ] Configurar domínio
5. [ ] Deploy em Vercel

## Troubleshooting

**Erro: Firebase not initialized**
- Verificar .env.local

**Erro: Module not found**
\`\`\`bash
rm -rf node_modules
npm install
\`\`\`

**Build error**
\`\`\`bash
npm run lint -- --fix
npm run build
\`\`\`

## Links Importantes

- [Docs Next.js](https://nextjs.org/docs)
- [Docs Firebase](https://firebase.google.com/docs)
- [Deploy Vercel](https://vercel.com/docs)

---

Sucesso! 🚀
