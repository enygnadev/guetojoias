# Gueto Joias - Setup Final para Produção

## ✓ O que foi entregue

### Funcionalidades Completas
- ✓ Homepage com mosaico pitbull
- ✓ Catálogo de produtos com filtros e busca
- ✓ Página de produto com zoom, PIX QR Code e WhatsApp
- ✓ Carrinho de compras com localStorage
- ✓ Checkout com PIX e WhatsApp
- ✓ Autenticação (Email, Google, Apple)
- ✓ Dashboard do cliente (pedidos, endereços, wishlist)
- ✓ Painel admin (CRUD de produtos e pedidos)
- ✓ Páginas (Sobre, Contato, Privacidade, Termos)
- ✓ Design sistema completo (cores, tipografia, animações)
- ✓ Responsividade mobile
- ✓ Scripts de seed de produtos

## 🚀 Passo 1: Setup Local

### 1.1 Instalar Node.js
- Baixe em: https://nodejs.org/ (v18+ recomendado)
- Verifique: `node --version`

### 1.2 Clonar/Extrair Projeto
\`\`\`bash
# Se foi enviado como ZIP:
unzip gueto-joias.zip
cd gueto-joias

# Se foi via Git:
git clone seu-repositorio
cd gueto-joias
\`\`\`

### 1.3 Instalar Dependências
\`\`\`bash
npm install
\`\`\`

### 1.4 Configurar Firebase

**Criar Projeto Firebase:**
1. Acesse https://console.firebase.google.com/
2. Clique "Criar projeto"
3. Nome: "Gueto Joias" (ou seu nome)
4. Desative Google Analytics (opcional)
5. Clique "Criar projeto"

**Obter Credenciais Web:**
1. No Firebase Console, clique ⚙️ > Project Settings
2. Abra aba "Your apps"
3. Clique "Criar app" > Web
4. Nome: "Gueto Joias Web"
5. Copie as credenciais

**Criar Arquivo `.env.local`:**
\`\`\`bash
# Na raiz do projeto, crie arquivo .env.local
# Copie o conteúdo de .env.local.example
# Preencha com suas credenciais do Firebase

NEXT_PUBLIC_FIREBASE_API_KEY=xxxxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxxx
# ... resto das credenciais
\`\`\`

**Gerar Admin SDK Key:**
1. Firebase Console > Project Settings > Service Accounts
2. Clique "Generate new private key"
3. Salve o arquivo JSON
4. Abra o JSON e copie TODO conteúdo
5. Cole em `FIREBASE_ADMIN_SDK_KEY=` no .env.local

**Configurar Firestore:**
1. Firebase Console > Firestore Database
2. Clique "Create database"
3. Locação: "nearest to you" ou "us-central1"
4. Modo: "Production mode"
5. Criar

**Configurar Autenticação:**
1. Firebase Console > Authentication > Get started
2. Aba "Sign-in method"
3. Ative: Email/Password, Google, Apple

**Configurar Storage (opcional):**
1. Firebase Console > Storage > Get started
2. Pode usar bucket padrão

### 1.5 Configurar WhatsApp e PIX
\`\`\`env
# .env.local

# WhatsApp (formato: 55 + DDD + numero)
NEXT_PUBLIC_WHATSAPP_NUMBER=5547999999999

# PIX (pode ser email, CPF ou chave aleatória)
NEXT_PUBLIC_PIX_KEY=seu-email@example.com
NEXT_PUBLIC_PIX_HOLDER_NAME=Gueto Joias LTDA
\`\`\`

## 📊 Passo 2: Testar Localmente

\`\`\`bash
# Iniciar desenvolvimento
npm run dev

# Abrir navegador: http://localhost:3000
\`\`\`

**Testar funcionalidades:**
- [ ] Homepage carrega sem erros
- [ ] Pode clicar em produtos
- [ ] Página de produto funciona
- [ ] Carrinho adiciona produtos
- [ ] WhatsApp link funciona
- [ ] PIX QR Code aparece
- [ ] Pode fazer login/registro
- [ ] Admin painel funciona

### 2.1 Popular com Produtos (opcional)

\`\`\`bash
# Seed 13 produtos iniciais
npm run seed-products
\`\`\`

## 🌐 Passo 3: Deploy no Vercel

### 3.1 Preparar GitHub
\`\`\`bash
# Criar repositório GitHub
git init
git add .
git commit -m "Initial commit: Gueto Joias production"
git branch -M main
git remote add origin https://github.com/seu-usuario/gueto-joias.git
git push -u origin main
\`\`\`

### 3.2 Deploy no Vercel

1. Acesse https://vercel.com
2. Clique "New Project"
3. Selecione "Import Git Repository"
4. Cole URL do seu repositório
5. Selecione e importe
6. **Environment Variables:**
   - Clique "Environment Variables"
   - Adicione todas as variáveis do `.env.local`:
     - `NEXT_PUBLIC_FIREBASE_API_KEY`
     - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
     - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
     - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
     - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
     - `NEXT_PUBLIC_FIREBASE_APP_ID`
     - `FIREBASE_ADMIN_SDK_KEY`
     - `NEXT_PUBLIC_STORE_NAME`
     - `NEXT_PUBLIC_STORE_LOCATION`
     - `NEXT_PUBLIC_WHATSAPP_NUMBER`
     - `NEXT_PUBLIC_PIX_KEY`
     - `NEXT_PUBLIC_PIX_HOLDER_NAME`
7. Clique "Deploy"

### 3.3 Conectar Domínio (opcional)

1. Vercel Dashboard > Settings > Domains
2. Clique "Add Domain"
3. Digite seu domínio (ex: guetojoias.com)
4. Configure DNS records (Vercel fornece instruções)
5. Aguarde propagação (até 24h)

## 📱 Passo 4: Configurações Finais

### 4.1 Metadata e SEO
Edite `app/layout.tsx`:
\`\`\`typescript
export const metadata: Metadata = {
  title: 'Gueto Joias - Joias Luxuosas',
  description: 'Joias de alta qualidade com estilo gueto, funk e exclusividade.',
};
\`\`\`

### 4.2 Adicionar Imagens de Produto
1. Acesse Firebase Storage
2. Crie pasta `products`
3. Upload suas imagens
4. No código, referenças como `/seu-produto.jpg`

### 4.3 Customizar Cores (opcional)
Edite `app/globals.css`:
\`\`\`css
:root {
  --primary: #d4af37;  /* Dourado - mude aqui */
  --secondary: #c0c0c0; /* Prata */
  /* ... outros tokens */
}
\`\`\`

## 🔒 Segurança - Firestore Rules

Cole no Firestore Rules:

\`\`\`javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Produtos - todos podem ler
    match /products/{document=**} {
      allow read: if true;
      allow write: if false; // Apenas via admin
    }

    // Usuários - apenas dono pode ler/escrever
    match /users/{uid} {
      allow read, write: if request.auth.uid == uid;
    }

    // Pedidos - apenas dono pode ler, admin escreve
    match /orders/{document=**} {
      allow read: if request.auth.uid == resource.data.userId;
      allow write: if false; // Apenas via Cloud Functions
    }
  }
}
\`\`\`

## 📋 Checklist Final

- [ ] `.env.local` preenchido com credenciais
- [ ] Firebase projeto criado
- [ ] Firestore database criado
- [ ] Authentication configurada (Email, Google, Apple)
- [ ] `npm install` executado
- [ ] `npm run dev` funciona localmente
- [ ] Testou compra via WhatsApp
- [ ] Testou PIX QR Code
- [ ] Testou autenticação
- [ ] GitHub repositório criado
- [ ] Vercel project criado e deployado
- [ ] Variáveis de ambiente no Vercel
- [ ] Deploy funcionando
- [ ] Domínio customizado (opcional)

## 🆘 Troubleshooting

**Erro: "Firebase API Key not found"**
- Verifique `.env.local` tem `NEXT_PUBLIC_FIREBASE_API_KEY`
- Restart `npm run dev`

**Erro: "Admin SDK Key missing"**
- Verifique `FIREBASE_ADMIN_SDK_KEY` no Vercel
- Certifique-se é um JSON válido

**Carrinho não persiste entre páginas**
- localStorage deve estar habilitado no navegador
- Verifique console para erros

**PIX QR Code não aparece**
- Verifique `NEXT_PUBLIC_PIX_KEY` está preenchido
- Pode ser email, CPF ou chave aleatória

**WhatsApp link não funciona**
- Verifique `NEXT_PUBLIC_WHATSAPP_NUMBER` formato: `55 + DDD + número`

## 📞 Suporte

Se tiver dúvidas ou problemas:
1. Verifique TROUBLESHOOTING.md
2. Verifique console do navegador (F12)
3. Verifique Vercel logs (Vercel Dashboard > Deployments)
4. Entre em contato via email ou WhatsApp

## 🎉 Próximos Passos

1. Adicione seus produtos
2. Customize com suas imagens
3. Teste todos os fluxos
4. Compartilhe com clientes
5. Monitore vendas no admin

Pronto! Sua loja está online! 🚀
