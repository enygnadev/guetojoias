export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  videos: string[];
  thumbnail: string;
  specifications: {
    weight?: string;
    material?: string;
    dimensions?: string;
  };
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
  order: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered';
  paymentMethod: 'pix' | 'whatsapp';
  pixQrCode?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  addresses: Address[];
  wishlist: string[];
  orders: Order[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  id: string;
  street: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}
