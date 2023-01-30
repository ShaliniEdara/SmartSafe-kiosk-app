import { Component, OnInit, ElementRef, NgModule } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { Service } from 'src/app/services/Service';
import { ValetDenominationsDto, GetStandBankRequestValues,ChangeRequest } from 'src/app/config/Standbank';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { User } from 'src/app/config/Model';
import { userInfo } from 'os';
//import { NGXToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-standbank',
  templateUrl: './standbank.component.html',
  styleUrls: ['./standbank.component.scss'],
  //providers: [NGXToastrService]
})

export class StandbankComponent implements OnInit {

  SetShiftManagerStandBankFormValues: FormGroup;
  public valetDenominationsDto: ValetDenominationsDto = new ValetDenominationsDto();
  public IschangeRequest = true;
  standbankresponceData: GetStandBankRequestValues;
  role: any;
  type: string;
  useriD:any;
  MinimulBalance: number = 1000;
  ShiftManagerMinimulBal: number = 0;
  MainSafeMinimulBal: number = 0;
  IsSafeSave:boolean=false;
  IsMainSave:boolean=false;

  changesRequestTotal:number;
  //ShiftManagerVerificatios
  Pennies: number = 0;
  Nickels: number = 0
  Dimes: number = 0
  Quarters: number =0
  Onedollar: number = 0
  Fivedollar: number = 0
  Tendollar: number = 0
  Twentydollar: number = 0
  FiftyDollar: number = 0
  HundredDollar: number = 0

  textPennies: string = '0';
  textNickels:string = '0';
  textDimes: string = '0';
  textQuarters:string = '0';
  textOnedollar: string = '0';
  textFivedollar: string = '0';
  textTendollar: string = '0';
  textTwentydollar: string = '0';
  textFiftyDollar: string = '0';
  textHundredDollar:string = '0';

  TotalValue: number = 0;

  //MainSafe
  MainSafePennies: number =0;
  MainSafeNickels: number =0;
  MainSafeDimes: number =0;
  MainSafeQuarters: number =0;
  MainSafeOnedollar: number =0;
  MainSafeFivedollar: number =0;
  MainSafeTendollar: number =0;
  MainSafeTwentydollar: number=0 ;
  MainSafeFiftyDollar: number =0;
  MainSafeHundredDollar: number=0;

  textMainSafePennies: string = '0';
  textMainSafeNickels: string = '0';
  textMainSafeDimes: string = '0';
  textMainSafeQuarters: string = '0';
  textMainSafeOnedollar: string = '0';
  textMainSafeFivedollar:string = '0';
  textMainSafeTendollar: string = '0';
  textMainSafeTwentydollar: string = '0';
  textMainSafeFiftyDollar: string = '0';
  textMainSafeHundredDollar:string = '0';

  MainSafeTotalValue: number = 0;

  ShiftmanagerText: string = 'Add Denominations';
  MainsafeText: string = 'Add Denominations';

  TotalChangeDollarvalue: number = 0;

  OrderStatus:string="Ordered";
  changeRequest:ChangeRequest;

  isHideText:boolean=false;

  isHideDrop:boolean=false;

  PenniesFormListvalues = [
    { value: "0", name: 'Select Pennies' }, { value: "1", name: '$1' }, { value: "2", name: '$2' }, { value: "3", name: '$3' }, { value: "4", name: '$4' }, { value: "5", name: '$5' }, { value: "6", name: '$6' }, { value: "7", name: '$7' }, { value: "8", name: '$8' }, { value: "9", name: '$9' }, { value: "10", name: '$10' }, { value: "11", name: '$11' }, { value: "12", name: '$12' }, { value: "13", name: '$13' }, { value: "14", name: '$14' }, { value: "15", name: '$15' }, { value: "16", name: '$16' }, { value: "17", name: '$17' }, { value: "18", name: '$18' }, { value: "19", name: '$19' }, { value: "20", name: '$20' }, { value: "21", name: '$21' }, { value: "22", name: '$22' }, { value: "23", name: '$23' }, { value: "24", name: '$24' }, { value: "25", name: '$25' }
  ];
  NickelsFormListvalues = [
    { value: "0", name: 'Select Nickels' }, { value: "2", name: '$2' }, { value: "4", name: '$4' },{ value: "6", name: '$6' }, { value: "8", name: '$8' }, { value: "10", name: '$10' }, { value: "12", name: '$12' }, { value: "14", name: '$14' }, { value: "16", name: '$16' }, { value: "18", name: '$18' }, { value: "20", name: '$20' }, { value: "22", name: '$22' }, { value: "24", name: '$24' }, { value: "26", name: '$26' }, { value: "28", name: '$28' }, { value: "30", name: '$30' }, { value: "32", name: '$32' }, { value: "34", name: '$34' }, { value: "36", name: '$36' }, { value: "38", name: '$38' }, { value: "40", name: '$40' }, { value: "42", name: '$42' }, { value: "44", name: '$44' }, { value: "46", name: '$46' }, { value: "48", name: '$48' }, { value: "50", name: '$50' }, { value: "52", name: '$52' }, { value: "54", name: '$54' }, { value: "56", name: '$56' }, { value: "58", name: '$58' }, { value: "60", name: '$60' }, { value: "62", name: '$62' }, { value: "64", name: '$64' }, { value: "66", name: '$66' }, { value: "68", name: '$68' }, { value: "70", name: '$70' }, { value: "72", name: '$72' }, { value: "74", name: '$74' }, { value: "78", name: '$78' }, { value: "80", name: '$80' }, { value: "82", name: '$82' }, { value: "84", name: '$84' }, { value: "86", name: '$86' }, { value: "88", name: '$88' }, { value: "90", name: '$90' }, { value: "92", name: '$92' }, { value: "94", name: '$94' }, { value: "96", name: '$96' }, { value: "98", name: '$98' }, { value: "100", name: '$100' }
  ];
  DimesFromListValues = [
    { value: "0", name: 'Select Dimes' }, { value: "5", name: '$5' }, { value: "10", name: '$10' }, { value: "15", name: '$15' }, { value: "20", name: '$20' }, { value: "25", name: '$25' }, { value: "30", name: '$30' }, { value: "35", name: '$35' }, { value: "40", name: '$40' }, { value: "45", name: '$45' }, { value: "50", name: '$50' }, { value: "55", name: '$55' }, { value: "60", name: '$60' }, { value: "65", name: '$65' }, { value: "70", name: '$70' }, { value: "75", name: '$75' }, { value: "80", name: '$80' }, { value: "85", name: '$85' }, { value: "90", name: '$90' }, { value: "95", name: '$95' }, { value: "100", name: '$100' }, { value: "105", name: '$105' }, { value: "110", name: '$110' }, { value: "115", name: '$115' }, { value: "120", name: '$120' }, { value: "125", name: '$125' }, { value: "130", name: '$130' }, { value: "135", name: '$135' }, { value: "140", name: '$140' }, { value: "145", name: '$145' }, { value: "150", name: '$150' }, { value: "155", name: '$155' }, { value: "160", name: '$160' }, { value: "165", name: '$165' }, { value: "170", name: '$170' }, { value: "175", name: '$175' }, { value: "180", name: '$180' }, { value: "185", name: '$185' }, { value: "190", name: '$190' }, { value: "195", name: '$195' }, { value: "200", name: '$200' }, { value: "205", name: '$205' }, { value: "210", name: '$210' }, { value: "215", name: '$215' }, { value: "220", name: '$220' }, { value: "225", name: '$225' }, { value: "230", name: '$230' }, { value: "235", name: '$235' }, { value: "240", name: '$240' }, { value: "245", name: '$245' }, { value: "250", name: '$250' }

  ]
  QuartersFormListValues = [
    { value: "0", name: 'Select Quarters' }, { value: "10", name: '$10' }, { value: "20", name: '$20' }, { value: "30", name: '$30' }, { value: "40", name: '$40' }, { value: "50", name: '$50' }, { value: "60", name: '$60' }, { value: "70", name: '$70' }, { value: "80", name: '$80' }, { value: "90", name: '$90' }, { value: "100", name: '$100' }, { value: "110", name: '$110' }, { value: "120", name: '$120' }, { value: "130", name: '$130' }, { value: "140", name: '$140' }, { value: "150", name: '$150' }, { value: "160", name: '$160' }, { value: "170", name: '$170' }, { value: "180", name: '$180' }, { value: "190", name: '$190' }, { value: "200", name: '$200' }, { value: "210", name: '$210' }, { value: "220", name: '$220' }, { value: "230", name: '$230' }, { value: "240", name: '$240' }, { value: "250", name: '$250' }, { value: "260", name: '$260' }, { value: "270", name: '$270' }, { value: "280", name: '$280' }, { value: "290", name: '$290' }, { value: "300", name: '$300' }, { value: "310", name: '$310' }, { value: "320", name: '$320' }, { value: "330", name: '$330' }, { value: "340", name: '$340' }, { value: "350", name: '$350' }, { value: "360", name: '$360' }, { value: "370", name: '$370' }, { value: "380", name: '$380' }, { value: "390", name: '$390' }, { value: "400", name: '$400' }, { value: "410", name: '$410' }, { value: "420", name: '$420' }, { value: "430", name: '$430' }, { value: "440", name: '$440' }, { value: "450", name: '$450' }, { value: "460", name: '$460' }, { value: "470", name: '$470' }, { value: "480", name: '$480' }, { value: "490", name: '$490' }, { value: "500", name: '$500' }

  ]
  OneDollarFormListValues = [
    { value: "0", name: 'Select OneDollar' }, {value:'1',name:'$1'},{value:'2',name:'$2'},{value:'3',name:'$3'},{value:'4',name:'$4'},{value:'5',name:'$5'},{value:'6',name:'$6'},{value:'7',name:'$7'},{value:'8',name:'$8'},{value:'9',name:'$9'},{value:'10',name:'$10'},{value:'11',name:'$11'},{value:'12',name:'$12'},{value:'13',name:'$13'},{value:'14',name:'$14'},{value:'15',name:'$15'},{value:'16',name:'$16'},{value:'17',name:'$17'},{value:'18',name:'$18'},{value:'19',name:'$19'},{value:'20',name:'$20'},{value:'21',name:'$21'},{value:'22',name:'$22'},{value:'23',name:'$23'},{value:'24',name:'$24'},{value:'25',name:'$25'},{value:'26',name:'$26'},{value:'27',name:'$27'},{value:'28',name:'$28'},{value:'29',name:'$29'},{value:'30',name:'$30'},{value:'31',name:'$31'},{value:'32',name:'$32'},{value:'33',name:'$33'},{value:'34',name:'$34'},{value:'35',name:'$35'},{value:'36',name:'$36'},{value:'37',name:'$37'},{value:'38',name:'$38'},{value:'39',name:'$39'},{value:'40',name:'$40'},{value:'41',name:'$41'},{value:'42',name:'$42'},{value:'43',name:'$43'},{value:'44',name:'$44'},{value:'45',name:'$45'},{value:'46',name:'$46'},{value:'47',name:'$47'},{value:'48',name:'$48'},{value:'49',name:'$49'},{value:'50',name:'$50'},{value:'51',name:'$51'},{value:'52',name:'$52'},{value:'53',name:'$53'},{value:'54',name:'$54'},{value:'55',name:'$55'},{value:'56',name:'$56'},{value:'57',name:'$57'},{value:'58',name:'$58'},{value:'59',name:'$59'},{value:'60',name:'$60'},{value:'61',name:'$61'},{value:'62',name:'$62'},{value:'63',name:'$63'},{value:'64',name:'$64'},{value:'65',name:'$65'},{value:'66',name:'$66'},{value:'67',name:'$67'},{value:'68',name:'$68'},{value:'69',name:'$69'},{value:'70',name:'$70'},{value:'71',name:'$71'},{value:'72',name:'$72'},{value:'73',name:'$73'},{value:'74',name:'$74'},{value:'75',name:'$75'},{value:'76',name:'$76'},{value:'77',name:'$77'},{value:'78',name:'$78'},{value:'79',name:'$79'},{value:'80',name:'$80'},{value:'81',name:'$81'},{value:'82',name:'$82'},{value:'83',name:'$83'},{value:'84',name:'$84'},{value:'85',name:'$85'},{value:'86',name:'$86'},{value:'87',name:'$87'},{value:'88',name:'$88'},{value:'89',name:'$89'},{value:'90',name:'$90'},{value:'91',name:'$91'},{value:'92',name:'$92'},{value:'93',name:'$93'},{value:'94',name:'$94'},{value:'95',name:'$95'},{value:'96',name:'$96'},{value:'97',name:'$97'},{value:'98',name:'$98'},{value:'99',name:'$99'},{value:'100',name:'$100'},{value:'101',name:'$101'},{value:'102',name:'$102'},{value:'103',name:'$103'},{value:'104',name:'$104'},{value:'105',name:'$105'},{value:'106',name:'$106'},{value:'107',name:'$107'},{value:'108',name:'$108'},{value:'109',name:'$109'},{value:'110',name:'$110'},{value:'111',name:'$111'},{value:'112',name:'$112'},{value:'113',name:'$113'},{value:'114',name:'$114'},{value:'115',name:'$115'},{value:'116',name:'$116'},{value:'117',name:'$117'},{value:'118',name:'$118'},{value:'119',name:'$119'},{value:'120',name:'$120'},{value:'121',name:'$121'},{value:'122',name:'$122'},{value:'123',name:'$123'},{value:'124',name:'$124'},{value:'125',name:'$125'},{value:'126',name:'$126'},{value:'127',name:'$127'},{value:'128',name:'$128'},{value:'129',name:'$129'},{value:'130',name:'$130'},{value:'131',name:'$131'},{value:'132',name:'$132'},{value:'133',name:'$133'},{value:'134',name:'$134'},{value:'135',name:'$135'},{value:'136',name:'$136'},{value:'137',name:'$137'},{value:'138',name:'$138'},{value:'139',name:'$139'},{value:'140',name:'$140'},{value:'141',name:'$141'},{value:'142',name:'$142'},{value:'143',name:'$143'},{value:'144',name:'$144'},{value:'145',name:'$145'},{value:'146',name:'$146'},{value:'147',name:'$147'},{value:'148',name:'$148'},{value:'149',name:'$149'},{value:'150',name:'$150'},{value:'151',name:'$151'},{value:'152',name:'$152'},{value:'153',name:'$153'},{value:'154',name:'$154'},{value:'155',name:'$155'},{value:'156',name:'$156'},{value:'157',name:'$157'},{value:'158',name:'$158'},{value:'159',name:'$159'},{value:'160',name:'$160'},{value:'161',name:'$161'},{value:'162',name:'$162'},{value:'163',name:'$163'},{value:'164',name:'$164'},{value:'165',name:'$165'},{value:'166',name:'$166'},{value:'167',name:'$167'},{value:'168',name:'$168'},{value:'169',name:'$169'},{value:'170',name:'$170'},{value:'171',name:'$171'},{value:'172',name:'$172'},{value:'173',name:'$173'},{value:'174',name:'$174'},{value:'175',name:'$175'},{value:'176',name:'$176'},{value:'177',name:'$177'},{value:'178',name:'$178'},{value:'179',name:'$179'},{value:'180',name:'$180'},{value:'181',name:'$181'},{value:'182',name:'$182'},{value:'183',name:'$183'},{value:'184',name:'$184'},{value:'185',name:'$185'},{value:'186',name:'$186'},{value:'187',name:'$187'},{value:'188',name:'$188'},{value:'189',name:'$189'},{value:'190',name:'$190'},{value:'191',name:'$191'},{value:'192',name:'$192'},{value:'193',name:'$193'},{value:'194',name:'$194'},{value:'195',name:'$195'},{value:'196',name:'$196'},{value:'197',name:'$197'},{value:'198',name:'$198'},{value:'199',name:'$199'},{value:'200',name:'$200'},{value:'201',name:'$201'},{value:'202',name:'$202'},{value:'203',name:'$203'},{value:'204',name:'$204'},{value:'205',name:'$205'},{value:'206',name:'$206'},{value:'207',name:'$207'},{value:'208',name:'$208'},{value:'209',name:'$209'},{value:'210',name:'$210'},{value:'211',name:'$211'},{value:'212',name:'$212'},{value:'213',name:'$213'},{value:'214',name:'$214'},{value:'215',name:'$215'},{value:'216',name:'$216'},{value:'217',name:'$217'},{value:'218',name:'$218'},{value:'219',name:'$219'},{value:'220',name:'$220'},{value:'221',name:'$221'},{value:'222',name:'$222'},{value:'223',name:'$223'},{value:'224',name:'$224'},{value:'225',name:'$225'},{value:'226',name:'$226'},{value:'227',name:'$227'},{value:'228',name:'$228'},{value:'229',name:'$229'},{value:'230',name:'$230'},{value:'231',name:'$231'},{value:'232',name:'$232'},{value:'233',name:'$233'},{value:'234',name:'$234'},{value:'235',name:'$235'},{value:'236',name:'$236'},{value:'237',name:'$237'},{value:'238',name:'$238'},{value:'239',name:'$239'},{value:'240',name:'$240'},{value:'241',name:'$241'},{value:'242',name:'$242'},{value:'243',name:'$243'},{value:'244',name:'$244'},{value:'245',name:'$245'},{value:'246',name:'$246'},{value:'247',name:'$247'},{value:'248',name:'$248'},{value:'249',name:'$249'},{value:'250',name:'$250'}

  ]
  FiveDollarFormListValues = [
    { value: "0", name: 'Select FiveDollar' }, {value:'5',name:'$5'},{value:'10',name:'$10'},{value:'15',name:'$15'},{value:'20',name:'$20'},{value:'25',name:'$25'},{value:'30',name:'$30'},{value:'35',name:'$35'},{value:'40',name:'$40'},{value:'45',name:'$45'},{value:'50',name:'$50'},{value:'55',name:'$55'},{value:'60',name:'$60'},{value:'65',name:'$65'},{value:'70',name:'$70'},{value:'75',name:'$75'},{value:'80',name:'$80'},{value:'85',name:'$85'},{value:'90',name:'$90'},{value:'95',name:'$95'},{value:'100',name:'$100'},{value:'105',name:'$105'},{value:'110',name:'$110'},{value:'115',name:'$115'},{value:'120',name:'$120'},{value:'125',name:'$125'},{value:'130',name:'$130'},{value:'135',name:'$135'},{value:'140',name:'$140'},{value:'145',name:'$145'},{value:'150',name:'$150'},{value:'155',name:'$155'},{value:'160',name:'$160'},{value:'165',name:'$165'},{value:'170',name:'$170'},{value:'175',name:'$175'},{value:'180',name:'$180'},{value:'185',name:'$185'},{value:'190',name:'$190'},{value:'195',name:'$195'},{value:'200',name:'$200'},{value:'205',name:'$205'},{value:'210',name:'$210'},{value:'215',name:'$215'},{value:'220',name:'$220'},{value:'225',name:'$225'},{value:'230',name:'$230'},{value:'235',name:'$235'},{value:'240',name:'$240'},{value:'245',name:'$245'},{value:'250',name:'$250'}
  ]
  TenDollarFormListValues = [
    { value: "0", name: 'Select TenDollar' }, {value:'10',name:'$10'},{value:'20',name:'$20'},{value:'30',name:'$30'},{value:'40',name:'$40'},{value:'50',name:'$50'},{value:'60',name:'$60'},{value:'70',name:'$70'},{value:'80',name:'$80'},{value:'90',name:'$90'},{value:'100',name:'$100'},{value:'110',name:'$110'},{value:'120',name:'$120'},{value:'130',name:'$130'},{value:'140',name:'$140'},{value:'150',name:'$150'},{value:'160',name:'$160'},{value:'170',name:'$170'},{value:'180',name:'$180'},{value:'190',name:'$190'},{value:'200',name:'$200'},{value:'210',name:'$210'},{value:'220',name:'$220'},{value:'230',name:'$230'},{value:'240',name:'$240'},{value:'250',name:'$250'}
  ]
  TwentyDollarFormListValues = [
    { value: "0", name: 'Select TwentyDollar' }, {value:'20',name:'$20'},{value:'40',name:'$40'},{value:'60',name:'$60'},{value:'80',name:'$80'},{value:'100',name:'$100'},{value:'120',name:'$120'},{value:'140',name:'$140'},{value:'160',name:'$160'},{value:'180',name:'$180'},{value:'200',name:'$200'},{value:'220',name:'$220'},{value:'240',name:'$240'},{value:'260',name:'$260'},{value:'280',name:'$280'},{value:'300',name:'$300'}

  ]
  FiftyDollarFromListValues = [
    { value: "0", name: 'Select FiftyDollar' }, { value: "50", name: '$50' }, { value: "100", name: '$100' }, { value: "150", name: '$150' }, { value: "200", name: '$200' }, { value: "250", name: '$250' }, { value: "300", name: '$300' }, { value: "350", name: '$350' }, { value: "400", name: '$400' }, { value: "450", name: '$450' }, { value: "500", name: '$500' }
  ]
  HundredDollarFromListValues = [
    { value: "0", name: 'Select HundredDollar' }, { value: "100", name: '$100' }, { value: "200", name: '$200' }, { value: "300", name: '$300' }, { value: "400", name: '$400' }, { value: "500", name: '$500' }, { value: "600", name: '$600' }, { value: "700", name: '$700' }, { value: "800", name: '$800' }, { value: "900", name: '$900' }, { value: "1000", name: '$1000' }
  ]

  constructor(private router: Router, private el: ElementRef, private service: Service, private formBuilder: FormBuilder) { }
  gotoHomeNav() {
    this.router.navigateByUrl('/homenav');
  }

  displayStyle = "none";
  dynamicText:string;
  openPopup() {
      this.displayStyle = "block";
  }
  closePopup() {
      this.displayStyle = "none";
      //this.router.navigateByUrl('/homenav');
  }
  ngOnInit(): void {
    
    this.role = localStorage.getItem('Role');
    this.useriD=localStorage.getItem('userId');
    this.initFormGroup();
    console.dir(this.role);
    this.IschangeRequest=true;
    this.TruckChangeRequestStatus();
    this.ToggleChange('MAINSAFE');
    
  }
  
  TruckChangeRequestStatus(){
    this.service.GetChangerequestStatus(this.OrderStatus).subscribe(data=>{
      
      this.changeRequest = data;

      this.changesRequestTotal=(this.changeRequest.cents)+(this.changeRequest.nickels)+(this.changeRequest.quarters)+(this.changeRequest.dimes)+(this.changeRequest.den_1$)+(this.changeRequest.den_5$)+(this.changeRequest.den_10$)+(this.changeRequest.den_20$)+(this.changeRequest.den_50$)+(this.changeRequest.den_100$)

      if(data!=null){
        if(this.changeRequest.orderStatus=="Ordered"){
            this.IschangeRequest=false;
        }
      }
      
      
    });
  }
  initFormGroup() {
    this.SetShiftManagerStandBankFormValues = this.formBuilder.group({
      PenniesFormList: ["0"],
      NickelsFormList: ['0'],
      DimesFromList: ['0'],
      QuartersFormList: ['0'],
      OneDollarFormList: ['0'],
      FiveDollarFormList: ['0'],
      TenDollarFormList: ['0'],
      TwentyDollarFormList: ['0'],
      TotalDollarValue: [''],
      FiftyDollarFormList: ['0'],
      HundredDollarFormList: ['0'],

      MainSafePenniesFormList: ["0"],
      MainSafeNickelsFormList: ['0'],
      MainSafeDimesFromList: ['0'],
      MainSafeQuartersFormList: ['0'],
      MainSafeOneDollarFormList: ['0'],
      MainSafeFiveDollarFormList: ['0'],
      MainSafeTenDollarFormList: ['0'],
      MainSafeTwentyDollarFormList: ['0'],
      MainSafeTotalDollarValue: [''],
      MainSafeFiftyDollarFormList: ['0'],
      MainSafeHundredDollarFormList: ['0'],

    });
  }
  get f() { return this.SetShiftManagerStandBankFormValues.controls; }


  ToggleChange(type: string) {


    // let Pennieslist1 = this.PenniesFormListvalues;
    // let NickelsList1 = this.NickelsFormListvalues;
    // let Dimeslist1 = this.DimesFromListValues;
    // let QuatersList1 = this.QuartersFormListValues;
    // let Onelist1 = this.OneDollarFormListValues;
    // let FiveList1 = this.FiveDollarFormListValues;
    // let Tenlist1 = this.TenDollarFormListValues;
    // let TwentyList1 = this.TwentyDollarFormListValues;
    // let Fiftyist1 = this.FiftyDollarFromListValues;
    // let HundredList1 = this.HundredDollarFromListValues;

    this.isHideDrop=true;
    this.isHideText=false;

    if (type == "SHIFTMANAGER") {
      
      this.service.getStandBankDetailsOnType(type).subscribe(data => {
        this.standbankresponceData = data;

        if (data!= null) {
          this.ShiftmanagerText = "Edit";
          this.IsSafeSave=true;
          
          let selectedP = this.standbankresponceData.cents;
          let selectedN = this.standbankresponceData.nickels
          let selectedD = this.standbankresponceData.dimes
          let selectedQ = this.standbankresponceData.quarters
          let selectedO = this.standbankresponceData.den_1$
          let selectedF = this.standbankresponceData.den_5$
          let selectedT = this.standbankresponceData.den_10$
          let selectedTw =this.standbankresponceData.den_20$
          let selectedFi =this.standbankresponceData.den_50$
          let selectedHu =this.standbankresponceData.den_100$

          // Pennieslist1.forEach((x) => {
          //   if (parseInt(x.value) == (this.standbankresponceData.cents)) {
          //     selectedP = (x.value);
          //   }
          // });
          // NickelsList1.forEach((x) => {
          //   if (parseInt(x.value) == (this.standbankresponceData.nickels)) {
          //     selectedN = (x.value);
          //   }
          // });
          // Dimeslist1.forEach((x) => {
          //   if (parseInt(x.value) == (this.standbankresponceData.dimes)) {
          //     selectedD = (x.value);
          //   }
  
          // });

          // QuatersList1.forEach((x) => {
          //   if (parseInt(x.value) == (this.standbankresponceData.quarters)) {
          //     selectedQ = (x.value);
          //   }
            
          // });
          // Onelist1.forEach((x) => {
          //   if (parseInt(x.value) == (this.standbankresponceData.den_1$)) {
          //     selectedO = (x.value);
          //   }
  
          // });
          // FiveList1.forEach((x) => {
          //   if (parseInt(x.value) == (this.standbankresponceData.den_5$)) {
          //     selectedF = (x.value);
          //   }
  
          // });
          // Tenlist1.forEach((x) => {
          //   if (parseInt(x.value) == (this.standbankresponceData.den_10$)) {
          //     selectedT = (x.value);
          //   }
          // });
          // TwentyList1.forEach((x) => {
          //   if (parseInt(x.value) == (this.standbankresponceData.den_20$)) {
          //     selectedTw = (x.value);
          //   }
  
          // });
          // Fiftyist1.forEach((x) => {
          //   if (parseInt(x.value) == (this.standbankresponceData.den_50$)) {
          //     selectedFi = (x.value);
          //   }
  
          // });
          // HundredList1.forEach((x) => {
          //   if (parseInt(x.value) == (this.standbankresponceData.den_100$)) {
          //     selectedHu = (x.value);
          //   }
            
          // });
          this.TotalValue = (selectedP) + (selectedN) + (selectedD) + (selectedQ) + (selectedO) + (selectedF) + (selectedT) + (selectedTw) + this.standbankresponceData.den_100$ + this.standbankresponceData.den_50$;
          this.ShiftManagerMinimulBal = this.TotalValue;
        
          this.MainSafeMinimulBal = this.MainSafeTotalValue;
  
          this.Pennies = selectedP;
          this.Nickels = selectedN;
          this.Dimes = selectedD;
          this.Quarters = selectedQ;
          this.Onedollar = selectedO;
          this.Fivedollar = selectedF;
          this.Tendollar = selectedT;
          this.Twentydollar = selectedTw
          this.FiftyDollar = selectedFi,
          this.HundredDollar = selectedHu
          

          this.textPennies= '$'+selectedP;
          this.textNickels = '$'+selectedN;
          this.textDimes = '$'+selectedD;
          this.textQuarters = '$'+selectedQ;
          this.textOnedollar= '$'+selectedO;
          this.textFivedollar= '$'+selectedF;
          this.textTendollar = '$'+selectedT;
          this.textTwentydollar= '$'+selectedTw;
          this.textFiftyDollar = '$'+selectedFi;
          this.textHundredDollar= '$'+selectedHu;

          // this.SetShiftManagerStandBankFormValues.patchValue({
          //   PenniesFormList: selectedP,
          //   NickelsFormList: selectedN,
          //   DimesFromList: selectedD,
          //   QuartersFormList: selectedQ,
          //   OneDollarFormList: selectedO,
          //   FiveDollarFormList: selectedF,
          //   TenDollarFormList: selectedT,
          //   TwentyDollarFormList: selectedTw,
          //   FiftyDollarFormList: selectedFi,
          //   HundredDollarFormList: selectedHu,
  
          // })
        }else{
          this.isHideDrop=false;
          this.isHideText=true;
        }

      });

    }
    else if (type == "MAINSAFE") {
      
      this.service.getStandBankDetailsOnType(type).subscribe(data => {
        this.standbankresponceData = data;
        
        if (data!=null) {

          this.MainsafeText = "Edit";
          this.IsMainSave=true;

          let MainSafeselectedP = this.standbankresponceData.cents;
          let MainSafeselectedN = this.standbankresponceData.nickels
          let MainSafeselectedD = this.standbankresponceData.dimes
          let MainSafeselectedQ = this.standbankresponceData.quarters
          let MainSafeselectedO = this.standbankresponceData.den_1$
          let MainSafeselectedF = this.standbankresponceData.den_5$
          let MainSafeselectedT = this.standbankresponceData.den_10$
          let MainSafeselectedTw =this.standbankresponceData.den_20$;
          let MainSafeselectedFi =this.standbankresponceData.den_50$;
          let MainSafeselectedHu =this.standbankresponceData.den_100$;

          // Pennieslist1.forEach((x) => {
          //   if (parseInt(x.value) == (this.standbankresponceData.cents)) {
          //     MainSafeselectedP = (x.value);
          //   }
          // });
          // NickelsList1.forEach((x) => {
          //     if (parseInt(x.value) == (this.standbankresponceData.nickels)) {
          //       MainSafeselectedN = (x.value);
          //     }
          // });
          // Dimeslist1.forEach((x) => {
          //     if (parseInt(x.value) == (this.standbankresponceData.dimes)) {
          //       MainSafeselectedD = (x.value);
          //     }
          // });
          // QuatersList1.forEach((x) => {
          //     if (parseInt(x.value) == (this.standbankresponceData.quarters)) {
          //       MainSafeselectedQ = (x.value);
          //     }
          
          // });
          // Onelist1.forEach((x) => {
          //     if (parseInt(x.value) == (this.standbankresponceData.den_1$)) {
          //       MainSafeselectedO = (x.value);
          //     }
          // });
          // FiveList1.forEach((x) => {
          //     if (parseInt(x.value) == (this.standbankresponceData.den_5$)) {
          //       MainSafeselectedF = (x.value);
          //     }
          // });
          // Tenlist1.forEach((x) => {
          //     if (parseInt(x.value) == (this.standbankresponceData.den_10$)) {
          //       MainSafeselectedT = (x.value);
          //     }
          // });
          // TwentyList1.forEach((x) => {
          //     if (parseInt(x.value) == (this.standbankresponceData.den_20$)) {
          //       MainSafeselectedTw = (x.value);
          //     }
          // });
          // Fiftyist1.forEach((x) => {
          //     if (parseInt(x.value) == (this.standbankresponceData.den_50$)) {
          //       MainSafeselectedFi = (x.value);
          //     }
          // });
          // HundredList1.forEach((x) => {
          //     if (parseInt(x.value) == (this.standbankresponceData.den_100$)) {
          //       MainSafeselectedHu = (x.value);
          //     }
          // });

        
          this.MainSafeTotalValue = (MainSafeselectedP) + (MainSafeselectedN) + (MainSafeselectedD) + (MainSafeselectedQ) + (MainSafeselectedO) + (MainSafeselectedF) + (MainSafeselectedT) + (MainSafeselectedTw) + this.standbankresponceData.den_100$ + this.standbankresponceData.den_50$;
          this.ShiftManagerMinimulBal = this.TotalValue;
        
          this.MainSafeMinimulBal = this.MainSafeTotalValue;
  
  
          this.MainSafePennies = (MainSafeselectedP);
          this.MainSafeNickels = MainSafeselectedN;
          this.MainSafeDimes = MainSafeselectedD;
          this.MainSafeQuarters = MainSafeselectedQ;
          this.MainSafeOnedollar = MainSafeselectedO;
          this.MainSafeFivedollar = MainSafeselectedF;
          this.MainSafeTendollar = MainSafeselectedT;
          this.MainSafeTwentydollar = MainSafeselectedTw
          this.MainSafeFiftyDollar = MainSafeselectedFi,
          this.MainSafeHundredDollar = MainSafeselectedHu
  
          this.textMainSafePennies = '$'+MainSafeselectedP;
          this.textMainSafeNickels= '$'+MainSafeselectedN;
          this.textMainSafeDimes= '$'+MainSafeselectedD;
          this.textMainSafeQuarters = '$'+MainSafeselectedQ;
          this.textMainSafeOnedollar = '$'+MainSafeselectedO;
          this.textMainSafeFivedollar = '$'+MainSafeselectedF;
          this.textMainSafeTendollar = '$'+MainSafeselectedT;
          this.textMainSafeTwentydollar= '$'+MainSafeselectedTw;
          this.textMainSafeFiftyDollar= '$'+MainSafeselectedFi;
          this.textMainSafeHundredDollar = '$'+MainSafeselectedHu;

          // this.SetShiftManagerStandBankFormValues.patchValue({
  
          //   MainSafePenniesFormList: MainSafeselectedP,
          //   MainSafeNickelsFormList: MainSafeselectedN,
          //   MainSafeDimesFromList: MainSafeselectedD,
          //   MainSafeQuartersFormList: MainSafeselectedQ,
          //   MainSafeOneDollarFormList: MainSafeselectedO,
          //   MainSafeFiveDollarFormList: MainSafeselectedF,
          //   MainSafeTenDollarFormList: MainSafeselectedT,
          //   MainSafeTwentyDollarFormList: MainSafeselectedTw,
          //   MainSafeFiftyDollarFormList: MainSafeselectedFi,
          //   MainSafeHundredDollarFormList: MainSafeselectedHu
  
          // })
        }else{
          this.isHideDrop=false;
          this.isHideText=true;
        }
        
      });
    }
    
  }

  findAccess(role: string): boolean {
    console.dir(role === localStorage.getItem('Role'));
    return role === localStorage.getItem('Role');
  }
  
  standBankDivEnables(type: string) {
    let myTag1 = this.el.nativeElement.querySelector("div");
    var shift_elements = document.getElementsByClassName('shift_managerDiv');
    var main_elements = document.getElementsByClassName('main_safeDiv');
    if (type == "SHIFTMANAGER") {
      
      this.ShiftmanagerText = "Save";

      if (shift_elements.length > 0) {
        shift_elements[0].classList.remove('shift_managerDiv');
      }

    }
    else if (type == "MAINSAFE") {

      this.MainsafeText = "Save";

      if (main_elements.length > 0) {
        main_elements[0].classList.remove('main_safeDiv');
      }
    }

    console.log(type);

    type = "";
  }

  //Enable Screen start here..
  enableStandbank(type: string) {
    if (type == "SHIFTMANAGER") {
      if (this.ShiftmanagerText == "Save") {
        this.ChangeRequest(type);
      }
      else {
        this.standBankDivEnables(type);
      }
    }
    else if (type == "MAINSAFE") {
      if (this.MainsafeText == "Save") {
        this.ChangeRequest(type);
      }
      else {
        this.standBankDivEnables(type);
      }
    }

  }
  //End here..



  //Add Denominations
  selectChangeHandler(item: any, type: string, type1: string) {
    
    switch (type) {
      case "Pennies": {
        this.Pennies = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "Nickels": {
        this.Nickels = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "Dimes": {
        this.Dimes = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "Quarters": {
        this.Quarters = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "Onedollar": {
        this.Onedollar = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "Fivedollar": {
        this.Fivedollar = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "Tendollar": {
        this.Tendollar = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "Twentydollar": {
        this.Twentydollar = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }

      case "Fiftydollar": {
        this.FiftyDollar = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "Hundreddollar": {
        this.HundredDollar = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }


      case "MainSafePennies": {
        this.MainSafePennies = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "MainSafeNickels": {
        this.MainSafeNickels = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "MainSafeDimes": {
        this.MainSafeDimes = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "MainSafeQuarters": {
        this.MainSafeQuarters = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "MainSafeOnedollar": {
        this.MainSafeOnedollar = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "MainSafeFivedollar": {
        this.MainSafeFivedollar = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "MainSafeTendollar": {
        this.MainSafeTendollar = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "MainSafeTwentydollar": {
        this.MainSafeTwentydollar = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }

      case "MainSafeFiftydollar": {
        this.MainSafeFiftyDollar = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
      case "MainSafeHundreddollar": {
        this.MainSafeHundredDollar = parseInt(item.target.value.split(":")[1].trim());
        console.log(item.target.value.split(":")[1].trim());
        break;
      }
    }




    this.MainSafeTotalValue = (this.MainSafePennies) + (this.MainSafeNickels) +(this.MainSafeDimes) + (this.MainSafeQuarters) + (this.MainSafeOnedollar) + (this.MainSafeFivedollar) + (this.MainSafeTendollar) + (this.MainSafeTwentydollar) + (this.MainSafeFiftyDollar) + (this.MainSafeHundredDollar)

    this.TotalValue = (this.Pennies) + (this.Nickels) + (this.Dimes) + (this.Quarters) + (this.Onedollar) + (this.Fivedollar) + (this.Tendollar) + (this.Twentydollar) + (this.FiftyDollar) + (this.HundredDollar);
    if (type1 == "SHIFTMANAGER") {
      if (this.ShiftManagerMinimulBal != 0) {
        if ((this.ShiftManagerMinimulBal) < (this.TotalValue)) {
          this.dynamicText="ShiftManagerMinimulBal Minimum balance is " + this.ShiftManagerMinimulBal + " only"
          this.openPopup();
        }
      }
    }
    if (type1 == "MAINSAFE") {
      if (this.MainSafeMinimulBal != 0) {
        if ((this.MainSafeMinimulBal) < (this.MainSafeTotalValue)) {
          
          this.dynamicText="MainSafeMinimulBal Minimum balance is " + this.MainSafeMinimulBal + " only"
          this.openPopup();
        }
      }
    }

    if ((this.MinimulBalance) < (this.MainSafeTotalValue + this.TotalValue)) {
      this.dynamicText="Minimum balance is " + this.MinimulBalance + " only"
      this.openPopup();
    }
    console.log('Pennies:' + this.Pennies, 'Nickels:' + this.Nickels, 'Dimes:' + this.Dimes, 'Quarters:' + this.Quarters, 'Onedollar:' + this.Onedollar, 'Fivedollar:' + this.Fivedollar, 'Tendollar:' + this.Tendollar, 'Twentydollar:' + this.Twentydollar);
  }

  // //shiftverification
  // fiftyValue(event: any) {

  //   this.FiftyDollar = event.target.value != "" ? event.target.value : 0;

  //   this.TotalValue = parseInt(this.Pennies) + parseInt(this.Nickels) + parseInt(this.Dimes) + parseInt(this.Quarters) + parseInt(this.Onedollar) + parseInt(this.Fivedollar) + parseInt(this.Tendollar) + parseInt(this.Twentydollar) + parseInt(this.FiftyDollar) + parseInt(this.HundredDollar);

  // }
  // tValue(event: any) {

  //   this.HundredDollar = event.target.value != "" ? event.target.value : 0;
  //   this.TotalValue = parseInt(this.Pennies) + parseInt(this.Nickels) + parseInt(this.Dimes) + parseInt(this.Quarters) + parseInt(this.Onedollar) + parseInt(this.Fivedollar) + parseInt(this.Tendollar) + parseInt(this.Twentydollar) + parseInt(this.HundredDollar) + parseInt(this.FiftyDollar);

  // }
  // //mainsafe
  // mainfiftyValue(event: any) {

  //   this.MainSafeFiftyDollar = event.target.value != "" ? event.target.value : 0;

  //   this.MainSafeTotalValue = parseInt(this.MainSafePennies) + parseInt(this.MainSafeNickels) + parseInt(this.MainSafeDimes) + parseInt(this.MainSafeQuarters) + parseInt(this.MainSafeOnedollar) + parseInt(this.MainSafeFivedollar) + parseInt(this.MainSafeTendollar) + parseInt(this.MainSafeTwentydollar) + parseInt(this.MainSafeFiftyDollar) + parseInt(this.MainSafeHundredDollar);

  // }
  // maintValue(event: any) {

  //   this.MainSafeHundredDollar = event.target.value != "" ? event.target.value : 0;
  //   this.MainSafeTotalValue = parseInt(this.MainSafePennies) + parseInt(this.MainSafeNickels) + parseInt(this.MainSafeDimes) + parseInt(this.MainSafeQuarters) + parseInt(this.MainSafeOnedollar) + parseInt(this.MainSafeFivedollar) + parseInt(this.MainSafeTendollar) + parseInt(this.MainSafeTwentydollar) + parseInt(this.MainSafeFiftyDollar) + parseInt(this.MainSafeHundredDollar);

  // }

  // change request service start herre..
  serviceRequest(type: string) {
    this.service.standBankService(this.valetDenominationsDto).subscribe(data => {
      if(type=="SHIFTMANAGER"){
        this.IsSafeSave=true;
      }
      else if(type=="MAINSAFE"){
        this.IsMainSave=true;
      }
      
      this.dynamicText=type+" Denomination Added Successfully!";
      this.openPopup();
      //alert(type+" Added Successfully!");
    },
      (err: any) => {
        
        this.dynamicText="Denomination already created.";
        console.log(err);
        // check error status code is 500, if so, do some action
      }

    );
  }
  ChangeRequest(type: string) {
    
    if (type == "SHIFTMANAGER") {
      this.valetDenominationsDto.cents = (this.Pennies);
      this.valetDenominationsDto.den_1$ = (this.Onedollar);
      this.valetDenominationsDto.den_10$ = (this.Tendollar);
      this.valetDenominationsDto.den_100$ = (this.HundredDollar);
      this.valetDenominationsDto.den_20$ = (this.Twentydollar);
      this.valetDenominationsDto.den_5$ = (this.Fivedollar);
      this.valetDenominationsDto.den_50$ = (this.FiftyDollar);
      this.valetDenominationsDto.dimes = (this.Dimes);
      this.valetDenominationsDto.nickels = (this.Nickels);
      this.valetDenominationsDto.quarters = (this.Quarters);
      this.valetDenominationsDto.type = 'SHIFTMANAGER';
      this.valetDenominationsDto.updatedByUser =this.useriD;
      this.valetDenominationsDto.updatedTime=Date();
    }
    else if (type == "MAINSAFE") {
      this.valetDenominationsDto.cents = (this.MainSafePennies);
      this.valetDenominationsDto.den_1$ = (this.MainSafeOnedollar);
      this.valetDenominationsDto.den_10$ = (this.MainSafeTendollar);
      this.valetDenominationsDto.den_100$ = (this.MainSafeHundredDollar);
      this.valetDenominationsDto.den_20$ = (this.MainSafeTwentydollar);
      this.valetDenominationsDto.den_5$ = (this.MainSafeFivedollar);
      this.valetDenominationsDto.den_50$ = (this.MainSafeFiftyDollar);
      this.valetDenominationsDto.dimes = (this.MainSafeDimes);
      this.valetDenominationsDto.nickels = (this.MainSafeNickels);
      this.valetDenominationsDto.quarters = (this.MainSafeQuarters);
      this.valetDenominationsDto.type = 'MAINSAFE';
      this.valetDenominationsDto.updatedByUser =this.useriD;
      this.valetDenominationsDto.updatedTime=Date();
    }
    if ((this.MinimulBalance) < (this.TotalValue + this.MainSafeTotalValue)) {

      this.dynamicText="Minimum Value Exceded please choose less than or equals to 1000";
      this.openPopup();
    }

    else {
      if (type == "SHIFTMANAGER") {
        if (this.TotalValue != 0) {
          this.serviceRequest(type);
        }
        else {

          this.dynamicText="Please Select Atleast One Denomination";
          this.openPopup();
        }
      }
      if (type == "MAINSAFE") {
        if (this.MainSafeTotalValue != 0) {
          this.serviceRequest(type);
        }
        else {
          this.dynamicText="Please Select Atleast One Denomination";
          this.openPopup();
          
        }

      }



    }



  }

  //End Here..
}
