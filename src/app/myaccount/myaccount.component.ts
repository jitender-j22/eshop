import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../user.service';
import { CurrentUser } from '../models/user';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  userProfile:CurrentUser = {"company":"", "email":"", "password":"", "title":"","name":"","lname":""};
  profileSubmitted = false;

  userAddress:any = {"address1":"", "address2":"", "zipcode":"", "country":"", "state":"", "mobile":"" };
  addressSubmitted = false;

  userOrders;

  changePasswordSubmitted = false;
  userProfilePassword:any = {};

  constructor(public userService: UserService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((userdata:any)=>{
      this.userProfile = userdata;
    });

    this.userService.getUserShippingAddress().subscribe((shippingdata:any)=>{
      this.userAddress = shippingdata;
    });

    this.userService.getUserOrderHistory().subscribe((ordersdata:any)=>{
      this.userOrders = ordersdata;
    });
  }

  // submitChangePassword(userProfilePassword) {
  //   console.log(userProfilePassword);
  // }

  saveUpdateProfile(profile){
    this.profileSubmitted = true;

    this.userService.updateUserProfile(profile).subscribe((userdata:any)=>{
      this.toastr.success('Profile updated successfully!');
      this.profileSubmitted = false;
    });
  }

  saveShippingAddress(address){
    this.addressSubmitted = true;

    this.userService.updateUserShippingAddress(address).subscribe((shippingdata:any)=>{
      this.toastr.success('Address updated successfully!');
      this.addressSubmitted = false;
    });
  }

}
