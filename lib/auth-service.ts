import { auth } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
} from 'firebase/auth';
import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export async function registerUser(email: string, password: string, name: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: name });

    // Criar documento do usuário no Firestore
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      email,
      name,
      phone: '',
      addresses: [],
      wishlist: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return userCredential.user;
  } catch (error) {
    throw new Error('Erro ao registrar usuário');
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error('Email ou senha incorretos');
  }
}

export async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    
    // Criar documento se for primeira vez
    const userDoc = await getDoc(doc(db, 'users', result.user.uid));
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', result.user.uid), {
        email: result.user.email,
        name: result.user.displayName,
        phone: '',
        addresses: [],
        wishlist: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    
    return result.user;
  } catch (error) {
    throw new Error('Erro ao fazer login com Google');
  }
}

export async function loginWithApple() {
  try {
    const provider = new OAuthProvider('apple.com');
    const result = await signInWithPopup(auth, provider);
    
    // Criar documento se for primeira vez
    const userDoc = await getDoc(doc(db, 'users', result.user.uid));
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', result.user.uid), {
        email: result.user.email,
        name: result.user.displayName,
        phone: '',
        addresses: [],
        wishlist: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    
    return result.user;
  } catch (error) {
    throw new Error('Erro ao fazer login com Apple');
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error('Erro ao fazer logout');
  }
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
