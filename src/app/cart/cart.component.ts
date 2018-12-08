import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Shopcart, CartProducts } from '../models/shopcart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts:CartProducts;
  shopcart:Shopcart = {"grossTotal":0, "tax":0, "shippingCost":0, "netTotal": 0 };
  // closeResult: string;

  constructor(public cartService: CartService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.cartService.getCart().subscribe((data:any) =>{

      this.cartProducts = data;
      //console.log(this.cartProducts);
      this.shopcart = this.cartService.recalculateCart(this.cartProducts);
    });

  }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

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
