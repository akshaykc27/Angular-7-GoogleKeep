import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/service/noteServices/note.service';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {
  public labelName : string;
  public allLabels :string;
  constructor(public dialogRef: MatDialogRef<EditLabelComponent>,
    @Inject(MAT_DIALOG_DATA) public labels,
    public router:Router,
    public noteService : NoteService) { 
      this.allLabels = labels;
    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addLabel(): void {
    var labelData={
      "labelName" : this.labelName
    }
    this.noteService.addLabel(labelData).subscribe( data => {
      console.log("in add label funtion",data)
    },error =>{
      console.log("error in add label funtion",error)
    })
  }
}
