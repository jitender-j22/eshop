import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { CartProducts } from './models/shopcart';
import { Shopcart } from './models/shopcart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:CartProducts[];
  shoppingcart:Shopcart;
  taxRate:number = 5;
  shippingRate:number = 50;

  constructor(private toastr: ToastrService) {
    this.shoppingcart = {"userId":"", "products":[], "totalQty":0, "grossTotal": 0, "tax": 0, "shippingCost": 0, "netTotal": 0};
    this.shoppingcart.products;
    //userId:string;
    this.shoppingcart.totalQty = 0;
    this.shoppingcart.grossTotal = 0;
    this.shoppingcart.tax = 0;
    this.shoppingcart.shippingCost = 0;
    this.shoppingcart.netTotal = 0;
  }

  getCart() {
      return this.shoppingcart;
  }


  addToCart(userId, product) {
    console.log(product);
    let added = false;
    for(let i=0;i<this.shoppingcart.products.length;i++) {
      // if(this.shoppingcart.products[i].product._id == product._id) {
      //   this.shoppingcart.products[i].productQty++;
      //   added = true;
      // }
    }
    if(!added){
      this.shoppingcart.products.push({product:product, productQty:1})
    }

    this.shoppingcart.userId = userId;
    this.toastr.success('Product successfully added to cart!');
    this.recalculateCart();
  }

  deleteProduct(product) {

    for(let i=0;i<this.shoppingcart.products.length;i++) {
      // if(this.shoppingcart.products[i].product.id == product.product.id) {
      //   this.shoppingcart.products.splice(i, 1);
      // }
    }
    this.recalculateCart();
  }

  recalculateCart() {
    let totalQty:number = 0;
    let grossTotal:number = 0;
    let totalPrice:number = 0;


    for(let i=0;i<this.shoppingcart.products.length;i++){
      totalQty+= this.shoppingcart.products[i].productQty;
      //console.log("totalQty :: "+ totalQty);
      //console.log(this.shoppingcart.products[i].product.price);
      // totalPrice = this.shoppingcart.products[i].product.price * this.shoppingcart.products[i].productQty;
      // grossTotal+=totalPrice;
    }

    // this.shoppingcart.totalQty = totalQty;
    // this.shoppingcart.grossTotal = grossTotal;
    // this.shoppingcart.tax = (grossTotal * this.taxRate)/100;
    // this.shoppingcart.shippingCost = this.shippingRate;
    // this.shoppingcart.netTotal = grossTotal-(this.shoppingcart.tax+this.shoppingcart.shippingCost);
    return;
  }

}
