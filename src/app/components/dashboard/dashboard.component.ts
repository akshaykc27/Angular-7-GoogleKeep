import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public firstname = localStorage.getItem("firstname");
  public lastname = localStorage.getItem('lastname');
  public firstLetter = this.firstname.charAt(0).toUpperCase();
  
  
  constructor(private dialouge:MatDialog,public router : Router) { }

  ngOnInit() {
  }
  openNotes(){
    this.router.navigate(['dashboard/note'])
  }
  openArchive(){
  console.log("in open Archive functions");
  
    this.router.navigate(['dashboard/archive'])
  }
  openTrash(){
    console.log("in open Trashed functions");
  
    this.router.navigate(['dashboard/trash'])
  }
}

