import { Product } from './product';

export interface CartProducts {
  product:Product;
  productQty:number;
  userId:string;
}

export interface Shopcart {
  grossTotal: number;
  tax: number;
  shippingCost: number;
  netTotal: number;
}
