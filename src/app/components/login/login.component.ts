import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators
} from "@angular/forms";
import { UserService } from '../../service/user.service'
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  result:any;


  constructor(private service: UserService,
    private router: Router,
    private snackBar: MatSnackBar) { }


  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])

  ngOnInit() {
  }

  login() {
    try {
      console.log(this.email.value);
      console.log(this.password.value);
      if (this.email.value == "" || this.password.value == "")
        throw "Fields cannot be empty";
      const loginDetails = {
        "email": this.email.value,
        "password": this.password.value
      }
      console.log("login details===>", loginDetails);
      this.service.login(loginDetails).subscribe(
        response => {
          this.result= response;
          console.log("response in login", response);
          sessionStorage.setItem('token',this.result.token.token);
          localStorage.setItem('userId',this.result.message[0]._id);
          localStorage.setItem('firstname',this.result.message[0].firstname);
          localStorage.setItem('lastname',this.result.message[0].lastname);
          localStorage.setItem('email',this.result.message[0].email);
          localStorage.setItem('imageURL',this.result.message[0].imageURL);
           
          this.snackBar.open('Login Successful!!', 'ok', { duration: 5000 });
          this.router.navigate(["dashboard"])
        },
        error => {
          console.log("Error in login", error);
          this.snackBar.open("login failed!Please check your Username or Password and Try Again", "ok", { duration: 5000 });
        }
      )
    } catch{
      this.snackBar.open("Email or Password can not be empty!", "", {
        duration: 5000
      })
    }
  }
  forgotPassword() {
    this.router.navigate(["forgotPassword"])
  }
  register() {
    this.router.navigate(["register"])
  }
}
