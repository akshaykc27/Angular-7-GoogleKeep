import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/noteServices/note.service'
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  public notes=[];

  constructor(public service: NoteService) { }

  ngOnInit(
  ) {
    this.getArchivedNotes();
  }

  getArchivedNotes() {
    this.service.getAllUserNotes().subscribe(data => {
      this.notes = data['response']['data'];
      console.log("response of get all archived notes ",data);
      
      console.log("get all archived notes ts file",this.notes);

    },error=>{
      console.log("error while getting archived notes",error);
      
    })
  }
}
