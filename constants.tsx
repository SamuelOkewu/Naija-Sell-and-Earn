
import { Product } from './types';

// Standard Vite environment variable accessor
const getEnv = (key: string, fallback: string) => {
  // Use type assertion to any to resolve "Property 'env' does not exist on type 'ImportMeta'"
  return (import.meta as any).env[key] || fallback;
};

export const APP_NAME = "Naija Sell and Earn";
export const ADMIN_NAME = "Okewu Samuel Owoicho";
export const ADMIN_EMAIL = getEnv('VITE_ADMIN_EMAIL', "okewusamuelowoicho@gmail.com");
export const ADMIN_PHONE = getEnv('VITE_ADMIN_PHONE', "+2349063676131");

// API Keys for Integrations
export const PAYSTACK_PUBLIC_KEY = getEnv('VITE_PAYSTACK_PUBLIC_KEY', "pk_test_mock_key");
export const TERMII_API_KEY = getEnv('VITE_TERMII_API_KEY', "mock_termii_key");

export const MOCK_PRODUCTS: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `prod-${i + 1}`,
  ownerId: `owner-${(i % 3) + 1}`,
  name: [
    "Alaba Grade A Generator", "Leather Designer Bag", "Balogun Wholesale Sneakers", 
    "Quality Agbada Material", "Smart Android TV", "Nigerian Print Ankara",
    "Power Bank 20,000mAh", "Office Ergonomic Chair", "Cordless Electric Kettle",
    "Modern Sofa Set", "Wireless Earbuds Pro", "Solar Inverter 5KVA"
  ][i],
  description: "High quality item directly from Balogun or Alaba market. Authentic, durable, and ready for shipping across Nigeria.",
  price: (i + 1) * 10000 + 5000,
  stock: Math.floor(Math.random() * 50) + 10,
  image: `https://picsum.photos/seed/naija-${i + 1}/800/600`,
  category: i % 2 === 0 ? "Electronics" : "Fashion",
  commission: ((i + 1) * 10000 + 5000) * 0.05,
}));

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
];
