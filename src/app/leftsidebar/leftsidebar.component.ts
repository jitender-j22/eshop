import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../models/category';
import { Brand } from '../models/brand';
import { UtilityService } from '../utility.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  categoryList:Category[];
  brandsList:Brand[];

  // brandFilter = {};
  filterCategory = {};
  checkedBrand = '';

  eshopFilter: any = { "brands": [], "categories": []};


  constructor(private router:Router, public utilityService:UtilityService, public productService:ProductService) {

  }

  ngOnInit() {

    this.eshopFilter = this.productService.filters;
    this.filterCategory = this.eshopFilter.categories[0];
    // console.log(this.eshopFilter);

    this.utilityService.getCategories().subscribe((categoryData:any) =>{
      // console.log(categoryData);
      this.categoryList = categoryData;
      // console.log(this.eshopFilter.categories);

      for(let i=0;i< this.categoryList.length; i++){
        if(this.eshopFilter.categories.includes(categoryData[i]._id)){
          this.categoryList[i].checked = true;
        } else {
          this.categoryList[i].checked = false;
        }
        // console.log(this.categoryList[i]);
        if(this.categoryList[i].hasSubCategory){
          for(let j=0;j<this.categoryList[i].subCategories.length; j++){
            if(this.eshopFilter.categories.includes(this.categoryList[i].subCategories[j]._id)){
              this.categoryList[i].subCategories[j].checked = true;
            } else {
              this.categoryList[i].subCategories[j].checked = false;
            }
          }
        }
      }

    });

    this.utilityService.getBrands().subscribe((data:any) =>{
      this.brandsList = data;
      for(let i=0;i< this.brandsList.length; i++){
        // console.log(this.brandsList[i]._id);
        if(this.eshopFilter.brands.includes(this.brandsList[i]._id)){
          this.brandsList[i].checked = true;
        } else {
          this.brandsList[i].checked = false;
        }
      }
    });

  }

  onClickCategory(event, clickedCategory){
    // console.log(event);
    // console.log(clickedCategory);

    if(event){
      // this.eshopFilter.categories.push(clickedCategory._id);
      this.eshopFilter.categories[0] = clickedCategory._id;
    } else {
      let index = this.eshopFilter.categories.indexOf(clickedCategory._id);
      // console.log("index :: " + index)
      this.eshopFilter.categories.splice(index,1);
    }
    this.productService.filters = this.eshopFilter;
    // console.log(this.eshopFilter.categories);

    this.productService.getFilteredProducts(this.eshopFilter, 1).subscribe((products:any)=>{
      // console.log(products);
      this.productService.displayed.products = products.products;
      this.productService.displayed.noOfPages = products.noOfPages;
      this.productService.displayed.productCount = products.productCount;
      this.router.navigate(['shop/page/1']);
    })
  }

  onClickBrand(event, clickedBrand){
      // console.log(event);
    if(event){
      this.eshopFilter.brands.push(clickedBrand._id);
    } else {
      let index = this.eshopFilter.brands.indexOf(clickedBrand._id);
      // console.log("index :: " + index)
      this.eshopFilter.brands.splice(index,1);
    }
    this.productService.filters = this.eshopFilter;
    // console.log(this.eshopFilter.brands);

    this.productService.getFilteredProducts(this.eshopFilter, 1).subscribe((products:any)=>{
      // console.log(products);
      this.productService.displayed.products = products.products;
      this.productService.displayed.noOfPages = products.noOfPages;
      this.productService.displayed.productCount = products.productCount;
      this.router.navigate(['shop/page/1']);
    })
  }

  clearOtherCategory(category) {

    var items = document.getElementsByName('category');
        for (var i = 0; i < items.length; i++) {
          // console.log(items[i].type)
          if ((<HTMLInputElement>items[i]).type == 'checkbox') {

             if ((<HTMLInputElement>items[i]).value == category._id){
               // console.log("current category");
             }else {
               (<HTMLInputElement>items[i]).checked = false;
             }
          }
        }
  }

  clearBrandFilter() {
    this.eshopFilter.brands = [];
    var items = document.getElementsByName('brand');
        for (var i = 0; i < items.length; i++) {
             if ((<HTMLInputElement>items[i]).type == 'checkbox')
                (<HTMLInputElement>items[i]).checked = false;
        }
    this.productService.getFilteredProducts(this.eshopFilter, 1).subscribe((products:any)=>{
      this.productService.displayed.products = products.products;
      this.productService.displayed.noOfPages = products.noOfPages;
      this.productService.displayed.productCount = products.productCount;
      this.router.navigate(['shop/page/1']);
    })
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
