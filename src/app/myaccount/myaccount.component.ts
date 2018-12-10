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

  userProfile:CurrentUser = {};
  profileSubmitted = false;

  userAddress = {};
  addressSubmitted = false;

  constructor(public userService: UserService, private toastr: ToastrService) {
    //this.profileSubmitted = false;
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((userdata:any)=>{
      // console.log(userdata);
      this.userProfile = userdata;
      //console.log(this.userProfile);
    });

    this.userService.getUserShippingAddress().subscribe((shippingdata:any)=>{
      this.userAddress = shippingdata;
    });
  }

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
