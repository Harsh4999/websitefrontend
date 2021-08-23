import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Login } from '../Login';
import { ValidationserviceService } from './validationservice.service';
import { Router, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'user', redirectTo: '/src/app/user/user.component.html', pathMatch: 'full' },
  {path: 'forgotpass', redirectTo: '/src/app/login/forgotpass/forgotpass.component.html', pathMatch:'full'}
];

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login!:Login;
  public view:String="no";
  constructor(private val:ValidationserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  public getVal(valForm:NgForm){
    this.val.getvalidation(valForm.value).subscribe(
      (response)=>{
        console.log(response);
        if(response==202){
          console.log("success");
          this.view="yes";
          this.val.setoptions(valForm.value.rollno);
          this.router.navigate(['/user']);
        }else{
          //wrong pass
          this.view="wrong";
          valForm.reset();
        }
      },
      (error)=>{
        //problem in backend
        this.view="prob";
        console.log(error.message);
        valForm.reset();
      }
    )
  }
  public forgotpass(){
    this.router.navigate(['/forgotpass']);
  }
}
