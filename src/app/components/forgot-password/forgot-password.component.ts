import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private service:UserService,
    private router:Router,
    public snackBar:MatSnackBar) { }

    email = new FormControl('',[Validators.required,Validators.email])
  ngOnInit() {
  }
forgotPassword() 
{
  if(this.email.value == "")
  throw "fields can not be empty"
  const data = {
    "email" : this.email.value
  }
  console.log(data);
  this.service.forgotPassword(data).subscribe(
    response => {
      console.log("response in forgotPassword", response);
      this.snackBar.open(`An Email has been sent to${this.email.value}`,"ok",{duration:5000});
    },
    error => {
      console.log("Error in forgotPassword", error);
      this.snackBar.open("ERROR!!", "ok", { duration: 5000 });
    }
  )
  this.router.navigate(["resetPassword"]);
}
login(){
  this.router.navigate(["login"])
}
}
