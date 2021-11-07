import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private complaintService: ComplaintsService,public crudApi: ComplaintsService,public fb: FormBuilder,public toastr: ToastrService,public authService :AuthService, private router: Router) { }

  ngOnInit(): void {
    this.infoForm()
  
  }
  infoForm() {
  this.crudApi.dataForm = this.fb.group({
    
    type: ['', [Validators.required, Validators.minLength(2)]],
    
    });
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
  let a = addForm.value;
  console.log(addForm.value);
  let value = (<HTMLSelectElement>document.getElementById('type')).value;
  console.log(value);
  a["type"]= value;
  console.log(a);
  this.complaintService.addComplaint(addForm.value).subscribe(
    (response: Complaint) => {
      console.log(response);
      
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}
}