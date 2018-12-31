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

  getBrands(): Observable<Brand[]> {
    return this.http.get('http://localhost:8080/brands');
  }

  getCategories(): Observable<Category[]> {
    return this.http.get('http://localhost:8080/categories');
  }
}
