import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  dbUrl = environment.url
  constructor(private http: HttpClient) { }

  post(url, data) {
    console.log("data in http service", data)
    console.log(url)
    console.log("token from local storage", localStorage.getItem("token"));

    var httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        token: localStorage.getItem("token")
      })
    };
    return this.http.post(this.dbUrl + url, data, httpOptions);
  }

  get(url) {
    const httpOptions = {
      headers: new HttpHeaders({
        token: localStorage.getItem('token'),
        'Content-Type': "application/json"
      })
    }
    return this.http.get(this.dbUrl + url, httpOptions)
  }

  put(url, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        token: localStorage.getItem('token'),
      })
    }
    return this.http.put(this.dbUrl + url, data, httpOptions)
  }

}
