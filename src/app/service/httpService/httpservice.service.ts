import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
dbUrl=environment.url
  constructor(private http:HttpClient) { }

  post(url,data){
    console.log("data in http service",data)
    console.log(url)
    var httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
   return this.http.post(this.dbUrl+url,data,httpOptions);
  }


}
