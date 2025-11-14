# Guia de Instalação - Gueto Joias

## Opção 1: Download ZIP (Recomendado para começar rápido)

1. Clique no botão "Download ZIP" em v0.app
2. Extraia o arquivo
3. Execute em seu terminal:

\`\`\`bash
cd gueto-joias
npm install
npm run dev
\`\`\`

4. Acesse http://localhost:3000

## Opção 2: GitHub + Vercel (Recomendado para produção)

### 2.1 Fazer Push para GitHub

\`\`\`bash
git init
git add .
git commit -m "Initial commit - Gueto Joias"
git branch -M main
git remote add origin https://github.com/seu-usuario/gueto-joias.git
git push -u origin main
\`\`\`

### 2.2 Deploy no Vercel

1. Ir para https://vercel.com
2. Clicar "New Project"
3. Selecionar repositório GitHub
4. Configurar environment variables
5. Deploy

## Opção 3: Setup Local Completo

### 3.1 Requisitos

- Node.js 18+
- npm ou yarn
- Git
- Conta Firebase

### 3.2 Instalar

\`\`\`bash
# 1. Clone ou extraia o projeto
cd gueto-joias

# 2. Instale dependências
npm install

# 3. Configure variáveis de ambiente
cp .env.local.example .env.local

# 4. Edite .env.local com seus dados Firebase
nano .env.local  # ou use seu editor favorito

# 5. Rode o servidor de desenvolvimento
npm run dev

# 6. Abra http://localhost:3000
\`\`\`

### 3.3 Build para Produção

\`\`\`bash
# Build
npm run build

# Testar build localmente
npm run start

# Exportar estático (se necessário)
npm run export
\`\`\`

## Configuração Firebase Passo a Passo

1. **Criar Projeto**
   - Firebase Console > New Project
   - Nome: gueto-joias
   - Enable Google Analytics (opcional)

2. **Autenticação**
   - Build > Authentication
   - Sign-in method: Email/Password ✓
   - Sign-in method: Google ✓
   - Sign-in method: Apple ✓

3. **Firestore**
   - Build > Firestore Database
   - Create Database > Test Mode
   - Location: southamerica-east1

4. **Storage**
   - Build > Storage
   - Create bucket > Default

5. **Credenciais**
   - Project Settings > General
   - Copiar Firebase Config JSON
   - Colar em `.env.local` prefixando com `NEXT_PUBLIC_FIREBASE_`

6. **Admin SDK**
   - Project Settings > Service Accounts
   - Firebase Admin SDK > Generate new private key
   - Colar JSON em `FIREBASE_ADMIN_SDK_KEY`

## Verificar Instalação

\`\`\`bash
# Testar se tudo está funcionando
npm run dev

# Em outro terminal
curl http://localhost:3000
\`\`\`

Você deve ver a homepage com "GUETO JOIAS"

## Problemas Comuns

### "Cannot find module 'firebase'"

\`\`\`bash
npm install firebase firebase-admin
\`\`\`

### "Build error: ESLint/TypeScript"

\`\`\`bash
npm run lint  # verificar erros
npm install --legacy-peer-deps  # se necessário
\`\`\`

### Port 3000 já em uso

\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Problemas com Firebase

- Verificar `.env.local`
- Testar credenciais em Firebase Console
- Verificar Rules (Storage/Firestore)
- Ativar APIs necessárias

## Próximos Passos

1. Seed inicial de produtos: `npm run seed-products`
2. Testar homepage
3. Criar conta de teste
4. Fazer uma compra de teste
5. Acessar dashboard admin

## Suporte

Para problemas, consulte:
- DEPLOY.md para produção
- Documentação Next.js: https://nextjs.org
- Documentação Firebase: https://firebase.google.com/docs
