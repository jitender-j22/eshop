import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../category.service';
// import { CartService } from '../cart.service';
import { Category } from '../models/category';

import { UtilityService } from '../utility.service';
import { Brand } from '../models/brand';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  categoryList:Category[];
  brandsList:Brand[];

  constructor(public categoryService:CategoryService, public utilityService:UtilityService) {
    this.categoryList = this.categoryService.getAllCategories();
  }

  ngOnInit() {
    this.categoryList = this.categoryService.categories;
    // this.brandsList = this.brandService.brands;
    //console.log(this.categoryList);
    //console.log(this.brandsList);

    this.utilityService.getBrands().subscribe((data:any) =>{
      this.brandsList = data;
    });
  }

  expandCategory(categoryId) {

    if(document.getElementById("cat_"+categoryId).classList.contains('collapse')) {
      [].forEach.call(document.querySelectorAll('.panel-collapse'), function (el) {
        el.classList.add('collapse');
      });

      [].forEach.call(document.querySelectorAll('.fa-menu'), function (el) {
        el.classList.remove('fa-minus');
        el.classList.add('fa-plus');
      });

      document.getElementById("cat_"+categoryId).classList.remove('collapse');
      document.getElementsByClassName("fa-menu-"+categoryId)[0].classList.remove('fa-plus');
      document.getElementsByClassName("fa-menu-"+categoryId)[0].classList.add('fa-minus');
    }else {

      document.getElementById("cat_"+categoryId).classList.add('collapse');
      document.getElementsByClassName("fa-menu-"+categoryId)[0].classList.add('fa-plus');
      document.getElementsByClassName("fa-menu-"+categoryId)[0].classList.remove('fa-minus');
    }
  }
}
