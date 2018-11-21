import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Shopcart } from '../models/shopcart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shopcart:Shopcart;
  closeResult: string;

  constructor(public cartService:CartService, private toastr: ToastrService, private modalService: NgbModal) {
    this.shopcart = this.cartService.getCart();
    console.log(this.shopcart);
  }

  ngOnInit() {
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
    this.toastr.success('Product quantity updated!');
    this.cartService.recalculateCart();
    return;
  }

  decrementProductQty(product){
    if(product.productQty>1) {
      product.productQty--;
      this.toastr.success('Product quantity updated!');
      this.cartService.recalculateCart();
    }else {
      this.toastr.warning('Delete the product from the delete button!');
    }
    return;
  }

  deleteProduct(product){
    this.cartService.deleteProduct(product);
    return;
  }

  /*updateQty(product) {
    console.log(product.productQty);
    this.cartService.recalculateCart();
    return;
  }*/
}
