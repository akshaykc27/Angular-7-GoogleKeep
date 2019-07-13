import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/dataService/data.service';
import { NoteService } from '../../service/noteServices/note.service';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { from } from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public arrayCard = [];
  public search: string;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public dataService: DataService, public noteService: NoteService) { }

  ngOnInit() {
    this.dataService.currentData.subscribe(message => {
      console.log("in search comp data service",message)
      this.search = message;
    })

    this.getAllNotes()
  }

  getAllNotes(){
    this.noteService.getAllUserNotes()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {
      console.log("data in search component ",data);
      var result=data['response']['data'];
      console.log("result ",result);
      for (var i = result.length - 1; i >= 0; i--) {
        this.arrayCard.push(result[i]);
      }
      console.log("array of cards in search===> ", this.arrayCard);
    },
    error => {
      console.log(error);
    })
}
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
