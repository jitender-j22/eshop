import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
  constructor(public route:ActivatedRoute, private userService:UserService, private location:Location) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.userService.getOrderDetails(id).subscribe((order:any)=>{
      // console.log(order);
      this.orderDetail = order;
    });
  }

  goBack(): void {
    this.location.back();
  }

  print(){
    let divToPrint = document.getElementById('printDiv').innerHTML;
    let newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    newWindow.document.open();
    newWindow.document.write(`
    <html>
        <head>
          <title>Print tab</title>
          <style>

          </style>
        </head>
        <body onload="window.print();window.close()">${divToPrint}
        </body>
      </html>
    `);
    newWindow.document.close();
  }
}
