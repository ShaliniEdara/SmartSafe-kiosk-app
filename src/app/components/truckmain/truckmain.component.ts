import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-truckmain',
  templateUrl: './truckmain.component.html',
  styleUrls: ['./truckmain.component.scss']
})
export class TruckmainComponent implements OnInit {

  constructor(private router:Router, private ipcService: IpcService) { }

    gotoChangeTruckConfirmRequest()
    {
      this.router.navigateByUrl('/changetruckconfirmrequest');
    }
    gotoDoorsexe()
    {
      this.router.navigateByUrl('/doorsexe');
      this.ipcService.send("openvalutlocker");
    }
  
  ngOnInit(): void {
  }

}
