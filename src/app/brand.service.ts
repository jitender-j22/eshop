import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throw } from 'rxjs';

import { Brand } from './models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  getBrands(): Observable<Brand[]> {
    return this.http.get('http://localhost:8080/brands');
  }
}
