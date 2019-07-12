import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/noteServices/note.service'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  public notes=[];

  constructor(public service :NoteService) { }

  ngOnInit() {
    this.getTrasheddNotes()
  }

  getTrasheddNotes() {
    this.service.getAllUserNotes().subscribe(data => {
      this.notes = data['response']['data'];
      console.log("response of get all trashed notes ",data);
      
      console.log("get all trashed notes ts file",this.notes);

    },error=>{
      console.log("error while getting trashed notes",error);
      
    })
  }

}
