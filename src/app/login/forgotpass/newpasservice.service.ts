import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/Login';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewpasserviceService {
  //private apiserverurl="http://localhost:8080/login/forgotpass/"
 private apiserverurl= 'https://webappbackend.herokuapp.com/login/forgotpass/'
 constructor(private http:HttpClient) { }
  public setpass(login:Login){
    return this.http.post(`${this.apiserverurl}${login.rollno}`,login.password,{observe: 'response'}).pipe(map(data=>{
      console.log(data)
      console.log(data.status);
        return data.status;
    }));
  }
}
