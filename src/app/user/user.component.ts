import { Component, OnInit } from '@angular/core';
import { ValidationserviceService } from '../login/validationservice.service';
import { StudendaddingService } from '../register/studendadding.service';
import { Student } from '../student';
import { LoggedserviceService } from './loggedservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public student!:Student;
  private d:number=-1;
  constructor(private val:ValidationserviceService,private loged:LoggedserviceService,private reg:StudendaddingService) { }

  ngOnInit(): void {
    console.log("here");
    this.d=this.val.getoptions();
    console.log(this.d);
    if(this.d==-1){
      console.log(this.reg.getoptions());
      this.d=this.reg.getoptions();
    }
    this.getData();
  }
  getData(){
    this.loged.getData(this.d).subscribe(
      (response:Student)=>{
        this.student=response;
        console.log(response);
      },
      (error)=>{
        console.log(error.message);
      }
    )
  }
}
