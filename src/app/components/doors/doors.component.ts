import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss']
})
export class DoorsComponent implements OnInit {

  constructor(private router: Router) {
   
  }

  ngOnInit(): void {
    var role = localStorage.getItem('Role');
  }
  gotoSbankoorsDenominations() {
    this.router.navigateByUrl('/standbankdoordenominations');
  }
  gotoChangeRequestDoorDenominations(){
    this.router.navigateByUrl('/changedoordenominations');
  }
  gotoIntersafeDenominations(){
    this.router.navigateByUrl('/intersafechange');
  }
  findAccess(role: string) : boolean {
    console.dir(role === localStorage.getItem('Role'));
    return  role === localStorage.getItem('Role');
  }
}
