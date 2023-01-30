import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empaccount',
  templateUrl: './empaccount.component.html',
  styleUrls: ['./empaccount.component.scss']
})
export class EmpaccountComponent implements OnInit {

  role: any;
  constructor(private router: Router) {
    this.role = localStorage.getItem('Role');
  }
  addEmployee() {
    this.router.navigateByUrl('/addaccount');
  }
  editEmployee() {
    this.router.navigateByUrl('/editaccount');
  }
  removeEmployee() {
    this.router.navigateByUrl('/removeaccount');
  }

  ngOnInit(): void {

  }

}
