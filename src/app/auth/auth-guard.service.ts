import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router) { }  //public authService: AuthService, public router: Router
  canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean {

    if(sessionStorage.getItem("token")){
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  }
  //   if (!this.authService.isAuthenticated()) {
  //     console.log("In can activate function");
      
  //     this.router.navigate['/login'];
  //     return false;
  //   }
  //   return true;
  // }

  // canActivateChild(): boolean {
  //   if (!this.authService.isAuthenticated()) {
  //     this.router.navigate['/login'];
  //     return false;
  //   }
  //   return true;
  // }
}
