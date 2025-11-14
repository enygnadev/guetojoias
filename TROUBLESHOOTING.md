# Troubleshooting - Gueto Joias

## Problemas Comuns

### 1. "Cannot find module 'firebase'"

**Problema**: Erro ao tentar importar Firebase

**Solução**:
\`\`\`bash
npm install firebase firebase-admin
npm install --save-dev @types/firebase
\`\`\`

### 2. "Firebase not initialized"

**Problema**: Firebase não conecta na aplicação

**Solução**:
1. Verificar `.env.local` está correto
2. Verificar se as variáveis estão prefixadas com `NEXT_PUBLIC_` (client)
3. Fazer rebuild: `npm run dev`
4. Limpar cache: `Ctrl+Shift+Del`

### 3. "Failed to fetch products"

**Problema**: Produtos não carregam

**Solução**:
1. Verificar se Firestore está criado
2. Verificar se collection `/products` existe
3. Verificar Firestore Security Rules
4. Verificar no browser console para erros

### 4. PIX QR Code não aparece

**Problema**: QR Code não renderiza

**Solução**:
1. Verificar `NEXT_PUBLIC_PIX_KEY` está configurada
2. Limpar cache: `Ctrl+Shift+Del`
3. Testar em navegador diferente
4. Verificar console para erros

### 5. WhatsApp não abre

**Problema**: Clique em "Comprar via WhatsApp" não funciona

**Solução**:
1. Verificar formato do número: `55 + DDD + 9 + número`
   - Exemplo: `5547998765432`
2. Número deve estar válido
3. Testar em smartphone
4. Verificar se WhatsApp está instalado

### 6. Build Falha

**Problema**: `npm run build` retorna erro

**Solução**:
\`\`\`bash
# Limpar cache
npm cache clean --force
rm -rf .next node_modules package-lock.json

# Reinstalar
npm install
npm run build
\`\`\`

### 7. Port 3000 já em uso

**Problema**: Port 3000 já está em uso

**Solução**:
\`\`\`bash
# Usar porta diferente
npm run dev -- -p 3001

# Ou matar processo
# Linux/Mac:
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID [PID] /F
\`\`\`

### 8. Erros de TypeScript

**Problema**: "Type error" durante build

**Solução**:
\`\`\`bash
# Tentar build com skip checks
npm run build -- --swcMinify false

# Ou verificar tipos
npx tsc --noEmit
\`\`\`

### 9. Imagens não aparecem

**Problema**: Placeholder images não carregam

**Solução**:
1. Verificar URLs em `components/pitbull-mosaic.tsx`
2. Adicionar imagens em `/public`
3. Usar paths relativos: `/minha-imagem.jpg`

### 10. Autenticação não funciona

**Problema**: Login/Signup falhando

**Solução**:
1. Verificar Firebase Authentication está habilitado
2. Verificar Security Rules permitem auth
3. Testar credenciais em Firebase Console
4. Verificar Firestore `/users` collection

## Debug Mode

### Ativar console logs

\`\`\`typescript
// Adicionar em components
console.log("[DEBUG] Carregando produto:", productId)
\`\`\`

### Verificar Firebase Conexão

\`\`\`typescript
// lib/debug.ts
import { db } from './firebase'
import { getDocs, collection } from 'firebase/firestore'

export async function testFirebase() {
  try {
    const snapshot = await getDocs(collection(db, 'products'))
    console.log('[DEBUG] Produtos:', snapshot.docs.length)
  } catch (error) {
    console.error('[DEBUG] Erro Firebase:', error)
  }
}
\`\`\`

### Network Tab

1. Abrir DevTools (F12)
2. Aba Network
3. Recarregar página
4. Procurar por erros (status 4xx, 5xx)

## Performance

### Otimizações

\`\`\`bash
# Analisar bundle size
npm install -D @next/bundle-analyzer
npm run analyze
\`\`\`

### Lazy Loading

\`\`\`typescript
// Usar dynamic imports para componentes grandes
import dynamic from 'next/dynamic'

const PitbullMosaic = dynamic(() =>
  import('@/components/pitbull-mosaic').then(mod => mod.PitbullMosaic),
  { loading: () => <p>Carregando...</p> }
)
\`\`\`

## Segurança

### Verificar .env.local

\`\`\`bash
# Não fazer commit de .env.local
git rm --cached .env.local
echo ".env.local" >> .gitignore
\`\`\`

### Verificar API Keys

\`\`\`bash
# Nunca expor chaves privadas
# FIREBASE_ADMIN_SDK_KEY deve estar apenas no servidor
\`\`\`

## Contato Suporte

- Documentação: Veja DEPLOY.md
- Firebase Issues: https://firebase.google.com/support
- Next.js Issues: https://github.com/vercel/next.js/issues
