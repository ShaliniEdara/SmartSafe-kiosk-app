import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/config/Model';
import { IpcService } from 'src/app/services/ipc.service';
import { Service } from 'src/app/services/Service';
@Component({
  selector: 'app-employeereport',
  templateUrl: './employeereport.component.html',
  styleUrls: ['./employeereport.component.scss']
})
export class EmployeereportComponent implements OnInit {
  selectedUser:User;
  startDate:string;
  endDate:string;
  users:User[];

  constructor(private router: Router,private ipcService: IpcService, private service: Service,) { }

  ngOnInit(): void {
    this.getUserByRoles();
  }

  getUserByRoles(){
    var storeName= localStorage.getItem('storeName');
    console.log("storename",storeName);
    // let roles={
    //   "roles":[
    //   'EMPLOYEE']
    // }
    this.service.getUserByRolesStoreName(storeName,"Employee").subscribe(data=>{
      this.users=data;
    });
  };
  employeeReport(){
    
    let request={
      'startDate':this.startDate,
      'endDate':this.endDate
    };
    this.service.gotoEmployeeReport(this.selectedUser.id+"",request).subscribe(data=>{
      data.name=this.selectedUser.username;
      this.ipcService.send('message',data);
    });
  };
}
