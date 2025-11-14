# Guia Completo de Deploy - Gueto Joias

## Pré-requisitos

1. Conta Firebase criada (https://firebase.google.com)
2. Vercel account (https://vercel.com)
3. Node.js 18+ instalado
4. Git configurado

## Passo 1: Setup Firebase

### 1.1 Criar Projeto Firebase

1. Ir para Firebase Console
2. Criar novo projeto "gueto-joias"
3. Habilitar Google Analytics (opcional)

### 1.2 Configurar Autenticação

1. Em "Build" > "Authentication":
   - Habilitar "Email/Password"
   - Habilitar "Google"
   - Habilitar "Apple"

### 1.3 Criar Firestore Database

1. Em "Build" > "Firestore Database":
   - Modo: Começar no modo teste
   - Região: `southamerica-east1` (São Paulo)
   - Criar

### 1.4 Configurar Storage

1. Em "Build" > "Storage":
   - Criar bucket padrão
   - Localização: `southamerica-east1`

### 1.5 Gerar Credenciais

**Para Frontend:**
1. Projeto > Configurações > Aplicativos > Web (+ adicionar)
2. Copiar credenciais para `.env.local`

**Para Admin SDK:**
1. Projeto > Configurações > Contas de Serviço
2. Firebase Admin SDK > Gerar nova chave privada
3. Copiar JSON para `FIREBASE_ADMIN_SDK_KEY`

## Passo 2: Estrutura do Banco Firestore

### Collections

\`\`\`
/products
  ├── id
  ├── name
  ├── category
  ├── price
  ├── description
  ├── images: []
  ├── videos: []
  ├── thumbnail
  ├── specifications: { material, weight, dimensions }
  ├── stock
  ├── createdAt
  └── updatedAt

/categories
  ├── id
  ├── name
  ├── thumbnail
  ├── description
  └── order

/orders
  ├── id
  ├── userId
  ├── items: []
  ├── total
  ├── status: 'pending|paid|shipped|delivered'
  ├── paymentMethod: 'pix|whatsapp'
  ├── pixQrCode
  ├── createdAt
  └── updatedAt

/users
  ├── id
  ├── email
  ├── name
  ├── phone
  ├── addresses: []
  ├── wishlist: []
  ├── createdAt
  └── updatedAt
\`\`\`

## Passo 3: Deploy no Vercel

### 3.1 Conectar Repositório

\`\`\`bash
# Clone do repositório
git clone seu-repositorio.git
cd gueto-joias

# Instalar dependências
npm install

# Criar .env.local com suas credenciais
cp .env.local.example .env.local
# Editar .env.local com seus valores
\`\`\`

### 3.2 Deploy Automático

1. Ir para https://vercel.com
2. Importar projeto do GitHub
3. Configurar environment variables:
   - Todas as variáveis do `.env.local`
4. Deploy

### 3.3 Deploy Manual

\`\`\`bash
npm run build
npm run export
# Fazer upload da pasta /out para hospedagem
\`\`\`

## Passo 4: Configuração Pós-Deploy

### 4.1 Seed de Produtos

\`\`\`bash
npm run seed-products
\`\`\`

Certifique-se de que `FIREBASE_ADMIN_SDK_KEY` está configurado.

### 4.2 Testar Fluxos

- Homepage com mosaico
- Adicionar produto ao carrinho
- Checkout via WhatsApp
- Login/Cadastro
- Dashboard do cliente

## Passo 5: PIX Configuration

1. Definir sua chave PIX em `.env.local`
2. QR Code será gerado automaticamente

## Passo 6: WhatsApp Integration

1. Adicionar número WhatsApp da loja em `.env.local`
2. Ao clicar em "Comprar via WhatsApp", mensagem será enviada com carrinho completo

## Troubleshooting

### Erro: "Firebase not initialized"
- Verificar `.env.local` e recarregar página

### Erro: "Admin SDK not configured"
- Asegurar que `FIREBASE_ADMIN_SDK_KEY` é válido JSON
- Testar comando: `npm run seed-products`

### PIX QR Code não aparece
- Verificar se `NEXT_PUBLIC_PIX_KEY` está configurada
- Limpar cache do navegador

### WhatsApp não abre
- Verificar formato do número: `55XX999999999`
- Testar em smartphone

## Segurança

### Firebase Security Rules

Para produção, adicionar rules ao Firestore:

\`\`\`javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Produtos públicos
    match /products/{document=**} {
      allow read;
      allow write: if request.auth != null && isAdmin();
    }

    // Usuários
    match /users/{uid} {
      allow read, write: if request.auth.uid == uid;
    }

    // Pedidos
    match /orders/{orderId} {
      allow read: if request.auth != null && (resource.data.userId == request.auth.uid || isAdmin());
      allow create: if request.auth != null;
      allow write: if request.auth != null && isAdmin();
    }

    function isAdmin() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
\`\`\`

### Storage Rules

\`\`\`javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow write: if request.auth != null && isAdmin();
    }
  }
}
\`\`\`

## Monitoramento

### Google Analytics

1. Firebase > Analytics
2. Monitorar eventos de compra, visualizações, etc

### Logs

Verificar em Vercel Dashboard > Logs

## Backup

\`\`\`bash
# Exportar dados Firestore
gcloud firestore export gs://seu-bucket/backup
\`\`\`

## Próximas Melhorias

- [ ] Integração Stripe para pagamento
- [ ] Email marketing automático
- [ ] Sistema de avaliações
- [ ] Recomendações com IA
- [ ] App Mobile React Native
- [ ] Análise de vendas em tempo real

---

**Última atualização**: 2025
**Versão**: 1.0.0
