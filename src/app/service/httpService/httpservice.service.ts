import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  dbUrl = environment.url
  constructor(private http: HttpClient) { }

  postLogin(url, data) {
    console.log("data in http service", data)
    console.log(url)
    console.log("token from local storage", localStorage.getItem("token"));

    var httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post(this.dbUrl + url, data, httpOptions);
  }

  post(url, data) {
    console.log("data in http service", data)
    console.log(url)
    console.log("token from local storage", localStorage.getItem("token"));

    var httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        token: sessionStorage.getItem("token")
      })
    };
    return this.http.post(this.dbUrl + url, data, httpOptions);
  }

  postGoogle(url) {
    console.log("data in http service")
    console.log(url)
   // console.log("token from local storage", localStorage.getItem("token"));

    var httpOptions = {
      headers: new HttpHeaders({

        "Content-Type": "application/x-www-form-urlencoded",
         "Access-Control-Allow-Origin":"http://localhost:4000",
         //"Origin" : "http://localhost:4000/auth/google"
         
        //token: sessionStorage.getItem("token")
      })
    };
    return this.http.get(this.dbUrl + url, httpOptions)
  }

  get(url) { 
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('token'),
        'Content-Type': "text/html",
        'Access-Control-Allow-Origin':'*',

      })
    }
    return this.http.get(this.dbUrl + url, httpOptions)
  }

  put(url, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('token'),
      })
    }
    return this.http.put(this.dbUrl + url, data, httpOptions)
  }

  postResetPassword(url,data,token){
    
    const httpOptions = { 
      headers : new HttpHeaders({
        token: token,
        'Content-Type': "application/json"
      })
    }
    return this.http.post(this.dbUrl + url+"/:"+token, data, httpOptions);
  }

}
