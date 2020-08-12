import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './basic/home/home.component';
import { PagenotfoundComponent } from './error/pagenotfound/pagenotfound.component';
import { AboutusComponent } from './basic/aboutus/aboutus.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
