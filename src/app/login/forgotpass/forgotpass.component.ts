import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewpasserviceService } from './newpasservice.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
  public result:String="no";
  constructor(private passet:NewpasserviceService) { }

  ngOnInit(): void {
  }
  public setpass(form:NgForm){
    this.passet.setpass(form.value).subscribe(
      (response)=>{
        if(response==202){
          this.result="yes";
          form.reset();
        }else{
          this.result="denied";
        }
      },
      (error)=>{
        alert(error.message);
        this.result="never";
      }
    )
  }
}
