import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { UserService } from '../user.service';
import { UserRegistration, UserLogin } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSubmitted = false;


  loginErrors:string;
  registrationErrors:string;

  userRegistration:UserRegistration = {"Name":"", "Email":"", "Password":""};
  userLogin:UserLogin = {"Email":"", "Password":""};


  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
  }

  login(user) {
    this.loginSubmitted = true;
    // console.log("in login");

    let userObj = this.userService.login(user)
        .subscribe((data:any)=>{

          this.loginErrors = "";

          if (data.email === user.Email) {
            localStorage.setItem('eshopUserId', data._id);
            this.router.navigate(['myaccount']);
          }
      }
        , (error:any)=>{
          // console.log("in login error"); console.log(error);
          this.loginErrors = "Invalid username or password";
         });

  }

  signup(user){

    let userObj = this.userService.register(user)
        .subscribe((data:any)=>{
          // console.log("in success"); console.log(data);

        }
        , (error:any)=>{
          // console.log("in error"); console.log(error);
          this.registrationErrors = error.error.errmsg;
        });

  }
}
