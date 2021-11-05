import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/Services/users.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  public users: User[];
  public editUser: User;
  public deleteUser: User;
  
  

  constructor(private usersService: UsersService,public authService :AuthService, private router: Router) { }

  ngOnInit(){
    this.getUsers();
  }
  public getUsers():void{
      this.usersService.getAllUsers().subscribe(
        (Response:User[])=> {
          console.log(Response);
          this.users = Response;
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        });
      }
      public onOpenModal(user: User, mode: string): void {
       const container = document.getElementById('main-container');
       const button = document.createElement('button');
       button.type = 'button';
       button.style.display = 'none';
       button.setAttribute('data-toggle', 'modal');
       if (mode === 'add') {
         button.setAttribute('data-target', '#addUserModal');
       }
       if (mode === 'edit') {
         this.editUser = user;
         button.setAttribute('data-target', '#updateUserModal');
       }
       if (mode === 'delete') {
         this.deleteUser = user;
         button.setAttribute('data-target', '#deleteUserModal');
       }
       container.appendChild(button);
       button.click();
     }
     public onAddUser(addForm: NgForm): void {
       document.getElementById('add-user-form').click();
       this.usersService.addUser(addForm.value).subscribe(
         (response: User) => {
           console.log(response);
           this.getUsers();
           addForm.reset();
         },
         (error: HttpErrorResponse) => {
           alert(error.message);
           addForm.reset();
         }
       );
     }
     public onUpdateUser(user: User):void {
      this.usersService.updateUser(user).subscribe(
        (response: User) => {
          console.log(response);
          this.getUsers();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    public onDeleteUser(email: String): void {
      this.usersService.deleteUser(email).subscribe(
        (response: void) => {
          console.log(response);
          this.getUsers();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
 
    
}


