import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Brand } from './models/brand';
import { Category } from './models/category';
// import { Categories } from './models/category';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }

  // getBrands(): Observable<Brand[]> {
  getBrands(): Observable<any> {
    return this.http.get('http://localhost:8080/brands');
  }

  // getCategories(): Observable<Category[]> {
  getCategories(): Observable<any> {
    return this.http.get('http://localhost:8080/categories');
  }
}
