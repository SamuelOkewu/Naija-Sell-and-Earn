
import { Product, UserRole } from './types';

export const APP_NAME = "Naija Sell and Earn";
export const ADMIN_NAME = "Okewu Samuel Owoicho";
export const ADMIN_EMAIL = "okewusamuelowoicho@gmail.com";
export const ADMIN_PHONE = "+2349063676131";

export const MOCK_PRODUCTS: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `prod-${i + 1}`,
  ownerId: `owner-${(i % 3) + 1}`,
  name: [
    "Alaba Grade A Generator", "Leather Designer Bag", "Balogun Wholesale Sneakers", 
    "Quality Agbada Material", "Smart Android TV", "Nigerian Print Ankara",
    "Power Bank 20,000mAh", "Office Ergonomic Chair", "Cordless Electric Kettle",
    "Modern Sofa Set", "Wireless Earbuds Pro", "Solar Inverter 5KVA"
  ][i],
  description: "High quality item directly from Balogun/Alaba market. Authentic and durable.",
  price: (i + 1) * 10000 + 5000,
  stock: Math.floor(Math.random() * 50) + 10,
  image: `https://picsum.photos/seed/${i + 10}/600/400`,
  category: i % 2 === 0 ? "Electronics" : "Fashion",
  commission: ((i + 1) * 10000 + 5000) * 0.05,
}));

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Admin', path: '/about' },
];
