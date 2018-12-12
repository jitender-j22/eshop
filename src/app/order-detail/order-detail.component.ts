import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
// import { Product } from '../models/product';
// import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderDetail = {};
  constructor(public route:ActivatedRoute, private userService:UserService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);

    this.userService.getOrderDetails(id).subscribe((order:any)=>{
      // console.log(order);
      this.orderDetail = order;
    });
  }

}
