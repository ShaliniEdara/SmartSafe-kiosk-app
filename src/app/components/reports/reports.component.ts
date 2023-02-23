import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpcService } from 'src/app/services/ipc.service';
import { Service } from 'src/app/services/Service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(private router: Router,private ipcService: IpcService, private service: Service,) { }
  useriD:any;
  displayStyle = "none";
  dynamicText:string;
  openPopup() {
      this.displayStyle = "block";
  }
  closePopup() {
      this.displayStyle = "none";
      //this.router.navigateByUrl('/homenav');
  }
  ngOnInit(): void {
    this.useriD=localStorage.getItem('userId');
  }
  
  gotoHome() {
    //this.router.navigateByUrl('/reports');
  }
  gotoEmployeeReport() {
    this.router.navigateByUrl('/employeereport');
  }
  gotoManagerReport() {
    this.router.navigateByUrl('/managerreport');
  }
  goTestReport(){
    var storeName= localStorage.getItem('storeName');
    this.service.printTestReport(storeName).subscribe(data=>{
      data.name=localStorage.getItem('userName');
      console.log(localStorage.getItem('storeName'));
      this.ipcService.send('message',data);
    });
  }
  gotRePrintReceipt(){
    var storeName= localStorage.getItem('storeName');
     this.service.rePrintReceipt(storeName).subscribe(data=>{
       data.name=localStorage.getItem('userName');
       console.log(localStorage.getItem('storeName'));
       this.ipcService.send('message',data);
     });
   };
  goEndOfTheDayReport(){
    
    this.service.printEndOfTheReport(this.useriD).subscribe(data=>{
      this.dynamicText="Data Success";
      this.openPopup();
      data.name=localStorage.getItem('userName');
      this.ipcService.send('message',data);
    }); 
  };
  
}
