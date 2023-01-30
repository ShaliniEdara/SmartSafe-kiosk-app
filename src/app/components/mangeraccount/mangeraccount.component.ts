import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mangeraccount',
  templateUrl: './mangeraccount.component.html',
  styleUrls: ['./mangeraccount.component.scss']
})
export class MangeraccountComponent implements OnInit {

  constructor(private router:Router) { }
  addEmployee(){
    this.router.navigateByUrl('/addaccount');
}
editEmployee(){
  this.router.navigateByUrl('/editaccount');
}
removeEmployee(){
  this.router.navigateByUrl('/removeaccount');
}
  ngOnInit(): void {
  }

}
