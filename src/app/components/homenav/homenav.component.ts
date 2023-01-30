import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-homenav',
  templateUrl: './homenav.component.html',
  styleUrls: ['./homenav.component.scss']
})
export class HomenavComponent implements OnInit {

  constructor(private router: Router) { }
  insertbills:string;
  adminaccess:string;
  systemmaintenance:string;
  ngOnInit(): void {
  }

  gotoBills() {
    localStorage.setItem('page',"insertbills");
    localStorage.setItem('feature',"InsertBills");
    this.router.navigateByUrl('/pinpart');
  }

  gotoAdmin() {
    localStorage.setItem('page',"adminaccess");
    localStorage.setItem('feature',"Admin")
    this.router.navigateByUrl('/pinpart');
  }

  // gotoAdmin() {
  //   this.router.navigateByUrl('/adminaccess');
  // }
  
  
  gotoBank() {
    localStorage.setItem('page',"standbank");
    localStorage.setItem('feature',"StandBank")
    this.router.navigateByUrl('/pinpart');
    //this.router.navigateByUrl('/sbankdenomination');
  }


  gotoMaintenance() {
    localStorage.setItem('page',"systemmaintenance");
    localStorage.setItem('feature',"Admin")
  //  this.router.navigateByUrl('/systemmaintenance');
  this.router.navigateByUrl('/pinpart');
  }
  gotoTruck() {
    localStorage.setItem('feature',"OTPScreen")
    this.router.navigateByUrl('/submitotp');
  }

  gotoContactUs() {
    localStorage.setItem('page',"contactus");
    this.router.navigateByUrl('/pinpart');
  }
}
