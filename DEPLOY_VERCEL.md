# Deploy no Vercel - Passo a Passo

## Requisitos
- GitHub account
- Vercel account (gratuito)
- Projeto com Git inicializado

## Passo 1: Preparar GitHub

\`\`\`bash
git init
git add .
git commit -m "Gueto Joias - Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/gueto-joias.git
git push -u origin main
\`\`\`

## Passo 2: Criar Projeto no Vercel

1. Acesse https://vercel.com/dashboard
2. Clique **"New Project"**
3. Clique **"Import Git Repository"**
4. Cole: `https://github.com/SEU_USUARIO/gueto-joias`
5. Clique **"Import"**

## Passo 3: Configurar Variáveis de Ambiente

1. Em **"Configure Project"**, clique **"Environment Variables"**
2. Adicione cada variável:

| Nome | Valor |
|------|-------|
| NEXT_PUBLIC_FIREBASE_API_KEY | [da Firebase Console] |
| NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN | [seu_projeto].firebaseapp.com |
| NEXT_PUBLIC_FIREBASE_PROJECT_ID | [seu_project_id] |
| NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET | [seu_projeto].appspot.com |
| NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID | [seu_sender_id] |
| NEXT_PUBLIC_FIREBASE_APP_ID | [seu_app_id] |
| FIREBASE_ADMIN_SDK_KEY | {"type":"service_account",...} |
| NEXT_PUBLIC_STORE_NAME | Gueto Joias |
| NEXT_PUBLIC_STORE_LOCATION | Criciúma - SC - Brasil |
| NEXT_PUBLIC_WHATSAPP_NUMBER | 55XXXXXXXXXX |
| NEXT_PUBLIC_PIX_KEY | seu-email@example.com |
| NEXT_PUBLIC_PIX_HOLDER_NAME | Gueto Joias LTDA |

3. Clique **"Deploy"**

## Passo 4: Aguardar Deploy

Vercel irá:
1. Fazer clone do repositório
2. Instalar dependências
3. Fazer build
4. Deploy automático

Você receberá URL assim: `https://gueto-joias.vercel.app`

## Passo 5: Testar Deploy

1. Acesse a URL gerada
2. Teste homepage
3. Teste compra via WhatsApp
4. Teste PIX
5. Teste autenticação

## Deploy Automático

A partir de agora:
1. Faça push para main: `git push`
2. Vercel deploy automaticamente
3. Sem necessidade de fazer nada manualmente

## Custom Domain (opcional)

1. Vercel Dashboard > Project > Settings > Domains
2. Clique "Add Domain"
3. Digite seu domínio
4. Configure DNS records
5. Aguarde propagação

## Troubleshooting

**Build falha com erro Firebase:**
- Verifique variáveis de ambiente no Vercel
- Certifique-se que FIREBASE_ADMIN_SDK_KEY é JSON válido

**Site mostra erro em produção mas funciona localmente:**
- Verifique variáveis de ambiente
- Verifique Vercel logs (Deployments > Logs)

**Erro ao fazer login:**
- Verifique Firebase Auth configurada
- Verifique domínio autorizado no Firebase Console
  - Firebase Console > Authentication > Settings > Authorized domains
  - Adicione: seu_dominio.vercel.app
  - Se custom domain: adicione também seu_dominio.com
