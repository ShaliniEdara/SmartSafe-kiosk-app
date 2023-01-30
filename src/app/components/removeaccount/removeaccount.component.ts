import { Component, OnInit } from '@angular/core';



import { Service } from '../../services/Service';
import { User } from '../../config/Model';

@Component({
  selector: 'app-removeaccount',
  templateUrl: './removeaccount.component.html',
  styleUrls: ['./removeaccount.component.scss']
})
export class RemoveaccountComponent implements OnInit {
  public users:Array<User>=new Array<User>();
  deleteUserId:number;

  constructor(private service:Service) { }

  ngOnInit(): void {
    this.findUserByRole();
  }

  findUserByRole(){
    this.service.findUserByRole(localStorage.getItem("Role")+"").subscribe(data=>{
        this.users=data;
    });
  };
  setDeleteByUser(userId: number){
   // alert(""+ userId);
    this.deleteUserId = userId;
  }

  deleteByUser(){
   // alert(""+ this.deleteUserId);
    this.service.deleteByUser(this.deleteUserId).subscribe(data=>{
      //this.users=data;

      this.findUserByRole();
  }); 
  }



}
