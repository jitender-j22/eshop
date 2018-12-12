import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/throw';

import { UserRegistration, UserLogin, CurrentUser } from './models/user';

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

  getCurrentUser(): Observable<CurrentUser> {
    return this.http.get('http://localhost:8080/user');
  }

  updateUserProfile(userProfile): Observable<CurrentUser> {
    // return this.http.put('http://localhost:8080/user/'+userProfile._id,{"user":userProfile});
    return this.http.put('http://localhost:8080/user/'+userProfile._id,{"company":userProfile.company, "title":userProfile.title, "name":userProfile.name, "lname":userProfile.lname });
  }

  getUserShippingAddress(): Observable<any> {
    return this.http.get('http://localhost:8080/user/shippingAddress');
  }

  updateUserShippingAddress(userAddress): Observable<any> {
    return this.http.post('http://localhost:8080/user/shippingAddress',{"address1":userAddress.address1, "address2":userAddress.address2, "zipcode":userAddress.zipcode, "country":userAddress.country, "state":userAddress.state, "mobile":userAddress.mobile   });
  }

  getUserOrderHistory(): Observable<any> {
    return this.http.get('http://localhost:8080/user/getUserOrderHistory');
  }

  getOrderDetails(orderId): Observable<any> {
    return this.http.get('http://localhost:8080/user/getOrderDetails/'+orderId);
  }


  // errorHandler(error: HttpErrorResponse){
  //   return Observable:throw(error.message || "Server Error");
  // }
}
