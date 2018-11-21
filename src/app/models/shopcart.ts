import { Product } from './product';

export interface CartProducts {
  product:Product[];
  productQty:number;
}

export interface Shopcart {
  //id: number;
  userId:string;
  products:CartProducts[];
  totalQty:number;
  grossTotal: number;
  tax: number;
  shippingCost: number;
  netTotal: number;
}
