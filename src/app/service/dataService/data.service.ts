import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private source=new BehaviorSubject('default message');
currentData=this.source.asObservable();


  constructor() {console.log("currentData",this.currentData); }
send(message:string){
this.source.next(message);
}

}
