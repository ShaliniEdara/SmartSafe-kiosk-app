import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitotp',
  templateUrl: './submitotp.component.html',
  styleUrls: ['./submitotp.component.scss']
})
export class SubmitotpComponent implements OnInit {

  constructor(private router:Router) { }
  gotoTruckMain(){
    this.router.navigateByUrl('/truckmain');
  }
  ngOnInit(): void {
  }

}
