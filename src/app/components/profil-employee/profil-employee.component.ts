import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/model/complaint';
import { AuthService } from 'src/app/Services/auth.service';
import { ComplaintsService } from 'src/app/Services/complaints.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-profil-employee',
  templateUrl: './profil-employee.component.html',
  styleUrls: ['./profil-employee.component.css']
})
export class ProfilEmployeeComponent implements OnInit {
  public complaints:Complaint[];
  constructor(private usersService: UsersService,private complaintsService: ComplaintsService,public authService :AuthService, private router: Router ,private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  public getType1_complaints():void{
    this.complaintsService.getcomplaintsByType("DamagedWare").subscribe(
      (Response:Complaint[])=> {
        console.log(Response);
        this.complaints = Response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });
    }
    public getType2_complaints():void{
      this.complaintsService.getcomplaintsByType("WrongWireInsertionInComponent").subscribe(
        (Response:Complaint[])=> {
          console.log(Response);
          this.complaints = Response;
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        });
      }
      public getType3_complaints():void{
      this.complaintsService.getcomplaintsByType("WrongTapping").subscribe(
        (Response:Complaint[])=> {
          console.log(Response);
          this.complaints = Response;
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        });
      }
      public getType4_complaints():void{
        this.complaintsService.getcomplaintsByType("WrongCrimping").subscribe(
          (Response:Complaint[])=> {
            console.log(Response);
            this.complaints = Response;
          },
          (error:HttpErrorResponse)=>{
            alert(error.message);
          });
        }
}
