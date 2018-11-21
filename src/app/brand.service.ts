import { Injectable } from '@angular/core';

import { Brand, Brands } from './models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  brands:Brand[];

  constructor() { }

  getAllBrands() {
    return this.brands = Brands;
  }
}
