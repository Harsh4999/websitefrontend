import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { Student } from '../student';
import { StudendaddingService } from './studendadding.service';
const routes: Routes = [
  { path: 'user', redirectTo: '/src/app/user/user.component.html', pathMatch: 'full' },

];
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public student!:Student
  public view:String="no";
  constructor(private std:StudendaddingService,private router:Router) { }

  ngOnInit(): void {
  }
  addStudent(addForm:NgForm):void{

    this.std.addStud(addForm.value).subscribe(
      (response:Student)=>{
        console.log(response);
        this.view="yes";
        console.log(response.rollNo);
        this.std.setoptions(response.rollNo);
        this.router.navigate(['/user']);
      },
      (error:HttpErrorResponse)=>{
        console.log(error.message);
        alert("Please enter new roll number this one already taken!!");
        addForm.reset();
      }
    )
  }
}
