import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/student';

@Injectable({
  providedIn: 'root'
})
export class UpdateserviceService {
  private apiserverUrl="http://localhost:8080/user/update";
  constructor(private http:HttpClient) { }
  public updatedetails(student:Student):Observable<Student>{
    return this.http.post<Student>(this.apiserverUrl,student);
  }
}
