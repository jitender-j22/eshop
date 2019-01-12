import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isEshopUserLoggedIn:boolean = false;
  constructor(private router: Router, public userService: UserService) { }

  ngOnInit() {

    if(localStorage.getItem('eshopUserId') === null){
      this.router.navigate(['login']);
      this.isEshopUserLoggedIn = false;
    }else {
      this.isEshopUserLoggedIn = true;
    }
  }

  logout(){
    this.userService.logout().subscribe((data:any)=>{

      localStorage.removeItem('eshopUserId');
      this.router.navigate(['login']);
    }
    , (error:any)=>{
        console.log("in logout error");
    });
  }
}
