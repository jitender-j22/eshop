import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css']
})
export class ProductlistingComponent implements OnInit {

  productList = {"products":[], "productCount":0, "noOfPages":[]};
  // productList:Product[] = [];

  productsCount;
  itemsPerPage = 3;
  noOfPages:any;
  currentPageNumber = 1;

  eshopFilter: any = { "brands": [] };

  constructor(private router:Router, public productService:ProductService, public cartService:CartService, public route:ActivatedRoute) {
  }

  ngOnInit() {

    this.eshopFilter = this.productService.filters;

    this.route.params
       .subscribe(params => {
          let pageNumber = +params['pageNumber'];
          if(!pageNumber) { pageNumber = 1;}
          // console.log(pageNumber);
          this.getPagedProducts(pageNumber);
        });

  }

  addToCart(productId) {
    //this.cartService.addToCart(userId, pid);
    this.cartService.addToCart(productId);
  }

  getPagedProducts(pageNumber){

    // this.productService.getProducts(pageNumber).subscribe((products:any)=>{
    this.productService.getFilteredProducts(this.eshopFilter, pageNumber).subscribe((products:any)=>{
      // console.log(products);
      this.productService.displayed.products = products.products;
      this.productList =  this.productService.displayed;
// console.log(this.productList);
      this.productService.displayed.noOfPages = products.noOfPages;
      this.productService.displayed.productCount = products.productCount;

      // this.noOfPages = new Array(this.productService.displayed.noOfPages);
      this.noOfPages = this.productService.displayed;
      this.currentPageNumber = products.currPage;
    });
  }


  // goToProductDetail(product:Product) {
  //   this.router.navigate(['product-details', product.id]);
  // }
}
