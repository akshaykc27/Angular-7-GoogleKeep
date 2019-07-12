import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../service/noteServices/note.service'

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() card;
  public colorArray = [[], [], []];

  constructor(public service: NoteService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.colorArray = [
      [{ color: '#ffffff' }, { color: '#FA8072' }, { color: '#FFA500' }, { color: '#FFFF00' }],
      [{ color: '#98FB98' }, { color: '#AFEEEE' }, { color: '#ADD8E6' }, { color: '#87CEFA' }],
      [{ color: '#DDA0DD' }, { color: '#FFC0CB' }, { color: '#DEB887' }, { color: '#DCDCDC' }]
    ]
  }

  @Output() Event = new EventEmitter<any>()

  deleteNote() {
    console.log("in delete note function")
    console.log("data in cards", this.card);

    const note = {
      'noteId': this.card['_id']
    }
    console.log("in deleteNotes function with note id", note);
    this.service.deleteNotes(note).subscribe(data => {
      console.log("response in delete", data);
      this.Event.emit()
      this.snackBar.open('Note Delted Forever', 'Undo', {
        duration: 3000,
      })


    },
      error => {
        console.log("error in delete Notes ", error);
      })

  }

  moveToTrash() {
    console.log("in movetotrash note function")
    console.log("data in cards", this.card);

    const note = {
      'noteId': this.card['_id']
    }
    this.service.isTrash(note).subscribe(response => {
      console.log("response in isTrash", response);
      this.Event.emit();
      this.snackBar.open('Note Trashed', 'Undo', { duration: 3000 })
    }, error => {
      console.log("error in isArchive function ", error)
    })
  }

  isArchive() {
    console.log("in archive note function")
    console.log("data in cards", this.card);

    const note = {
      'noteId': this.card['_id']
    }

    this.service.isArchive(note).subscribe(response => {
      console.log("response in isArchive", response);

      this.Event.emit()
      this.snackBar.open('Note archived', 'Undo', { duration: 3000 })
    }, error => {
      console.log("error in isArchive function ", error)
    })
  }

  changeColor(color,card) {
    console.log("in changeColor note function")
    console.log("data in card", this.card);

    const note = {
      noteId : this.card['_id'],
      color
    }

    this.service.changeColor(note).subscribe( response => {
      console.log("response in isArchive", response);
      this.Event.emit()
      
    },error => {
      console.log("error while changing color",error);
      
    })
  }

}
