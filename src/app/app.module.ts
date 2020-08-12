import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './basic/home/home.component';
import { ProductComponent } from './basic/product/product.component';
import { TopnavComponent } from './basic/topnav/topnav.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PagenotfoundComponent } from './error/pagenotfound/pagenotfound.component';
import { SidenavComponent } from './profile/sidenav/sidenav.component';
import { AboutusComponent } from './basic/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    TopnavComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    SidenavComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
