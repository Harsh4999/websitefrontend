import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { Student } from 'src/app/student';
import { LoggedserviceService } from '../loggedservice.service';
import { UpdateserviceService } from './updateservice.service';
const routes: Routes = [
  { path: 'user', redirectTo: '/src/app/user/user.component.html', pathMatch: 'full' }
];
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private stud!:Student;
  constructor(private logged:LoggedserviceService,private router:Router,private update:UpdateserviceService) { }

  ngOnInit(): void {
    this.stud=this.logged.getoption();
    console.log(this.stud);
  }
  updateDetails(addForm:NgForm){
    this.stud.name=addForm.value.name;
    this.stud.username=addForm.value.username;
    this.stud.password=addForm.value.password;
    this.update.updatedetails(this.stud).subscribe(
      (response:Student)=>{
        console.log(response);
        this.router.navigate(['/user']);
      },
      (error)=>{
        console.log(error.message);
      }
    )
  }

  goback(){
    this.logged.setoption(this.stud);
    this.router.navigate(['/user']);
  }
}
