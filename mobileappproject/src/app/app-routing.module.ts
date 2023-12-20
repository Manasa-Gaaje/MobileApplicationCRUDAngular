import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mobile } from './mobile';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { CreateMobileComponent } from './create-mobile/create-mobile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';

const routes: Routes = [
  {path:'mobiles',component:MobileListComponent},
  {path:'mobiles/addnewmobile',component:CreateMobileComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'mobiles/:id',component:UpdateMobileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
