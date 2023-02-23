import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parse } from 'path';
import { Insertbills } from 'src/app/config/Model';
import { IpcService } from 'src/app/services/ipc.service';
import { ChangeRequest,TruckChangeRequestDto } from 'src/app/config/Standbank';

import { Service } from 'src/app/services/Service';
import { error } from 'console';

@Component({
  selector: 'app-denominations',
  templateUrl: './denominations.component.html',
  styleUrls: ['./denominations.component.scss']
})
export class DenominationsComponent implements OnInit {

  billsdata: Array<Insertbills> = new Array<Insertbills>();
  public truckChangeRequestDto:TruckChangeRequestDto=new TruckChangeRequestDto();
  sum: number = 0;
  userId: any;
  userName: any;
  pageload: boolean = true;
  transactionNumber:string;
  totalValue:any;
  show = false;
  fullScreen = true;
  template = ``
  newTotalValue:number;
  changeRequest:ChangeRequest;
  isSendRequest:boolean;

  OrderStatus:string="Pending";

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

  timerId: any;

  useriD:any
  constructor(private ipcService: IpcService, private service: Service, private router: Router) {
    this.userId = localStorage.getItem('userId');
    this.userName = localStorage.getItem('userName');

    let page = localStorage.getItem('page');
    // repeat with the interval of 2 seconds
    if (this.pageload) {
       this.timerId = setInterval(() => this.getIncompleteInsertBills(), 5000);
    }

    // after 5 seconds stop
    // 
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
  openMainsafeLock(){
    this.service.openLock('2').subscribe(data =>{
      console.log(data);
    })
  }

  
  ngOnInit(): void {
    this.useriD=localStorage.getItem('userId');
    this.getIncompleteInsertBills();
    this.totalValue=localStorage.getItem('totalValue');
    this.TruckChangeRequestStatus();
    this.isSendRequest=true;
  }

  ping = (): void => {
    this.ipcService.send("message", "ping");
    this.ipcService.on("reply", (event: any, arg: string) => {
      console.log("test");
    });
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

  getIncompleteInsertBills() {
    this.sum=0;
  //  this.ping();
   
    this.service.getIncompleteInsertBills().subscribe(data => {
      this.billsdata = data;
      for (var bill of this.billsdata) {
        this.sum = this.sum + bill.sum;
      }
    })
 
  };

  TruckChangeRequestStatus(){
    this.loaderShow();
    this.service.GetChangerequestStatus(this.OrderStatus).subscribe(
    data=>{
    this.changeRequest = data;
      if(data!=null){
        if(this.changeRequest.orderStatus=="Pending"){
          if (data!= null) {

            this.selectedP = this.changeRequest.cents;
            this.selectedN = this.changeRequest.nickels;
            this.selectedD = this.changeRequest.dimes;
            this.selectedQ = this.changeRequest.quarters;
            this.selectedO = this.changeRequest.den_1$;
            this.selectedF = this.changeRequest.den_5$;
            this.selectedT = this.changeRequest.den_10$;
            this.selectedTw = this.changeRequest.den_20$;
            this.selectedFi = this.changeRequest.den_50$;
            this.selectedHu = this.changeRequest.den_100$;
            
            this.newTotalValue = (this.selectedP) + (this.selectedN) + (this.selectedD) + (this.selectedQ) + (this.selectedO) + (this.selectedF) + (this.selectedT) + (this.selectedTw) + this.changeRequest.den_100$ + this.changeRequest.den_50$;
            console.log(this.newTotalValue);
          }
        }
      }
      this.loaderHide();
    },
    error => {
      this.loaderHide();
      console.log(error);
    }
    );
  }
  sendRequest(){
    this.loaderShow();
    this.truckChangeRequestDto.cents=this.selectedP;
    this.truckChangeRequestDto.nickels=this.selectedN;
    this.truckChangeRequestDto.dimes=this.selectedD;
    this.truckChangeRequestDto.quarters=this.selectedQ;
    this.truckChangeRequestDto.den_1$=this.selectedO;
    // this.changeRequestDto.den_1$=this.newTwodollar;
    this.truckChangeRequestDto.den_5$=this.selectedF;
    this.truckChangeRequestDto.den_10$=this.selectedT;
    this.truckChangeRequestDto.den_20$=this.selectedTw;
    this.truckChangeRequestDto.den_50$=this.selectedFi;
    this.truckChangeRequestDto.den_100$=this.selectedHu;

    this.truckChangeRequestDto.type="MAINSAFE";
    this.truckChangeRequestDto.orderStatus="Ordered";
    this.truckChangeRequestDto.updatedByUser=this.useriD;
    this.truckChangeRequestDto.updatedTime=Date();
    this.service.SavetructChangeRequest(this.truckChangeRequestDto).subscribe(
    data=>{
      localStorage.setItem('OrderStatus',"Ordered");
      this.dynamicText="Change Request Raised to Truck Vendor Successfully.";
      this.openPopup();
      this.loaderHide();
    },
    error=>{
      this.loaderHide();
    }
    );
  }
  processInsertBills() {
    this.isSendRequest=false;
    var storeName= localStorage.getItem('storeName');
    console.log("storename"+storeName)
    if(this.newTotalValue==(this.sum)){
      this.loaderShow();
      this.service.processInsertBills(this.userId).subscribe(data => {
        this.transactionNumber=data.transactionNumber;
        this.service.insertBillsReportDataa(this.transactionNumber,storeName).subscribe(data=>{
              this.dynamicText="Successfully Inserted the Amount in Valut. Please Click on Send Change Request";
              this.openPopup();
            
            this.isSendRequest=false;
             data.name=localStorage.getItem('userName');
              this.ipcService.send("message",data);
              this.router.navigateByUrl('/homenav'); 
              this.loaderHide();
           },
           error=>{
            this.loaderHide();
           }
           );
       })
    }
    else{
      this.dynamicText="Change request amount not balanced with valut amount";
      this.openPopup();
    }
    
  }


  ngOnDestroy(): void {
    this.pageload = false;
    setTimeout(() => { clearInterval(this.timerId); this.getIncompleteInsertBills(); }, 1000);
  }

}
