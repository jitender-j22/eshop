import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { CartService } from '../cart.service';
import { Shopcart, CartProducts } from '../models/shopcart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartProducts:CartProducts;
  shopcart:Shopcart = {"grossTotal":0, "tax":0, "shippingCost":0, "netTotal": 0 };

  constructor(public cartService: CartService, private toastr: ToastrService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe((data:any) =>{

      this.cartProducts = data;
      this.shopcart = this.cartService.recalculateCart(this.cartProducts);
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
}
