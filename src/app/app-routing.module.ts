import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContinueShoppingComponent } from './continue-shopping/continue-shopping.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  //{ path: 'product-category/:slug', component: ProductlistingComponent },
  { path: 'shop', component: ProductlistingComponent },
  { path: 'shop/page/:pageNumber', component: ProductlistingComponent },
  { path: 'product-details/:id', component: ProductdetailsComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'countinue-shopping', component: ContinueShoppingComponent },
  { path: 'order-detail/:id', component: OrderDetailComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
