import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/model/complaint';

import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/Services/auth.service';
import { ComplaintsService } from 'src/app/Services/complaints.service';
import { FileUploadService } from 'src/app/Services/file-upload.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = [];  
  fileName:string;
  public complaints:Complaint[];
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  public deleteComplaint: Complaint;
  public editComplaint: Complaint;
  
  erreur=0;
  constructor(private usersService: UsersService,private complaintsService: ComplaintsService,public authService :AuthService, private router: Router ,private httpClient: HttpClient) { 
   
  }

  ngOnInit(): void {

    ;
  }
  public getUser_complaints():void{
    this.usersService.getUser_complaints(this.authService.loggedUser).subscribe(
      (Response:Complaint[])=> {
        console.log(Response);
        this.complaints = Response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });
    }
    public onOpenModalC(complaint: Complaint, mode: string): void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addComplaintModal');
      }
      if (mode === 'edit') {
        this.editComplaint= complaint;
        button.setAttribute('data-target', '#updateUserModal');
      }
      if (mode === 'delete') {
        this.deleteComplaint = complaint;
        button.setAttribute('data-target', '#deleteComplaintModal');
      }
      container.appendChild(button);
      button.click();
    }
    public onDeleteComplaint(id: number): void {
      this.complaintsService.deleteComplaint(id).subscribe(
        (response: void) => {
          console.log(response);
          this.getUser_complaints();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    public onAddComplaint(addForm: NgForm): void {
      document.getElementById('add-complaint-form').click();
      this.complaintsService.addComplaint(addForm.value).subscribe(
        (response: Complaint) => {
          console.log(response);
          this.getUser_complaints();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }
 }
