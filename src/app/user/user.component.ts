import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   text:any
   fname:any
   lname:any
  constructor(private routes: Router) { }

  ngOnInit() {
    this.lname = localStorage.getItem('lname')
     this.fname = localStorage.getItem('fname')
    this.text = localStorage.getItem('gender')
    console.log(this.text)
    console.log(this.fname)
    console.log(this.lname)
  }
  viewpage(){
    localStorage.setItem('response', "true");
    console.log('true');
    this.routes.navigate(['/view']);
  }
  delete(){
    this.text  = ""
    this.fname = ""
    this.lname = ""
  }
  edit(){}
 

}

