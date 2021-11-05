import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Home1Component } from './components/home1/home1.component';
import { ComplaintComponent } from './components/complaint/complaint.component';




const routes: Routes = [{ path: "users", component:UsersComponent},
{ path: "", component:Home1Component},{ path: "login", component:LoginComponent},{path: 'register', component: RegisterComponent}
,{ path: "profile", component:ProfileComponent},{ path: "complaint", component:ComplaintComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
