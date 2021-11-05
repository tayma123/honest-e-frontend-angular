import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  public loggedUser: string;
  public lastName: string;
  public firstName: string;
  public password : string;
  public phone : number;
  public isloggedIn: Boolean = false;
  public role: string;
  public name_analyse: string;
 
  private host=environment.host;
  constructor(private router:Router,private http: HttpClient) {}

  getUserFromDB(email:string):Observable<User>{
    const url=`${this.host}/user/find/${email}`;
     return this.http.get<User>(url);

  }
  
  SignIn(user: User){
    
        
        this.loggedUser = user.email;
        this.firstName=user.firstName;
        this.lastName=user.lastName;
        this.phone=user.phone;
        this.password =user.password;
        this.isloggedIn = true;
        this.role = user.role;
      
        
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
  
    
  isAdmin():Boolean{
    console.log("role "+this.role);
    if (!this.role) //this.roles== undefiened
        return false;
    return (this.role.indexOf('ADMIN') >-1) ;
    }
    logout() {
      this.isloggedIn= false;
      this.loggedUser = undefined;
      this.role = undefined;
      localStorage.removeItem('loggedUser');
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      this.router.navigate(['/login']);
      }
      isAgent():Boolean{
        console.log("role "+this.role);
        if (!this.role) //this.roles== undefiened
            return false;
        return (this.role.indexOf('AGENT') >-1) ;
        }
  



}
