import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IpcService } from 'src/app/services/ipc.service';
import { Service } from 'src/app/services/Service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, FormsModule } from "@angular/forms";
import { ChangeRequestDto,OrderStatus,ChangeRequest,GetStandBankRequestValues,ChangeValetDenominations,TruckChangeRequestDto } from 'src/app/config/Standbank';
import { error, timeStamp } from 'console';
import { EROFS } from 'constants';

@Component({
  selector: 'app-changetruckconfirmrequest',
  templateUrl: './changetruckconfirmrequest.component.html',
  styleUrls: ['./changetruckconfirmrequest.component.scss']
})
export class ChangetruckconfirmrequestComponent implements OnInit {

  constructor( private service: Service,private router: Router, private el: ElementRef, private ipcService: IpcService, private formBuilder: FormBuilder) { }
  SetTruckChangeDenominationsFormValues: FormGroup;
  ValletDenominationId:number;
  standbankresponceData: GetStandBankRequestValues;
  changeRequest:ChangeRequest;
  public  changeRequestDto :ChangeRequestDto=new ChangeRequestDto();
  public  changeValetDenominations :ChangeValetDenominations=new ChangeValetDenominations();
  public truckChangeRequestDto:TruckChangeRequestDto=new TruckChangeRequestDto();
  useriD:any;
  show = false;
  fullScreen = true;
  template = ``

  cancelRequestId:number;

  ModifyRequest:string;

  confirmDisable:boolean;
  newPennies: number = 0;
  newNickels: number = 0;
  newDimes: number = 0;
  newQuarters: number = 0;
  newOnedollar: number = 0;
  // newTwodollar: number = 0;
  newFivedollar: number = 0;
  newTendollar: number = 0;
  newTwentydollar: number = 0;
  newFiftyDollar: number = 0;
  newHundredDollar: number = 0;

  ModifynewPennies: number = 0;
  ModifynewNickels: number = 0;
  ModifynewDimes: number = 0;
  ModifynewQuarters: number = 0;
  ModifynewOnedollar: number = 0;
  ModifynewFivedollar: number = 0;
  ModifynewTendollar: number = 0;
  ModifynewTwentydollar: number = 0;
  ModifynewFiftyDollar: number = 0;
  ModifynewHundredDollar: number = 0;

  staticTotalValue:number=0;

  oldPennies: number = 0;
  oldNickels: number = 0;
  oldDimes: number = 0;
  oldQuarters: number = 0;
  oldOnedollar: number = 0;
  oldFivedollar: number = 0;
  oldTendollar: number = 0;
  oldTwentydollar: number = 0;
  oldFiftyDollar: number = 0;
  oldHundredDollar: number = 0;

  IsmodelShow:boolean=false;
  isPrint:boolean=true;
  isRaiseRequest:boolean=false;

  ValletPennies: number = 0;
  valletNickels: number = 0;
  valletDimes: number = 0;
  valletQuarters: number = 0;
  valletOnedollar: number = 0;
  valletFivedollar: number = 0;
  valletTendollar: number = 0;
  valletTwentydollar: number = 0;
  valletFiftyDollar: number = 0;
  valletHundredDollar: number = 0;

  newTotalValue: number = 0;
  ModifynewTotalValue:number=0;
  MainTotalValue:number=0
  userName:string="";

  DepositedTotalValue:number=0;

  OrderStatus:string="Ordered";

  PenniesFormListvalues = [
    { value: "0", name: 'Select Pennies' }, {value:'25',name:'$25'},{value:'50',name:'$50'},{value:'75',name:'$75'},{value:'100',name:'$100'},{value:'125',name:'$125'},{value:'150',name:'$150'},{value:'175',name:'$175'},{value:'200',name:'$200'}
  ];
  NickelsFormListvalues = [
    { value: "0", name: 'Select Nickels' }, {value:'100',name:'$100'},{value:'200',name:'$200'},{value:'300',name:'$300'},{value:'400',name:'$400'},{value:'500',name:'$500'},{value:'600',name:'$600'},{value:'700',name:'$700'},{value:'800',name:'$800'}
  ];
  DimesFromListValues = [
    { value: "0", name: 'Select Dimes' }, {value:'250',name:'$250'},{value:'500',name:'$500'},{value:'750',name:'$750'},{value:'1000',name:'$1000'},{value:'1250',name:'$1250'},{value:'1500',name:'$1500'},{value:'1750',name:'$1750'},{value:'2000',name:'$2000'}

  ]
  QuartersFormListValues = [
    { value: "0", name: 'Select Quarters' },{value:'500',name:'$500'},{value:'1000',name:'$1000'},{value:'1500',name:'$1500'},{value:'2000',name:'$2000'},{value:'2500',name:'$2500'},{value:'3000',name:'$3000'},{value:'3500',name:'$3500'},{value:'4000',name:'$4000'}

  ]
  OneDollarFormListValues = [
    { value: "0", name: 'Select OneDollar' }, {value:'100',name:'$100'},{value:'200',name:'$200'},{value:'300',name:'$300'},{value:'400',name:'$400'},{value:'500',name:'$500'},{value:'600',name:'$600'},{value:'700',name:'$700'},{value:'800',name:'$800'}

  ]
  // TwoDollarFormListValues = [
  //   { value: "0", name: 'Select OneDollar' }, { value: "50", name: '$50' }, { value: "100", name: '$100' }, { value: "150", name: '$150' }, { value: "200", name: '$200' }, { value: "250", name: '$250' }, { value: "300", name: '$300' }, { value: "350", name: '$350' }, { value: "400", name: '$400' }, { value: "450", name: '$450' }, { value: "500", name: '$500' }

  // ]
  FiveDollarFormListValues = [
    { value: "0", name: 'Select FiveDollar' }, {value:'250',name:'$250'},{value:'500',name:'$500'},{value:'750',name:'$750'},{value:'1000',name:'$1000'},{value:'1250',name:'$1250'},{value:'1500',name:'$1500'},{value:'1750',name:'$1750'},{value:'2000',name:'$2000'}
  ]
  TenDollarFormListValues = [
    { value: "0", name: 'Select TenDollar' }, {value:'500',name:'$500'},{value:'1000',name:'$1000'},{value:'1500',name:'$1500'},{value:'2000',name:'$2000'},{value:'2500',name:'$2500'},{value:'3000',name:'$3000'},{value:'3500',name:'$3500'},{value:'4000',name:'$4000'},{value:'4500',name:'$4500'},{value:'5000',name:'$5000'},{value:'5500',name:'$5500'},{value:'6000',name:'$6000'}
  ]
  TwentyDollarFormListValues = [
    { value: "0", name: 'Select TwentyDollar' }, {value:'20',name:'$20'},{value:'40',name:'$40'},{value:'60',name:'$60'},{value:'80',name:'$80'},{value:'100',name:'$100'},{value:'120',name:'$120'},{value:'140',name:'$140'},{value:'160',name:'$160'},{value:'180',name:'$180'},{value:'200',name:'$200'},{value:'220',name:'$220'},{value:'240',name:'$240'},{value:'260',name:'$260'}

  ]
  FiftyDollarFromListValues = [
    { value: "0", name: 'Select FiftyDollar' }, { value: "50", name: '$50' }, { value: "100", name: '$100' }, { value: "150", name: '$150' }, { value: "200", name: '$200' }, { value: "250", name: '$250' }, { value: "300", name: '$300' }, { value: "350", name: '$350' }, { value: "400", name: '$400' }, { value: "450", name: '$450' }, { value: "500", name: '$500' }
  ]
  HundredDollarFromListValues = [
    { value: "0", name: 'Select HundredDollar' }, { value: "100", name: '$100' }, { value: "200", name: '$200' }, { value: "300", name: '$300' }, { value: "400", name: '$400' }, { value: "500", name: '$500' }, { value: "600", name: '$600' }, { value: "700", name: '$700' }, { value: "800", name: '$800' }, { value: "900", name: '$900' }, { value: "1000", name: '$1000' }
  ]

  displayStyle = "none";
  displayStyleC = "none";
  displayStyleConfirm="none";
  dynamicText:string;
  openPopup() {
      this.displayStyle = "block";
  }
  closePopup() {
    if(this.dynamicText=="Saved Successfully"){
      this.router.navigateByUrl('/homenav');
    }
      this.displayStyle = "none";
      //this.router.navigateByUrl('/homenav');
  }
  closePopupCancel() {
    this.displayStyleC = "none";
    //this.router.navigateByUrl('/homenav');
  }
  openConfirm(){
    this.displayStyleConfirm='block';
  }
  cancelConfirm(){
    this.displayStyleConfirm='none';
  }
  ngOnInit(): void {
    this.useriD=localStorage.getItem('userId');
    this.Valletchangedoordenominations();
    this.initFormGroup();
    this.TruckChangeRequestStatus();
    this.confirmDisable=false;
    this.ModifyRequest="Modify Request";
    this.GetUserNameById();
  }
  loaderShow(){
    this.show = true;
    this.fullScreen = false;
    this.template = ``
    // setTimeout(() => {
    //     this.show = false
    // }, 2000);
  }
  loaderHide(){
    this.show = false
  }
  GetUserNameById(){
    this.service.users().subscribe(data => {
      console.log(data);
      data.forEach(element => {
        if(element.id==this.useriD){
          this.userName=element.username;
        }
      });
    })
  }
  gotoPinPart(){
    localStorage.setItem('page',"changeTruckConfirmRequest");
    this.router.navigateByUrl('/pinpart');
  }
  initFormGroup() {
    this.SetTruckChangeDenominationsFormValues = this.formBuilder.group({
      
      TruckChangePenniesFormValues:['0'],
      TruckChangeNickelsFormValues: ['0'],
      TruckChangeDimesFromValues: ['0'],
      TruckChangeQuartersFormValues: ['0'],
      TruckChangeOneDollarFormValues: ['0'],
      TruckChangeFiveDollarFormValues: ['0'],
      TruckChangeTenDollarFormValues: ['0'],
      TruckChangeTwentyDollarFormValues: ['0'],
      TruckChangeHundredDollarFormValue: ['0'],
      TruckChangeFiftyDollarFormValue: ['0'],
     
    });
    
  }
  
  confirmRequest(){
    this.router.navigateByUrl('/doortypes');
  }
 

  selectChangeHandler(item: any, type: string, type1: string) {

    switch (type) {
      case "Pennies": {
        this.ModifynewPennies = parseInt(item.target.value);
        this.newPennies=this.ModifynewPennies;
        let totalValue=(this.ModifynewPennies) + (this.ModifynewNickels) + (this.ModifynewDimes) + (this.ModifynewQuarters) + (this.ModifynewOnedollar) + (this.ModifynewFivedollar) + (this.ModifynewTendollar) + (this.ModifynewTwentydollar);
        if(this.staticTotalValue<totalValue){
          this.SetTruckChangeDenominationsFormValues.patchValue({
            TruckChangePenniesFormValues:['0']
          });
          this.ModifynewPennies=0;
          this.dynamicText="Pennies - Change Requested is not balanced with total value.";
          this.openPopup();
        }
        break;
      }
      case "Nickels": {
        this.ModifynewNickels = parseInt(item.target.value);
        this.newNickels=this.ModifynewNickels;
        let totalValue=(this.ModifynewPennies) + (this.ModifynewNickels) + (this.ModifynewDimes) + (this.ModifynewQuarters) + (this.ModifynewOnedollar) + (this.ModifynewFivedollar) + (this.ModifynewTendollar) + (this.ModifynewTwentydollar);
        if(this.staticTotalValue<totalValue){
          this.SetTruckChangeDenominationsFormValues.patchValue({
            TruckChangeNickelsFormValues:['0']
          });
          this.ModifynewNickels=0;
          this.dynamicText="Nickels - Change Requested is not balanced with total value.";
          this.openPopup();
        }    
        break;
      }
      case "Dimes": {
        this.ModifynewDimes = parseInt(item.target.value);
        this.newDimes=this.ModifynewDimes;
        let totalValue=(this.ModifynewPennies) + (this.ModifynewNickels) + (this.ModifynewDimes) + (this.ModifynewQuarters) + (this.ModifynewOnedollar) + (this.ModifynewFivedollar) + (this.ModifynewTendollar) + (this.ModifynewTwentydollar);
        if(this.staticTotalValue<totalValue){
          this.SetTruckChangeDenominationsFormValues.patchValue({
            TruckChangeDimesFromValues:['0']
          });
          this.ModifynewDimes=0;
          this.dynamicText="Dimes - Change Requested is not balanced with total value.";
          this.openPopup();
        }
        break;
      }
      case "Quarters": {
        this.ModifynewQuarters = parseInt(item.target.value);
        this.newQuarters=this.ModifynewQuarters;
        let totalValue=(this.ModifynewPennies) + (this.ModifynewNickels) + (this.ModifynewDimes) + (this.ModifynewQuarters) + (this.ModifynewOnedollar) + (this.ModifynewFivedollar) + (this.ModifynewTendollar) + (this.ModifynewTwentydollar);
        if(this.staticTotalValue<totalValue){
          this.SetTruckChangeDenominationsFormValues.patchValue({
            TruckChangeQuartersFormValues:['0']
          });
          this.ModifynewQuarters=0;
          this.dynamicText="Quarters - Change Requested is not balanced with total value.";
          this.openPopup();
        }
        break;
      }
      case "Onedollar": {
        this.ModifynewOnedollar = parseInt(item.target.value);
        this.newOnedollar=this.ModifynewOnedollar;
        let totalValue=(this.ModifynewPennies) + (this.ModifynewNickels) + (this.ModifynewDimes) + (this.ModifynewQuarters) + (this.ModifynewOnedollar) + (this.ModifynewFivedollar) + (this.ModifynewTendollar) + (this.ModifynewTwentydollar);
        if(this.staticTotalValue<totalValue){
          this.SetTruckChangeDenominationsFormValues.patchValue({
            TruckChangeOneDollarFormValues:['0']
          });
          this.ModifynewOnedollar=0;
          this.dynamicText="$1 - Change Requested is not balanced with total value.";
          this.openPopup();
        }
       
        break;
      }
      // case "Twodollar": {
      //   this.newTwodollar = parseInt(item.target.value);
        
       
      //   break;
      // }
      case "Fivedollar": {
        this.ModifynewFivedollar = parseInt(item.target.value);
        this.newFivedollar=this.ModifynewFivedollar;
        let totalValue=(this.ModifynewPennies) + (this.ModifynewNickels) + (this.ModifynewDimes) + (this.ModifynewQuarters) + (this.ModifynewOnedollar) + (this.ModifynewFivedollar) + (this.ModifynewTendollar) + (this.ModifynewTwentydollar);
        if(this.staticTotalValue<totalValue){
          this.SetTruckChangeDenominationsFormValues.patchValue({
            TruckChangeFiveDollarFormValues:['0']
          });
          this.ModifynewFivedollar=0;
          this.dynamicText="$5 - Change Requested is not balanced with total value.";
          this.openPopup();
        }
        
        break;
      }
      case "Tendollar": {
        this.ModifynewTendollar = parseInt(item.target.value);
        this.newTendollar=this.ModifynewTendollar;
        let totalValue=(this.ModifynewPennies) + (this.ModifynewNickels) + (this.ModifynewDimes) + (this.ModifynewQuarters) + (this.ModifynewOnedollar) + (this.ModifynewFivedollar) + (this.ModifynewTendollar) + (this.ModifynewTwentydollar);
        if(this.staticTotalValue<totalValue){
          this.SetTruckChangeDenominationsFormValues.patchValue({
            TruckChangeTenDollarFormValues:['0']
          });
          this.ModifynewTendollar=0;
          this.dynamicText="$10 - Change Requested is not balanced with total value.";
          this.openPopup();
        }
        break;
      }
      case "Twentydollar": {
        this.ModifynewTwentydollar = parseInt(item.target.value);
        this.newTwentydollar=this.ModifynewTwentydollar;
        let totalValue=(this.ModifynewPennies) + (this.ModifynewNickels) + (this.ModifynewDimes) + (this.ModifynewQuarters) + (this.ModifynewOnedollar) + (this.ModifynewFivedollar) + (this.ModifynewTendollar) + (this.ModifynewTwentydollar);
        if(this.staticTotalValue<totalValue){
          this.SetTruckChangeDenominationsFormValues.patchValue({
            TruckChangeTwentyDollarFormValues:['0']
          });
          this.ModifynewTwentydollar=0;
          this.dynamicText="$20 - Change Requested is not balanced with total value.";
          this.openPopup();
        }
        break;
      }
      
    }

    this.ModifynewTotalValue = (this.ModifynewPennies) + (this.ModifynewNickels) + (this.ModifynewDimes) + (this.ModifynewQuarters) + (this.ModifynewOnedollar) + (this.ModifynewFivedollar) + (this.ModifynewTendollar) + (this.ModifynewTwentydollar);
    if(this.ModifynewTotalValue<=this.staticTotalValue){
      if(this.ModifynewTotalValue!=0){
        this.newTotalValue=this.ModifynewTotalValue;
      }
      
    }
    
    
    
    
  }
  Raiserequest(){
    if(this.newTotalValue==0 && this.DepositedTotalValue==0){
      this.dynamicText="Change request value should not be empty.";
      this.openPopup();
      
    }
    else if(this.newTotalValue!=this.DepositedTotalValue){
      this.dynamicText="Change request not balanced.. Please Balance";
      this.openPopup();
    }
    else{
      localStorage.setItem('totalValue',this.newTotalValue.toString());
      this.saveChangerequest();
      this.router.navigateByUrl('/denominations');
    }
  }
  next(){
    this.router.navigateByUrl('/denominations');
    
  }
  TruckChangeRequestStatus(){
    this.loaderShow();
    this.service.GetChangerequestStatus(this.OrderStatus).subscribe(
      data=>{
      let Pennieslist1 = this.PenniesFormListvalues;
      let NickelsList1 = this.NickelsFormListvalues;
      let Dimeslist1 = this.DimesFromListValues;
      let QuatersList1 = this.QuartersFormListValues;
      let Onelist1 = this.OneDollarFormListValues;
      //let Onelist1 = this.TwoDollarFormListValues;
      let FiveList1 = this.FiveDollarFormListValues;
      let Tenlist1 = this.TenDollarFormListValues;
      let TwentyList1 = this.TwentyDollarFormListValues;
      let Fiftyist1 = this.FiftyDollarFromListValues;
      let HundredList1 = this.HundredDollarFromListValues;
      this.changeRequest = data;
     
      let myTag1 = this.el.nativeElement.querySelector("div");
      var shift_elements = document.getElementsByClassName('shift_managerDiv');

      if(data!=null){
        if(this.changeRequest.orderStatus=="Ordered"){
          if (data!= null) {

            let selectedP = "0";
            let selectedN = "0";
            let selectedD = "0";
            let selectedQ = "0";
            let selectedO = "0";
            let selectedF = "0";
            let selectedT = "0";
            let selectedTw = "0";
            let selectedFi = "0";
            let selectedHu = "0";
            
            
            this.cancelRequestId=this.changeRequest.id;
            this.isRaiseRequest=true;

            Pennieslist1.forEach((x) => {
              if (parseInt(x.value) == (this.changeRequest.cents)) {
                selectedP = (x.value);
              }
            });
            NickelsList1.forEach((x) => {
              if (parseInt(x.value) == (this.changeRequest.nickels)) {
                selectedN = (x.value);
              }
            });
            Dimeslist1.forEach((x) => {
              if (parseInt(x.value) == (this.changeRequest.dimes)) {
                selectedD = (x.value);
              }
    
            });
  
            QuatersList1.forEach((x) => {
              if (parseInt(x.value) == (this.changeRequest.quarters)) {
                selectedQ = (x.value);
              }
              
            });
            Onelist1.forEach((x) => {
              if (parseInt(x.value) == (this.changeRequest.den_1$)) {
                selectedO = (x.value);
              }
    
            });
            FiveList1.forEach((x) => {
              if (parseInt(x.value) == (this.changeRequest.den_5$)) {
                selectedF = (x.value);
              }
    
            });
            Tenlist1.forEach((x) => {
              if (parseInt(x.value) == (this.changeRequest.den_10$)) {
                selectedT = (x.value);
              }
            });
            TwentyList1.forEach((x) => {
              if (parseInt(x.value) == (this.changeRequest.den_20$)) {
                selectedTw = (x.value);
              }
    
            });
            Fiftyist1.forEach((x) => {
              if (parseInt(x.value) == (this.changeRequest.den_50$)) {
                selectedFi = (x.value);
              }
    
            });
            HundredList1.forEach((x) => {
              if (parseInt(x.value) == (this.changeRequest.den_100$)) {
                selectedHu = (x.value);
              }
              
            });
            this.newTotalValue = parseInt(selectedP) + parseInt(selectedN) + parseInt(selectedD) + parseInt(selectedQ) + parseInt(selectedO) + parseInt(selectedF) + parseInt(selectedT) + parseInt(selectedTw) + this.changeRequest.den_100$ + this.changeRequest.den_50$;

            this.staticTotalValue=this.newTotalValue;

            this.ModifynewPennies= parseInt(selectedP);
            this.ModifynewNickels= parseInt(selectedN);
            this.ModifynewDimes= parseInt(selectedD);
            this.ModifynewQuarters= parseInt(selectedQ);
            this.ModifynewOnedollar= parseInt(selectedO);
            this.ModifynewFivedollar=parseInt(selectedF);
            this.ModifynewTendollar= parseInt(selectedT);
            this.ModifynewTwentydollar= parseInt(selectedTw);
            this.ModifynewFiftyDollar=parseInt(selectedFi);
            this.ModifynewHundredDollar= parseInt(selectedHu);

            this.newPennies =parseInt(selectedP);
            this.newNickels = parseInt(selectedN);
            this.newDimes =parseInt(selectedD);
            this.newQuarters = parseInt(selectedQ);
            this.newOnedollar = parseInt(selectedO);
            this.newFivedollar =parseInt(selectedF);
            this.newTendollar = parseInt(selectedT);
            this.newTwentydollar =parseInt(selectedTw);
            this.newFiftyDollar = parseInt(selectedFi);
            this.newHundredDollar =parseInt(selectedHu);
            
            
            if(this.newPennies!=0){
              this.ValletPennies=(this.oldPennies)+(this.newPennies);
            }
            else{
              this.ValletPennies=this.oldPennies;
            }
            if(this.newNickels!=0){
              this.valletNickels=(this.newNickels)+(this.oldNickels);
            }
            else{
              this.valletNickels=this.oldNickels;
            }
            if(this.newDimes!=0){
              this.valletDimes=(this.newDimes)+(this.oldDimes);
            }
            else{
              this.valletDimes=this.oldDimes;
            }
            if(this.newQuarters!=0){
              this.valletQuarters=(this.newQuarters)+(this.oldQuarters);
            }
            else{
              this.valletQuarters=this.oldQuarters;
            }
            if(this.newOnedollar!=0){
              this.valletOnedollar=(this.newOnedollar)+(this.oldOnedollar);
            }
            else{
              this.valletOnedollar=this.oldOnedollar;
            }
            if(this.newFivedollar!=0){
              this.valletFivedollar=(this.newFivedollar)+(this.oldFivedollar);
            }
            else{
              this.valletFivedollar=this.oldFivedollar;
            }
            if(this.newTendollar!=0){
              this.valletTendollar=(this.newTendollar)+(this.oldTendollar);
            }
            else{
              this.valletTendollar=this.oldTendollar;
            }
            if(this.newTwentydollar!=0){
              this.valletTwentydollar=(this.newTwentydollar)+(this.oldTwentydollar);
            }
            else{
              this.valletTwentydollar=this.oldTwentydollar
            }
            if(this.newFiftyDollar!=0){
              this.valletFiftyDollar=(this.newFiftyDollar)+(this.oldFiftyDollar);
            }
            else{
              this.valletFiftyDollar=this.oldFiftyDollar;
            }
            if(this.newHundredDollar!=0){
              this.valletHundredDollar=(this.newHundredDollar)+(this.oldHundredDollar);
            }
            else{
              this.valletHundredDollar=this.oldHundredDollar;
            }
            
           
            this.SetTruckChangeDenominationsFormValues.patchValue({
              
              TruckChangePenniesFormValues:selectedP,
              TruckChangeNickelsFormValues: selectedN,
              TruckChangeDimesFromValues: selectedD,
              TruckChangeQuartersFormValues: selectedQ,
              TruckChangeOneDollarFormValues: selectedO,
              TruckChangeFiveDollarFormValues: selectedF,
              TruckChangeTenDollarFormValues: selectedT,
              TruckChangeTwentyDollarFormValues: selectedTw,
              TruckChangeHundredDollarFormValue: selectedFi,
              TruckChangeFiftyDollarFormValue: selectedHu,

            })
          }
        }
        else if(this.changeRequest.orderStatus=="Delivered"){
          this.isRaiseRequest=true;
          if (shift_elements.length > 0) {
            shift_elements[0].classList.remove('shift_managerDiv');
          }

          this.initFormGroup();
    
        }
        else{
          if (shift_elements.length > 0) {
            shift_elements[0].classList.remove('shift_managerDiv');
          }
          this.initFormGroup();
        }
        //alert(data);
      }
      else{
        if (shift_elements.length > 0) {
          shift_elements[0].classList.remove('shift_managerDiv');
        }
        this.initFormGroup();
      }
      this.loaderHide();
    },
    error=>{
      this.loaderHide();
    }
    );
  }
  RaiserequestAccept(){
    this.IsmodelShow=true;
    let myTag1 = this.el.nativeElement.querySelector("div");
    var shift_elements = document.getElementsByClassName('shift_managerDiv');
    if (shift_elements.length > 0) {
      shift_elements[0].classList.remove('shift_managerDiv');
    }
    this.newTotalValue= 0;
    this.DepositedTotalValue=0;

    this.initFormGroup();
    

  }
  RaiserequestCencel(){
    this.IsmodelShow=false;
  }
  editRequest(){
    this.ModifyRequest="Save";
    let myTag1 = this.el.nativeElement.querySelector("div");
    var shift_elements = document.getElementsByClassName('main_safeDiv');
    let myTag2 = this.el.nativeElement.querySelector("div");
    var newtotal = document.getElementsByClassName('redNewTotal');
    if (shift_elements.length > 0) {
      shift_elements[0].classList.remove('main_safeDiv');
    }
    this.confirmDisable=true;
    if(this.staticTotalValue==this.ModifynewTotalValue){
      newtotal[0].classList.remove('redNewTotalAdd');
      this.saveChangerequest();
    }
    else{
      if(this.ModifynewTotalValue!=0){
        if (newtotal.length > 0) {
          newtotal[0].classList.add('redNewTotalAdd');
        }
        this.dynamicText="Change request not balanced.. Please Balance";
        this.openPopup();
      }
      
    }
  }

  Valletchangedoordenominations() {
    this.service.getStandBankDetailsOnType("MAINSAFE").subscribe(data => {
      this.standbankresponceData = data;
      this.ValletDenominationId=this.standbankresponceData.id;
      
      if (data!= null) {
              
        this.oldPennies=this.standbankresponceData.cents;
        this.oldNickels=this.standbankresponceData.nickels;
        this.oldDimes =this.standbankresponceData.dimes;
        this.oldQuarters=this.standbankresponceData.quarters;
        this.oldOnedollar=this.standbankresponceData.den_1$;
        this.oldFivedollar=this.standbankresponceData.den_5$;
        this.oldTendollar=this.standbankresponceData.den_10$;
        this.oldTwentydollar=this.standbankresponceData.den_20$;
        this.oldFiftyDollar=this.standbankresponceData.den_50$;
        this.oldHundredDollar=this.standbankresponceData.den_100$;
        
      }

    });

  
}
CancelRequestT(){
  this.displayStyleC='block'
}
cancelChageRequest(){
  this.closePopupCancel();
  this.truckChangeRequestDto.cents=this.newPennies;
  this.truckChangeRequestDto.nickels=this.newNickels;
  this.truckChangeRequestDto.dimes=this.newDimes;
  this.truckChangeRequestDto.quarters=this.newQuarters;
  this.truckChangeRequestDto.den_1$=this.newOnedollar;
  // this.changeRequestDto.den_1$=this.newTwodollar;
  this.truckChangeRequestDto.den_5$=this.newFivedollar;
  this.truckChangeRequestDto.den_10$=this.newTendollar;
  this.truckChangeRequestDto.den_20$=this.newTwentydollar;
  this.truckChangeRequestDto.den_50$=this.newFiftyDollar;
  this.truckChangeRequestDto.den_100$=this.newHundredDollar;

  this.truckChangeRequestDto.type="MAINSAFE";
  this.truckChangeRequestDto.orderStatus="Cancel";
  this.truckChangeRequestDto.updatedByUser=this.useriD;
  this.truckChangeRequestDto.updatedTime=Date();
  this.truckChangeRequestDto.id=this.cancelRequestId;

    this.service.cancelRequestDenominiesValues(this.truckChangeRequestDto).subscribe(
    data=>{
      
    },error=>{
      
    }
    )
}
SaveMainsafeChangerequestdata(){
  this.loaderShow();
    this.changeValetDenominations.new_cents=this.newPennies;
    this.changeValetDenominations.new_nickels=this.newNickels;
    this.changeValetDenominations.new_dimes=this.newDimes;
    this.changeValetDenominations.new_quarters=this.newQuarters;
    this.changeValetDenominations.new_den_1$=this.newOnedollar;
    this.changeValetDenominations.new_den_5$=this.newFivedollar;
    this.changeValetDenominations.new_den_10$=this.newTendollar;
    this.changeValetDenominations.new_den_20$=this.newTwentydollar;
    this.changeValetDenominations.new_den_50$=this.newFiftyDollar;
    this.changeValetDenominations.new_den_100$=this.newHundredDollar;

    this.changeValetDenominations.old_cents=this.oldPennies;
    this.changeValetDenominations.old_nickels=this.oldNickels;
    this.changeValetDenominations.old_dimes=this.oldDimes;
    this.changeValetDenominations.old_quarters=this.oldQuarters;
    this.changeValetDenominations.old_den_1$=this.oldOnedollar;
    this.changeValetDenominations.old_den_5$=this.oldFivedollar;
    this.changeValetDenominations.old_den_10$=this.oldTendollar;
    this.changeValetDenominations.old_den_20$=this.oldTwentydollar;
    this.changeValetDenominations.old_den_50$=this.oldFiftyDollar;
    this.changeValetDenominations.old_den_100$=this.oldHundredDollar;

    this.changeValetDenominations.valetDenominationsDto.cents=this.ValletPennies;
    this.changeValetDenominations.valetDenominationsDto.nickels=this.valletNickels;
    this.changeValetDenominations.valetDenominationsDto.dimes=this.valletDimes;
    this.changeValetDenominations.valetDenominationsDto.quarters=this.valletQuarters;
    this.changeValetDenominations.valetDenominationsDto.den_1$=this.valletOnedollar;
    this.changeValetDenominations.valetDenominationsDto.den_5$=this.valletFivedollar;
    this.changeValetDenominations.valetDenominationsDto.den_10$=this.valletTendollar;
    this.changeValetDenominations.valetDenominationsDto.den_20$=this.valletTwentydollar;
    this.changeValetDenominations.valetDenominationsDto.den_50$=this.valletFiftyDollar;
    this.changeValetDenominations.valetDenominationsDto.den_100$=this.valletHundredDollar;
    
    this.changeValetDenominations.type="Main Safe Change";
    this.changeValetDenominations.updatedByUser=this.useriD;
    this.changeValetDenominations.valetDenominationsId=this.ValletDenominationId;
    this.changeValetDenominations.updatedTime=Date();

    this.service.changeRequestDenominiesValues(this.changeValetDenominations).subscribe(
    data=>{
      
    },error=>{
      this.loaderHide();
    }
    )
}
  saveChangerequest(){
    this.loaderShow();
    this.cancelConfirm();
    this.truckChangeRequestDto.cents=this.newPennies;
    this.truckChangeRequestDto.nickels=this.newNickels;
    this.truckChangeRequestDto.dimes=this.newDimes;
    this.truckChangeRequestDto.quarters=this.newQuarters;
    this.truckChangeRequestDto.den_1$=this.newOnedollar;
    // this.changeRequestDto.den_1$=this.newTwodollar;
    this.truckChangeRequestDto.den_5$=this.newFivedollar;
    this.truckChangeRequestDto.den_10$=this.newTendollar;
    this.truckChangeRequestDto.den_20$=this.newTwentydollar;
    this.truckChangeRequestDto.den_50$=this.newFiftyDollar;
    this.truckChangeRequestDto.den_100$=this.newHundredDollar;

    this.truckChangeRequestDto.type="MAINSAFE";
    this.truckChangeRequestDto.orderStatus="Delivered";
    this.truckChangeRequestDto.updatedByUser=this.useriD;
    this.truckChangeRequestDto.updatedTime=Date();
    this.service.SavetructChangeRequest(this.truckChangeRequestDto).subscribe(
      data=>{
      localStorage.setItem('OrderStatus',"Delivered");
      this.SaveMainsafeChangerequestdata();
      this.dynamicText="Saved Successfully";
      this.openPopup();
      
      this.loaderHide();
    },error=>{
      this.loaderHide();
    }
    );
  }

}
