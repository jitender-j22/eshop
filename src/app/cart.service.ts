import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throw } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { CartProducts } from './models/shopcart';
import { Product } from './models/product';
import { Shopcart } from './models/shopcart';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:CartProducts[];
  shoppingcart:Shopcart;
  taxRate:number = 5;
  shippingRate:number = 50;

  constructor(private toastr: ToastrService, private http:HttpClient) {
    //this.shoppingcart = {"userId":"", "products":[], "totalQty":0, "grossTotal": 0, "tax": 0, "shippingCost": 0, "netTotal": 0};
    // this.shoppingcart;
    // this.shoppingcart.products;
    //userId:string;
    // this.shoppingcart.totalQty = 0;
    // this.shoppingcart.grossTotal = 0;
    // this.shoppingcart.tax = 0;
    // this.shoppingcart.shippingCost = 0;
    // this.shoppingcart.netTotal = 0;
  }

  getCart(): Observable<Product[]> {
    return this.http.get('http://localhost:8080/getCart');
  }

  addToCart(productId) {

    this.http.post('http://localhost:8080/addToCart', {productId:productId}).subscribe((data:any)=>{
      this.toastr.success('Product successfully added to cart!');
    });
    return ;
  }

  incrementProductQty(product): Observable<Product[]>{
    // console.log(product._id);
    // console.log(productQty);
    // console.log(product);
    // this.http.post('http://localhost:8080/incrementProductQty', {cartId:product._id, productQty:product.productQty}).subscribe((data:any)=>{
    //   this.toastr.success('Product quantity updated!');
    //   //this.getCart();
    //   return data;
    // });
    //return ;
    return this.http.post('http://localhost:8080/updateProductQty', {cartId:product._id, productQty:product.productQty});
  }


  decrementProductQty(product): Observable<Product[]>{
    return this.http.post('http://localhost:8080/updateProductQty', {cartId:product._id, productQty:product.productQty});
  }

  removeCartProduct(product): Observable<Product[]> {
    return this.http.delete('http://localhost:8080/removeCartProduct/'+product._id);
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
    return this.http.post('http://localhost:8080/saveOrder', {userProfile:userProfile, userAddress:userAddress, cartProducts:cartProducts, shopcart:shopcart, payment:payment });
  }

}
