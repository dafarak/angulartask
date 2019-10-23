import { Component, OnInit } from '@angular/core';
import { details} from '../form/class';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  constructor() { }
  data:details;
  ngOnInit() {
  }

  resetForn(from ? :NgForm){
    if (from != null)
    from.resetForm();
    this.data={
      fname:null,
      name:null,
      text:null
     
    }
  }
  onSubmitupdate(a,b,c,d){
    localStorage.setItem("fname", a);
    localStorage.setItem("lname", b);
    localStorage.setItem("text", c);
    localStorage.setItem("gender", d);
    localStorage.setItem("response", "true");
    // localStorage.setItem("checked1", e);
    // localStorage.setItem("gender", d);
   
    // localStorage.setItem("reido", d)
    
    // console.log(a)
   
  }
  onSelectionChange(female) {
    console.log(female.checked);
  } 

  

}
