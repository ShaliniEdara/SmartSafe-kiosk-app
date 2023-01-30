import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,Validators, ReactiveFormsModule, FormsModule, NgControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addtruck',
  templateUrl: './addtruck.component.html',
  styleUrls: ['./addtruck.component.scss']
})
export class AddtruckComponent implements OnInit {

  ngOnInit(): void {
  }
  form: FormGroup;
  constructor(fb:FormBuilder) {
   this.form=fb.group({
     phone:['']
   })
   this.form = new FormGroup({
    'emailIn': new FormControl('', [
      Validators.required,
     Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ])
  });
 }
 
}
