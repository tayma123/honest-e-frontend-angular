import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { UsersService } from './Services/users.service';


import { LoginComponent } from './components/login/login.component';

import { AuthService } from './Services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ProfileComponent } from './components/profile/profile.component';
import { Home1Component } from './components/home1/home1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComplaintComponent } from './components/complaint/complaint.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UsersComponent,
   
    LoginComponent,
   
    RegisterComponent,
    ProfileComponent,
    Home1Component,
    ComplaintComponent,
   
 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule, RouterModule,CommonModule, BrowserAnimationsModule,ToastrModule.forRoot(),ReactiveFormsModule, NgbModule,
  ],
  providers: [UsersService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }