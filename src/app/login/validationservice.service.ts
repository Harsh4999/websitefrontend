import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';

import { Login } from '../Login';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ValidationserviceService {
  private d:number=-1;
  //private apiserverurl= 'https://webappbackend.herokuapp.com/login/user'
  private apiserverurl="http://localhost:8080/login/user"
  constructor(private http:HttpClient) { }
  public getvalidation(login:Login){
    return this.http.post(this.apiserverurl,login,{observe: 'response'}).pipe(map(data=>{
      console.log(data)
        return data.status;
    }));
  }
  setoptions(value: number){
    this.d=value;
  }
  getoptions(){
    return this.d;
  }
}
