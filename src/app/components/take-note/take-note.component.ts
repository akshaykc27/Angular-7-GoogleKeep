import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NoteService } from '../../service/noteServices/note.service';
import { } from '@angular/router'

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  //public cards;
  public title = "";
  public description = "";

  @Output() messageEvent = new EventEmitter<any>()

  constructor(private service: NoteService) { }

  ngOnInit() {
  }

  show = false;
  addNotes() {
    console.log('in add notes');
    console.log('title in addnotes', this.title)
    console.log('description in addnotes', this.description);
    const note = {
      "title": this.title,
      "description": this.description
    }

    this.service.addNotes(note).subscribe(
      response => {
        console.log("response after adding", response);
        this.messageEvent.emit()
      },
      error => {
        console.log("error while adding notes", error);
      }
    )
  }
}
