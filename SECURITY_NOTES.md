# Notas de Segurança - Gueto Joias

## ✓ Variáveis de Ambiente

### NEXT_PUBLIC_* (Cliente - Seguro)
Estas variáveis SÃO expostas ao cliente (por design):
- `NEXT_PUBLIC_FIREBASE_API_KEY` - Credencial publica Firebase
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - Número para contato
- `NEXT_PUBLIC_PIX_KEY` - **Chave PIX é PÚBLICA** (como CNPJ/email)
- `NEXT_PUBLIC_STORE_NAME` - Nome da loja
- `NEXT_PUBLIC_STORE_LOCATION` - Localização

### Seguras (Servidor Apenas)
Estas variáveis NUNCA são expostas:
- `FIREBASE_ADMIN_SDK_KEY` - Admin SDK privado ✓
- `STRIPE_SECRET_KEY` - Chave privada Stripe ✓

## 🔐 Por que NEXT_PUBLIC_PIX_KEY é Seguro?

A chave PIX é **intencionalmente pública** porque:

1. **Função:** É para RECEBER pagamentos (não enviar)
2. **Equivalente:** Semelhante a:
   - Email para contato
   - Número de telefone
   - CNPJ da empresa
   - Número de conta bancária

3. **Risco:** Nenhum
   - Ninguém consegue "sacar" ou "transferir" conhecendo a chave
   - Só conseguem ENVIAR dinheiro

4. **Visibilidade:**
   - Mostrada ao cliente na tela de compra
   - Necessária para gerar QR Code
   - Cliente precisa copiar ou escanear
   - Deve estar 100% públicas

## ✅ Práticas Implementadas

- ✓ Admin SDK em variáveis privadas (não prefixadas)
- ✓ Nenhuma chave secreta em client code
- ✓ Firebase Security Rules configuradas
- ✓ Dados sensíveis em Firestore protegidos por RLS
- ✓ Autenticação via Firebase Auth nativa
- ✓ Ambiente variables no Vercel (não no código)

## 🚀 Deploy Seguro

### Vercel Environment Variables
1. Variáveis `NEXT_PUBLIC_*` → Expostas (ok)
2. Variáveis privadas → Nunca aparecem em bundle
3. Build-time substitution → Valores injetados na build

### Firestore Rules
\`\`\`
- Products: read-only
- Users: read/write own data
- Orders: read own orders only
- Admin: write via API com validação
\`\`\`

## 🔍 Validação de Segurança

✓ Nenhuma senha hardcoded
✓ Nenhuma chave privada no código
✓ Admin SDK não acessível client-side
✓ PIX Key é intencionalmente pública
✓ WhatsApp number é público (contato)
✓ Firebase API Key é pública (por design)
✓ Firestore Rules protegem dados

## 📋 Checklist de Segurança

- [x] Admin SDK only no servidor
- [x] PIX Key é público (correto)
- [x] Nenhuma senha exposta
- [x] Firebase Rules configuradas
- [x] Auth nativa Firebase
- [x] HTTPS/SSL (Vercel auto)
- [x] Environment vars no Vercel
- [x] Nenhuma chave no .gitignore
\`\`\`
