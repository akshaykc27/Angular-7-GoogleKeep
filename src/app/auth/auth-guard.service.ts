import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public authService: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      console.log("In can activate function");
      
      this.router.navigate['/login'];
      return false;
    }
    return true;
  }

  // canActivateChild(): boolean {
  //   if (!this.authService.isAuthenticated()) {
  //     this.router.navigate['/login'];
  //     return false;
  //   }
  //   return true;
  // }
}
