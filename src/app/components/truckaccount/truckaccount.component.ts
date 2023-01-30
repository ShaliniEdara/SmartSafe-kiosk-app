import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-truckaccount',
  templateUrl: './truckaccount.component.html',
  styleUrls: ['./truckaccount.component.scss']
})
export class TruckaccountComponent implements OnInit {

  constructor(private router: Router) { }
  addtruckManager() {
    this.router.navigateByUrl('/addtruck');
  }
  edittruckManager() {
    this.router.navigateByUrl('/edittruck');
  }
  deletetruckManager() {
    this.router.navigateByUrl('/removetruck');
  }
  ngOnInit(): void {
  }

}
