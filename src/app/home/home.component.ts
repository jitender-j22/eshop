import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList:Product[];

  constructor(public productService:ProductService, public cartService:CartService, private toastr: ToastrService) {
    // this.productService.getProducts().subscribe((products:any)=>{
    this.productService.getFeaturedProducts().subscribe((products:any)=>{
      this.productList = products;
    });
  }

  ngOnInit() {
    // this.productList = this.productService.products;
  }

  addToCart(productId) {
    this.cartService.addToCart(productId);
  }

}
