import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() allCards=[];
  @Input() text

  @Output() displayEvent = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

  eventOccur()
  {
    this.displayEvent.emit();
  }
 
}
