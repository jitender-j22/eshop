import { Injectable } from '@angular/core';

import { Category } from './models/category';
import { Categories } from './models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories:Category[];
  constructor() { }

  getAllCategories() {
    return this.categories = Categories
  }
}
