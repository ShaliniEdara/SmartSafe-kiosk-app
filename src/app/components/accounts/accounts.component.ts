import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(private router:Router) { }
  gotoEmployee(){
    localStorage.setItem('Role',"EMPLOYEE")
    this.router.navigateByUrl('/empaccount');
  }
  gotoManager(){
    localStorage.setItem('Role',"MANAGER")
    this.router.navigateByUrl('/empaccount');
  }

  gotoTruck(){
    localStorage.setItem('Role',"TRUCK")
    this.router.navigateByUrl('/empaccount');
  }
  gotoShiftManager(){
    localStorage.setItem('Role',"SHIFTMANAGER")
    this.router.navigateByUrl('/empaccount');
  
  }

  gotoRoleAccess(){
    localStorage.setItem('Role',"ADMIN")
    this.router.navigateByUrl('/popups');
  }


  ngOnInit(): void {
  }

}
