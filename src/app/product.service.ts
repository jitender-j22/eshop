import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Product } from './models/product';
// import { PRODUCTS } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[];
  selectedProduct:Product;

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/products', {
            headers: new HttpHeaders().set('withCredentials', 'true')
        });
  }

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>('http://localhost:8080/products', {
  //           headers: new HttpHeaders().set('withCredentials', true)
  //       });
  // }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/product/'+id);
  }
}
