import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Brand } from './models/brand';
import { Category } from './models/category';
// import { Categories } from './models/category';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }

  // getBrands(): Observable<Brand[]> {
  getBrands(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/brands');
  }

  // getCategories(): Observable<Category[]> {
  getCategories(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/categories');
  }
}
