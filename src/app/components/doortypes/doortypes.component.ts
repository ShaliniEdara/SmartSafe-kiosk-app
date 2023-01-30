import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doortypes',
  templateUrl: './doortypes.component.html',
  styleUrls: ['./doortypes.component.scss']
})

export class DoortypesComponent implements OnInit {

    //  child:any = require('child_process').execFile;
    // executablePath:string = "E:\\Printer-SmartSafe\\sea_software-net5.0-windows\\sea_software.exe";

  constructor() {
    //var child = require('child_process').execFile;
    //var executablePath = "E:\\Pinter-SmartSafe\\sea_software-net5.0-windows\\sea_software.exe";
    
   }
   
  openDoor(){
    
    //  this.child(this.executablePath, function(err: any, data: any) {
    //    if(err){
    //       console.error(err);
    //       return;
    // }
       
    //  //console.log(data.toString());
    // }); 

  }
  ngOnInit(): void {
  }
 


}
