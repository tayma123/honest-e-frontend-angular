import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/model/complaint';
import { AuthService } from 'src/app/Services/auth.service';
import { ComplaintsService } from 'src/app/Services/complaints.service';
import { UsersService } from 'src/app/Services/users.service';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})

export class Home1Component implements OnInit {
  public complaints:Complaint[];
  constructor(private usersService: UsersService,public complaintsService: ComplaintsService,public authService :AuthService, private router: Router ,private httpClient: HttpClient) { }

  ngOnInit(): void {
    //this.getAllComplaints();
  }
  public getAllComplaints():void{
    this.complaintsService.getAllComplaints().subscribe(
      (Response:Complaint[])=> {
        console.log(Response);
        this.complaints = Response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });
    }}
