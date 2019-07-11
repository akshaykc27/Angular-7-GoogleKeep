import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {UpdateNoteComponent} from '../update-note/update-note.component'


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() allCards=[];
  @Input() text

  @Output() displayEvent = new EventEmitter<any>()
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  eventOccur()
  {
    this.displayEvent.emit();
  }

  openDialog(data): void {
    console.log("in openDialog fuction");
    this.dialog.open(UpdateNoteComponent,{
      data
    })


  }
 
}
