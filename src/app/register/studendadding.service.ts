import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from '../student';
@Injectable({
  providedIn: 'root'
})
export class StudendaddingService {
  private d:number=-1;
  //private apiserverurl = 'http://localhost:8080/student/add'
  private apiserverurl= 'https://webappbackend.herokuapp.com/student/add'
 constructor(private http:HttpClient) { }
  public addStud(student:Student):Observable<Student>{
    console.log(student);
    return this.http.post<Student>(this.apiserverurl,student);
  }
  setoptions(value: number){
    this.d=value;
  }
  getoptions(){
    return this.d;
  }
}
