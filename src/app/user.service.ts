import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/throw';
import { environment } from './../environments/environment';

import { UserRegistration, UserLogin, CurrentUser } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) { }


  login(user){
    // console.log("in login function");
    // console.log(user);
    return this.http.post(environment.apiBaseUrl+'/login', {username:user.Email, password:user.Password});
  }

  logout(){
    return this.http.get(environment.apiBaseUrl+'/logout');
  }

  register(user): Observable<any> {
    return this.http.post(environment.apiBaseUrl+'/register', user);
  }

  // getCurrentUser(): Observable<CurrentUser> {
  getCurrentUser(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/user');
  }

  // updateUserProfile(userProfile): Observable<CurrentUser> {
  updateUserProfile(userProfile): Observable<any> {
    // return this.http.put('http://localhost:8080/user/'+userProfile._id,{"user":userProfile});
    return this.http.put(environment.apiBaseUrl+'/user/'+userProfile._id,{"company":userProfile.company, "title":userProfile.title, "name":userProfile.name, "lname":userProfile.lname });
  }

  getUserShippingAddress(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/user/shippingAddress');
  }

  updateUserShippingAddress(userAddress): Observable<any> {
    return this.http.post(environment.apiBaseUrl+'/user/shippingAddress',{"address1":userAddress.address1, "address2":userAddress.address2, "zipcode":userAddress.zipcode, "country":userAddress.country, "state":userAddress.state, "mobile":userAddress.mobile   });
  }

  getUserOrderHistory(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/user/getUserOrderHistory');
  }

  getOrderDetails(orderId): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/user/getOrderDetails/'+orderId);
  }


  // errorHandler(error: HttpErrorResponse){
  //   return Observable:throw(error.message || "Server Error");
  // }
}
