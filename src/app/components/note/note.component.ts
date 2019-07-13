import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../service/noteServices/note.service';
import{DataService} from '../../service/dataService/data.service'
import {} from '@angular/router'
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit{
  public cards;
  //public changes
  

  constructor(private noteService: NoteService, public dataService:DataService ) { }

  ngOnInit() {
    this.dataService.currentData.subscribe(data=>{
    this.allNotes();
    })
    
    this.allNotes();
  }

allNotes(){
        this.noteService.getAllUserNotes().subscribe(data => {
          this.cards = data['response']['data'];
          console.log("response of get all notes ",data);
          
          console.log("get all notes ts file",this.cards);
        },error => {
          console.log("error in getting all notes",error)
        })
  }
  eventOccur(){
    this.allNotes();
  }
}
