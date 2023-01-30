import { Component, OnInit } from '@angular/core';
import { Role, User } from 'src/app/config/Model';
import { Service } from 'src/app/services/Service';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.scss']
})
export class PopupsComponent implements OnInit {
  selectedUser:User;
  selectedRole:number;
  public users:Array<User>=new Array<User>();
 
  msg:string;
  popupid:string = "raise_request";

  constructor(private service:Service) { }
  findUserByRole(role:string){
    
    this.service.findUserByRole(role).subscribe(data=>{
        this.users=data;
     //   console.log(data);
    });
  }
  ngOnInit(): void {
   // this.findUserByRole();
  }

  promote(userId:number){
    var role = new Role();
    role.id = this.selectedRole;
    this.service.promote(userId, role).subscribe(data=>{
      this.msg = "User Promoted Successfully.";
      this.popupid = "raise_request";
    });
  }
  onRoleChange(role: any) {
    //alert(role);
    this.findUserByRole(role);
}

}
