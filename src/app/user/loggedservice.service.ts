import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../student';
@Injectable({
  providedIn: 'root'
})
export class LoggedserviceService {
  //private apiserverurl="http://localhost:8080/user/"
  private apiserverurl="https://webappbackend.herokuapp.com/user/";
  constructor(private http:HttpClient) { }
  public getData(rollno:number): Observable<Student>{
    return this.http.get<Student>(`${this.apiserverurl}${rollno}`);
  }
}
