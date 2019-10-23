import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
text:any
fname:any
lname:any
gender:any
  constructor() {}
   
  ngOnInit() {
    
    this.lname = localStorage.getItem('lname')
    this.fname = localStorage.getItem('fname')
   this.text = localStorage.getItem('text')
   this.gender = localStorage.getItem('gender')
  }
  

}
