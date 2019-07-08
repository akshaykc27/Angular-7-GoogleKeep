import { Injectable } from '@angular/core';
import{HttpService} from '../service/httpService/httpservice.service'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  register(data){
    console.log("in reg service");
    return this.http.post("register",data);
    
  }
   login(data)
   {
     console.log("in login user service ");
    return this.http.post("login",data);
   }
   forgotPassword(data)
   {
     console.log("in forgotPassword user service");
     return this.http.post("forgotPassword",data);
   }

   addNotes(data){
     console.log("in addNotes service");
     return this.http.post("addNotes",data)
   }
}