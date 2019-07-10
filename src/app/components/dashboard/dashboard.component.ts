import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public firstname = localStorage.getItem("firstname");
  public lastname = localStorage.getItem('lastname');
  public firstLetter = this.firstname.charAt(0).toUpperCase();
  
  
  constructor(private dialouge:MatDialog) { }

  ngOnInit() {
  }
  
}

