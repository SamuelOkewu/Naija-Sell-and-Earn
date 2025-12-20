
export enum UserRole {
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
  SELLER = 'SELLER',
  GUEST = 'GUEST'
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  balance: number;
  pendingBalance: number;
}

export interface Product {
  id: string;
  ownerId: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: string;
  commission: number; // For the seller (5%)
}

export interface Order {
  id: string;
  productId: string;
  sellerId?: string;
  amount: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  createdAt: string;
}

export interface PayoutRequest {
  id: string;
  userId: string;
  amount: number;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  bankName: string;
  accountNumber: string;
  createdAt: string;
}
