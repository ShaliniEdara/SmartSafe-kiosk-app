import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/config/Model';
import { Service } from 'src/app/services/Service';

@Component({
  selector: 'app-pinpart',
  templateUrl: './pinpart.component.html',
  styleUrls: ['./pinpart.component.scss']
})
export class PinpartComponent implements OnInit {

  pin: string;
  public user:User=new User();
  dynamicText:string;


  constructor(private router: Router, private service:Service) { }

  ngOnInit(): void {
  }
  onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
  displayStyle = "none";

  openPopup() {
      this.displayStyle = "block";
  }
  closePopup() {
      this.displayStyle = "none";
  }
  submitPin() {
    var page = localStorage.getItem("page");
      if (page === "insertbills") {
      this.router.navigateByUrl('/insertbills');
    } else if (page === "adminaccess") {
      this.router.navigateByUrl('/adminaccess');
    }
      else if (page === "systemmaintenance") {
      this.router.navigateByUrl('/systemmaintenance');
    }
      else if (page === "employeemaintenance") {
      this.router.navigateByUrl('/employeemaintenance');
    }
      else if (page === "contactus") {
      this.router.navigateByUrl('/contactus');
    }
    else if (page === "standbank") {
      this.router.navigateByUrl('/standbank');
    }
    else if (page === "sbankdoors") {
      this.router.navigateByUrl('/sbankdoors');
    }
    else if (page === "changeTruckConfirmRequest") {
      this.router.navigateByUrl('/doorsexe');
    }

  }


  public doLogin(){
    this.user.feature=localStorage.getItem('feature')+"";
   // this.user.feature="All";
   //this.user.username="Admin";
    this.service.doLogin(this.user).subscribe(data=>{
      console.log("login success");
      localStorage.setItem('userId', data.id+"");
      localStorage.setItem('userName', data.username+"");
      localStorage.setItem('Role', data.role);
      localStorage.setItem('storeName', data.storeInfo);
      console.dir(data);
      this.submitPin();
    }
    ,
      (err: any) => {
        this.dynamicText=err.error.message;
        this.openPopup();
        //alert("Invalid Pin, Please Enter Correct Pin.");
        console.log(err.error.message);
        // check error status code is 500, if so, do some action
      }
    );
  }
}
