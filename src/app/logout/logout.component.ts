import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {

    // this.userService.logout().subscribe((data:any)=>{
    //
    //   localStorage.removeItem('eshopUserId');
    //   this.router.navigate(['login']);
    //
    // }
    // , (error:any)=>{
    //     console.log("in logout error");
    // });

  }

}
