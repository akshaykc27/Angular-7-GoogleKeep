import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { NoteService } from '../../service/noteServices/note.service'

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() card;

  constructor(public service: NoteService,public snackBar:MatSnackBar) { }

  ngOnInit() {
  }

  @Output() Event = new EventEmitter<any>()

  deleteNote() {
    console.log("in delete note function")
    console.log("data in cards", this.card);

    const note = {
      'noteId': this.card['_id']
    }
    console.log("in deleteNotes function with note id",note);
    this.service.deleteNotes(note).subscribe(data => {
      console.log("response in delete", data);
      this.Event.emit()
      this.snackBar.open('Note Trashed', 'Undo', {
        duration: 3000,
      })


    },
      error => {
        console.log("error in delete Notes ", error);
      })

  }

}
