import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Product } from './models/product';
import { environment } from './../environments/environment';

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
    return this.http.get<number>(environment.apiBaseUrl+'/getProductsCount');
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiBaseUrl+'/getFeaturedProducts');
  }

  // getProducts(pageNumber): Observable<Product[]> {
  //   return this.http.get<Product[]>('http://localhost:8080/products/'+ pageNumber);
  // }


  getFilteredProducts(filters, pageNumber): Observable<Product[]> {
    // console.log(filters);
    return this.http.post<Product[]>(environment.apiBaseUrl+'/getFilteredProducts', {pageNumber:pageNumber, brandFilter:filters.brands, categoryFilter:filters.categories});
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(environment.apiBaseUrl+'/product/'+id);
  }

  getProductRating(productId): Observable<Product[]> {
    return this.http.get<any>(environment.apiBaseUrl+'/rating/'+productId);
  }

  saveRating(userReview): Observable<Product[]> {
    return this.http.post<any>(environment.apiBaseUrl+'/saveRating', {userReview:userReview});
  }

}
