import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insertbills } from 'src/app/config/Model';
import { IpcService } from 'src/app/services/ipc.service';


import { Service } from 'src/app/services/Service';

@Component({
  selector: 'app-insertbills',
  templateUrl: './insertbills.component.html',
  styleUrls: ['./insertbills.component.scss']
})
export class InsertbillsComponent implements OnInit {

  billsdata: Array<Insertbills> = new Array<Insertbills>();
  sum: number = 0;
  userId: any;
  userName: any;
  pageload: boolean = true;
  transactionNumber:string;

  timerId: any;
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

  ngOnInit(): void {
    this.getIncompleteInsertBills();
  }

  ping = (): void => {
    this.ipcService.send("message", "ping");
    this.ipcService.on("reply", (event: any, arg: string) => {
      console.log("test");
    });
    //this.router.navigateByUrl('/homenav');
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


  processInsertBills() {
    debugger
    var storeName= localStorage.getItem('storeName');
    console.log("storename"+storeName)
    this.service.processInsertBills(this.userId).subscribe(data => {
    this.transactionNumber=data.transactionNumber;
        this.service.insertBillsReportDataa(this.transactionNumber,storeName).subscribe(data=>{
          data.name=localStorage.getItem('userName');
           this.ipcService.send("message",data);
           this.router.navigateByUrl('/homenav'); 
        });
    })
  }


  ngOnDestroy(): void {
    this.pageload = false;
    setTimeout(() => { clearInterval(this.timerId); this.getIncompleteInsertBills(); }, 1000);
  }


}
