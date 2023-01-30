import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User,StoreInfoRequest } from 'src/app/config/Model';
import { IpcService } from 'src/app/services/ipc.service';
import { Service } from 'src/app/services/Service';
import { ChangeRequest,GetStandBankRequestValues } from 'src/app/config/Standbank';

@Component({
  selector: 'app-managerreport',
  templateUrl: './managerreport.component.html',
  styleUrls: ['./managerreport.component.scss']
})
export class ManagerreportComponent implements OnInit {
  selectedUser:User;
  users:User[];
  storeNameDy: string="XYZ";
  typeOfStandBank:string="MAINSAFE"
  dateRequestBody: any={};
  startDate:string;
  endDate:string;
  empId:any;
  public standbankresponceDataList: Array<GetStandBankRequestValues> = new Array<GetStandBankRequestValues>();
  changeRequest:Array<ChangeRequest> = new Array<ChangeRequest>();
  dataResponce: any[];
  dataStoreResponce: Array<StoreInfoRequest> = [];
  
  show = false;
  fullScreen = true;
  template = ``
  newTotalValue:number;
  OrderStatus:string="Delivered";

  selectedP :number
  selectedN :number
  selectedD :number
  selectedQ :number
  selectedO :number
  selectedF :number
  selectedT :number
  selectedTw:number
  selectedFi:number
  selectedHu:number

  constructor(private router: Router,private ipcService: IpcService, private service: Service,) { }

  ngOnInit(): void {
    this.empId=localStorage.getItem('userId');
    this.TruckChangeRequestStatus();
    this.getUserByRoles();
  }
  displayStyle = "none";
  dynamicText:string;
  openPopup() {
      this.displayStyle = "block";
  }
  closePopup() {
      if(this.dynamicText=="Change Request Raised to Truck Vendor Successfully."){
        this.router.navigateByUrl('/homenav'); 
      }
      this.displayStyle = "none";
      //this.router.navigateByUrl('/homenav');
  }
  loaderShow(){
    this.show = true;
    this.fullScreen = false;
    this.template = ``
    // setTimeout(() => {
    //     this.show = false
    // }, 2000);
  }
loaderHide(){
  this.show = false;
}
  getUserByRoles(){
    let roles={
      "roles":[
      'MANAGER',
      'SHIFTMANAGER']
    }
    this.service.getUserByRoles(roles).subscribe(data=>{
      this.users=data;
    });
  };

  managerBillReport(){
    
    let request={
      'startDate':this.startDate,
      'endDate':this.endDate
    };
    this.service.gotoManagerReport(this.selectedUser.id+"",request).subscribe(data=>{
      data.name=this.selectedUser.username;
      data.reportName="Manager Report";
      this.ipcService.send('message',data);
    });

  };
  TruckChangeRequestStatus(){
    this.loaderShow();
    this.service.GetChangerequestAll().subscribe(
    data=>{
    this.changeRequest = data;
    data.reportName="Change Request Report";
    console.log(this.changeRequest);
    this.ipcService.send('message',data);
    this.loaderHide();
    },
    error => {
      this.loaderHide();
      console.log(error);
    }
    );
  }
  async getALLStandbankValues() {
    await this.service.getAllDenominations().subscribe(data => {
      this.standbankresponceDataList = data;
      console.log(this.standbankresponceDataList);
      data.reportName="Stand Bank Report";
      this.ipcService.send('message',data);
    });
  }
}



