import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IpcService } from 'src/app/services/ipc.service';
import { Service } from 'src/app/services/Service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, FormsModule } from "@angular/forms";
import { ChangeRequestDto, ChangeRequest, GetStandBankRequestValues, ChangeValetDenominations } from 'src/app/config/Standbank';
import { AppComponent } from 'src/app/app.component'
import { error } from 'protractor';

@Component({
  selector: 'app-changerequest',
  templateUrl: './changerequest.component.html',
  styleUrls: ['./changerequest.component.scss']
})
export class ChangerequestComponent implements OnInit {

  constructor(private service: Service, private router: Router, private el: ElementRef, private ipcService: IpcService, private formBuilder: FormBuilder) { }
  SetChangeDenominationsFormValues: FormGroup;
  ValletDenominationId: number;
  standbankresponceData: GetStandBankRequestValues;
  public standbankresponceDataList: Array<GetStandBankRequestValues> = new Array<GetStandBankRequestValues>();
  changeRequest: ChangeRequest;
  public changeRequestDto: ChangeRequestDto = new ChangeRequestDto();
  public changeValetDenominations: ChangeValetDenominations = new ChangeValetDenominations();
  public apcomponent: AppComponent;

  show = false;
  fullScreen = true;
  template = ``

  useriD: any;
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

  isHideDrop: boolean = true;

  IsmodelShow: boolean = false;
  isPrint: boolean = true;
  isRaiseRequest: boolean = false;

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

  mainsafePennies: number = 0;
  mainsafeNickels: number = 0;
  mainsafeDimes: number = 0;
  mainsafeQuarters: number = 0;
  mainsafeOnedollar: number = 0;
  mainsafeFivedollar: number = 0;
  mainsafeTendollar: number = 0;
  mainsafeTwentydollar: number = 0;
  mainsafeFiftyDollar: number = 0;
  mainsafeHundredDollar: number = 0;

  orderStatusOf: string = "Pending";

  DepositedValletPennies: number = 0;
  DepositedvalletNickels: number = 0;
  DepositedvalletDimes: number = 0;
  DepositedvalletQuarters: number = 0;
  DepositedvalletOnedollar: number = 0;
  DepositedvalletFivedollar: number = 0;
  DepositedvalletTendollar: number = 0;
  DepositedvalletTwentydollar: number = 0;
  DepositedvalletFiftyDollar: number = 0;
  DepositedvalletHundredDollar: number = 0;

  TotalValletPennies: number = 0;
  TotalvalletNickels: number = 0;
  TotalvalletDimes: number = 0;
  TotalvalletQuarters: number = 0;
  TotalvalletOnedollar: number = 0;
  TotalvalletFivedollar: number = 0;
  TotalvalletTendollar: number = 0;
  TotalvalletTwentydollar: number = 0;
  TotalvalletFiftyDollar: number = 0;
  TotalvalletHundredDollar: number = 0;

  newTotalValue: number = 0;

  MainTotalValue: number = 0

  DepositedTotalValue: number = 0;

  TotalMSandSH: number = 0;

  OrderStatus: any = "Pending";

  disableDropdowns: boolean = false;

  PenniesFormListvalues = [
    { value: "0", name: 'Select Pennies' }, { value: '25', name: '$25' }, { value: '50', name: '$50' }, { value: '75', name: '$75' }, { value: '100', name: '$100' }, { value: '125', name: '$125' }, { value: '150', name: '$150' }, { value: '175', name: '$175' }, { value: '200', name: '$200' }
  ];
  NickelsFormListvalues = [
    { value: "0", name: 'Select Nickels' }, { value: '100', name: '$100' }, { value: '200', name: '$200' }, { value: '300', name: '$300' }, { value: '400', name: '$400' }, { value: '500', name: '$500' }, { value: '600', name: '$600' }, { value: '700', name: '$700' }, { value: '800', name: '$800' }
  ];
  DimesFromListValues = [
    { value: "0", name: 'Select Dimes' }, { value: '250', name: '$250' }, { value: '500', name: '$500' }, { value: '750', name: '$750' }, { value: '1000', name: '$1000' }, { value: '1250', name: '$1250' }, { value: '1500', name: '$1500' }, { value: '1750', name: '$1750' }, { value: '2000', name: '$2000' }

  ]
  QuartersFormListValues = [
    { value: "0", name: 'Select Quarters' }, { value: '500', name: '$500' }, { value: '1000', name: '$1000' }, { value: '1500', name: '$1500' }, { value: '2000', name: '$2000' }, { value: '2500', name: '$2500' }, { value: '3000', name: '$3000' }, { value: '3500', name: '$3500' }, { value: '4000', name: '$4000' }

  ]
  OneDollarFormListValues = [
    { value: "0", name: 'Select OneDollar' }, { value: '100', name: '$100' }, { value: '200', name: '$200' }, { value: '300', name: '$300' }, { value: '400', name: '$400' }, { value: '500', name: '$500' }, { value: '600', name: '$600' }, { value: '700', name: '$700' }, { value: '800', name: '$800' }

  ]
  // TwoDollarFormListValues = [
  //   { value: "0", name: 'Select OneDollar' }, { value: "50", name: '$50' }, { value: "100", name: '$100' }, { value: "150", name: '$150' }, { value: "200", name: '$200' }, { value: "250", name: '$250' }, { value: "300", name: '$300' }, { value: "350", name: '$350' }, { value: "400", name: '$400' }, { value: "450", name: '$450' }, { value: "500", name: '$500' }

  // ]
  FiveDollarFormListValues = [
    { value: "0", name: 'Select FiveDollar' }, { value: '250', name: '$250' }, { value: '500', name: '$500' }, { value: '750', name: '$750' }, { value: '1000', name: '$1000' }, { value: '1250', name: '$1250' }, { value: '1500', name: '$1500' }, { value: '1750', name: '$1750' }, { value: '2000', name: '$2000' }
  ]
  TenDollarFormListValues = [
    { value: "0", name: 'Select TenDollar' }, { value: '500', name: '$500' }, { value: '1000', name: '$1000' }, { value: '1500', name: '$1500' }, { value: '2000', name: '$2000' }, { value: '2500', name: '$2500' }, { value: '3000', name: '$3000' }, { value: '3500', name: '$3500' }, { value: '4000', name: '$4000' }, { value: '4500', name: '$4500' }, { value: '5000', name: '$5000' }, { value: '5500', name: '$5500' }, { value: '6000', name: '$6000' }
  ]
  TwentyDollarFormListValues = [
    { value: "0", name: 'Select TwentyDollar' }, { value: '20', name: '$20' }, { value: '40', name: '$40' }, { value: '60', name: '$60' }, { value: '80', name: '$80' }, { value: '100', name: '$100' }, { value: '120', name: '$120' }, { value: '140', name: '$140' }, { value: '160', name: '$160' }, { value: '180', name: '$180' }, { value: '200', name: '$200' }, { value: '220', name: '$220' }, { value: '240', name: '$240' }, { value: '260', name: '$260' }

  ]
  FiftyDollarFromListValues = [
    { value: "0", name: 'Select FiftyDollar' }, { value: "50", name: '$50' }, { value: "100", name: '$100' }, { value: "150", name: '$150' }, { value: "200", name: '$200' }, { value: "250", name: '$250' }, { value: "300", name: '$300' }, { value: "350", name: '$350' }, { value: "400", name: '$400' }, { value: "450", name: '$450' }, { value: "500", name: '$500' }
  ]
  HundredDollarFromListValues = [
    { value: "0", name: 'Select HundredDollar' }, { value: "100", name: '$100' }, { value: "200", name: '$200' }, { value: "300", name: '$300' }, { value: "400", name: '$400' }, { value: "500", name: '$500' }, { value: "600", name: '$600' }, { value: "700", name: '$700' }, { value: "800", name: '$800' }, { value: "900", name: '$900' }, { value: "1000", name: '$1000' }
  ]
  // Deposited Dropdowns//
  DpOneDollarFormListValues = [
    { value: "0", name: 'Select OneDollar' }, { value: '1', name: '$1' }, { value: '2', name: '$2' }, { value: '3', name: '$3' }, { value: '4', name: '$4' }, { value: '5', name: '$5' }, { value: '6', name: '$6' }, { value: '7', name: '$7' }, { value: '8', name: '$8' }, { value: '9', name: '$9' }, { value: '10', name: '$10' }, { value: '11', name: '$11' }, { value: '12', name: '$12' }, { value: '13', name: '$13' }, { value: '14', name: '$14' }, { value: '15', name: '$15' }, { value: '16', name: '$16' }, { value: '17', name: '$17' }, { value: '18', name: '$18' }, { value: '19', name: '$19' }, { value: '20', name: '$20' }, { value: '21', name: '$21' }, { value: '22', name: '$22' }, { value: '23', name: '$23' }, { value: '24', name: '$24' }, { value: '25', name: '$25' }, { value: '26', name: '$26' }, { value: '27', name: '$27' }, { value: '28', name: '$28' }, { value: '29', name: '$29' }, { value: '30', name: '$30' }, { value: '31', name: '$31' }, { value: '32', name: '$32' }, { value: '33', name: '$33' }, { value: '34', name: '$34' }, { value: '35', name: '$35' }, { value: '36', name: '$36' }, { value: '37', name: '$37' }, { value: '38', name: '$38' }, { value: '39', name: '$39' }, { value: '40', name: '$40' }, { value: '41', name: '$41' }, { value: '42', name: '$42' }, { value: '43', name: '$43' }, { value: '44', name: '$44' }, { value: '45', name: '$45' }, { value: '46', name: '$46' }, { value: '47', name: '$47' }, { value: '48', name: '$48' }, { value: '49', name: '$49' }, { value: '50', name: '$50' }, { value: '51', name: '$51' }, { value: '52', name: '$52' }, { value: '53', name: '$53' }, { value: '54', name: '$54' }, { value: '55', name: '$55' }, { value: '56', name: '$56' }, { value: '57', name: '$57' }, { value: '58', name: '$58' }, { value: '59', name: '$59' }, { value: '60', name: '$60' }, { value: '61', name: '$61' }, { value: '62', name: '$62' }, { value: '63', name: '$63' }, { value: '64', name: '$64' }, { value: '65', name: '$65' }, { value: '66', name: '$66' }, { value: '67', name: '$67' }, { value: '68', name: '$68' }, { value: '69', name: '$69' }, { value: '70', name: '$70' }, { value: '71', name: '$71' }, { value: '72', name: '$72' }, { value: '73', name: '$73' }, { value: '74', name: '$74' }, { value: '75', name: '$75' }, { value: '76', name: '$76' }, { value: '77', name: '$77' }, { value: '78', name: '$78' }, { value: '79', name: '$79' }, { value: '80', name: '$80' }, { value: '81', name: '$81' }, { value: '82', name: '$82' }, { value: '83', name: '$83' }, { value: '84', name: '$84' }, { value: '85', name: '$85' }, { value: '86', name: '$86' }, { value: '87', name: '$87' }, { value: '88', name: '$88' }, { value: '89', name: '$89' }, { value: '90', name: '$90' }, { value: '91', name: '$91' }, { value: '92', name: '$92' }, { value: '93', name: '$93' }, { value: '94', name: '$94' }, { value: '95', name: '$95' }, { value: '96', name: '$96' }, { value: '97', name: '$97' }, { value: '98', name: '$98' }, { value: '99', name: '$99' }, { value: '100', name: '$100' }, { value: '101', name: '$101' }, { value: '102', name: '$102' }, { value: '103', name: '$103' }, { value: '104', name: '$104' }, { value: '105', name: '$105' }, { value: '106', name: '$106' }, { value: '107', name: '$107' }, { value: '108', name: '$108' }, { value: '109', name: '$109' }, { value: '110', name: '$110' }, { value: '111', name: '$111' }, { value: '112', name: '$112' }, { value: '113', name: '$113' }, { value: '114', name: '$114' }, { value: '115', name: '$115' }, { value: '116', name: '$116' }, { value: '117', name: '$117' }, { value: '118', name: '$118' }, { value: '119', name: '$119' }, { value: '120', name: '$120' }, { value: '121', name: '$121' }, { value: '122', name: '$122' }, { value: '123', name: '$123' }, { value: '124', name: '$124' }, { value: '125', name: '$125' }, { value: '126', name: '$126' }, { value: '127', name: '$127' }, { value: '128', name: '$128' }, { value: '129', name: '$129' }, { value: '130', name: '$130' }, { value: '131', name: '$131' }, { value: '132', name: '$132' }, { value: '133', name: '$133' }, { value: '134', name: '$134' }, { value: '135', name: '$135' }, { value: '136', name: '$136' }, { value: '137', name: '$137' }, { value: '138', name: '$138' }, { value: '139', name: '$139' }, { value: '140', name: '$140' }, { value: '141', name: '$141' }, { value: '142', name: '$142' }, { value: '143', name: '$143' }, { value: '144', name: '$144' }, { value: '145', name: '$145' }, { value: '146', name: '$146' }, { value: '147', name: '$147' }, { value: '148', name: '$148' }, { value: '149', name: '$149' }, { value: '150', name: '$150' }, { value: '151', name: '$151' }, { value: '152', name: '$152' }, { value: '153', name: '$153' }, { value: '154', name: '$154' }, { value: '155', name: '$155' }, { value: '156', name: '$156' }, { value: '157', name: '$157' }, { value: '158', name: '$158' }, { value: '159', name: '$159' }, { value: '160', name: '$160' }, { value: '161', name: '$161' }, { value: '162', name: '$162' }, { value: '163', name: '$163' }, { value: '164', name: '$164' }, { value: '165', name: '$165' }, { value: '166', name: '$166' }, { value: '167', name: '$167' }, { value: '168', name: '$168' }, { value: '169', name: '$169' }, { value: '170', name: '$170' }, { value: '171', name: '$171' }, { value: '172', name: '$172' }, { value: '173', name: '$173' }, { value: '174', name: '$174' }, { value: '175', name: '$175' }, { value: '176', name: '$176' }, { value: '177', name: '$177' }, { value: '178', name: '$178' }, { value: '179', name: '$179' }, { value: '180', name: '$180' }, { value: '181', name: '$181' }, { value: '182', name: '$182' }, { value: '183', name: '$183' }, { value: '184', name: '$184' }, { value: '185', name: '$185' }, { value: '186', name: '$186' }, { value: '187', name: '$187' }, { value: '188', name: '$188' }, { value: '189', name: '$189' }, { value: '190', name: '$190' }, { value: '191', name: '$191' }, { value: '192', name: '$192' }, { value: '193', name: '$193' }, { value: '194', name: '$194' }, { value: '195', name: '$195' }, { value: '196', name: '$196' }, { value: '197', name: '$197' }, { value: '198', name: '$198' }, { value: '199', name: '$199' }, { value: '200', name: '$200' }, { value: '201', name: '$201' }, { value: '202', name: '$202' }, { value: '203', name: '$203' }, { value: '204', name: '$204' }, { value: '205', name: '$205' }, { value: '206', name: '$206' }, { value: '207', name: '$207' }, { value: '208', name: '$208' }, { value: '209', name: '$209' }, { value: '210', name: '$210' }, { value: '211', name: '$211' }, { value: '212', name: '$212' }, { value: '213', name: '$213' }, { value: '214', name: '$214' }, { value: '215', name: '$215' }, { value: '216', name: '$216' }, { value: '217', name: '$217' }, { value: '218', name: '$218' }, { value: '219', name: '$219' }, { value: '220', name: '$220' }, { value: '221', name: '$221' }, { value: '222', name: '$222' }, { value: '223', name: '$223' }, { value: '224', name: '$224' }, { value: '225', name: '$225' }, { value: '226', name: '$226' }, { value: '227', name: '$227' }, { value: '228', name: '$228' }, { value: '229', name: '$229' }, { value: '230', name: '$230' }, { value: '231', name: '$231' }, { value: '232', name: '$232' }, { value: '233', name: '$233' }, { value: '234', name: '$234' }, { value: '235', name: '$235' }, { value: '236', name: '$236' }, { value: '237', name: '$237' }, { value: '238', name: '$238' }, { value: '239', name: '$239' }, { value: '240', name: '$240' }, { value: '241', name: '$241' }, { value: '242', name: '$242' }, { value: '243', name: '$243' }, { value: '244', name: '$244' }, { value: '245', name: '$245' }, { value: '246', name: '$246' }, { value: '247', name: '$247' }, { value: '248', name: '$248' }, { value: '249', name: '$249' }, { value: '250', name: '$250' }

  ]
  DpFiveDollarFormListValues = [
    { value: "0", name: 'Select FiveDollar' }, { value: '5', name: '$5' }, { value: '10', name: '$10' }, { value: '15', name: '$15' }, { value: '20', name: '$20' }, { value: '25', name: '$25' }, { value: '30', name: '$30' }, { value: '35', name: '$35' }, { value: '40', name: '$40' }, { value: '45', name: '$45' }, { value: '50', name: '$50' }, { value: '55', name: '$55' }, { value: '60', name: '$60' }, { value: '65', name: '$65' }, { value: '70', name: '$70' }, { value: '75', name: '$75' }, { value: '80', name: '$80' }, { value: '85', name: '$85' }, { value: '90', name: '$90' }, { value: '95', name: '$95' }, { value: '100', name: '$100' }, { value: '105', name: '$105' }, { value: '110', name: '$110' }, { value: '115', name: '$115' }, { value: '120', name: '$120' }, { value: '125', name: '$125' }, { value: '130', name: '$130' }, { value: '135', name: '$135' }, { value: '140', name: '$140' }, { value: '145', name: '$145' }, { value: '150', name: '$150' }, { value: '155', name: '$155' }, { value: '160', name: '$160' }, { value: '165', name: '$165' }, { value: '170', name: '$170' }, { value: '175', name: '$175' }, { value: '180', name: '$180' }, { value: '185', name: '$185' }, { value: '190', name: '$190' }, { value: '195', name: '$195' }, { value: '200', name: '$200' }, { value: '205', name: '$205' }, { value: '210', name: '$210' }, { value: '215', name: '$215' }, { value: '220', name: '$220' }, { value: '225', name: '$225' }, { value: '230', name: '$230' }, { value: '235', name: '$235' }, { value: '240', name: '$240' }, { value: '245', name: '$245' }, { value: '250', name: '$250' }
  ]
  DpTenDollarFormListValues = [
    { value: "0", name: 'Select TenDollar' }, { value: '10', name: '$10' }, { value: '20', name: '$20' }, { value: '30', name: '$30' }, { value: '40', name: '$40' }, { value: '50', name: '$50' }, { value: '60', name: '$60' }, { value: '70', name: '$70' }, { value: '80', name: '$80' }, { value: '90', name: '$90' }, { value: '100', name: '$100' }, { value: '110', name: '$110' }, { value: '120', name: '$120' }, { value: '130', name: '$130' }, { value: '140', name: '$140' }, { value: '150', name: '$150' }, { value: '160', name: '$160' }, { value: '170', name: '$170' }, { value: '180', name: '$180' }, { value: '190', name: '$190' }, { value: '200', name: '$200' }, { value: '210', name: '$210' }, { value: '220', name: '$220' }, { value: '230', name: '$230' }, { value: '240', name: '$240' }, { value: '250', name: '$250' }
  ]
  DpTwentyDollarFormListValues = [
    { value: "0", name: 'Select TwentyDollar' }, { value: '20', name: '$20' }, { value: '40', name: '$40' }, { value: '60', name: '$60' }, { value: '80', name: '$80' }, { value: '100', name: '$100' }, { value: '120', name: '$120' }, { value: '140', name: '$140' }, { value: '160', name: '$160' }, { value: '180', name: '$180' }, { value: '200', name: '$200' }, { value: '220', name: '$220' }, { value: '240', name: '$240' }, { value: '260', name: '$260' }, { value: '280', name: '$280' }, { value: '300', name: '$300' }

  ]
  DpFiftyDollarFromListValues = [
    { value: "0", name: 'Select FiftyDollar' }, { value: "50", name: '$50' }, { value: "100", name: '$100' }, { value: "150", name: '$150' }, { value: "200", name: '$200' }, { value: "250", name: '$250' }, { value: "300", name: '$300' }, { value: "350", name: '$350' }, { value: "400", name: '$400' }, { value: "450", name: '$450' }, { value: "500", name: '$500' }
  ]
  DpHundredDollarFromListValues = [
    { value: "0", name: 'Select HundredDollar' }, { value: "100", name: '$100' }, { value: "200", name: '$200' }, { value: "300", name: '$300' }, { value: "400", name: '$400' }, { value: "500", name: '$500' }, { value: "600", name: '$600' }, { value: "700", name: '$700' }, { value: "800", name: '$800' }, { value: "900", name: '$900' }, { value: "1000", name: '$1000' }
  ]
  displayStyle = "none";
  dynamicText:string;
  openPopup() {
      this.displayStyle = "block";
  }
  closePopup() {
      if(this.dynamicText=="Saved Successfully"){
        this.router.navigateByUrl('/denominations');
      }
      this.displayStyle = "none";
      //this.router.navigateByUrl('/homenav');
  }
  ngOnInit(): void {
    this.disableDropdowns = true;
    this.isHideDrop = true;
    this.useriD = localStorage.getItem('userId');
    this.OrderStatus = localStorage.getItem('OrderStatus');
    this.initFormGroup();
    this.ChangeRequestStatus();
    
    this.getALLStandbankValues();

  }

  initFormGroup() {
    this.SetChangeDenominationsFormValues = this.formBuilder.group({

      MainsafePenniesFormValues: ['$0'],
      MainsafeNickelsFormValues: ['$0'],
      MainsafeDimesFromValues: ['$0'],
      MainsafeQuartersFormValues: ['$0'],
      MainsafeOneDollarFormValues: ['$0'],
      MainsafeFiveDollarFormValues: ['$0'],
      MainsafeTenDollarFormValues: ['$0'],
      MainsafeTwentyDollarFormValues: ['$0'],
      MainsafeHundredDollarFormValue: ['$0'],
      MainsafeFiftyDollarFormValue: ['$0'],

      NewPenniesFormValues: ['0'],
      NewNickelsFormValues: ['0'],
      NewDimesFromValues: ['0'],
      NewQuartersFormValues: ['0'],
      NewOneDollarFormValues: ['0'],
      NewFiveDollarFormValues: ['0'],
      NewTenDollarFormValues: ['0'],
      NewTwentyDollarFormValues: ['0'],
      NewHundredDollarFormValue: ['0'],
      NewFiftyDollarFormValue: ['0'],

      DepositePenniesFormValues: ['0'],
      DepositeNickelsFormValues: ['0'],
      DepositeDimesFromValues: ['0'],
      DepositeQuartersFormValues: ['0'],
      DepositeOneDollarFormValues: ['0'],
      DepositeFiveDollarFormValues: ['0'],
      DepositeTenDollarFormValues: ['0'],
      DepositeTwentyDollarFormValues: ['0'],
      DepositeHundredDollarFormValue: ['0'],
      DepositeFiftyDollarFormValue: ['0'],

      TotalPenniesFormValues: ['$0'],
      TotalNickelsFormValues: ['$0'],
      TotalDimesFromValues: ['$0'],
      TotalQuartersFormValues: ['$0'],
      TotalOneDollarFormValues: ['$0'],
      TotalFiveDollarFormValues: ['$0'],
      TotalTenDollarFormValues: ['$0'],
      TotalTwentyDollarFormValues: ['$0'],
      TotalHundredDollarFormValue: ['$0'],
      TotalFiftyDollarFormValue: ['$0'],



    });

  }
  loaderShow() {
    this.show = true;
    this.fullScreen = false;
    this.template = ``
    // setTimeout(() => {
    //     
    // }, 2000);
  }
  loaderHide(){
    this.show = false
  }
  confirmRequest() {
    this.router.navigateByUrl('/doortypes');
  }
  async getALLStandbankValues() {
    await this.service.getAllDenominations().subscribe(data => {
      console.log(data);
      this.standbankresponceDataList = data;
      
      this.TotalValletPennies = (this.standbankresponceDataList[0].cents) + (this.standbankresponceDataList[1].cents);
      this.TotalvalletNickels = (this.standbankresponceDataList[0].nickels) + (this.standbankresponceDataList[1].nickels);
      this.TotalvalletDimes = (this.standbankresponceDataList[0].dimes) + (this.standbankresponceDataList[1].dimes);
      this.TotalvalletQuarters = (this.standbankresponceDataList[0].quarters) + (this.standbankresponceDataList[1].quarters);
      this.TotalvalletOnedollar = (this.standbankresponceDataList[0].den_1$) + (this.standbankresponceDataList[1].den_1$);
      this.TotalvalletFivedollar = (this.standbankresponceDataList[0].den_5$) + (this.standbankresponceDataList[1].den_5$);
      this.TotalvalletTendollar = (this.standbankresponceDataList[0].den_10$) + (this.standbankresponceDataList[1].den_10$);
      this.TotalvalletTwentydollar = (this.standbankresponceDataList[0].den_20$) + (this.standbankresponceDataList[1].den_20$);
      this.TotalvalletFiftyDollar = (this.standbankresponceDataList[0].den_50$) + (this.standbankresponceDataList[1].den_50$);
      this.TotalvalletHundredDollar = (this.standbankresponceDataList[0].den_100$) + (this.standbankresponceDataList[1].den_100$);
      if (this.OrderStatus == "Delivered" || this.OrderStatus == "") {
        let myTag1 = this.el.nativeElement.querySelector("div");
        var shift_elements = document.getElementsByClassName('shift_managerDiv');
        if (shift_elements.length > 0) {
          shift_elements[0].classList.remove('shift_managerDiv');
        }
        this.isRaiseRequest = false;
        if (this.TotalValletPennies <= 10) {
          this.SetChangeDenominationsFormValues.patchValue({
            NewPenniesFormValues: "25"
          })
        } else {
          this.SetChangeDenominationsFormValues.patchValue({
            NewPenniesFormValues: ['0']
          })
        }

        if (this.TotalvalletNickels <= 20) {
          this.SetChangeDenominationsFormValues.patchValue({
            NewNickelsFormValues: "100"
          })
        } else {
          this.SetChangeDenominationsFormValues.patchValue({
            NewNickelsFormValues: ['0']
          })
        }

        if (this.TotalvalletDimes <= 50) {
          this.SetChangeDenominationsFormValues.patchValue({
            NewDimesFromValues: "250"
          })
        } else {
          this.SetChangeDenominationsFormValues.patchValue({
            NewDimesFromValues: ['0']
          })
        }

        if (this.TotalvalletQuarters <= 100) {
          this.SetChangeDenominationsFormValues.patchValue({
            NewQuartersFormValues: "500"
          })
        } else {
          this.SetChangeDenominationsFormValues.patchValue({
            NewQuartersFormValues: ['0']
          })
        }

        if (this.TotalvalletOnedollar <= 100) {
          this.SetChangeDenominationsFormValues.patchValue({
            NewOneDollarFormValues: "100"
          })
        } else {
          this.SetChangeDenominationsFormValues.patchValue({
            NewOneDollarFormValues: ['0']
          })
        }

        if (this.TotalvalletFivedollar <= 100) {
          this.SetChangeDenominationsFormValues.patchValue({
            NewFiveDollarFormValues: "250"
          })
        } else {
          this.SetChangeDenominationsFormValues.patchValue({
            NewFiveDollarFormValues: ['0']
          })
        }

        if (this.TotalvalletTendollar <= 120) {
          this.SetChangeDenominationsFormValues.patchValue({
            NewTenDollarFormValues: ['0']
          })
        } else {
          this.SetChangeDenominationsFormValues.patchValue({
            NewTenDollarFormValues: ['0']
          })
        }

        if (this.TotalvalletTwentydollar <= 300) {
          this.SetChangeDenominationsFormValues.patchValue({
            NewTwentyDollarFormValues: ['0']
          })
        } else {
          this.SetChangeDenominationsFormValues.patchValue({
            NewTwentyDollarFormValues: ['0']
          })
        }

        if (this.TotalvalletFiftyDollar <= 200) {
          this.SetChangeDenominationsFormValues.patchValue({
            NewFiftyDollarFormValue: ['0']
          })
        } else {
          this.SetChangeDenominationsFormValues.patchValue({
            NewFiftyDollarFormValue: ['0']
          })
        }

        if (this.TotalvalletHundredDollar <= 600) {
          this.SetChangeDenominationsFormValues.patchValue({
            NewHundredDollarFormValue: ['0']
          })
        } else {
          this.SetChangeDenominationsFormValues.patchValue({
            NewHundredDollarFormValue: ['0']
          })
        }
      }
      else if (this.OrderStatus == "Pending") {
        this.dynamicText="Your change request has initiated... Please Click on Next Button to Insert Bills";
        this.openPopup();
        this.isHideDrop = false;
      }

      this.SetChangeDenominationsFormValues.patchValue({

        TotalPenniesFormValues: "$" + this.TotalValletPennies,
        TotalNickelsFormValues: "$" + this.TotalvalletNickels,
        TotalDimesFromValues: "$" + this.TotalvalletDimes,
        TotalQuartersFormValues: "$" + this.TotalvalletQuarters,
        TotalOneDollarFormValues: "$" + this.TotalvalletOnedollar,
        TotalFiveDollarFormValues: "$" + this.TotalvalletFivedollar,
        TotalTenDollarFormValues: "$" + this.TotalvalletTendollar,
        TotalTwentyDollarFormValues: "$" + this.TotalvalletTwentydollar,
        TotalFiftyDollarFormValue: "$" + this.TotalvalletFiftyDollar,
        TotalHundredDollarFormValue: "$" + this.TotalvalletHundredDollar,

      })
      this.TotalMSandSH = (this.TotalValletPennies) + (this.TotalvalletNickels) + (this.TotalvalletDimes) + (this.TotalvalletQuarters) + (this.TotalvalletOnedollar) + (this.TotalvalletFivedollar) + (this.TotalvalletTendollar) + (this.TotalvalletTwentydollar) + (this.TotalvalletFiftyDollar) + (this.TotalvalletHundredDollar);
    })
  }
 async Valletchangedoordenominations() {
   await this.service.getStandBankDetailsOnType("MAINSAFE").subscribe(data => {
      this.standbankresponceData = data;
      this.ValletDenominationId = this.standbankresponceData.id;

      if (data != null) {


        this.ValletPennies = this.standbankresponceData.cents;
        this.valletNickels = this.standbankresponceData.nickels;
        this.valletDimes = this.standbankresponceData.dimes;
        this.valletQuarters = this.standbankresponceData.quarters;
        this.valletOnedollar = this.standbankresponceData.den_1$;
        this.valletFivedollar = this.standbankresponceData.den_5$;
        this.valletTendollar = this.standbankresponceData.den_10$;
        this.valletTwentydollar = this.standbankresponceData.den_20$;
        this.valletFiftyDollar = this.standbankresponceData.den_50$;
        this.valletHundredDollar = this.standbankresponceData.den_100$;

        this.SetChangeDenominationsFormValues.patchValue({


          MainsafePenniesFormValues: "$" + this.standbankresponceData.cents,
          MainsafeNickelsFormValues: "$" + this.standbankresponceData.nickels,
          MainsafeDimesFromValues: "$" + this.standbankresponceData.dimes,
          MainsafeQuartersFormValues: "$" + this.standbankresponceData.quarters,
          MainsafeOneDollarFormValues: "$" + this.standbankresponceData.den_1$,
          MainsafeFiveDollarFormValues: "$" + this.standbankresponceData.den_5$,
          MainsafeTenDollarFormValues: "$" + this.standbankresponceData.den_10$,
          MainsafeTwentyDollarFormValues: "$" + this.standbankresponceData.den_20$,
          MainsafeHundredDollarFormValue: "$" + this.standbankresponceData.den_100$,
          MainsafeFiftyDollarFormValue: "$" + this.standbankresponceData.den_50$,

        })

        this.MainTotalValue = (this.standbankresponceData.cents) + (this.standbankresponceData.nickels) + (this.standbankresponceData.dimes) + (this.standbankresponceData.quarters) + (this.standbankresponceData.den_1$) + (this.standbankresponceData.den_5$) + (this.standbankresponceData.den_10$) + (this.standbankresponceData.den_20$) + (this.standbankresponceData.den_50$) + (this.standbankresponceData.den_100$);

      }

    });


  }
  selectChangeHandler(item: any, type: string, type1: string) {

    switch (type) {
      case "Pennies": {
        this.newPennies = parseInt(item.target.value);

        console.log(item.target.value);
        break;
      }
      case "Nickels": {
        this.newNickels = parseInt(item.target.value);


        break;
      }
      case "Dimes": {
        this.newDimes = parseInt(item.target.value);

        break;
      }
      case "Quarters": {
        this.newQuarters = parseInt(item.target.value);

        break;
      }
      case "Onedollar": {
        this.newOnedollar = parseInt(item.target.value);


        break;
      }
      // case "Twodollar": {
      //   this.newTwodollar = parseInt(item.target.value);


      //   break;
      // }
      case "Fivedollar": {
        this.newFivedollar = parseInt(item.target.value);


        break;
      }
      case "Tendollar": {
        this.newTendollar = parseInt(item.target.value);

        break;
      }
      case "Twentydollar": {
        this.newTwentydollar = parseInt(item.target.value);


        break;
      }

      case "Fiftydollar": {
        this.newFiftyDollar = parseInt(item.target.value);


        break;
      }
      case "Hundreddollar": {
        this.newHundredDollar = parseInt(item.target.value);

        break;
      }

      // case "DepositePennies": {
      //   this.DepositedValletPennies = parseInt(item.target.value);


      //   break;
      // }
      // case "DepositeNickels": {
      //   this.DepositedvalletNickels = parseInt(item.target.value);


      //   break;
      // }
      // case "DepositeDimes": {
      //   this.DepositedvalletDimes = parseInt(item.target.value);

      //   break;
      // }
      // case "DepositeQuarters": {
      //   this.DepositedvalletQuarters = parseInt(item.target.value);


      //   break;
      // }
      case "DepositeOnedollar": {

        this.DepositedvalletOnedollar = parseInt(item.target.value);

        if (this.DepositedvalletOnedollar != 0) {
          this.mainsafeOnedollar = (this.valletOnedollar) - (this.DepositedvalletOnedollar);
          if (this.mainsafeOnedollar < 0) {
            this.DepositedvalletOnedollar = 0;
            this.SetChangeDenominationsFormValues.patchValue({
              DepositeOneDollarFormValues: "0"
            })
            this.SetChangeDenominationsFormValues.patchValue({
              MainsafeOneDollarFormValues: "$" + this.valletOnedollar
            })
            this.dynamicText="$1 Change Request exceeds available Balance.";
            this.openPopup();
            
            this.mainsafeOnedollar = 0;
          }
          else {
            this.SetChangeDenominationsFormValues.patchValue({
              MainsafeOneDollarFormValues: "$" + this.mainsafeOnedollar
            })
          }
        }
        else {
          this.SetChangeDenominationsFormValues.patchValue({
            MainsafeOneDollarFormValues: "$" + this.valletOnedollar
          })
        }

        break;
      }
      case "DepositeFivedollar": {
        this.DepositedvalletFivedollar = parseInt(item.target.value);

        //let mainFivedollar=0;
        if (this.DepositedvalletFivedollar != 0) {
          this.mainsafeFivedollar = (this.valletFivedollar) - (this.DepositedvalletFivedollar);
          if (this.mainsafeFivedollar < 0) {
            this.DepositedvalletFivedollar = 0;
            this.SetChangeDenominationsFormValues.patchValue({
              DepositeFiveDollarFormValues: "0"
            })
            this.SetChangeDenominationsFormValues.patchValue({
              MainsafeFiveDollarFormValues: "$" + this.valletFivedollar
            })
            this.dynamicText="$5 Change Request exceeds available Balance.";
            this.openPopup();
            this.mainsafeFivedollar = 0;
          }
          else {
            this.SetChangeDenominationsFormValues.patchValue({
              MainsafeFiveDollarFormValues: "$" + this.mainsafeFivedollar
            })
          }
        }
        else {
          this.SetChangeDenominationsFormValues.patchValue({
            MainsafeFiveDollarFormValues: "$" + this.valletFivedollar
          })
        }
        break;
      }
      case "DepositeTendollar": {
        this.DepositedvalletTendollar = parseInt(item.target.value);

        //let mainsafeTendollar=0;
        if (this.DepositedvalletTendollar != 0) {
          this.mainsafeTendollar = (this.valletTendollar) - (this.DepositedvalletTendollar);
          if (this.mainsafeTendollar < 0) {
            this.DepositedvalletTendollar = 0;
            this.SetChangeDenominationsFormValues.patchValue({
              DepositeTenDollarFormValues: "0"
            })
            this.SetChangeDenominationsFormValues.patchValue({
              MainsafeTenDollarFormValues: "$" + this.valletTendollar
            })
            this.dynamicText="$10 Change Request exceeds available Balance.";
            this.openPopup();
            this.mainsafeTendollar = 0;
          }
          else {
            this.SetChangeDenominationsFormValues.patchValue({
              MainsafeTenDollarFormValues: "$" + this.mainsafeTendollar
            })
          }
        }
        else {
          this.SetChangeDenominationsFormValues.patchValue({
            MainsafeTenDollarFormValues: "$" + this.valletTendollar
          })
        }

        break;
      }
      case "DepositeTwentydollar": {
        this.DepositedvalletTwentydollar = parseInt(item.target.value);

        //let mainsafeTwentydollar=0;
        if (this.DepositedvalletTwentydollar != 0) {
          this.mainsafeTwentydollar = (this.valletTwentydollar) - (this.DepositedvalletTwentydollar);
          if (this.mainsafeTwentydollar < 0) {
            this.DepositedvalletTwentydollar = 0;
            this.SetChangeDenominationsFormValues.patchValue({
              DepositeTwentyDollarFormValues: "0"
            })
            this.SetChangeDenominationsFormValues.patchValue({
              MainsafeTwentyDollarFormValues: "$" + this.valletTwentydollar
            })
            this.dynamicText="$20 Change Request exceeds available Balance.";
            this.openPopup();
            this.mainsafeTwentydollar = 0;
          }
          else {
            this.SetChangeDenominationsFormValues.patchValue({
              MainsafeTwentyDollarFormValues: "$" + this.mainsafeTwentydollar
            })
          }
        }
        else {
          this.SetChangeDenominationsFormValues.patchValue({
            MainsafeTwentyDollarFormValues: "$" + this.valletTwentydollar
          })
        }
        break;
      }
      case "DepositeFiftydollar": {
        this.DepositedvalletFiftyDollar = parseInt(item.target.value);
        //let mainsafeFivedollar=0;
        if (this.DepositedvalletFiftyDollar != 0) {
          this.mainsafeFiftyDollar = (this.valletFiftyDollar) - (this.DepositedvalletFiftyDollar);
          if (this.mainsafeFiftyDollar < 0) {
            this.DepositedvalletFiftyDollar = 0;
            this.SetChangeDenominationsFormValues.patchValue({
              DepositeFiftyDollarFormValue: "0"
            })
            this.SetChangeDenominationsFormValues.patchValue({
              MainsafeFiftyDollarFormValue: "$" + this.valletFiftyDollar
            })
            this.dynamicText="$50 Change Request exceeds available Balance.";
            this.openPopup();
            this.mainsafeFiftyDollar = 0;
          }
          else {
            this.SetChangeDenominationsFormValues.patchValue({
              MainsafeFiftyDollarFormValue: "$" + this.mainsafeFiftyDollar
            })
          }
        }
        else {
          this.SetChangeDenominationsFormValues.patchValue({
            MainsafeFiftyDollarFormValue: "$" + this.valletFiftyDollar
          })
        }

        break;
      }
      case "DepositeHundreddollar": {
        this.DepositedvalletHundredDollar = parseInt(item.target.value);

        //let mainsafeHundreddollar=0;
        if (this.DepositedvalletHundredDollar != 0) {
          this.mainsafeHundredDollar = (this.valletHundredDollar) - (this.DepositedvalletHundredDollar);
          if (this.mainsafeHundredDollar < 0) {
            this.DepositedvalletHundredDollar = 0;
            this.SetChangeDenominationsFormValues.patchValue({
              DepositeHundredDollarFormValue: "0"
            })
            this.SetChangeDenominationsFormValues.patchValue({
              MainsafeHundredDollarFormValue: "$" + this.valletHundredDollar
            })
            this.dynamicText="$100 Change Request exceeds available Balance.";
            this.openPopup();
            this.mainsafeHundredDollar = 0;
          }
          else {

            this.SetChangeDenominationsFormValues.patchValue({
              MainsafeHundredDollarFormValue: "$" + this.mainsafeHundredDollar
            })
          }

        }
        else {
          this.SetChangeDenominationsFormValues.patchValue({
            MainsafeHundredDollarFormValue: "$" + this.valletHundredDollar
          })
        }
        break;
      }
    }

    this.newTotalValue = (this.newPennies) + (this.newNickels) + (this.newDimes) + (this.newQuarters) + (this.newOnedollar) + (this.newFivedollar) + (this.newTendollar) + (this.newTwentydollar) + (this.newFiftyDollar) + (this.newHundredDollar);

    this.DepositedTotalValue = this.DepositedvalletOnedollar + this.DepositedvalletFivedollar + this.DepositedvalletTendollar + this.DepositedvalletTwentydollar + this.DepositedvalletFiftyDollar + this.DepositedvalletHundredDollar;

    this.MainTotalValue = (this.ValletPennies) + (this.valletNickels) + (this.valletDimes) + (this.valletQuarters) + parseInt(this.SetChangeDenominationsFormValues.get('MainsafeOneDollarFormValues')?.value.split('$')[1]) + parseInt(this.SetChangeDenominationsFormValues.get('MainsafeFiveDollarFormValues')?.value.split('$')[1]) + parseInt(this.SetChangeDenominationsFormValues.get('MainsafeTenDollarFormValues')?.value.split('$')[1]) + parseInt(this.SetChangeDenominationsFormValues.get('MainsafeTwentyDollarFormValues')?.value.split('$')[1]) + parseInt(this.SetChangeDenominationsFormValues.get('MainsafeFiftyDollarFormValue')?.value.split('$')[1]) + parseInt(this.SetChangeDenominationsFormValues.get('MainsafeHundredDollarFormValue')?.value.split('$')[1]);
  }
  async Raiserequest() {
    let myTag1 = this.el.nativeElement.querySelector("div");
    var newtotal = document.getElementsByClassName('redNewTotal');
    let myTag2 = this.el.nativeElement.querySelector("div");
    var depototal2 = document.getElementsByClassName('redDepositeTotal');
    if (this.newTotalValue == 0 && this.DepositedTotalValue == 0) {
      
      this.dynamicText="Change request value should not be empty.";
            this.openPopup();
    }
    else if (this.newTotalValue != this.DepositedTotalValue) {
      if (this.newTotalValue < this.DepositedTotalValue) {
        if (newtotal.length > 0) {
          depototal2[0].classList.remove('redDepositeTotalAdd');
          newtotal[0].classList.add('redNewTotalAdd');
        }
      }
      else {
        if (depototal2.length > 0) {
          newtotal[0].classList.remove('redNewTotalAdd');
          depototal2[0].classList.add('redDepositeTotalAdd');
        }
      }
      this.dynamicText="Change request not balanced.. Please Balance";
      this.openPopup();
    }
    else {
      depototal2[0].classList.remove('redDepositeTotalAdd');
      newtotal[0].classList.remove('redNewTotalAdd');
      localStorage.setItem('totalValue', this.newTotalValue.toString());
      await this.SaveChangeDenominiesvalues();
      await this.saveChangerequest();

    }
  }
  next() {
    this.router.navigateByUrl('/denominations');

  }


  async ChangeRequestStatus() {
    this.loaderShow();
    try {
      await this.service.GetChangerequestStatus(this.OrderStatus).subscribe(
        async result => {
          
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
          this.changeRequest = result;

          let myTag1 = this.el.nativeElement.querySelector("div");
          var shift_elements = document.getElementsByClassName('shift_managerDiv');

          if (result != null) {
            if (this.changeRequest.orderStatus == "Pending" || this.changeRequest.orderStatus == "Ordered") {
              if (result != null) {

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

                this.OrderStatus=this.changeRequest.orderStatus;
                this.isRaiseRequest = true;

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

                //this.DepositedTotalValue=this.newTotalValue;

                this.newPennies = parseInt(selectedP);
                this.newNickels = parseInt(selectedN);
                this.newDimes = parseInt(selectedD);
                this.newQuarters = parseInt(selectedQ);
                this.newOnedollar = parseInt(selectedO);
                this.newFivedollar = parseInt(selectedF);
                this.newTendollar = parseInt(selectedT);
                this.newTwentydollar = parseInt(selectedTw);
                this.newFiftyDollar = parseInt(selectedFi);
                this.newHundredDollar = parseInt(selectedHu);

                this.DepositedValletPennies = parseInt(selectedP);
                this.DepositedvalletNickels = parseInt(selectedN);
                this.DepositedvalletDimes = parseInt(selectedD);
                this.DepositedvalletQuarters = parseInt(selectedQ);
                this.DepositedvalletOnedollar = parseInt(selectedO);
                this.DepositedvalletFivedollar = parseInt(selectedF);
                this.DepositedvalletTendollar = parseInt(selectedT);
                this.DepositedvalletTwentydollar = parseInt(selectedTw);
                this.DepositedvalletFiftyDollar = parseInt(selectedFi);
                this.DepositedvalletHundredDollar = parseInt(selectedHu);

                this.SetChangeDenominationsFormValues.patchValue({
                  NewPenniesFormValues: selectedP,
                  NewNickelsFormValues: selectedN,
                  NewDimesFromValues: selectedD,
                  NewQuartersFormValues: selectedQ,
                  NewOneDollarFormValues: selectedO,
                  NewFiveDollarFormValues: selectedF,
                  NewTenDollarFormValues: selectedT,
                  NewTwentyDollarFormValues: selectedTw,
                  NewHundredDollarFormValue: selectedFi,
                  NewFiftyDollarFormValue: selectedHu,

                })
              }
            }
            else if (this.changeRequest.orderStatus == "Delivered") {
              this.isRaiseRequest = true;
              if (shift_elements.length > 0) {
                shift_elements[0].classList.remove('shift_managerDiv');
              }

              this.initFormGroup();

            }
            else {
              if (shift_elements.length > 0) {
                shift_elements[0].classList.remove('shift_managerDiv');
              }
              this.initFormGroup();
            }
          }
          else {
            this.OrderStatus="";
            if (shift_elements.length > 0) {
              shift_elements[0].classList.remove('shift_managerDiv');
            }
            this.initFormGroup();
           await this.Valletchangedoordenominations();
            

          }
          this.loaderHide();
        },
        error => {
          this.loaderHide();
          console.log(error);
        }
      );
    }
    catch (e) {
      console.error(e);
    }

  }
  RaiserequestAccept() {
    this.IsmodelShow = true;
    let myTag1 = this.el.nativeElement.querySelector("div");
    var shift_elements = document.getElementsByClassName('shift_managerDiv');
    if (shift_elements.length > 0) {
      shift_elements[0].classList.remove('shift_managerDiv');
    }
    this.newTotalValue = 0;
    this.DepositedTotalValue = 0;

    this.initFormGroup();


  }

  RaiserequestCencel() {
    debugger
    this.router.navigateByUrl("/homenav");

  }
  SaveChangeDenominiesvalues() {

    this.changeValetDenominations.new_cents = this.newPennies;
    this.changeValetDenominations.new_nickels = this.newNickels;
    this.changeValetDenominations.new_dimes = this.newDimes;
    this.changeValetDenominations.new_quarters = this.newQuarters;
    this.changeValetDenominations.new_den_1$ = this.newOnedollar;
    this.changeValetDenominations.new_den_5$ = this.newFivedollar;
    this.changeValetDenominations.new_den_10$ = this.newTendollar;
    this.changeValetDenominations.new_den_20$ = this.newTwentydollar;
    this.changeValetDenominations.new_den_50$ = this.newFiftyDollar;
    this.changeValetDenominations.new_den_100$ = this.newHundredDollar;

    this.changeValetDenominations.old_cents = this.ValletPennies;
    this.changeValetDenominations.old_nickels = this.valletNickels;
    this.changeValetDenominations.old_dimes = this.valletDimes;
    this.changeValetDenominations.old_quarters = this.valletQuarters;
    this.changeValetDenominations.old_den_1$ = this.valletOnedollar;
    this.changeValetDenominations.old_den_5$ = this.valletFivedollar;
    this.changeValetDenominations.old_den_10$ = this.valletTendollar;
    this.changeValetDenominations.old_den_20$ = this.valletTwentydollar;
    this.changeValetDenominations.old_den_50$ = this.valletFiftyDollar;
    this.changeValetDenominations.old_den_100$ = this.valletHundredDollar;

    this.changeValetDenominations.valetDenominationsDto.cents = parseInt(this.SetChangeDenominationsFormValues.get('MainsafePenniesFormValues')?.value.split('$')[1]);
    this.changeValetDenominations.valetDenominationsDto.nickels = parseInt(this.SetChangeDenominationsFormValues.get('MainsafeNickelsFormValues')?.value.split('$')[1]);
    this.changeValetDenominations.valetDenominationsDto.dimes = parseInt(this.SetChangeDenominationsFormValues.get('MainsafeDimesFromValues')?.value.split('$')[1]);
    this.changeValetDenominations.valetDenominationsDto.quarters = parseInt(this.SetChangeDenominationsFormValues.get('MainsafeQuartersFormValues')?.value.split('$')[1]);
    this.changeValetDenominations.valetDenominationsDto.den_1$ = parseInt(this.SetChangeDenominationsFormValues.get('MainsafeOneDollarFormValues')?.value.split('$')[1]);
    this.changeValetDenominations.valetDenominationsDto.den_5$ = parseInt(this.SetChangeDenominationsFormValues.get('MainsafeFiveDollarFormValues')?.value.split('$')[1]);
    this.changeValetDenominations.valetDenominationsDto.den_10$ = parseInt(this.SetChangeDenominationsFormValues.get('MainsafeTenDollarFormValues')?.value.split('$')[1]);
    this.changeValetDenominations.valetDenominationsDto.den_20$ = parseInt(this.SetChangeDenominationsFormValues.get('MainsafeTwentyDollarFormValues')?.value.split('$')[1]);
    this.changeValetDenominations.valetDenominationsDto.den_50$ = parseInt(this.SetChangeDenominationsFormValues.get('MainsafeFiftyDollarFormValue')?.value.split('$')[1]);
    this.changeValetDenominations.valetDenominationsDto.den_100$ = parseInt(this.SetChangeDenominationsFormValues.get('MainsafeHundredDollarFormValue')?.value.split('$')[1]);

    this.changeValetDenominations.type = "Main Safe Change";
    this.changeValetDenominations.updatedByUser = this.useriD;
    this.changeValetDenominations.valetDenominationsId = this.ValletDenominationId;
    this.changeValetDenominations.updatedTime = Date();
    this.loaderShow();
    this.service.changeRequestDenominiesValues(this.changeValetDenominations).subscribe(
      result => {
        console.log(result);
       },
       error => {
        this.loaderHide();
           console.log(error);
       }
    );
  }
  saveChangerequest() {

    this.loaderShow();

    this.changeRequestDto.cents = this.newPennies;
    this.changeRequestDto.nickels = this.newNickels;
    this.changeRequestDto.dimes = this.newDimes;
    this.changeRequestDto.quarters = this.newQuarters;
    this.changeRequestDto.den_1$ = this.newOnedollar;
    // this.changeRequestDto.den_1$=this.newTwodollar;
    this.changeRequestDto.den_5$ = this.newFivedollar;
    this.changeRequestDto.den_10$ = this.newTendollar;
    this.changeRequestDto.den_20$ = this.newTwentydollar;
    this.changeRequestDto.den_50$ = this.newFiftyDollar;
    this.changeRequestDto.den_100$ = this.newHundredDollar;

    this.changeRequestDto.type = "MAINSAFE";
    this.changeRequestDto.orderStatus = "Pending";
    this.changeRequestDto.updatedByUser = this.useriD;
    this.changeRequestDto.updatedTime = Date();
    
    this.service.SaveChangeRequestValues(this.changeRequestDto).subscribe(
      result => {
        this.loaderHide();
        localStorage.setItem('OrderStatus', "Pending");
        this.dynamicText="Saved Successfully";
        this.openPopup();
        
        
       },
       error => {
        this.loaderHide();
           console.log(error);
       }

    );
  }
}
