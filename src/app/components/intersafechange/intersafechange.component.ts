import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IpcService } from 'src/app/services/ipc.service';
import { Service } from 'src/app/services/Service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, FormsModule } from "@angular/forms";
import { ValetDenominationsDto, GetStandBankRequestValues,ChangeValetDenominations } from 'src/app/config/Standbank';

@Component({
  selector: 'app-intersafechange',
  templateUrl: './intersafechange.component.html',
  styleUrls: ['./intersafechange.component.scss']
})

export class IntersafechangeComponent implements OnInit {

  public  mainchangeValetDenominations :ChangeValetDenominations=new ChangeValetDenominations();
  public  shiftchangeValetDenominations :ChangeValetDenominations=new ChangeValetDenominations();
   SetChangeDenominationsFormValues: FormGroup;
   type: string;
   useriD:any;
   MinimulBalance: number = 1000;
   ShiftManagerMinimulBal: number = 0;
   MainSafeMinimulBal: number = 0;
   ShiftmanagerText: string = 'Edit Denominations';
   mainValletDenominationId:number;
   shiftValletDenominationId:number;

  mfselectPennies:number=0;
  mfselectNickels:number=0;
  mfselectDimes:number=0;
  mfselectQuarters:number=0;
  mfselectOnedollar:number=0;
  mfselectFivedollar:number=0;
  mfselectTendollar:number=0;
  mfselectTwentydollar:number=0;
  mfselectFiftydollar:number=0;
  mfselectHundredDollar:number=0;

  sfselectPennies:number=0;
  sfselectNickels:number=0;
  sfselectDimes:number=0;
  sfselectQuarters:number=0;
  sfselectOnedollar:number=0;
  sfselectFivedollar:number=0;
  sfselectTendollar:number=0;
  sfselectTwentydollar:number=0;
  sfselectFiftydollar:number=0;
  sfselectHundredDollar:number=0;

  // mfbalPennies:number=0;
  // mfbalNickels:number=0;
  // mfbalDimes:number=0;
  // mfbalQuarters:number=0;
  // mfbalOnedollar:number=0;
  // mfbalFivedollar:number=0;
  // mfbalTendollar:number=0;
  // mfbalTwentydollar:number=0;
  // mfbalFiftydollar:number=0;
  // mfbalHundredDollar:number=0;

  // sfbalPennies:number=0;
  // sfbalNickels:number=0;
  // sfbalDimes:number=0;
  // sfbalQuarters:number=0;
  // sfbalOnedollar:number=0;
  // sfbalFivedollar:number=0;
  // sfbalTendollar:number=0;
  // sfbalTwentydollar:number=0;
  // sfbalFiftydollar:number=0;
  // sfbalHundredDollar:number=0;


   mainsafechangenewPennies: number = 0;
   mainsafechangenewNickels: number = 0;
   mainsafechangenewDimes: number = 0;
   mainsafechangenewQuarters: number = 0;
   mainsafechangenewOnedollar: number = 0;
   mainsafechangenewFivedollar: number = 0;
   mainsafechangenewTendollar: number = 0;
   mainsafechangenewTwentydollar: number = 0;
   mainsafechangenewFiftyDollar: number = 0;
   mainsafechangenewHundredDollar: number = 0;
 
   shiftmanagerbaloldPennies: number = 0;
   shiftmanagerbaloldNickels: number = 0;
   shiftmanagerbaloldDimes: number = 0;
   shiftmanagerbaloldQuarters: number = 0;
   shiftmanagerbaloldOnedollar: number = 0;
   shiftmanagerbaloldFivedollar: number = 0;
   shiftmanagerbaloldTendollar: number = 0;
   shiftmanagerbaloldTwentydollar: number = 0;
   shiftmanagerbaloldFiftyDollar: number = 0;
   shiftmanagerbaloldHundredDollar: number = 0;
 
   MainsafeBalValletPennies: number = 0;
   MainsafeBalvalletNickels: number = 0;
   MainsafeBalvalletDimes: number = 0;
   MainsafeBalvalletQuarters: number = 0;
   MainsafeBalvalletOnedollar: number = 0;
   MainsafeBalvalletFivedollar: number = 0;
   MainsafeBalvalletTendollar: number = 0;
   MainsafeBalvalletTwentydollar: number = 0;
   MainsafeBalvalletFiftyDollar: number = 0;
   MainsafeBalvalletHundredDollar: number = 0;
 
 
   isDone:boolean=true;
   isSave:boolean=false;

   MainsafeChTotalValue: number = 0;
   MainsafebalTotalValue:number=0;
   ShiftmanagerbalTotalValue:number=0;
   ShiftmanagerchTotalValue:number=0;
 
   shiftManagerchangeDepositedValletPennies: number = 0;
   shiftManagerchangeDepositedvalletNickels: number = 0;
   shiftManagerchangeDepositedvalletDimes: number = 0;
   shiftManagerchangeDepositedvalletQuarters: number = 0;
   shiftManagerchangeDepositedvalletOnedollar: number = 0;
   shiftManagerchangeDepositedvalletFivedollar: number = 0;
   shiftManagerchangeDepositedvalletTendollar: number = 0;
   shiftManagerchangeDepositedvalletTwentydollar: number = 0;
   shiftManagerchangeDepositedvalletFiftyDollar: number = 0;
   shiftManagerchangeDepositedvalletHundredDollar: number = 0;
 
   standbankresponceData: GetStandBankRequestValues;
   standbankresponceData1: GetStandBankRequestValues;
 
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
 
   
   constructor( private service: Service,private router: Router, private el: ElementRef, private ipcService: IpcService, private formBuilder: FormBuilder) { }
   
  // gotoDoorsExe(){
  //  this.router.navigateByUrl('/doorsexe');
  //  this.ipcService.send("openshiftmanagerlocker");
  // }
  displayStyle = "none";
  dynamicText:string;
  openPopup() {
      this.displayStyle = "block";
  }
  closePopup() {
      this.displayStyle = "none";
      //this.router.navigateByUrl('/homenav');
  }
   openMainsafeLock(){
    // debugger
    this.service.openLock('01').subscribe(data =>{
      console.log(data);
    })
  }
  openShiftManagerLock(){
   // debugger
    this.service.openLock('02').subscribe(data =>{
      console.log(data);
    })
  }



   ngOnInit(): void {
     this.useriD=localStorage.getItem('userId');
     this.initFormGroup();
     this.Valletchangedoordenominations();
   }
   gotoHomeNav() {
     this.router.navigateByUrl('/homenav');
   }
 
 initFormGroup() {
     this.SetChangeDenominationsFormValues = this.formBuilder.group({
       MainsafebalPenniesFormValues: [''],
       MainsafebalNickelsFormValues: [''],
       MainsafebalDimesFromValues: [''],
       MainsafebalQuartersFormValues: [''],
       MainsafebalOneDollarFormValues: [''],
       MainsafebalFiveDollarFormValues: [''],
       MainsafebalTenDollarFormValues: [''],
       MainsafebalTwentyDollarFormValues: [''],
       MainsafebalHundredDollarFormValue: [''],
       MainsafebalFiftyDollarFormValue: [''],
       
       OldTotalDollarValue: [''],
 
       MainsafechPenniesFormValues:['0'],
       MainsafechNickelsFormValues: ['0'],
       MainsafechDimesFromValues: ['0'],
       MainsafechQuartersFormValues: ['0'],
       MainsafechOneDollarFormValues: ['0'],
       MainsafechFiveDollarFormValues: ['0'],
       MainsafechTenDollarFormValues: ['0'],
       MainsafechTwentyDollarFormValues: ['0'],
       MainsafechHundredDollarFormValue: ['0'],
       MainsafechFiftyDollarFormValue: ['0'],
 
       ShiftmanagerchPenniesFormValues:['0'],
       ShiftmanagerchNickelsFormValues: ['0'],
       ShiftmanagerchDimesFromValues: ['0'],
       ShiftmanagerchQuartersFormValues: ['0'],
       ShiftmanagerchOneDollarFormValues: ['0'],
       ShiftmanagerchFiveDollarFormValues: ['0'],
       ShiftmanagerchTenDollarFormValues: ['0'],
       ShiftmanagerchTwentyDollarFormValues: ['0'],
       ShiftmanagerchHundredDollarFormValue: ['0'],
       ShiftmanagerchFiftyDollarFormValue: ['0'],
 
       valletDepositPenniesFormValues:['0'],
       valletDepositNickelsFormValues: ['0'],
       valletDepositDimesFromValues: ['0'],
       valletDepositQuartersFormValues: ['0'],
       valletDepositOneDollarFormValues: ['0'],
       valletDepositFiveDollarFormValues: ['0'],
       valletDepositTenDollarFormValues: ['0'],
       valletDepositTwentyDollarFormValues: ['0'],
       valletDepositHundredDollarFormValue: ['0'],
       valletDepositFiftyDollarFormValue: ['0'],
     });
     
   }
 
   


   selectChangeHandler(item: any, type: string, type1: string) {
    
    switch (type) {
      case "MainSafeChPennies": {
        this.mainsafechangenewPennies = parseInt(item.target.value);
        let msfchPennies=this.MainsafeBalValletPennies;
        msfchPennies=(msfchPennies)-(this.mainsafechangenewPennies)
        if(msfchPennies<0){
         this.mainsafechangenewPennies=0;
         this.SetChangeDenominationsFormValues.patchValue({
           MainsafechPenniesFormValues:this.mfselectPennies
         });
         this.dynamicText="Pennies Change Request exceeds available Balance.";
         this.openPopup();
        }
        else{
         if(msfchPennies==0){
           if(this.mainsafechangenewPennies!=0 && this.shiftManagerchangeDepositedValletPennies!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               MainsafebalPenniesFormValues:"$"+this.MainsafeBalValletPennies
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               MainsafebalPenniesFormValues:"$"+msfchPennies
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             MainsafebalPenniesFormValues:"$"+msfchPennies
           });
         }
         let smfch=this.shiftmanagerbaloldPennies;
         if(this.shiftManagerchangeDepositedValletPennies!=0){
           smfch=(smfch)-(this.mainsafechangenewPennies);
         }
         else{
           smfch=(this.mainsafechangenewPennies)+(smfch);
         }
         if(smfch==0){
           if(this.mainsafechangenewPennies!=0 && this.shiftManagerchangeDepositedValletPennies!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositPenniesFormValues:"$"+this.shiftmanagerbaloldPennies
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositPenniesFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             valletDepositPenniesFormValues:"$"+smfch
           });
         }
         
        }
        if(this.MainsafeBalValletPennies>this.mainsafechangenewPennies){
         this.mfselectPennies= this.mainsafechangenewPennies;
        }
        console.log(item.target.value);
        break;
      }
      case "MainSafeChNickels": {
       this.mainsafechangenewNickels = parseInt(item.target.value);
       let msfchNickels=this.MainsafeBalvalletNickels;
       msfchNickels=(msfchNickels)-(this.mainsafechangenewNickels);
       if(msfchNickels<0){
         this.mainsafechangenewNickels=0;
         this.SetChangeDenominationsFormValues.patchValue({
           MainsafechNickelsFormValues:this.mfselectNickels
         });
        this.dynamicText="Nickels Change Request exceeds available Balance.";
        this.openPopup();
       }
       else{
      
         if(msfchNickels==0){
           if(this.mainsafechangenewNickels!=0 && this.shiftManagerchangeDepositedvalletNickels!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               MainsafebalNickelsFormValues:"$"+this.MainsafeBalvalletNickels
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               MainsafebalNickelsFormValues:"$"+msfchNickels
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             MainsafebalNickelsFormValues:"$"+msfchNickels
           });
         }
         let smfch=this.shiftmanagerbaloldNickels;
         if(this.shiftManagerchangeDepositedvalletNickels!=0){
           smfch=(smfch)-(this.mainsafechangenewNickels);
         }
         else{
           smfch=(this.mainsafechangenewNickels)+(smfch);
         }
         if(smfch==0){
           if(this.mainsafechangenewNickels!=0 && this.shiftManagerchangeDepositedvalletNickels!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositNickelsFormValues:"$"+this.shiftmanagerbaloldNickels
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositNickelsFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             valletDepositNickelsFormValues:"$"+smfch
           });
         }
         
       }
       if(this.MainsafeBalvalletNickels>this.mainsafechangenewNickels){
         this.mfselectNickels= this.mainsafechangenewNickels;
       }
      
        break;

      }
      case "MainSafeChDimes": {
       this.mainsafechangenewDimes = parseInt(item.target.value);
       let msfchDimes=this.MainsafeBalvalletDimes;
       msfchDimes=(msfchDimes)-(this.mainsafechangenewDimes);
       if(msfchDimes<0){
         this.mainsafechangenewDimes=0;
         this.SetChangeDenominationsFormValues.patchValue({
           MainsafechDimesFromValues:this.mfselectDimes
         });
        this.dynamicText="Dimes Change Request exceeds available Balance.";
        this.openPopup();
       }
       else{
        
         if(msfchDimes==0){
           if(this.mainsafechangenewDimes!=0 && this.shiftManagerchangeDepositedvalletDimes!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalDimesFromValues:"$"+this.MainsafeBalvalletDimes
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalDimesFromValues:"$"+msfchDimes
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalDimesFromValues:"$"+msfchDimes
           });
         }
         let smfch=this.shiftmanagerbaloldDimes;
         if(this.shiftManagerchangeDepositedvalletDimes!=0){
           smfch=(smfch)-(this.mainsafechangenewDimes);
         }
         else{
           smfch=(this.mainsafechangenewDimes)+(smfch);
         }
         if(smfch==0){
           if(this.mainsafechangenewDimes!=0 && this.shiftManagerchangeDepositedvalletDimes!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositDimesFromValues:"$"+this.shiftmanagerbaloldDimes
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositDimesFromValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            valletDepositDimesFromValues:"$"+smfch
           });
         }
       }
       if(this.MainsafeBalvalletDimes>this.mainsafechangenewDimes){
         this.mfselectDimes= this.mainsafechangenewDimes;
       }

      
        break;
      }
      case "MainSafeChQuarters": {
       this.mainsafechangenewQuarters = parseInt(item.target.value);
       let msfchQuarters=this.MainsafeBalvalletQuarters;
       msfchQuarters=(msfchQuarters)-(this.mainsafechangenewQuarters);
       if(msfchQuarters<0){
         this.mainsafechangenewQuarters=0;
         this.SetChangeDenominationsFormValues.patchValue({
           MainsafechQuartersFormValues:this.mfselectQuarters
         });
        this.dynamicText="Quarters Change Request exceeds available Balance.";
        this.openPopup();
       }
       else{
         
         if(msfchQuarters==0){
           if(this.mainsafechangenewQuarters!=0 && this.shiftManagerchangeDepositedvalletQuarters!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalQuartersFormValues:"$"+this.MainsafeBalvalletQuarters
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalQuartersFormValues:"$"+msfchQuarters
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalQuartersFormValues:"$"+msfchQuarters
           });
         }
         let smfch=this.shiftmanagerbaloldQuarters;
         if(this.shiftManagerchangeDepositedvalletQuarters!=0){
           smfch=(smfch)-(this.mainsafechangenewQuarters);
         }
         else{
           smfch=(this.mainsafechangenewQuarters)+(smfch);
         }
         if(smfch==0){
           if(this.mainsafechangenewQuarters!=0 && this.shiftManagerchangeDepositedvalletQuarters!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositQuartersFormValues:"$"+this.shiftmanagerbaloldQuarters
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositQuartersFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             valletDepositQuartersFormValues:"$"+smfch
           });
         }
       }
       if(this.MainsafeBalvalletQuarters>this.mainsafechangenewQuarters){
         this.mfselectQuarters= this.mainsafechangenewQuarters;
       }
      
        break;
      }
      case "MainSafeChOnedollar": {
       this.mainsafechangenewOnedollar = parseInt(item.target.value);
       let msfchOnedollar=this.MainsafeBalvalletOnedollar;
       msfchOnedollar=(msfchOnedollar)-(this.mainsafechangenewOnedollar);
       if(msfchOnedollar<0){
         this.mainsafechangenewOnedollar=0;
         this.SetChangeDenominationsFormValues.patchValue({
           MainsafechOneDollarFormValues:this.mfselectOnedollar
         });
        this.dynamicText="$1 Change Request exceeds available Balance.";
       }
       else{
        
         if(msfchOnedollar==0){
           if(this.mainsafechangenewOnedollar!=0 && this.shiftManagerchangeDepositedvalletOnedollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalOneDollarFormValues:"$"+this.MainsafeBalvalletOnedollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalOneDollarFormValues:"$"+msfchOnedollar
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalOneDollarFormValues:"$"+msfchOnedollar
           });
         }
         let smfch=this.shiftmanagerbaloldOnedollar;
         if(this.shiftManagerchangeDepositedvalletOnedollar!=0){
           smfch=(smfch)-(this.mainsafechangenewOnedollar);
         }
         else{
           smfch=(this.mainsafechangenewOnedollar)+(smfch);
         }
         if(smfch==0){
           if(this.mainsafechangenewOnedollar!=0 && this.shiftManagerchangeDepositedvalletOnedollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositOneDollarFormValues:"$"+this.shiftmanagerbaloldOnedollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositOneDollarFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             valletDepositOneDollarFormValues:"$"+smfch
           });
         }
       }
       if(this.MainsafeBalvalletOnedollar>this.mainsafechangenewOnedollar){
         this.mfselectOnedollar= this.mainsafechangenewOnedollar;
       }
       
        break;
      }
      case "MainSafeChFivedollar": {
       this.mainsafechangenewFivedollar = parseInt(item.target.value);
       let msfchFivedollar=this.MainsafeBalvalletFivedollar;
       msfchFivedollar=(msfchFivedollar)-(this.mainsafechangenewFivedollar);
       if(msfchFivedollar<0){
         this.mainsafechangenewFivedollar=0;
         this.SetChangeDenominationsFormValues.patchValue({
           MainsafechFiveDollarFormValues:this.mfselectFivedollar
         });
        this.dynamicText="$5 Change Request exceeds available Balance.";
       }
       else{
         if(msfchFivedollar==0){
           if(this.mainsafechangenewFivedollar!=0 && this.shiftManagerchangeDepositedvalletFivedollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalFiveDollarFormValues:"$"+this.MainsafeBalvalletFivedollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalFiveDollarFormValues:"$"+msfchFivedollar
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalFiveDollarFormValues:"$"+msfchFivedollar
           });
         }
         let smfch=this.shiftmanagerbaloldFivedollar;
         if(this.shiftManagerchangeDepositedvalletFivedollar!=0){
           smfch=(smfch)-(this.mainsafechangenewFivedollar);
         }
         else{
           smfch=(this.mainsafechangenewFivedollar)+(smfch);
         }
         if(smfch==0){
           if(this.mainsafechangenewFivedollar!=0 && this.shiftManagerchangeDepositedvalletFivedollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositFiveDollarFormValues:"$"+this.shiftmanagerbaloldFivedollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositFiveDollarFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             valletDepositFiveDollarFormValues:"$"+smfch
           });
         } 
        
       }
       if(this.MainsafeBalvalletFivedollar>this.mainsafechangenewFivedollar){
         this.mfselectFivedollar= this.mainsafechangenewFivedollar;
       }
      
        break;
      }
      case "MainSafeChTendollar": {
       this.mainsafechangenewTendollar = parseInt(item.target.value);
       let msfchTendollar=this.MainsafeBalvalletTendollar;
       msfchTendollar=(msfchTendollar)-(this.mainsafechangenewTendollar);
       if(msfchTendollar<0){
         this.mainsafechangenewTendollar=0;
         this.SetChangeDenominationsFormValues.patchValue({
           MainsafechTenDollarFormValues:this.mfselectTendollar
         });
        this.dynamicText="$10 Change Request exceeds available Balance."
        this.openPopup();
       }
       else{
         if(msfchTendollar==0){
           if(this.mainsafechangenewTendollar!=0 && this.shiftManagerchangeDepositedvalletTendollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalTenDollarFormValues:"$"+this.MainsafeBalvalletTendollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalTenDollarFormValues:"$"+msfchTendollar
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalTenDollarFormValues:"$"+msfchTendollar
           });
         }
         let smfch=this.shiftmanagerbaloldTendollar;
         if(this.shiftManagerchangeDepositedvalletTendollar!=0){
           smfch=(smfch)-(this.mainsafechangenewTendollar);
         }
         else{
           smfch=(this.mainsafechangenewTendollar)+(smfch);
         }
         if(smfch==0){
           if(this.mainsafechangenewTendollar!=0 && this.shiftManagerchangeDepositedvalletTendollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositTenDollarFormValues:"$"+this.shiftmanagerbaloldTendollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositTenDollarFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             valletDepositTenDollarFormValues:"$"+smfch
           });
         } 
       }
       
        break;
      }
      case "MainSafeChTwentydollar": {
       this.mainsafechangenewTwentydollar = parseInt(item.target.value);
       let msfchTwentydollar=this.MainsafeBalvalletTwentydollar;
       msfchTwentydollar=(msfchTwentydollar)-(this.mainsafechangenewTwentydollar);
       if(msfchTwentydollar<0){
         this.mainsafechangenewTwentydollar=0;
         this.SetChangeDenominationsFormValues.patchValue({
           MainsafechTwentyDollarFormValues:this.mfselectTwentydollar
         });
        this.dynamicText="$20 Change Request exceeds available Balance."
        this.openPopup();
       }
       else{
         if(msfchTwentydollar==0){
           if(this.mainsafechangenewTwentydollar!=0 && this.shiftManagerchangeDepositedvalletTwentydollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalTwentyDollarFormValues:"$"+this.MainsafeBalvalletTwentydollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalTwentyDollarFormValues:"$"+msfchTwentydollar
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalTwentyDollarFormValues:"$"+msfchTwentydollar
           });
         }
         let smfch=this.shiftmanagerbaloldTwentydollar;
         if(this.shiftManagerchangeDepositedvalletTwentydollar!=0){
           smfch=(smfch)-(this.mainsafechangenewTwentydollar);
         }
         else{
           smfch=(this.mainsafechangenewTwentydollar)+(smfch);
         }
         if(smfch==0){
           if(this.mainsafechangenewTwentydollar!=0 && this.shiftManagerchangeDepositedvalletTwentydollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositTwentyDollarFormValues:"$"+this.shiftmanagerbaloldTwentydollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositTwentyDollarFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             valletDepositTwentyDollarFormValues:"$"+smfch
           });
         } 
        
       }
       if(this.MainsafeBalvalletTwentydollar>this.mainsafechangenewTwentydollar){
         this.mfselectTwentydollar= this.mainsafechangenewTwentydollar;
       }
       
        break;
      }

      case "MainSafeChFiftydollar": {
       this.mainsafechangenewFiftyDollar = parseInt(item.target.value);
       let msfchFiftydollar=this.MainsafeBalvalletFiftyDollar;
       msfchFiftydollar=(msfchFiftydollar)-(this.mainsafechangenewFiftyDollar);
       if(msfchFiftydollar<0){
         this.mainsafechangenewFiftyDollar=0;
         this.SetChangeDenominationsFormValues.patchValue({
           MainsafechFiftyDollarFormValue:this.mfselectFiftydollar
         });
        this.dynamicText="$50 Change Request exceeds available Balance.";
        this.openPopup();
       }
       else{
         
         if(msfchFiftydollar==0){
           if(this.mainsafechangenewFiftyDollar!=0 && this.shiftManagerchangeDepositedvalletFiftyDollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalFiftyDollarFormValue:"$"+this.MainsafeBalvalletFiftyDollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalFiftyDollarFormValue:"$"+msfchFiftydollar
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalFiftyDollarFormValue:"$"+msfchFiftydollar
           });
         }
         let smfch=this.shiftmanagerbaloldFiftyDollar;
         if(this.shiftManagerchangeDepositedvalletFiftyDollar!=0){
           smfch=(smfch)-(this.mainsafechangenewFiftyDollar);
         }
         else{
           smfch=(this.mainsafechangenewFiftyDollar)+(smfch);
         }
         if(smfch==0){
           if(this.mainsafechangenewFiftyDollar!=0 && this.shiftManagerchangeDepositedvalletFiftyDollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositFiftyDollarFormValue:"$"+this.shiftmanagerbaloldFiftyDollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositFiftyDollarFormValue:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             valletDepositFiftyDollarFormValue:"$"+smfch
           });
         } 
        
       }
        break;
      }
      case "MainSafeChHundreddollar": {
       this.mainsafechangenewHundredDollar = parseInt(item.target.value);
       let msfchHundreddollar=this.MainsafeBalvalletHundredDollar;
       msfchHundreddollar=(msfchHundreddollar)-(this.mainsafechangenewHundredDollar);
       if(msfchHundreddollar<0){
         this.mainsafechangenewHundredDollar=0
         this.SetChangeDenominationsFormValues.patchValue({
           MainsafechHundredDollarFormValue:this.mfselectHundredDollar
         });
        this.dynamicText="$100 Change Request exceeds available Balance.";
        this.openPopup();
       }
       else{
         
         if(msfchHundreddollar==0){
           if(this.mainsafechangenewHundredDollar!=0 && this.shiftManagerchangeDepositedvalletHundredDollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalHundredDollarFormValue:"$"+this.MainsafeBalvalletHundredDollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalHundredDollarFormValue:"$"+msfchHundreddollar
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalHundredDollarFormValue:"$"+msfchHundreddollar
           });
         }
         let smfch=this.shiftmanagerbaloldHundredDollar;
         if(this.shiftManagerchangeDepositedvalletHundredDollar!=0){
           smfch=(smfch)-(this.mainsafechangenewHundredDollar);
         }
         else{
           smfch=(this.mainsafechangenewHundredDollar)+(smfch);
         }
         if(smfch==0){
           if(this.mainsafechangenewHundredDollar!=0 && this.shiftManagerchangeDepositedvalletHundredDollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositHundredDollarFormValue:"$"+this.shiftmanagerbaloldHundredDollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositHundredDollarFormValue:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            valletDepositHundredDollarFormValue:"$"+smfch
           });
         } 
       }
       if(this.MainsafeBalvalletHundredDollar>this.mainsafechangenewHundredDollar){
         this.mfselectHundredDollar= this.mainsafechangenewHundredDollar;
       }
       
        break;
      }

      case "ShifmanagerChDepositePennies": {
       this.shiftManagerchangeDepositedValletPennies = parseInt(item.target.value);
       let smfch=this.shiftmanagerbaloldPennies;
       smfch=(smfch)-(this.shiftManagerchangeDepositedValletPennies)
        if(smfch<0){
         this.shiftManagerchangeDepositedValletPennies=0;
         this.SetChangeDenominationsFormValues.patchValue({
           ShiftmanagerchPenniesFormValues:this.sfselectPennies
         });
         this.dynamicText="Pennies Change Request exceeds available Balance.";
         this.openPopup();
        }
        else{
         if(smfch==0){
           if(this.shiftManagerchangeDepositedValletPennies!=0 && this.mainsafechangenewPennies!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositPenniesFormValues:"$"+this.shiftmanagerbaloldPennies
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositPenniesFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            valletDepositPenniesFormValues:"$"+smfch
           });
         }
         let msfchPennies=this.MainsafeBalValletPennies;
         if(this.mainsafechangenewPennies!=0){
           msfchPennies=(msfchPennies)-(this.shiftManagerchangeDepositedValletPennies)
         }
         else {
          msfchPennies=(this.shiftManagerchangeDepositedValletPennies)+(msfchPennies)
         }
         if(msfchPennies==0){
           if(this.shiftManagerchangeDepositedValletPennies!=0 && this.mainsafechangenewPennies!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               MainsafebalPenniesFormValues:"$"+this.MainsafeBalValletPennies
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               MainsafebalPenniesFormValues:"$"+msfchPennies
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             MainsafebalPenniesFormValues:"$"+msfchPennies
           });
         }
         
        }
        if(this.shiftmanagerbaloldPennies>this.shiftManagerchangeDepositedValletPennies){
         this.sfselectPennies= this.shiftManagerchangeDepositedValletPennies;
       }
        break;
      }
      case "ShifmanagerChDepositeNickels": {

       this.shiftManagerchangeDepositedvalletNickels = parseInt(item.target.value);
       let smfch=this.shiftmanagerbaloldNickels;
       smfch=(smfch)-(this.shiftManagerchangeDepositedvalletNickels);
        if(smfch<0){
         this.shiftManagerchangeDepositedvalletNickels=0;
         this.SetChangeDenominationsFormValues.patchValue({
           ShiftmanagerchNickelsFormValues:this.sfselectNickels
         });
         this.dynamicText="Nickels Change Request exceeds available Balance.";
         this.openPopup();
        }
        else{
         
         if(smfch==0){
           if(this.shiftManagerchangeDepositedvalletNickels!=0 && this.mainsafechangenewNickels!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositNickelsFormValues:"$"+this.shiftmanagerbaloldNickels
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositNickelsFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            valletDepositNickelsFormValues:"$"+smfch
           });
         }
         let msfchNickels=this.MainsafeBalvalletNickels;
         if(this.mainsafechangenewNickels!=0){
           msfchNickels=(msfchNickels)-(this.shiftManagerchangeDepositedvalletNickels)
         }
         else {
          msfchNickels=(this.shiftManagerchangeDepositedvalletNickels)+(msfchNickels)
         }
         if(msfchNickels==0){
           if(this.shiftManagerchangeDepositedvalletNickels!=0 && this.mainsafechangenewNickels!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               MainsafebalNickelsFormValues:"$"+this.MainsafeBalvalletNickels
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               MainsafebalNickelsFormValues:"$"+msfchNickels
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             MainsafebalNickelsFormValues:"$"+msfchNickels
           });
         }
        }
        if(this.shiftmanagerbaloldNickels>this.shiftManagerchangeDepositedvalletNickels){
         this.sfselectNickels= this.shiftManagerchangeDepositedvalletNickels;
       }
       
        break;
      }
      case "ShifmanagerChDepositeDimes": {
       this.shiftManagerchangeDepositedvalletDimes = parseInt(item.target.value);
       let smfch=this.shiftmanagerbaloldDimes;
       smfch=(smfch)-(this.shiftManagerchangeDepositedvalletDimes);
        if(smfch<0){
         this.shiftManagerchangeDepositedvalletDimes=0;
         this.SetChangeDenominationsFormValues.patchValue({
           ShiftmanagerchDimesFromValues:this.sfselectDimes
         });
         this.dynamicText="Dimes Change Request exceeds available Balance.";
         this.openPopup();
        }
        else{
         if(smfch==0){
           if(this.shiftManagerchangeDepositedvalletDimes!=0 && this.mainsafechangenewDimes!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositDimesFromValues:"$"+this.shiftmanagerbaloldDimes
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositDimesFromValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            valletDepositDimesFromValues:"$"+smfch
           });
         }
         let msfchDimes=this.MainsafeBalvalletDimes;
         if(this.mainsafechangenewDimes!=0){
           msfchDimes=(msfchDimes)-(this.shiftManagerchangeDepositedvalletDimes)
         }
         else {
          msfchDimes=(this.shiftManagerchangeDepositedvalletDimes)+(msfchDimes)
         }
         if(msfchDimes==0){
           if(this.shiftManagerchangeDepositedvalletDimes!=0 && this.mainsafechangenewDimes!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalDimesFromValues:"$"+this.MainsafeBalvalletDimes
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalDimesFromValues:"$"+msfchDimes
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalDimesFromValues:"$"+msfchDimes
           });
         }
        }
        if(this.shiftmanagerbaloldDimes>this.shiftManagerchangeDepositedvalletDimes){
         this.sfselectDimes= this.shiftManagerchangeDepositedvalletDimes;
       }
      
        break;
      }
      case "ShifmanagerChDepositeQuarters": {
       this.shiftManagerchangeDepositedvalletQuarters = parseInt(item.target.value);
       let smfch=this.shiftmanagerbaloldQuarters;
       smfch=(smfch)-(this.shiftManagerchangeDepositedvalletQuarters);
        if(smfch<0){
         this.shiftManagerchangeDepositedvalletQuarters=0;
         this.SetChangeDenominationsFormValues.patchValue({
           ShiftmanagerchQuartersFormValues:this.sfselectQuarters
         });
         this.dynamicText="Quarters Change Request exceeds available Balance."
         this.openPopup();
        }
        else{
         if(smfch==0){
           if(this.shiftManagerchangeDepositedvalletQuarters!=0 && this.mainsafechangenewQuarters!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositQuartersFormValues:"$"+this.shiftmanagerbaloldQuarters
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               valletDepositQuartersFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             valletDepositQuartersFormValues:"$"+smfch
           });
         }
         let msfchQuarters=this.MainsafeBalvalletQuarters;
         if(this.mainsafechangenewQuarters!=0){
           msfchQuarters=(msfchQuarters)-(this.shiftManagerchangeDepositedvalletQuarters)
         }
         else {
          msfchQuarters=(this.shiftManagerchangeDepositedvalletQuarters)+(msfchQuarters)
         }
         if(msfchQuarters==0){
           if(this.shiftManagerchangeDepositedvalletQuarters!=0 && this.mainsafechangenewQuarters!=0){
             this.SetChangeDenominationsFormValues.patchValue({
               MainsafebalQuartersFormValues:"$"+this.MainsafeBalvalletQuarters
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
               MainsafebalQuartersFormValues:"$"+msfchQuarters
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
             MainsafebalQuartersFormValues:"$"+msfchQuarters
           });
         } 
        }
        if(this.shiftmanagerbaloldQuarters>this.shiftManagerchangeDepositedvalletQuarters){
         this.sfselectQuarters= this.shiftManagerchangeDepositedvalletQuarters;
       }
       
        break;
      }
      case "ShifmanagerChDepositeOnedollar": {
       this.shiftManagerchangeDepositedvalletOnedollar = parseInt(item.target.value);
       let smfch=this.shiftmanagerbaloldOnedollar;
       smfch=(smfch)-(this.shiftManagerchangeDepositedvalletOnedollar);
        if(smfch<0){
         this.shiftManagerchangeDepositedvalletOnedollar=0;
         this.SetChangeDenominationsFormValues.patchValue({
           ShiftmanagerchOneDollarFormValues:this.sfselectOnedollar
         });
         this.dynamicText="$1 Change Request exceeds available Balance.";
         this.openPopup();
        }
        else{
         if(smfch==0){
           if(this.shiftManagerchangeDepositedvalletOnedollar!=0 && this.mainsafechangenewOnedollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositOneDollarFormValues:"$"+this.shiftmanagerbaloldOnedollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositOneDollarFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            valletDepositOneDollarFormValues:"$"+smfch
           });
         }
         let msfchOnedollar=this.MainsafeBalvalletOnedollar;
         if(this.mainsafechangenewOnedollar!=0){
           msfchOnedollar=(msfchOnedollar)-(this.shiftManagerchangeDepositedvalletOnedollar)
         }
         else {
          msfchOnedollar=(this.shiftManagerchangeDepositedvalletOnedollar)+(msfchOnedollar)
         }
         if(msfchOnedollar==0){
           if(this.shiftManagerchangeDepositedvalletOnedollar!=0 && this.mainsafechangenewOnedollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalOneDollarFormValues:"$"+this.MainsafeBalvalletOnedollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalOneDollarFormValues:"$"+msfchOnedollar
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalOneDollarFormValues:"$"+msfchOnedollar
           });
         } 
        }
        if(this.shiftmanagerbaloldOnedollar>this.shiftManagerchangeDepositedvalletOnedollar){
         this.sfselectOnedollar= this.shiftManagerchangeDepositedvalletOnedollar;
       }
      
        break;
      }
      case "ShifmanagerChDepositeFivedollar": {
       this.shiftManagerchangeDepositedvalletFivedollar = parseInt(item.target.value);
       let smfch=this.shiftmanagerbaloldFivedollar;
       smfch=(smfch)-(this.shiftManagerchangeDepositedvalletFivedollar);
        if(smfch<0){
         this.shiftManagerchangeDepositedvalletFivedollar=0
         this.SetChangeDenominationsFormValues.patchValue({
           ShiftmanagerchFiveDollarFormValues:this.sfselectFivedollar
         });
         this.dynamicText="$5 Change Request exceeds available Balance.";
         this.openPopup();
        }
        else{
         if(smfch==0){
           if(this.shiftManagerchangeDepositedvalletFivedollar!=0 && this.mainsafechangenewFivedollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositFiveDollarFormValues:"$"+this.shiftmanagerbaloldFivedollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositFiveDollarFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            valletDepositFiveDollarFormValues:"$"+smfch
           });
         }
         let msfchFivedollar=this.MainsafeBalvalletFivedollar;
         if(this.mainsafechangenewFivedollar!=0){
           msfchFivedollar=(msfchFivedollar)-(this.shiftManagerchangeDepositedvalletFivedollar)
         }
         else {
          msfchFivedollar=(this.shiftManagerchangeDepositedvalletFivedollar)+(msfchFivedollar)
         }
         if(msfchFivedollar==0){
           if(this.shiftManagerchangeDepositedvalletFivedollar!=0 && this.mainsafechangenewFivedollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalFiveDollarFormValues:"$"+this.MainsafeBalvalletFivedollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalFiveDollarFormValues:"$"+msfchFivedollar
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalFiveDollarFormValues:"$"+msfchFivedollar
           });
         }
        }
        if(this.shiftmanagerbaloldFivedollar>this.shiftManagerchangeDepositedvalletFivedollar){
         this.sfselectFivedollar= this.shiftManagerchangeDepositedvalletFivedollar;
       }
       
       
        break;
      }
      case "ShifmanagerChDepositeTendollar": {
       this.shiftManagerchangeDepositedvalletTendollar = parseInt(item.target.value);
       let smfch=this.shiftmanagerbaloldTendollar;
       smfch=(smfch)-(this.shiftManagerchangeDepositedvalletTendollar);
        if(smfch<0){
         this.shiftManagerchangeDepositedvalletTendollar=0;
         this.SetChangeDenominationsFormValues.patchValue({
           ShiftmanagerchTenDollarFormValues:this.sfselectTendollar
         });
         this.dynamicText="$10 Change Request exceeds available Balance.";
         this.openPopup();
        }
        else{
         if(smfch==0){
           if(this.shiftManagerchangeDepositedvalletTendollar!=0 && this.mainsafechangenewTendollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositTenDollarFormValues:"$"+this.shiftmanagerbaloldTendollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositTenDollarFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            valletDepositTenDollarFormValues:"$"+smfch
           });
         }
         let msfchTendollar=this.MainsafeBalvalletTendollar;
         if(this.mainsafechangenewTendollar!=0){
           msfchTendollar=(msfchTendollar)-(this.shiftManagerchangeDepositedvalletTendollar)
         }
         else {
          msfchTendollar=(this.shiftManagerchangeDepositedvalletTendollar)+(msfchTendollar)
         }
         if(msfchTendollar==0){
           if(this.shiftManagerchangeDepositedvalletTendollar!=0 && this.mainsafechangenewTendollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalTenDollarFormValues:"$"+this.MainsafeBalvalletTendollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalTenDollarFormValues:"$"+msfchTendollar
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalTenDollarFormValues:"$"+msfchTendollar
           });
         }
        }
        if(this.shiftmanagerbaloldTendollar>this.shiftManagerchangeDepositedvalletTendollar){
         this.sfselectTendollar= this.shiftManagerchangeDepositedvalletTendollar;
       }
       
        break;
      }
      case "ShifmanagerChDepositeTwentydollar": {
       this.shiftManagerchangeDepositedvalletTwentydollar = parseInt(item.target.value);
       let smfch=this.shiftmanagerbaloldTwentydollar;
       smfch=(smfch)-(this.shiftManagerchangeDepositedvalletTwentydollar);
        if(smfch<0){
         this.shiftManagerchangeDepositedvalletTwentydollar=0;
         this.SetChangeDenominationsFormValues.patchValue({
           ShiftmanagerchTwentyDollarFormValues:this.sfselectTwentydollar
         });
         this.dynamicText="$20 Change Request exceeds available Balance.";
         this.openPopup();
        }
        else{
         if(smfch==0){
           if(this.shiftManagerchangeDepositedvalletTwentydollar!=0 && this.mainsafechangenewTwentydollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositTwentyDollarFormValues:"$"+this.shiftmanagerbaloldTwentydollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositTwentyDollarFormValues:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            valletDepositTwentyDollarFormValues:"$"+smfch
           });
         }
         let msfchTwentydollar=this.MainsafeBalvalletTwentydollar;
         if(this.mainsafechangenewTwentydollar!=0){
           msfchTwentydollar=(msfchTwentydollar)-(this.shiftManagerchangeDepositedvalletTwentydollar)
         }
         else {
          msfchTwentydollar=(this.shiftManagerchangeDepositedvalletTwentydollar)+(msfchTwentydollar)
         }
         if(msfchTwentydollar==0){
           if(this.shiftManagerchangeDepositedvalletTwentydollar!=0 && this.mainsafechangenewTwentydollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalTwentyDollarFormValues:"$"+this.MainsafeBalvalletTwentydollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalTwentyDollarFormValues:"$"+msfchTwentydollar
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalTwentyDollarFormValues:"$"+msfchTwentydollar
           });
         }
        }
        if(this.shiftmanagerbaloldTwentydollar>this.shiftManagerchangeDepositedvalletTwentydollar){
         this.sfselectTwentydollar= this.shiftManagerchangeDepositedvalletTwentydollar;
       }
       
        break;
      }
      case "ShifmanagerChDepositeFiftydollar": {
       this.shiftManagerchangeDepositedvalletFiftyDollar = parseInt(item.target.value);
       let smfch=this.shiftmanagerbaloldFiftyDollar;
       smfch=(smfch)-(this.shiftManagerchangeDepositedvalletFiftyDollar);
        if(smfch<0){
         this.shiftManagerchangeDepositedvalletFiftyDollar=0;
         this.SetChangeDenominationsFormValues.patchValue({
           ShiftmanagerchFiftyDollarFormValue:this.sfselectFiftydollar
         });
         this.dynamicText="$50 Change Request exceeds available Balance.";
         this.openPopup();
        }
        else{
         if(smfch==0){
           if(this.shiftManagerchangeDepositedvalletFiftyDollar!=0 && this.mainsafechangenewFiftyDollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositFiftyDollarFormValue:"$"+this.shiftmanagerbaloldFiftyDollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositFiftyDollarFormValue:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            valletDepositFiftyDollarFormValue:"$"+smfch
           });
         }
         let msfchFiftydollar=this.MainsafeBalvalletFiftyDollar;
         if(this.mainsafechangenewFiftyDollar!=0){
           msfchFiftydollar=(msfchFiftydollar)-(this.shiftManagerchangeDepositedvalletFiftyDollar)
         }
         else {
          msfchFiftydollar=(this.shiftManagerchangeDepositedvalletFiftyDollar)+(msfchFiftydollar)
         }
         if(msfchFiftydollar==0){
           if(this.shiftManagerchangeDepositedvalletFiftyDollar!=0 && this.mainsafechangenewFiftyDollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalFiftyDollarFormValue:"$"+this.MainsafeBalvalletFiftyDollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalFiftyDollarFormValue:"$"+msfchFiftydollar
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalFiftyDollarFormValue:"$"+msfchFiftydollar
           });
         }
        }
        if(this.shiftmanagerbaloldFiftyDollar>this.shiftManagerchangeDepositedvalletFiftyDollar){
         this.sfselectFiftydollar= this.shiftManagerchangeDepositedvalletFiftyDollar;
       }
       
        break;
      }
      case "ShifmanagerChDepositeHundreddollar": {
       this.shiftManagerchangeDepositedvalletHundredDollar = parseInt(item.target.value);
       let smfch=this.shiftmanagerbaloldHundredDollar;
       smfch=(smfch)-(this.shiftManagerchangeDepositedvalletHundredDollar);
        if(smfch<0){
         this.shiftManagerchangeDepositedvalletHundredDollar=0;
         this.SetChangeDenominationsFormValues.patchValue({
           ShiftmanagerchHundredDollarFormValue:this.sfselectHundredDollar
         });
         this.dynamicText="$100 Change Request exceeds available Balance.";
         this.openPopup();
        }
        else{
         if(smfch==0){
           if(this.shiftManagerchangeDepositedvalletHundredDollar!=0 && this.mainsafechangenewHundredDollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositHundredDollarFormValue:"$"+this.shiftmanagerbaloldHundredDollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              valletDepositHundredDollarFormValue:"$"+smfch
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            valletDepositHundredDollarFormValue:"$"+smfch
           });
         }
         let msfchHundredDollar=this.MainsafeBalvalletHundredDollar;
         if(this.mainsafechangenewHundredDollar!=0){
           msfchHundredDollar=(msfchHundredDollar)-(this.shiftManagerchangeDepositedvalletHundredDollar)
         }
         else {
          msfchHundredDollar=(this.shiftManagerchangeDepositedvalletHundredDollar)+(msfchHundredDollar)
         }
         if(msfchHundredDollar==0){
           if(this.shiftManagerchangeDepositedvalletHundredDollar!=0 && this.mainsafechangenewHundredDollar!=0){
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalHundredDollarFormValue:"$"+this.MainsafeBalvalletHundredDollar
             });
           }
           else{
             this.SetChangeDenominationsFormValues.patchValue({
              MainsafebalHundredDollarFormValue:"$"+msfchHundredDollar
             });
           }
         }
         else{
           this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalHundredDollarFormValue:"$"+msfchHundredDollar
           });
         }
        }
        if(this.shiftmanagerbaloldHundredDollar>this.shiftManagerchangeDepositedvalletHundredDollar){
         this.sfselectHundredDollar= this.shiftManagerchangeDepositedvalletHundredDollar;
       }
       // this.mfbalHundredDollar=parseInt(this.SetChangeDenominationsFormValues.get('MainsafechHundredDollarFormValue')?.value.split('$')[1])
       // this.sfbalHundredDollar=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositHundredDollarFormValue')?.value.split('$')[1])
        break;
      }
    }

    this.MainsafeChTotalValue = (this.mainsafechangenewPennies) + (this.mainsafechangenewNickels) + (this.mainsafechangenewDimes) + (this.mainsafechangenewQuarters) + (this.mainsafechangenewOnedollar) + (this.mainsafechangenewFivedollar) + (this.mainsafechangenewTendollar) + (this.mainsafechangenewTwentydollar) + (this.mainsafechangenewFiftyDollar) + (this.mainsafechangenewHundredDollar);

    //this.ShiftmanagerbalTotalValue =(this.MainsafeBalValletPennies) + (this.MainsafeBalvalletNickels) + (this.MainsafeBalvalletDimes) + (this.MainsafeBalvalletQuarters) +(this.MainsafeBalvalletOnedollar) + (this.MainsafeBalvalletFivedollar) + (this.MainsafeBalvalletTendollar) + (this.MainsafeBalvalletTwentydollar) + (this.MainsafeBalvalletFiftyDollar) + (this.MainsafeBalvalletHundredDollar);

    this.ShiftmanagerchTotalValue=this.shiftManagerchangeDepositedValletPennies+this.shiftManagerchangeDepositedvalletNickels+this.shiftManagerchangeDepositedvalletDimes+this.shiftManagerchangeDepositedvalletQuarters+this.shiftManagerchangeDepositedvalletOnedollar+this.shiftManagerchangeDepositedvalletFivedollar+this.shiftManagerchangeDepositedvalletTendollar+this.shiftManagerchangeDepositedvalletTwentydollar+this.shiftManagerchangeDepositedvalletFiftyDollar+this.shiftManagerchangeDepositedvalletHundredDollar;
    
    this.MainsafebalTotalValue=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalPenniesFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalNickelsFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalDimesFromValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalQuartersFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalOneDollarFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalFiveDollarFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalTenDollarFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalTwentyDollarFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalFiftyDollarFormValue')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalHundredDollarFormValue')?.value.split('$')[1]);

    this.ShiftmanagerbalTotalValue=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositPenniesFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('valletDepositNickelsFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('valletDepositDimesFromValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('valletDepositQuartersFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('valletDepositOneDollarFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('valletDepositFiveDollarFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('valletDepositTenDollarFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('valletDepositTwentyDollarFormValues')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('valletDepositFiftyDollarFormValue')?.value.split('$')[1])+parseInt(this.SetChangeDenominationsFormValues.get('valletDepositHundredDollarFormValue')?.value.split('$')[1]);;

    //this.MainsafebalTotalValue=0;
   //  if (type1 == "SHIFTMANAGER") {
   //    if (this.ShiftManagerMinimulBal != 0) {
   //      if ((this.ShiftManagerMinimulBal) < (this.MainsafeChTotalValue)) {
   //        alert("ShiftManagerMinimulBal Minimum balance is " + this.ShiftManagerMinimulBal + " only");
   //      }
   //    }
   //  }
    
  }
 
   Valletchangedoordenominations() {
       this.service.getStandBankDetailsOnType("SHIFTMANAGER").subscribe(data => {
         this.standbankresponceData = data;
         this.shiftValletDenominationId=this.standbankresponceData.id;
         
         if (data!= null) {
          this.shiftmanagerbaloldPennies=this.standbankresponceData.cents;
          this.shiftmanagerbaloldNickels=this.standbankresponceData.nickels;
          this.shiftmanagerbaloldDimes =this.standbankresponceData.dimes;
          this.shiftmanagerbaloldQuarters=this.standbankresponceData.quarters;
          this.shiftmanagerbaloldOnedollar=this.standbankresponceData.den_1$;
          this.shiftmanagerbaloldFivedollar=this.standbankresponceData.den_5$;
          this.shiftmanagerbaloldTendollar=this.standbankresponceData.den_10$;
          this.shiftmanagerbaloldTwentydollar=this.standbankresponceData.den_20$;
          this.shiftmanagerbaloldFiftyDollar=this.standbankresponceData.den_50$;
          this.shiftmanagerbaloldHundredDollar=this.standbankresponceData.den_100$;
          
            
          this.SetChangeDenominationsFormValues.patchValue({

            valletDepositPenniesFormValues:"$"+this.standbankresponceData.cents,
            valletDepositNickelsFormValues: "$"+this.standbankresponceData.nickels,
            valletDepositDimesFromValues: "$"+this.standbankresponceData.dimes,
            valletDepositQuartersFormValues: "$"+this.standbankresponceData.quarters,
            valletDepositOneDollarFormValues:"$"+this.standbankresponceData.den_1$,
            valletDepositFiveDollarFormValues: "$"+this.standbankresponceData.den_5$,
            valletDepositTenDollarFormValues: "$"+this.standbankresponceData.den_10$,
            valletDepositTwentyDollarFormValues:  "$"+this.standbankresponceData.den_20$,
            valletDepositHundredDollarFormValue: "$"+this.standbankresponceData.den_100$,
            valletDepositFiftyDollarFormValue: "$"+this.standbankresponceData.den_50$,
  
          })
          this.ShiftmanagerbalTotalValue = (this.standbankresponceData.cents) + (this.standbankresponceData.nickels) + (this.standbankresponceData.dimes) + (this.standbankresponceData.quarters) + (this.standbankresponceData.den_1$) + (this.standbankresponceData.den_5$) + (this.standbankresponceData.den_10$) + (this.standbankresponceData.den_20$) + (this.standbankresponceData.den_50$) + (this.standbankresponceData.den_100$);
          
        }
         
         
 
       });
 
       this.service.getStandBankDetailsOnType("MAINSAFE").subscribe(data1 => {
        this.standbankresponceData1 = data1;
        this.mainValletDenominationId=this.standbankresponceData1.id;
        if (data1!= null) {
         
          
          this.MainsafeBalValletPennies=this.standbankresponceData1.cents;
          this.MainsafeBalvalletNickels=this.standbankresponceData1.nickels;
          this.MainsafeBalvalletDimes =this.standbankresponceData1.dimes;
          this.MainsafeBalvalletQuarters=this.standbankresponceData1.quarters;
          this.MainsafeBalvalletOnedollar=this.standbankresponceData1.den_1$;
          this.MainsafeBalvalletFivedollar=this.standbankresponceData1.den_5$;
          this.MainsafeBalvalletTendollar=this.standbankresponceData1.den_10$;
          this.MainsafeBalvalletTwentydollar=this.standbankresponceData1.den_20$;
          this.MainsafeBalvalletFiftyDollar=this.standbankresponceData1.den_50$;
          this.MainsafeBalvalletHundredDollar=this.standbankresponceData1.den_100$;
          
          this.SetChangeDenominationsFormValues.patchValue({
            MainsafebalPenniesFormValues: "$"+this.standbankresponceData1.cents,
            MainsafebalNickelsFormValues: "$"+this.standbankresponceData1.nickels,
            MainsafebalDimesFromValues: "$"+this.standbankresponceData1.dimes,
            MainsafebalQuartersFormValues: "$"+this.standbankresponceData1.quarters,
            MainsafebalOneDollarFormValues: "$"+this.standbankresponceData1.den_1$,
            MainsafebalFiveDollarFormValues: "$"+this.standbankresponceData1.den_5$,
            MainsafebalTenDollarFormValues: "$"+this.standbankresponceData1.den_10$,
            MainsafebalTwentyDollarFormValues: "$"+this.standbankresponceData1.den_20$,
            MainsafebalHundredDollarFormValue: "$"+this.standbankresponceData1.den_100$,
            MainsafebalFiftyDollarFormValue: "$"+this.standbankresponceData1.den_50$,

          })

          this.MainsafebalTotalValue = (this.standbankresponceData1.cents) + (this.standbankresponceData1.nickels) + (this.standbankresponceData1.dimes) + (this.standbankresponceData1.quarters) + (this.standbankresponceData1.den_1$) + (this.standbankresponceData1.den_5$) + (this.standbankresponceData1.den_10$) + (this.standbankresponceData1.den_20$) + (this.standbankresponceData1.den_50$) + (this.standbankresponceData1.den_100$);
        }
        

      });
   }
 
   EditDenominations(){
    if(this.ShiftmanagerText=="Edit Denominations"){
      let myTag1 = this.el.nativeElement.querySelector("div");
      var shift_elements = document.getElementsByClassName('shiftmanagerchange');
      this.ShiftmanagerText = "Save";
      if (shift_elements.length > 0) {
        shift_elements[0].classList.remove('shiftmanagerchange');
      }
    }
    else if(this.ShiftmanagerText=="Save"){
      let myTag1 = this.el.nativeElement.querySelector("div");
      var newtotal = document.getElementsByClassName('redNewTotal');
      let myTag2 = this.el.nativeElement.querySelector("div");
      var depototal2 = document.getElementsByClassName('redDepositeTotal');
      if (this.ShiftmanagerchTotalValue != 0) {
        if(this.ShiftmanagerchTotalValue==this.MainsafeChTotalValue)
        {
          depototal2[0].classList.remove('redDepositeTotalAdd');
          newtotal[0].classList.remove('redNewTotalAdd');
          this.SaveMainsafeChangeDenominiesvalues();
          this.SaveShiftChangeDenominiesvalues();
        }
        else{
          if(this.MainsafeChTotalValue<this.ShiftmanagerchTotalValue)
          {
            if (newtotal.length > 0) {
              depototal2[0].classList.remove('redDepositeTotalAdd');
              newtotal[0].classList.add('redNewTotalAdd');
            }
          }
          else{
            if (depototal2.length > 0) {
              newtotal[0].classList.remove('redNewTotalAdd');
              depototal2[0].classList.add('redDepositeTotalAdd');
            }
          }

          this.dynamicText="Change request not balanced.. Please Balance";
          this.openPopup();
        }
        
      }
      else {
        this.dynamicText="Please Select Atleast One Denomination";
        this.openPopup();
      }
    }
    
  }
  SaveMainsafeChangeDenominiesvalues(){
     this.mainchangeValetDenominations.new_cents=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalPenniesFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.new_nickels=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalNickelsFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.new_dimes=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalDimesFromValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.new_quarters=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalQuartersFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.new_den_1$=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalOneDollarFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.new_den_5$=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalFiveDollarFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.new_den_10$=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalTenDollarFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.new_den_20$=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalTwentyDollarFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.new_den_50$=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalFiftyDollarFormValue')?.value.split('$')[1]);
     this.mainchangeValetDenominations.new_den_100$=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalHundredDollarFormValue')?.value.split('$')[1]);
 
     this.mainchangeValetDenominations.old_cents=this.MainsafeBalValletPennies;
     this.mainchangeValetDenominations.old_nickels=this.MainsafeBalvalletNickels;
     this.mainchangeValetDenominations.old_dimes=this.MainsafeBalvalletDimes;
     this.mainchangeValetDenominations.old_quarters=this.MainsafeBalvalletQuarters;
     this.mainchangeValetDenominations.old_den_1$=this.MainsafeBalvalletOnedollar;
     this.mainchangeValetDenominations.old_den_5$=this.MainsafeBalvalletFiftyDollar;
     this.mainchangeValetDenominations.old_den_10$=this.MainsafeBalvalletTendollar;
     this.mainchangeValetDenominations.old_den_20$=this.MainsafeBalvalletTwentydollar;
     this.mainchangeValetDenominations.old_den_50$=this.MainsafeBalvalletFiftyDollar;
     this.mainchangeValetDenominations.old_den_100$=this.MainsafeBalvalletHundredDollar;
 
     this.mainchangeValetDenominations.valetDenominationsDto.cents=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalPenniesFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.valetDenominationsDto.nickels=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalNickelsFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.valetDenominationsDto.dimes=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalDimesFromValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.valetDenominationsDto.quarters=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalQuartersFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.valetDenominationsDto.den_1$=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalOneDollarFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.valetDenominationsDto.den_5$=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalFiveDollarFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.valetDenominationsDto.den_10$=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalTenDollarFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.valetDenominationsDto.den_20$=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalTwentyDollarFormValues')?.value.split('$')[1]);
     this.mainchangeValetDenominations.valetDenominationsDto.den_50$=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalFiftyDollarFormValue')?.value.split('$')[1]);
     this.mainchangeValetDenominations.valetDenominationsDto.den_100$=parseInt(this.SetChangeDenominationsFormValues.get('MainsafebalHundredDollarFormValue')?.value.split('$')[1]);
     
     this.mainchangeValetDenominations.type="Main Safe Change";
     this.mainchangeValetDenominations.updatedByUser=this.useriD;
     this.mainchangeValetDenominations.valetDenominationsId=this.mainValletDenominationId;
     this.mainchangeValetDenominations.updatedTime=Date();
 
     this.service.MainSaveChangeDenominiesValues(this.mainchangeValetDenominations).subscribe(data=>{
       console.log("Data savevd successfully.");
     })
   }
   SaveShiftChangeDenominiesvalues(){
 
     this.shiftchangeValetDenominations.new_cents=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositPenniesFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.new_nickels=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositNickelsFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.new_dimes=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositDimesFromValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.new_quarters=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositQuartersFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.new_den_1$=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositOneDollarFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.new_den_5$=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositFiveDollarFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.new_den_10$=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositTenDollarFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.new_den_20$=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositTwentyDollarFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.new_den_50$=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositFiftyDollarFormValue')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.new_den_100$=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositHundredDollarFormValue')?.value.split('$')[1]);
 
     this.shiftchangeValetDenominations.old_cents=this.shiftmanagerbaloldPennies;
     this.shiftchangeValetDenominations.old_nickels=this.shiftmanagerbaloldNickels;
     this.shiftchangeValetDenominations.old_dimes=this.shiftmanagerbaloldDimes;
     this.shiftchangeValetDenominations.old_quarters=this.shiftmanagerbaloldQuarters;
     this.shiftchangeValetDenominations.old_den_1$=this.shiftmanagerbaloldOnedollar;
     this.shiftchangeValetDenominations.old_den_5$=this.shiftmanagerbaloldFiftyDollar;
     this.shiftchangeValetDenominations.old_den_10$=this.shiftmanagerbaloldTendollar;
     this.shiftchangeValetDenominations.old_den_20$=this.shiftmanagerbaloldTwentydollar;
     this.shiftchangeValetDenominations.old_den_50$=this.shiftmanagerbaloldFiftyDollar;
     this.shiftchangeValetDenominations.old_den_100$=this.shiftmanagerbaloldHundredDollar;
 
     this.shiftchangeValetDenominations.valetDenominationsDto.cents=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositPenniesFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.valetDenominationsDto.nickels=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositNickelsFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.valetDenominationsDto.dimes=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositDimesFromValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.valetDenominationsDto.quarters=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositQuartersFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.valetDenominationsDto.den_1$=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositOneDollarFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.valetDenominationsDto.den_5$=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositFiveDollarFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.valetDenominationsDto.den_10$=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositTenDollarFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.valetDenominationsDto.den_20$=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositTwentyDollarFormValues')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.valetDenominationsDto.den_50$=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositFiftyDollarFormValue')?.value.split('$')[1]);
     this.shiftchangeValetDenominations.valetDenominationsDto.den_100$=parseInt(this.SetChangeDenominationsFormValues.get('valletDepositHundredDollarFormValue')?.value.split('$')[1]);
     
     this.shiftchangeValetDenominations.type="ShiftManagerChange";
     this.shiftchangeValetDenominations.updatedByUser=this.useriD;
     this.shiftchangeValetDenominations.valetDenominationsId=this.shiftValletDenominationId;
     this.shiftchangeValetDenominations.updatedTime=Date();
 
     this.service.ShiftSaveChangeDenominiesValues(this.shiftchangeValetDenominations).subscribe(data=>{
       this.isSave=true;
       this.isDone=false;
       this.dynamicText="Changes Saved Successfully";
       this.openPopup();
     })
   }
 }
 
