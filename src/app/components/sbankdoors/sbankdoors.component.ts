import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sbankdoors',
  templateUrl: './sbankdoors.component.html',
  styleUrls: ['./sbankdoors.component.scss']
})
export class SbankdoorsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  gotoChangeRequest() {
    this.router.navigateByUrl('/changerequest');
  }
  
}
