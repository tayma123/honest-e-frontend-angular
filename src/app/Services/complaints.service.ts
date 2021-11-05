import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Complaint } from '../model/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  private host=environment.host;

  constructor(private http: HttpClient) { }
  public getAllComplaint():Observable<Complaint[]>{
        
    return this.http.get<Complaint[]>(this.host+"/complaint/all");
}
public addComplaint(complaint: Complaint):Observable<Complaint>{
    
    return this.http.post<Complaint>(this.host+"/complaint/add",complaint);
}
public updateComplaint(complaint: Complaint):Observable<Complaint>{
    
  return this.http.post<Complaint>(this.host+"/complaint/update", complaint);
}

public deleteComplaint(id: number): Observable<void> {
return this.http.delete<void>(`${this.host}/complaint/delete/${id}`);
}
public getAllComplaints():Observable<Complaint[]>{
        
  return this.http.get<Complaint[]>(this.host+"/complaint/all");
}  

}
