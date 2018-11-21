import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { UserRegistration, UserLogin } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSubmitted = false;
  //loginEmail:string = "";
  //password:string = "";
  //model: any = {};
  loginErrors:string;
  registrationErrors:string;

  userRegistration:UserRegistration = {"Name":"", "Email":"", "Password":""};
  userLogin:UserLogin = {"Email":"", "Password":""};


  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  login(user) {
    this.loginSubmitted = true;
    console.log("in login");

    let userObj = this.userService.login(user)
        .subscribe((data:any)=>{ console.log("in login success"); console.log(data);}
                    , (error:any)=>{ console.log("in login error"); console.log(error);  });

  }

  signup(user){
    console.log("in signup");
    console.log(user);

    let userObj = this.userService.register(user)
        .subscribe((data:any)=>{ console.log("in success"); console.log(data);}
                    , (error:any)=>{ console.log("in error"); console.log(error); this.registrationErrors = error.error.errmsg; });

    console.log("after service call")
    console.log(userObj);
  }
}
