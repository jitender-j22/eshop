import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-productdetails',
  //inputs: ['product'],
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  //route:ActivatedRoute;
  product:Product = {};

  constructor(public route:ActivatedRoute, public productService:ProductService, private cartService:CartService) {

  }

  ngOnInit() {
    //const id = +this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);

    this.productService.getProduct(id).subscribe((product:any)=>{
      this.product = product;
    });
  }

  addToCart(productId) {
    this.cartService.addToCart(productId);
  }

}
