import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
//     const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

//     return (invalidCtrl || invalidParent);
//   }
// }

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  userData: any;
  password: string;
  confirmPassword: string;
  token : string;
  constructor(public userService: UserService, public router: Router, 
    public snackbar: MatSnackBar, public route : ActivatedRoute) {

  }


  myForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  })


  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
  }


  submit() {

    if (this.myForm.value.password != this.myForm.value.confirmPassword) {
      this.snackbar.open("Passwords do not match", "err", { duration: 5000 })
    }
    else {
      console.log("in sumbmit function");
      this.userData = {
        password : this.myForm.value.password,
        confirmPassword : this.myForm.value.confirmPassword
      }
      console.log("in submit userDaTA     " + this.token);
      this.userService.resetPassword(this.userData,this.token).subscribe(data => {
        console.log("password reset successfully", data);
        this.snackbar.open('Passwords reset successfully','ok',{duration : 5000})
      },
        error => {
          console.log("password reset unsuccessful", error);
          this.snackbar.open('Passwords reset unsuccessful','err',{duration : 5000})
        })
    }
  }



}
