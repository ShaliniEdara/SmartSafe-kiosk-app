import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminaccess',
  templateUrl: './adminaccess.component.html',
  styleUrls: ['./adminaccess.component.scss']
})
export class AdminaccessComponent implements OnInit {

  // disabledTab = true;
  role: any;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('Role');

    console.dir(this.role);
  }

  ngAfterViewInit() {


  }
  gotoReports() {
    this.router.navigateByUrl('/reports');
  }
  gotoHome() {
    this.router.navigateByUrl('/homenav');
  }
  gotoDoors() {
    this.router.navigateByUrl('/doors');
  }
  gotoAccounts() {
    this.router.navigateByUrl('/accounts');
  }
  gotoChangeRequest() {
    this.router.navigateByUrl('/changerequest');
  }

findAccess(role: string) : boolean {
  console.dir(role === localStorage.getItem('Role'));
  return  role === localStorage.getItem('Role');
}

}
