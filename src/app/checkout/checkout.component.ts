import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';

import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import { Shopcart, CartProducts } from '../models/shopcart';
import { CurrentUser } from '../models/user';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartProducts:CartProducts;
  shopcart:Shopcart = {"grossTotal":0, "tax":0, "shippingCost":0, "netTotal": 0 };
  userProfile:CurrentUser = {};
  userAddress = {};
  orderSubmitted = false;
  payment = {};

  constructor(public cartService: CartService, public userService: UserService, private toastr: ToastrService, private router: Router) {

  }

  ngOnInit() {
    this.cartService.getCart().subscribe((data:any) =>{
      // console.log(data)
      this.cartProducts = data;
      this.shopcart = this.cartService.recalculateCart(this.cartProducts);
    });

    this.userService.getCurrentUser().subscribe((userdata:any)=>{
      // console.log(userdata);
      this.userProfile = userdata;
    });

    this.userService.getUserShippingAddress().subscribe((shippingdata:any)=>{
      this.userAddress = shippingdata;
    });
  }

  incrementProductQty(product){
    product.productQty++;

    this.cartService.incrementProductQty(product).subscribe((data:any)=>{

      this.toastr.success('Product quantity updated!');
      this.cartProducts = data;
      this.shopcart = this.cartService.recalculateCart(this.cartProducts);
    });
    return;
  }

  decrementProductQty(product){
    if(product.productQty>1) {
      product.productQty--;

      this.cartService.decrementProductQty(product).subscribe((data:any)=>{

        this.toastr.success('Product quantity updated!');
        this.cartProducts = data;
        this.shopcart = this.cartService.recalculateCart(this.cartProducts);
      });

    }else {
      this.toastr.warning('Delete the product from the delete button!');
    }
    return;
  }

  removeCartProduct(product){
    this.cartService.removeCartProduct(product).subscribe((data:any)=>{

      this.toastr.success('Product removed from cart!');
      this.cartProducts = data;
      this.shopcart = this.cartService.recalculateCart(this.cartProducts);
    });
    return;
  }

  saveOrder(userProfile, userAddress, cartProducts, shopcart, payment){

    this.cartService.saveOrder(userProfile, userAddress, cartProducts, shopcart, payment).subscribe((data:any)=>{
      this.toastr.success('Order placed successfully!');
      this.router.navigate(['countinue-shopping']);
    });
  }

  // order() {
  //   console.log("paymentmethod")
  //   console.log(this.userProfile)
  //   console.log(this.payment)
  // }
}
