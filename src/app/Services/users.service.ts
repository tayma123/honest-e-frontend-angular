import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Complaint } from "../model/complaint";


import { User } from "../model/user";


@Injectable({providedIn :"root"})
export class UsersService{

  private host=environment.host;
  suser = false;
  choixmenu : string  = 'A';
  public dataForm:  FormGroup; 
    constructor(private http: HttpClient){
     
    }
    createData(user:User): Observable<Object> {
      return this.http.post(`${this.host}/user/add`, user);
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.host}/${id}`, value);
    }
    public getAllUsers():Observable<User[]>{
        
        return this.http.get<User[]>(this.host+"/user/all");
    }  
     public getUser(email:string):Observable<User>{
        
        return this.http.get<User>(`${this.host}/user/find/${email}`);
    }
    //concernant le profile
      public getUser_complaints(email:string):Observable<Complaint[]>{
        
        return this.http.get<Complaint[]>(`${this.host}/complaint//findByUser/${email}`);
    }
    

    public addUser(user: User):Observable<User>{
        
        return this.http.post<User>(this.host+"/user/add", user);
    }
    public updateUser(user: User):Observable<User>{
        
      return this.http.post<User>(this.host+"/user/update", user);
  }
    //public deleteUser(email: String):Observable<void>{
        
       // return this.http.delete<void>(this.host+"/user/delete/"+email);
   // }
       
  public deleteUser(email: String): Observable<void> {
    return this.http.delete<void>(`${this.host}/user/delete/${email}`);
  }
  }