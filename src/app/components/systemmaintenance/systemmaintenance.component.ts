import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpcService } from 'src/app/services/ipc.service';
import { Service } from 'src/app/services/Service';

@Component({
  selector: 'app-systemmaintenance',
  templateUrl: './systemmaintenance.component.html',
  styleUrls: ['./systemmaintenance.component.scss']
})
export class SystemmaintenanceComponent implements OnInit {

  constructor(private router:Router, private ipcService: IpcService,private service: Service) { }


  ngOnInit(): void {
  }
    gotoEmployeeMaintenance() {
      localStorage.setItem('page',"employeemaintenance");
      this.router.navigateByUrl('/pinpart');
     // this.router.navigateByUrl('/employeemaintenance');
    } 
    gotoCreateStore(){
      this.router.navigateByUrl('/createstore');
    }
    gotoHome() {
      this.router.navigateByUrl('/systemmaintenance');
    }  

    gotoTruck(){
      this.router.navigateByUrl('/truckaccount');
    }

    gotodoorsexe()
    {     
      this.router.navigateByUrl('/createkiosk');
      this.ipcService.send("openadminlocker");
    }
}
