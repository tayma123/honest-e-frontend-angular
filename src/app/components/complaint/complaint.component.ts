import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/model/complaint';
import { AuthService } from 'src/app/Services/auth.service';
import { ComplaintsService } from 'src/app/Services/complaints.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  public complaints: Complaint[];

  constructor(private complaintService: ComplaintsService,public authService :AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public getComplaint():void{
    this.complaintService.getAllComplaint().subscribe(
      (Response:Complaint[])=> {
        console.log(Response);
        this.complaints= Response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });
    }
   public onAddComplaint(addForm: NgForm): void {
  document.getElementById('add-complaint-form').click();
  this.complaintService.addComplaint(addForm.value).subscribe(
    (response: Complaint) => {
      console.log(response);
      this.getComplaint();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}
}