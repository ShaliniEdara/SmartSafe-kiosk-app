import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Kiosk, StoreInfoRequest } from 'src/app/config/Model';
import { Service } from 'src/app/services/Service';

@Component({
  selector: 'app-createkiosk',
  templateUrl: './createkiosk.component.html',
  styleUrls: ['./createkiosk.component.scss']
})
export class CreatekioskComponent implements OnInit {

  
  kiosk = new Kiosk();
  kiosks: Kiosk[];

  store = new StoreInfoRequest();


  setDefaultStorevalues: FormGroup;

    
  constructor(private router: Router, private http: HttpClient, private service: Service, private formBuilder: FormBuilder
    ) { }

    msg:string;
    popupid:string = "raise_request";
    displayStyle = "none";
    dynamicText:string;
    openPopup() {
        this.displayStyle = "block";
    }

    closePopup() {
      this.displayStyle = "none";
      if(this.dynamicText=="Assign Successfully."){
        this.router.navigateByUrl('/createkiosk');
      }
      //this.router.navigateByUrl('/homenav');
  }

  gotoHomeNav(){
    this.router.navigateByUrl('/homenav');
   // this.ipcService.send("openvalutlocker");
    
  }

  ngOnInit(): void {
    this.initFormGroup();
    this. findbyMacKiosk();
    this.storeInfo();
 
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
        localStorage.setItem('kioskId', item.id+"");
        this.setDefaultStorevalues.patchValue({
          kioskId: item.kioskId,
          kioskName: item.kioskName,
          brandName: item.brandName,
          modelName: item.modelName,
          cpu: item.cpu,
          hdd: item.hdd,
          ramMemory: item.ramMemory,
          screenSize: item.screenSize,
          ipAddress: item.ipAddress,
          macAddress: item.macAddress,

        });
      })
    });
  }

  assignStore() {
    var storeId= localStorage.getItem('storeId');
    console.log("storeid",storeId);
    var kioskId= localStorage.getItem('kioskId');
    console.log("kioskid",kioskId);

     this.service.assignStoreKiosk(storeId,kioskId).
      subscribe((data) => {
        console.log(data);

        this.dynamicText = "Assign Successfully.";
      this.openPopup();
      this.popupid = "raise_request";

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          // this.toaster.showMessage(err.error.message);
          // this.msg = err.error.message;
          //alert(err.error.message);
          this.dynamicText=err.error.message;
          this.openPopup();
         // this.router.navigateByUrl('/empaccount');
          console.log("Server-side error occured.");
        }
      });
  }

  storeInfo(){     
  var storeName= localStorage.getItem('storeName');
  console.log("storename",storeName);
    this.service.findstoredetail(storeName).
    subscribe((data) => {
      this.store = data;
      localStorage.setItem('storeId', data.id+"");

    })
  }
 
}
