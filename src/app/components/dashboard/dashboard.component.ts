import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../../service/dataService/data.service';
import { NoteService } from '../../service/noteServices/note.service';
import { EditLabelComponent } from '../edit-label/edit-label.component'
import { CropimageComponent } from '../cropimage/cropimage.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public search: string;
  public firstname = localStorage.getItem("firstname");
  public lastname = localStorage.getItem('lastname');
  public firstLetter = this.firstname.charAt(0).toUpperCase();
  public allLabels;
  public image = localStorage.getItem('imageURL');


  constructor(public router: Router,
    public dataService: DataService,
    public noteService: NoteService,
    public dialog: MatDialog
  ) {
    console.log('image ======> ',this.image)
   }

  ngOnInit() {
    this.getAllLabels()
  }
  openNotes() {
    this.router.navigate(['dashboard/note'])
  }
  openArchive() {
    console.log("in open Archive functions");

    this.router.navigate(['dashboard/archive'])
  }
  openTrash() {
    console.log("in open Trashed functions");

    this.router.navigate(['dashboard/trash'])
  }
  startSearch() {
    this.router.navigate(['dashboard/search'])
  }
  lookFor() {
    this.dataService.send(this.search)
  }
  getAllLabels() {
    this.noteService.getALlLabels().subscribe(data => {
      console.log("while getting all labels", data);
      this.allLabels = data;
    }, error => {
      console.log("error while getting all labels", error);
    })
  }

  editLabels(data): void {
    console.log("data in editLabels",data);
    this.dialog.open( EditLabelComponent ,{
      data
    })
  }

  onFileUpload(event) {
    this.openCropPicComp(event);
  }

  logout() {
    this.router.navigate(['login']);
    sessionStorage.clear();
    localStorage.clear();
  }

  openCropPicComp(data){
    console.log("data in dashboard openCropPic ",data);
    
    const dialogRef = this.dialog.open(CropimageComponent,{
      width: '600px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataService.currentData.subscribe(message => {
        console.log("data in openCropImage",message);
        
        if(message == null) {
          return ;
        }
        this.image = message;
        localStorage.setItem('imageURL',this.image)
      })
    })
  }
}

