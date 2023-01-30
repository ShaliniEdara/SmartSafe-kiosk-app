import { Component, OnInit } from '@angular/core';

import { Service } from '../../services/Service';
import { User } from '../../config/Model';

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.scss']
})
export class EditaccountComponent implements OnInit {

  public users:Array<User>=new Array<User>();

  constructor(private service:Service) { }

  ngOnInit(): void {
    this.findUserByRole();
  }

  findUserByRole(){
    
    this.service.findUserByRole(localStorage.getItem("Role")+"").subscribe(data=>{
        this.users=data;
    });
  }

}
