import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  product:Product = {'brand':{}};
  productRatings = [{}];
  productRatingsCount = 0;

  reviewSubmitted = false;
  userReview = {};



  constructor(public route:ActivatedRoute, public productService:ProductService, private cartService:CartService, private toastr:ToastrService) {
  }

  ngOnInit() {
    //const id = +this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);

    this.productService.getProduct(id).subscribe((product:any)=>{
      this.product = product;
    });

    this.productService.getProductRating(id).subscribe((ratings:any)=>{
      this.productRatings = ratings;
      this.productRatingsCount = this.productRatings.length
      // console.log(this.productRatings)
      // console.log(this.productRatingsCount)
    });
  }

  addToCart(productId) {
    this.cartService.addToCart(productId);
  }

  saveReview(userReview){
    userReview.productId = this.route.snapshot.paramMap.get('id');

    this.productService.saveRating(userReview).subscribe((data:any)=>{
      this.toastr.success('Rating added successfully!');
    });
  }
}
