import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { HttpService } from '../../service/httpService/httpservice.service'
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private service: HttpService,
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
      this.service.post(loginDetails, "login").subscribe(
        response => {
          console.log("response in login", response);
          this.snackBar.open('Login Successful!!', 'ok', { duration: 5000 });
        },
        error => {
          console.log("Error in login", error);
          this.snackBar.open("login failed!!", "ok", { duration: 5000 });
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
}
