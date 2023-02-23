import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { User  } from 'src/app/config/Model';
import { Service } from 'src/app/services/Service';
//mport { NGXToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.scss'],
  //providers: [NGXToastrService]
})
export class AddaccountComponent implements OnInit {

  public user:User=new User();
  msg:string;
  popupid:string = "raise_request";
  constructor(private router : Router, private service:Service,
    ) { }

  ngOnInit(): void {
  }
  onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
  displayStyle = "none";
  dynamicText:string;
  openPopup() {
      this.displayStyle = "block";
  }
  closePopup() {
      this.displayStyle = "none";
      if(this.dynamicText=="User added Successfully."){
        this.router.navigateByUrl('/empaccount');
      }
      //this.router.navigateByUrl('/homenav');
  }
  addUser(){
    if(this.user.password==this.user.confirmpassword){ 
    
    
     this.user.role=localStorage.getItem("Role")+"";
     this.user.loggedUserId = localStorage.getItem("userId");
     this.user.firstName="--";
     this.user.lastName="--";
     this.user.mobile="--";
     this.user.email="--";
     this.user.passLength="4";

    this.service.addUser(this.user).subscribe(
      (data) => {
  
      console.log(data);
      this.dynamicText = "User added Successfully.";
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
  }else{
    this.dynamicText = "Entered password does not match";
    this.openPopup();
  }
  }
}
