import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { RecommendedProductsComponent } from './recommended-products/recommended-products.component';
import { ConfirmmodalComponent } from './confirmmodal/confirmmodal.component';
import { ContinueShoppingComponent } from './continue-shopping/continue-shopping.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomesliderComponent,
    NewsletterComponent,
    ContactusComponent,
    NotfoundComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    ProductlistingComponent,
    LeftsidebarComponent,
    ProductdetailsComponent,
    MyaccountComponent,
    RecommendedProductsComponent,
    ConfirmmodalComponent,
    ContinueShoppingComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
