import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css']
})
export class ProductlistingComponent implements OnInit {

  productList:Product[];

  constructor(private router:Router, public productService:ProductService, public cartService:CartService) {

  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products:any)=>{
      this.productList = products;
    });
  }

  addToCart(productId) {
    //this.cartService.addToCart(userId, pid);
    this.cartService.addToCart(productId);
  }

  // goToProductDetail(product:Product) {
  //   this.router.navigate(['product-details', product.id]);
  // }
}
