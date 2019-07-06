import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import{EditLabelsComponent} from '../edit-labels/edit-labels.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dialouge:MatDialog) { }

  ngOnInit() {
  }
  editLabels(){
     console.log("in edit labels");
     this.dialouge.open(EditLabelsComponent);
  }
}

