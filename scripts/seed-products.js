import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';

// Ler credencial do arquivo ou env
const credentialPath = process.env.FIREBASE_ADMIN_SDK_KEY;
let serviceAccount;

if (credentialPath && credentialPath.startsWith('{')) {
  serviceAccount = JSON.parse(credentialPath);
} else if (credentialPath && fs.existsSync(credentialPath)) {
  serviceAccount = JSON.parse(fs.readFileSync(credentialPath, 'utf8'));
} else {
  console.error('FIREBASE_ADMIN_SDK_KEY não configurada corretamente');
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const PRODUCTS = [
  {
    name: 'Corrente Dourada Premium 50cm',
    category: 'correntes',
    price: 299.90,
    description: 'Corrente de ouro dourado com acabamento impecável. Perfeita para quem quer destaque e elegância. Cada elo é meticulosamente trabalhado.',
    thumbnail: 'corrente-dourada.jpg',
    images: ['corrente-dourada.jpg'],
    videos: [],
    specifications: { weight: '25g', material: 'Ouro Dourado', dimensions: '50cm x 5mm' },
    stock: 10,
  },
  {
    name: 'Ouro 18K Premium 55cm',
    category: 'correntes',
    price: 499.90,
    description: 'Corrente de ouro 18 quilates com a mais alta qualidade. Ideal para ocasiões especiais e uso diário luxuoso.',
    thumbnail: 'corrente-ouro-18k.jpg',
    images: ['corrente-ouro-18k.jpg'],
    videos: [],
    specifications: { weight: '32g', material: 'Ouro 18K', dimensions: '55cm x 6mm' },
    stock: 5,
  },
  {
    name: 'Corrente Fina Delicada 45cm',
    category: 'correntes',
    price: 199.90,
    description: 'Corrente fina e delicada, perfeita para uso diário e discreto.',
    thumbnail: 'corrente-fina.jpg',
    images: ['corrente-fina.jpg'],
    videos: [],
    specifications: { weight: '15g', material: 'Ouro Dourado', dimensions: '45cm x 3mm' },
    stock: 15,
  },
  {
    name: 'Pingente Brilho Cristal',
    category: 'pingentes',
    price: 189.90,
    description: 'Pingente brilhante com design sofisticado e cristal de alta qualidade.',
    thumbnail: 'pingente-brilho.jpg',
    images: ['pingente-brilho.jpg'],
    videos: [],
    specifications: { weight: '12g', material: 'Ouro Dourado + Cristal', dimensions: '2cm x 1.5cm' },
    stock: 20,
  },
  {
    name: 'Pingente Premium Gold',
    category: 'pingentes',
    price: 249.90,
    description: 'Pingente premium em ouro puro com design exclusivo.',
    thumbnail: 'pingente-premium.jpg',
    images: ['pingente-premium.jpg'],
    videos: [],
    specifications: { weight: '14g', material: 'Ouro 18K', dimensions: '2.2cm x 1.8cm' },
    stock: 8,
  },
  {
    name: 'Pulseira Prata Premium 18cm',
    category: 'pulseiras',
    price: 159.90,
    description: 'Pulseira em prata esterlina com acabamento impecável e polida.',
    thumbnail: 'pulseira-prata.jpg',
    images: ['pulseira-prata.jpg'],
    videos: [],
    specifications: { weight: '18g', material: 'Prata Esterlina 925', dimensions: '18cm' },
    stock: 12,
  },
  {
    name: 'Pulseira Dourada Luxo 19cm',
    category: 'pulseiras',
    price: 279.90,
    description: 'Pulseira dourada com design luxuoso, elegante e sofisticado.',
    thumbnail: 'pulseira-dourada.jpg',
    images: ['pulseira-dourada.jpg'],
    videos: [],
    specifications: { weight: '22g', material: 'Ouro Dourado', dimensions: '19cm' },
    stock: 7,
  },
  {
    name: 'Pulseira Mista Ouro Prata',
    category: 'pulseiras',
    price: 219.90,
    description: 'Pulseira em combinação de ouro e prata, estilo contemporâneo.',
    thumbnail: 'pulseira-mista.jpg',
    images: ['pulseira-mista.jpg'],
    videos: [],
    specifications: { weight: '20g', material: 'Ouro + Prata', dimensions: '18.5cm' },
    stock: 6,
  },
  {
    name: 'Anel Premium Tamanho 20',
    category: 'aneis',
    price: 219.90,
    description: 'Anel de design premium para ocasiões especiais e uso diário.',
    thumbnail: 'anel-premium.jpg',
    images: ['anel-premium.jpg'],
    videos: [],
    specifications: { weight: '8g', material: 'Ouro Dourado', dimensions: 'Tamanho 20' },
    stock: 25,
  },
  {
    name: 'Anel Duplo Ouro 18',
    category: 'aneis',
    price: 289.90,
    description: 'Anel duplo com design exclusivo em ouro 18 quilates.',
    thumbnail: 'anel-duplo.jpg',
    images: ['anel-duplo.jpg'],
    videos: [],
    specifications: { weight: '9g', material: 'Ouro 18K', dimensions: 'Tamanho 18' },
    stock: 10,
  },
  {
    name: 'Anel Ouro Fino Elegante 22',
    category: 'aneis',
    price: 179.90,
    description: 'Anel fino e elegante, perfeito para uso diário.',
    thumbnail: 'anel-ouro.jpg',
    images: ['anel-ouro.jpg'],
    videos: [],
    specifications: { weight: '6g', material: 'Ouro Dourado', dimensions: 'Tamanho 22' },
    stock: 18,
  },
  {
    name: 'Colar Executivo 60cm',
    category: 'correntes',
    price: 399.90,
    description: 'Colar executivo em ouro puro, design formal e elegante.',
    thumbnail: 'colar-executivo.jpg',
    images: ['colar-executivo.jpg'],
    videos: [],
    specifications: { weight: '40g', material: 'Ouro 18K', dimensions: '60cm x 8mm' },
    stock: 4,
  },
  {
    name: 'Kit Completo Joias Ouro',
    category: 'correntes',
    price: 799.90,
    description: 'Kit completo com corrente, pulseira e anel combinados em ouro.',
    thumbnail: 'kit-completo-joias.jpg',
    images: ['kit-completo-joias.jpg'],
    videos: [],
    specifications: { weight: '55g', material: 'Ouro Dourado', dimensions: 'Conjunto' },
    stock: 3,
  },
];

async function seedProducts() {
  try {
    console.log('Iniciando seed de produtos...');
    
    let count = 0;
    for (const product of PRODUCTS) {
      await db.collection('products').add({
        ...product,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      count++;
      console.log(`✓ [${count}/${PRODUCTS.length}] ${product.name}`);
    }

    console.log('\n✓ Seed concluído! Todos os produtos foram criados.');
    console.log(`Total de produtos: ${PRODUCTS.length}`);
    process.exit(0);
  } catch (error) {
    console.error('Erro durante seed:', error);
    process.exit(1);
  }
}

seedProducts();
