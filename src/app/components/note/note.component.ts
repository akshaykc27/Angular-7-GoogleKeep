import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {} from '@angular/router'
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
message="";
  constructor() { }

  ngOnInit() {
  }

}
