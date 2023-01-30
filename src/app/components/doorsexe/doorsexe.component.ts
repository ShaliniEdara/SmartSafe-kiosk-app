import { Component, OnInit } from '@angular/core';
import { BrowserWindow } from 'electron';
import { IpcService } from 'src/app/services/ipc.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-doorsexe',
  templateUrl: './doorsexe.component.html',
  styleUrls: ['./doorsexe.component.scss']
})
export class DoorsexeComponent implements OnInit {
  
  role: any;
  constructor(private router:Router, private ipcService: IpcService) { }

  gotoHomeNav(){
    this.router.navigateByUrl('/homenav');
   // this.ipcService.send("openvalutlocker");
    
  }

  ngOnInit(): void {
  }
}
