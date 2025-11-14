import { adminDb, adminStorage } from '@/lib/firebase-admin';
import { Product, Category } from '@/types';

export async function createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) {
  try {
    const docRef = await adminDb.collection('products').add({
      ...product,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
}

export async function updateProduct(id: string, updates: Partial<Product>) {
  try {
    await adminDb.collection('products').doc(id).update({
      ...updates,
      updatedAt: new Date(),
    });
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    throw error;
  }
}

export async function deleteProduct(id: string) {
  try {
    await adminDb.collection('products').doc(id).delete();
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    throw error;
  }
}

export async function createCategory(category: Omit<Category, 'id'>) {
  try {
    const docRef = await adminDb.collection('categories').add(category);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    throw error;
  }
}

export async function createOrder(order: any) {
  try {
    const docRef = await adminDb.collection('orders').add({
      ...order,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    throw error;
  }
}
