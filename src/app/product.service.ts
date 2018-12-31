import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  displayed = {"products":[], "productCount":0, "noOfPages":[]};
  // displayed = {};
  // displayed.products:Product[];
  // displayed.productCount:number;

  filters = {"brands": [], "categories": []};
  // filters.Brands;

  constructor(private http:HttpClient) {

  }

  getTotalProductsCount(): Observable<number> {
    return this.http.get<number>('http://localhost:8080/getProductsCount');
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/getFeaturedProducts');
  }

  // getProducts(pageNumber): Observable<Product[]> {
  //   return this.http.get<Product[]>('http://localhost:8080/products/'+ pageNumber);
  // }


  getFilteredProducts(filters, pageNumber): Observable<Product[]> {
    // console.log(filters);
    return this.http.post<Product[]>('http://localhost:8080/getFilteredProducts', {pageNumber:pageNumber, brandFilter:filters.brands, categoryFilter:filters.categories});
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/product/'+id);
  }

  getProductRating(productId): Observable<Product[]> {
    return this.http.get<any>('http://localhost:8080/rating/'+productId);
  }

  saveRating(userReview): Observable<Product[]> {
    return this.http.post<any>('http://localhost:8080/saveRating', {userReview:userReview});
  }

}
