import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/httpservice.service';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpService) {
  }

  addNotes(data) {
    console.log("in addNotes service");
    return this.http.post("createNote", data);
  }

  getAllUserNotes() {
    console.log("in getAllUserNotes service");
    return this.http.get("findAllNote")
  }

  updateNotes(data) {
    console.log("in update note service");
    return this.http.put("updateNote", data)

  }

  deleteNotes(data) {
    console.log("in update note service", data);
    return this.http.post("deleteNote", data)

  }

  isArchive(data) {
    console.log("in archive note service", data);
    return this.http.post("archive", data)
  }

  isTrash(data) {
    console.log("in trash note service", data);
    return this.http.post("trash", data)
  }

  changeColor(data) {
    console.log("in change color note service", data);
    return this.http.put("changeColor", data)
  }

  getALlLabels() {
    console.log("in change getALlLabels service");
    return this.http.get('getAllLabels')
  }

  addLabel(data) {
    console.log("in change addLabel service",data);
    //let data1= JSON.parse(data);
    return this.http.post('addLabel',data)
  }

  setReminder(data) {
    console.log("in set reminder function", data);
    return this.http.post("setReminder", data);
  }
}
