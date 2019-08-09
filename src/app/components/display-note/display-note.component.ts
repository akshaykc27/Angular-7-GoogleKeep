import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { CdkDragDrop,moveItemInArray} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() allCards = [];
  @Input() text;
  @Input() search;

  @Output() displayEvent = new EventEmitter<any>()
  constructor(public dialog: MatDialog) {
    console.log("in display note ", this.search);

  }

  ngOnInit() {
  }

  eventOccur() {
    this.displayEvent.emit();
  }

  openDialog(data): void {
    console.log("in openDialog fuction");
    this.dialog.open(UpdateNoteComponent, {
      data
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.allCards, event.previousIndex, event.currentIndex);
  }

}
