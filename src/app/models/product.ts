import { Brand } from './brand';

export interface Product {
  title: string;
  description: string;
  sku: string;
  price: number;
  availability: boolean;
  images: string;
  brand: Brand;
}
