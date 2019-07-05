import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material";
import {HttpService} from '../../service/httpService/httpservice.service'

import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
// firstName:string;
// lastName:string;
// email:string;
// password:string;
// confirmPassword:string;
constructor(private router:Router,
  private service: HttpService,
  private snackBar: MatSnackBar
  ) { }
firstname=new FormControl("",[Validators.required]);
  lastname=new FormControl("",[Validators.required]);
  email=new FormControl("",[Validators.required, Validators.email]);
  password=new FormControl("",[Validators.required]);
  confirmpassword=new FormControl("",[Validators.required]);
  ngOnInit() {
  }
register(){
  try{
  console.log(this.firstname.value);
  console.log(this.lastname.value);
  console.log(this.email.value);
  console.log(this.password.value);
  console.log(this.confirmpassword.value);
  const registerDetails={
   "firstname":this.firstname.value,
   "lastname":this.lastname.value,
   "email":this.email.value,
   "password":this.password.value,
   "confirmPassword":this.confirmpassword.value
  };
console.log("Register Model",registerDetails);
this.service.post(registerDetails,"register").subscribe(
  response =>{
 console.log("response in registration",response);
 this.snackBar.open("Registered successfully!!", "ok", {duration: 5000});
 this.router.navigate(["login"])
  },
  error=>{
    console.log("Error in registration",error);
    this.snackBar.open("Register failed!!", "ok", { duration: 5000 });
  }
  );
  this.router.navigate(["login"])
}catch {
  this.snackBar.open("fields cannot be empty", "ok", { duration: 5000 });
}
}
signIn()
{
  this.router.navigate(["login"])
}

}
