import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throw } from 'rxjs';
import { Observable} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from './../environments/environment';

import { CartProducts } from './models/shopcart';
import { Product } from './models/product';
import { Shopcart } from './models/shopcart';
import { Brand } from './models/brand';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:CartProducts[];
  shoppingcart:Shopcart;
  taxRate:number = 5;
  shippingRate:number = 50;

  constructor(private toastr: ToastrService, private http:HttpClient) {

  }

  // getCart(): Observable<Product[]> {
  getCart(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/getCart');
  }

  addToCart(productId) {

    this.http.post(environment.apiBaseUrl+'/addToCart', {productId:productId}).subscribe((data:any)=>{
      this.toastr.success('Product successfully added to cart!');
    });
    return ;
  }

  // incrementProductQty(product): Observable<Product[]>{
  incrementProductQty(product): Observable<any>{
    return this.http.post(environment.apiBaseUrl+'/updateProductQty', {cartId:product._id, productQty:product.productQty});
  }


  // decrementProductQty(product): Observable<Product[]>{
  decrementProductQty(product): Observable<any>{
    return this.http.post(environment.apiBaseUrl+'/updateProductQty', {cartId:product._id, productQty:product.productQty});
  }

  // removeCartProduct(product): Observable<Product[]> {
  removeCartProduct(product): Observable<any> {
    return this.http.delete(environment.apiBaseUrl+'/removeCartProduct/'+product._id);
  }

  recalculateCart(cartProducts) {

    let totalPrice:number = 0;
    let grossTotal:number = 0;

    for(let i=0;i<cartProducts.length;i++){
      //console.log(this.shoppingcart.products[i].product.price);
      totalPrice = cartProducts[i].productId.price * cartProducts[i].productQty;
      grossTotal+=totalPrice;
    }

    this.shoppingcart = {"grossTotal":0, "tax":0, "shippingCost":0, "netTotal": 0 };
    this.shoppingcart.grossTotal = grossTotal;
    this.shoppingcart.tax = (grossTotal * this.taxRate)/100;
    this.shoppingcart.shippingCost = this.shippingRate;
    this.shoppingcart.netTotal = grossTotal+(this.shoppingcart.tax+this.shoppingcart.shippingCost);

    // console.log(this.shoppingcart);
    return this.shoppingcart;
  }

  saveOrder(userProfile, userAddress, cartProducts, shopcart, payment){
    return this.http.post(environment.apiBaseUrl+'/saveOrder', {userProfile:userProfile, userAddress:userAddress, cartProducts:cartProducts, shopcart:shopcart, payment:payment });
  }

}
