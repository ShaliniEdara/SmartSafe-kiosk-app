import { Component, OnInit } from '@angular/core';
import { BrowserWindow } from 'electron';
import { IpcService } from 'src/app/services/ipc.service';

import { Router } from '@angular/router';
import { Kiosk } from 'src/app/config/Model';
import { Service } from 'src/app/services/Service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, FormsModule } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doorsexe',
  templateUrl: './doorsexe.component.html',
  styleUrls: ['./doorsexe.component.scss']
})
export class DoorsexeComponent implements OnInit {


  kiosk = new Kiosk();
  kiosks: Kiosk[];

  setDefaultStorevalues: FormGroup;

    
  constructor(private router: Router, private http: HttpClient, private service: Service, private formBuilder: FormBuilder
    ) { }


  gotoHomeNav(){
    this.router.navigateByUrl('/homenav');
   // this.ipcService.send("openvalutlocker");
    
  }

  ngOnInit(): void {
    this.initFormGroup();
    this. findbyMacKiosk();
 
   }

  initFormGroup() {
    this.setDefaultStorevalues = this.formBuilder.group({
      kioskId: [''],
      kioskName: [''],
      brandName: [''],
      modelName: [''],
      cpu: [''],
      hdd: [''],
      ramMemory: [''],
      screenSize: [''],
      ipAddress: [''],
      macAddress: ['']
    });
  }

  async findbyMacKiosk(){
    
    this.service.kioskMac().subscribe(data=>{
        this.kiosks=data;
        this.kiosks.forEach(item => {
        this.setDefaultStorevalues.patchValue({
          kioskId: item.kioskId,
          brandName: item.brandName,
          // AccountNumber: item.accountNumber,
          // Address: item.address,
          // MinimumBalance: item.minimumBalance
        });
      })
    });
  }

 
}
