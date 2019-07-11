import { Injectable } from '@angular/core';
import {HttpService} from '../httpService/httpservice.service';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpService) {

   }

   addNotes(data){
    console.log("in addNotes service");
    return this.http.post("createNote",data);
  }

  getAllUserNotes(){
    console.log("in getAllUserNotes service");
    return this.http.get("findAllNote")
  }

  updateNotes(data){
    console.log("in update note service");
    return this.http.put("updateNote",data)
    
  }

 deleteNotes(data){
    console.log("in update note service",data);
    return this.http.post("deleteNote",data)
    
  }


}
