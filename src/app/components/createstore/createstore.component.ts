import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreInfoRequest,User } from 'src/app/config/Model';
import { Service } from 'src/app/services/Service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, FormsModule } from "@angular/forms";

@Component({
  selector: 'app-createstore',
  templateUrl: './createstore.component.html',
  styleUrls: ['./createstore.component.scss']
})
export class CreatestoreComponent implements OnInit {

store = new StoreInfoRequest();
stores:StoreInfoRequest[];
user:User[];
selectedStore = new StoreInfoRequest();
setDefaultStorevalues: FormGroup;
  constructor(private router:Router,private http: HttpClient,private service:Service,private formBuilder: FormBuilder,
     ) { }
  gotoHomeNav(){
    this.router.navigateByUrl('/homenav');
  }
  ngOnInit(): void {
    this.initFormGroup();
    this.getAllStoresList();
    this.getstoreDetails();
  }
  configureStore(){
    this.store.configured = true;
    this.service.configureStore(this.store).subscribe((data)=>{
   // alert("Store configured.");
    });
  }

  initFormGroup(){
    this.setDefaultStorevalues = this.formBuilder.group({
      StoreName: [''],
      StoreNumber:['']
    });
  }
  onStoreSelected(storeName: string) {
    this.service.getStoreByStoreName(storeName).
      subscribe((data) => {
        this.selectedStore = data;
        console.log("This  are the perticilar store details"+this.selectedStore.storeName+this.selectedStore.accountNumber);

      })
  }
//default store details 
  getstoreDetails(){
    return this.service.users().
      subscribe((data) => {
        this.user = data;
        if(this.user[0].id==7){
          this.setDefaultStorevalues.patchValue({
            StoreName:this.stores[0].storeName,
            StoreNumber:this.stores[0].serialNumber
          });
        }
      });
  }
  getAllStoresList() {
    return this.service.getStores().
      subscribe((data) => {
        console.log(data);
        this.stores = data;
      });
  }
  
  



}
