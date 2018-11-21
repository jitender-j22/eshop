import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/throw';

import { UserRegistration, UserLogin } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) { }


  login(user){
    console.log("in login function");
    console.log(user);
    return this.http.post('http://localhost:8080/login', {username:user.Email, password:user.Password});
  }

  register(user): Observable<any> {

    return this.http.post('http://localhost:8080/register', user);
  }

  // errorHandler(error: HttpErrorResponse){
  //   return Observable:throw(error.message || "Server Error");
  // }
}
