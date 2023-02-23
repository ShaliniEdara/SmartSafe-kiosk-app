import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreInfoRequest, User } from 'src/app/config/Model';
import { Service } from 'src/app/services/Service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, FormsModule  } from "@angular/forms";
import { element } from 'protractor';

@Component({
  selector: 'app-createstore',
  templateUrl: './createstore.component.html',
  styleUrls: ['./createstore.component.scss']
})
export class CreatestoreComponent implements OnInit {

  store = new StoreInfoRequest();
  stores: StoreInfoRequest[];
  user: User[];
  useriD: any;
  selectedStore = new StoreInfoRequest();
  setDefaultStorevalues: FormGroup;
  isDisable:boolean=false;
  constructor(private router: Router, private http: HttpClient, private service: Service, private formBuilder: FormBuilder,
  ) { }
  gotoHomeNav() {
    this.router.navigateByUrl('/homenav');
  }
  ngOnInit(): void {
    this.initFormGroup();
    //this.getAllStoresList();
    this.getstoreDetails();
  }
  async configureStore() {
    this.store.configured = true;
    await this.service.configureStore(this.store).subscribe((data) => {
      alert("Store configured.");
    });
  }

  initFormGroup() {
    this.setDefaultStorevalues = this.formBuilder.group({
      StoreName: [''],
      StoreNumber: [''],
      BankName: [''],
      AccountNumber: [''],
      Address: [''],
      MinimumBalance: ['']
    });
  }
  onStoreSelected(storeName: string) {
    this.service.getStoreByStoreName(storeName).
      subscribe((data) => {
        this.selectedStore = data;

      })
  }
  //default store details 
  //  async getstoreDetails(){

  //  }
  async getstoreDetails() {
    return await this.service.getStores().
      subscribe((data) => {
        console.log(data);
        this.stores = data;
        this.useriD = localStorage.getItem('userId');
        this.stores.forEach(item => {
          item.userIds.forEach(element => {
            if (element == parseInt(this.useriD)) {
              this.store.id = item.id;
              this.isDisable=false;
              this.setDefaultStorevalues.patchValue({
                StoreName: item.storeName,
                StoreNumber: item.serialNumber,
                BankName: item.bankName,
                AccountNumber: item.accountNumber,
                Address: item.address,
                MinimumBalance: item.minimumBalance
              });
            }
          });
        });
        if (this.store.id == undefined) {
          this.isDisable=true;
          alert("Please configure the store");
        }
      });

  }
}
