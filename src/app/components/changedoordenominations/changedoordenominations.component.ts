import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IpcService } from 'src/app/services/ipc.service';
import { Service } from 'src/app/services/Service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, FormsModule } from "@angular/forms";
import { ValetDenominationsDto, GetStandBankRequestValues,ChangeValetDenominations } from 'src/app/config/Standbank';


@Component({
  selector: 'app-changedoordenominations',
  templateUrl: './changedoordenominations.component.html',
  styleUrls: ['./changedoordenominations.component.scss']
})
export class ChangedoordenominationsComponent implements OnInit {

 public  changeValetDenominations :ChangeValetDenominations=new ChangeValetDenominations();
  SetChangeDenominationsFormValues: FormGroup;
  type: string;
  useriD:any;
  MinimulBalance: number = 1000;
  ShiftManagerMinimulBal: number = 0;
  MainSafeMinimulBal: number = 0;
  ShiftmanagerText: string = 'Edit Denominations'; 
  dynamicText:string;
  ValletDenominationId:number;

  //ShiftManagerVerificatios
  newPennies: number = 0;
  newNickels: number = 0;
  newDimes: number = 0;
  newQuarters: number = 0;
  newOnedollar: number = 0;
  newFivedollar: number = 0;
  newTendollar: number = 0;
  newTwentydollar: number = 0;
  newFiftyDollar: number = 0;
  newHundredDollar: number = 0;

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


  isDone:boolean=true;
  isSave:boolean=false;
  newTotalValue: number = 0;
  oldTotalValue:number=0;
  valletTotalValue:number=0;
  DepositedTotalValue:number=0;

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

  standbankresponceData: GetStandBankRequestValues;

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
  
  //gotoDoorsExe(){
  // this.router.navigateByUrl('/doorsexe');
  // this.ipcService.send("openshiftmanagerlocker");
 // }
 displayStyle = "none";

 openPopup() {
     this.displayStyle = "block";
 }
 closePopup() {
     this.displayStyle = "none";
     //this.router.navigateByUrl('/homenav');
 }
  openShiftManagerLock(){
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
      OldPenniesFormValues: [''],
      OldNickelsFormValues: [''],
      OldDimesFromValues: [''],
      OldQuartersFormValues: [''],
      OldOneDollarFormValues: [''],
      OldFiveDollarFormValues: [''],
      OldTenDollarFormValues: [''],
      OldTwentyDollarFormValues: [''],
      OldHundredDollarFormValue: [''],
      OldFiftyDollarFormValue: [''],
      
      OldTotalDollarValue: [''],

      NewPenniesFormValues:['0'],
      NewNickelsFormValues: ['0'],
      NewDimesFromValues: ['0'],
      NewQuartersFormValues: ['0'],
      NewOneDollarFormValues: ['0'],
      NewFiveDollarFormValues: ['0'],
      NewTenDollarFormValues: ['0'],
      NewTwentyDollarFormValues: ['0'],
      NewHundredDollarFormValue: ['0'],
      NewFiftyDollarFormValue: ['0'],

      DepositePenniesFormValues:['0'],
      DepositeNickelsFormValues: ['0'],
      DepositeDimesFromValues: ['0'],
      DepositeQuartersFormValues: ['0'],
      DepositeOneDollarFormValues: ['0'],
      DepositeFiveDollarFormValues: ['0'],
      DepositeTenDollarFormValues: ['0'],
      DepositeTwentyDollarFormValues: ['0'],
      DepositeHundredDollarFormValue: ['0'],
      DepositeFiftyDollarFormValue: ['0'],

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
      case "Pennies": {
        this.newPennies = parseInt(item.target.value);
        if(this.newPennies!=0){
          this.ValletPennies=(this.oldPennies)-(this.newPennies);
           if(this.ValletPennies<0){
            this.newPennies=0;
            this.SetChangeDenominationsFormValues.patchValue({
              NewPenniesFormValues:"0"
            }) 
            this.dynamicText=type+ "Change Request exceeds available Balance."
            this.openPopup(); 
            
            this.ValletPennies=0;
          }
        }
        else{
          
          this.ValletPennies=(this.oldPennies);
        }
        
        console.log(item.target.value);
        break;
      }
      case "Nickels": {
        this.newNickels = parseInt(item.target.value);
        if(this.newNickels!=0){
          this.valletNickels=(this.oldNickels)-(this.newNickels);
          if(this.valletNickels<0){
            this.newNickels=0;
            this.SetChangeDenominationsFormValues.patchValue({
              NewNickelsFormValues:"0"
            })
            this.dynamicText=type+ "Change Request exceeds available Balance."
            this.openPopup(); 
            
            this.valletNickels=0;
          }
        }
        else{
          this.valletNickels=(this.oldNickels);
        }
        
        break;
      }
      case "Dimes": {
        this.newDimes = parseInt(item.target.value);
        if(this.newDimes!=0){
          this.valletDimes=(this.oldDimes)-(this.newDimes);
          if(this.valletDimes<0){
            this.newDimes=0;
            this.SetChangeDenominationsFormValues.patchValue({
              NewDimesFromValues:"0"
            })
            this.dynamicText=type+ "Change Request exceeds available Balance."
            this.openPopup(); 
            
            this.valletDimes=0;
          }
        }
        else{
          this.valletDimes=(this.oldDimes);
        }
        break;
      }
      case "Quarters": {
        this.newQuarters = parseInt(item.target.value);
        if(this.newQuarters!=0){
          this.valletQuarters=(this.oldQuarters)-(this.newQuarters);
          if(this.valletQuarters<0){
            this.newQuarters=0;
            this.SetChangeDenominationsFormValues.patchValue({
              NewQuartersFormValues:"0"
            })
            this.dynamicText=type+ "Change Request exceeds available Balance."
            this.openPopup(); 
            
            this.valletQuarters=0;
          }
        }
       else{
        this.valletQuarters=(this.oldQuarters);
       }
        break;
      }
      case "Onedollar": {
        this.newOnedollar = parseInt(item.target.value);
        if(this.newOnedollar!=0){
          this.valletOnedollar=(this.oldOnedollar)-(this.newOnedollar);
          if(this.valletOnedollar<0){
            this.newOnedollar=0;
            this.SetChangeDenominationsFormValues.patchValue({
              NewOneDollarFormValues:"0"
            })
            this.dynamicText=type+ "Change Request exceeds available Balance."
            this.openPopup(); 
            
            this.valletOnedollar=0;
          }
        }
        else{
          this.valletOnedollar=(this.oldOnedollar);
        }
       
        break;
      }
      case "Fivedollar": {
        this.newFivedollar = parseInt(item.target.value);
        if(this.newFivedollar!=0){
          this.valletFivedollar=(this.oldFivedollar)-(this.newFivedollar);
          if(this.valletFivedollar<0){
            this.newFivedollar=0;
            this.SetChangeDenominationsFormValues.patchValue({
              NewFiveDollarFormValues:"0"
            })
            this.dynamicText="5$ Change Request exceeds available Balance."
            this.openPopup(); 
            
            this.valletFivedollar=0;
          }
        }
        else{
          this.valletFivedollar=(this.oldFivedollar);
        }
        
        break;
      }
      case "Tendollar": {
        this.newTendollar = parseInt(item.target.value);
        if(this.newTendollar!=0){
          this.valletTendollar=(this.oldTendollar)-(this.newTendollar);
          if(this.valletTendollar<0){
            this.newTendollar=0;
            this.SetChangeDenominationsFormValues.patchValue({
              NewTenDollarFormValues:"0"
            })
            this.dynamicText="10$ Change Request exceeds available Balance."
            this.openPopup(); 
            
            this.valletTendollar=0;
          }
        }
        else{
          this.valletTendollar=(this.oldTendollar);
        }
        break;
      }
      case "Twentydollar": {
        this.newTwentydollar = parseInt(item.target.value);
        if(this.newTwentydollar!=0){
          this.valletTwentydollar=(this.oldTwentydollar)-(this.newTwentydollar);
          if(this.valletTwentydollar<0){
            this.newTwentydollar=0;
            this.SetChangeDenominationsFormValues.patchValue({
              NewTwentyDollarFormValues:"0"
            })
            this.dynamicText="20$ Change Request exceeds available Balance."
            this.openPopup(); 
            this.valletTwentydollar=0;
          }
        }
        else{
          this.valletTwentydollar=(this.oldTwentydollar);
        }
        
        break;
      }

      case "Fiftydollar": {
        this.newFiftyDollar = parseInt(item.target.value);
        if(this.newFiftyDollar!=0){
          this.valletFiftyDollar =(this.oldFiftyDollar)-(this.newFiftyDollar);
          if(this.valletFiftyDollar<0){
            this.newFiftyDollar=0;
            this.SetChangeDenominationsFormValues.patchValue({
              NewFiftyDollarFormValue:"0"
            })
            this.dynamicText="50$ Change Request exceeds available Balance."
            this.openPopup(); 
            this.valletFiftyDollar=0;
          }
        }
        else{
          this.valletFiftyDollar=(this.oldFiftyDollar);
        }
        
        break;
      }
      case "Hundreddollar": {
        this.newHundredDollar = parseInt(item.target.value);
        if(this.newHundredDollar!=0){
          this.valletHundredDollar=(this.oldHundredDollar)-(this.newHundredDollar);
          if(this.valletHundredDollar<0){
            this.newHundredDollar=0;
            this.SetChangeDenominationsFormValues.patchValue({
              NewHundredDollarFormValue:"0"
            })
            this.dynamicText="100$ Change Request exceeds available Balance."
            this.openPopup(); 
            this.valletHundredDollar=0;
          }
        }
        else{
          this.valletHundredDollar=(this.oldHundredDollar);
        }
        break;
      }

      case "DepositePennies": {
        this.DepositedValletPennies = parseInt(item.target.value);
        let safebal=this.SetChangeDenominationsFormValues.get('valletDepositPenniesFormValues')?.value;
        this.ValletPennies=parseInt(safebal.split("$")[1]) +this.DepositedValletPennies;
        this.ValletPennies=this.ValletPennies-this.newPennies;
        
        break;
      }
      case "DepositeNickels": {
        this.DepositedvalletNickels = parseInt(item.target.value);
        let safebal=this.SetChangeDenominationsFormValues.get('valletDepositNickelsFormValues')?.value;
        this.valletNickels=parseInt(safebal.split("$")[1]) +this.DepositedvalletNickels;
        this.valletNickels=this.valletNickels-this.newNickels;
        
        break;
      }
      case "DepositeDimes": {
        this.DepositedvalletDimes = parseInt(item.target.value);
        let safebal=this.SetChangeDenominationsFormValues.get('valletDepositDimesFromValues')?.value;
        this.valletDimes=parseInt(safebal.split("$")[1]) +this.DepositedvalletDimes;
        this.valletDimes=this.valletDimes-this.newDimes;
        break;
      }
      case "DepositeQuarters": {
        this.DepositedvalletQuarters = parseInt(item.target.value);
        let safebal=this.SetChangeDenominationsFormValues.get('valletDepositQuartersFormValues')?.value;
        this.valletQuarters=parseInt(safebal.split("$")[1]) +this.DepositedvalletQuarters;
        this.valletQuarters=this.valletQuarters-this.newQuarters;
        
        break;
      }
      case "DepositeOnedollar": {
        this.DepositedvalletOnedollar = parseInt(item.target.value);
        let safebal=this.SetChangeDenominationsFormValues.get('valletDepositOneDollarFormValues')?.value;
        this.valletOnedollar=parseInt(safebal.split("$")[1]) +this.DepositedvalletOnedollar;
        this.valletOnedollar=this.valletOnedollar-this.newOnedollar;
        
        break;
      }
      case "DepositeFivedollar": {
        this.DepositedvalletFivedollar = parseInt(item.target.value);
        let safebal=this.SetChangeDenominationsFormValues.get('valletDepositFiveDollarFormValues')?.value;
        this.valletFivedollar=parseInt(safebal.split("$")[1]) +this.DepositedvalletFivedollar;
        this.valletFivedollar=this.valletFivedollar-this.newFivedollar;

        break;
      }
      case "DepositeTendollar": {
        this.DepositedvalletTendollar = parseInt(item.target.value);
        let safebal=this.SetChangeDenominationsFormValues.get('valletDepositTenDollarFormValues')?.value;
        this.valletTendollar=parseInt(safebal.split("$")[1]) +this.DepositedvalletTendollar;
        this.valletTendollar=this.valletTendollar-this.newTendollar;

        break;
      }
      case "DepositeTwentydollar": {
        this.DepositedvalletTwentydollar = parseInt(item.target.value);
        let safebal=this.SetChangeDenominationsFormValues.get('valletDepositTwentyDollarFormValues')?.value;
        this.valletTwentydollar=parseInt(safebal.split("$")[1]) +this.DepositedvalletTwentydollar;
        this.valletTwentydollar=this.valletTwentydollar-this.newTwentydollar;

        break;
      }
      case "DepositeFiftydollar": {
        this.DepositedvalletFiftyDollar = parseInt(item.target.value);
        let safebal=this.SetChangeDenominationsFormValues.get('valletDepositFiftyDollarFormValue')?.value;
        this.valletFiftyDollar=parseInt(safebal.split("$")[1]) +this.DepositedvalletFiftyDollar;
        this.valletFiftyDollar=this.valletFiftyDollar-this.newFiftyDollar;
       
        break;
      }
      case "DepositeHundreddollar": {
        this.DepositedvalletHundredDollar = parseInt(item.target.value);
        let safebal=this.SetChangeDenominationsFormValues.get('valletDepositHundredDollarFormValue')?.value;
        this.valletHundredDollar=parseInt(safebal.split("$")[1]) +this.DepositedvalletHundredDollar;
        this.valletHundredDollar=this.valletHundredDollar+this.newHundredDollar;
        
        break;
      }
    }

    this.newTotalValue = (this.newPennies) + (this.newNickels) + (this.newDimes) + (this.newQuarters) + (this.newOnedollar) + (this.newFivedollar) + (this.newTendollar) + (this.newTwentydollar) + (this.newFiftyDollar) + (this.newHundredDollar);

    this.valletTotalValue =(this.ValletPennies) + (this.valletNickels) + (this.valletDimes) + (this.valletQuarters) +(this.valletOnedollar) + (this.valletFivedollar) + (this.valletTendollar) + (this.valletTwentydollar) + (this.valletFiftyDollar) + (this.valletHundredDollar);

    this.DepositedTotalValue=this.DepositedValletPennies+this.DepositedvalletNickels+this.DepositedvalletDimes+this.DepositedvalletQuarters+this.DepositedvalletOnedollar+this.DepositedvalletFivedollar+this.DepositedvalletTendollar+this.DepositedvalletTwentydollar+this.DepositedvalletFiftyDollar+this.DepositedvalletHundredDollar;

    if (type1 == "SHIFTMANAGER") {
      if (this.ShiftManagerMinimulBal != 0) {
        if ((this.ShiftManagerMinimulBal) < (this.newTotalValue)) {
          this.dynamicText="ShiftManagerMinimulBal Minimum balance is " + this.ShiftManagerMinimulBal + " only"
          this.openPopup(); 
        }
      }
    }
    
  }

  Valletchangedoordenominations() {
      this.service.getStandBankDetailsOnType("SHIFTMANAGER").subscribe(data => {
        this.standbankresponceData = data;
        this.ValletDenominationId=this.standbankresponceData.id;
        
        if (data!= null) {
        //   let myTag1 = this.el.nativeElement.querySelector("div");
        //  var shift_elements = document.getElementsByClassName('shiftmanagerchange');
        //  this.ShiftmanagerText = "Save";
        //  if (shift_elements.length > 0) {
        //    shift_elements[0].classList.remove('shiftmanagerchange');
        //  }
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
          
          this.ValletPennies=this.standbankresponceData.cents;
          this.valletNickels=this.standbankresponceData.nickels;
          this.valletDimes =this.standbankresponceData.dimes;
          this.valletQuarters=this.standbankresponceData.quarters;
          this.valletOnedollar=this.standbankresponceData.den_1$;
          this.valletFivedollar=this.standbankresponceData.den_5$;
          this.valletTendollar=this.standbankresponceData.den_10$;
          this.valletTwentydollar=this.standbankresponceData.den_20$;
          this.valletFiftyDollar=this.standbankresponceData.den_50$;
          this.valletHundredDollar=this.standbankresponceData.den_100$;
          
            this.SetChangeDenominationsFormValues.patchValue({
            OldPenniesFormValues: "$"+this.standbankresponceData.cents,
            OldNickelsFormValues: "$"+this.standbankresponceData.nickels,
            OldDimesFromValues: "$"+this.standbankresponceData.dimes,
            OldQuartersFormValues: "$"+this.standbankresponceData.quarters,
            OldOneDollarFormValues: "$"+this.standbankresponceData.den_1$,
            OldFiveDollarFormValues: "$"+this.standbankresponceData.den_5$,
            OldTenDollarFormValues: "$"+this.standbankresponceData.den_10$,
            OldTwentyDollarFormValues: "$"+this.standbankresponceData.den_20$,
            OldHundredDollarFormValue: "$"+this.standbankresponceData.den_100$,
            OldFiftyDollarFormValue: "$"+this.standbankresponceData.den_50$,

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

          this.oldTotalValue = (this.standbankresponceData.cents) + (this.standbankresponceData.nickels) + (this.standbankresponceData.dimes) + (this.standbankresponceData.quarters) + (this.standbankresponceData.den_1$) + (this.standbankresponceData.den_5$) + (this.standbankresponceData.den_10$) + (this.standbankresponceData.den_20$) + (this.standbankresponceData.den_50$) + (this.standbankresponceData.den_100$);
          this.valletTotalValue=this.oldTotalValue;
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
      if (this.DepositedTotalValue != 0) {
        if(this.DepositedTotalValue==this.newTotalValue)
        {
          depototal2[0].classList.remove('redDepositeTotalAdd');
          newtotal[0].classList.remove('redNewTotalAdd');
          this.SaveChangeDenominiesvalues();
        }
        else{
         
          if(this.newTotalValue<this.DepositedTotalValue)
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
          this.dynamicText="Change request not balanced.. Please Balance"
          this.openPopup(); 
        }
        
      }
      else {
        this.dynamicText="Please Select Atleast One Denomination"
        this.openPopup(); 
      }
    }
    
  }
  SaveChangeDenominiesvalues(){

    this.changeValetDenominations.new_cents=this.newPennies;
    this.changeValetDenominations.new_nickels=this.newNickels;
    this.changeValetDenominations.new_dimes=this.newDimes;
    this.changeValetDenominations.new_quarters=this.newQuarters;
    this.changeValetDenominations.new_den_1$=this.newOnedollar;
    this.changeValetDenominations.new_den_5$=this.newFiftyDollar;
    this.changeValetDenominations.new_den_10$=this.newTendollar;
    this.changeValetDenominations.new_den_20$=this.newTwentydollar;
    this.changeValetDenominations.new_den_50$=this.newFiftyDollar;
    this.changeValetDenominations.new_den_100$=this.newHundredDollar;

    this.changeValetDenominations.old_cents=this.oldPennies;
    this.changeValetDenominations.old_nickels=this.oldNickels;
    this.changeValetDenominations.old_dimes=this.oldDimes;
    this.changeValetDenominations.old_quarters=this.oldQuarters;
    this.changeValetDenominations.old_den_1$=this.oldOnedollar;
    this.changeValetDenominations.old_den_5$=this.oldFiftyDollar;
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
    
    this.changeValetDenominations.type="ShiftManagerChange";
    this.changeValetDenominations.updatedByUser=this.useriD;
    this.changeValetDenominations.valetDenominationsId=this.ValletDenominationId;
    this.changeValetDenominations.updatedTime=Date();

    this.service.SaveChangeDenominiesValues(this.changeValetDenominations).subscribe(data=>{
      this.isSave=true;
      this.isDone=false;
      this.dynamicText="Changes Saved Successfully"
      this.openPopup(); 
    })
  }
}
