import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import{NoteService} from '../../service/noteServices/note.service'
import {DataService} from '../../service/dataService/data.service'
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  public card : object;
  public title : String;
  public description : String;

  constructor(public dialogRef:MatDialogRef<UpdateNoteComponent>,
    public noteService: NoteService,
    @Inject(MAT_DIALOG_DATA) public note, 
    public dataService:DataService) { 
      this.title = note.title;
      this.description = note.description;
      this.card =note;
      console.log("note details in updateNotes constructor",note);
    }

  ngOnInit() {
  }

  updateNotes(card){
    console.log("in updateNote function ");
    console.log("note id ====>",this.card['_id']);
    
    const note={
      'title': this.title,
      'description':this.description,
      'noteId':this.card['_id']
    }
    this.noteService.updateNotes(note).subscribe(
      response =>{
        console.log("resposne",response);
        this.dataService.send("")
      },
      error =>{
        console.log("error while updating notes",error);
      }
    )
    
  }

  onNoClick():void{
    this.dialogRef.close();
  }

}
