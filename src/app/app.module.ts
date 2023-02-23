import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { MaterialSharedModule } from './material.shared.module';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './components/addtruck/phone-mask.directive';

import { AuthGuard } from './services/auth/auth.guard';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { PinpartComponent } from './components/pinpart/pinpart.component';
import { AddaccountComponent } from './../app/components/addaccount/addaccount.component';
import { EditaccountComponent } from './components/editaccount/editaccount.component';
import { RemoveaccountComponent } from './components/removeaccount/removeaccount.component';
import { InsertbillsComponent } from './components/insertbills/insertbills.component';
import { EmployeereportComponent } from './components/employeereport/employeereport.component';
import { ManagerreportComponent } from './components/managerreport/managerreport.component';
import { PopupsComponent } from './components/popups/popups.component';
import { AddtruckComponent } from './components/addtruck/addtruck.component';
import { StandbankComponent } from './components/standbank/standbank.component';
import { ChangedoordenominationsComponent } from './components/changedoordenominations/changedoordenominations.component';
import {StandbankdoordenominationsComponent} from './components/standbankdoordenominations/standbankdoordenominations.component'
import{ChangerequestComponent} from './components/changerequest/changerequest.component'
import{DenominationsComponent} from './components/denominations/denominations.component'
import{ChangetruckconfirmrequestComponent} from './components/changetruckconfirmrequest/changetruckconfirmrequest.component'
import { IKeyboardLayouts, keyboardLayouts, MAT_KEYBOARD_LAYOUTS, MatKeyboardModule } from 'angular-onscreen-material-keyboard';
import { ReactiveFormsModule } from '@angular/forms';
import {ReportsComponent} from './components/reports/reports.component'

import { CreatestoreComponent } from './components/createstore/createstore.component';
import { IntersafechangeComponent } from './components/intersafechange/intersafechange.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { NgxLoaderModule } from '@tusharghoshbd/ngx-loader';
import { DoorsexeComponent } from './components/doorsexe/doorsexe.component';
import { CreatekioskComponent } from './components/createkiosk/createkiosk.component';
/**
  * virtual key board allow only numbers
  *  refer this site https://www.npmjs.com/package/angular-onscreen-material-keyboard/v/0.3.1
  * add [matKeyboard]="'de-CH'" [value]="123456789" in html page
  *  https://greywyvern.com/code/javascript/keyboard
  */
  const customLayouts: IKeyboardLayouts = {
  ...keyboardLayouts,
  'Tölles Läyout': {
    'name': 'Awesome layout',
    'keys': [
      [
        ['1', '!'],
        ['2', '@'],
        ['3', '#'],
        ['4', '$'],
        ['5', '%'],
        ['6', '^'],
        ['7', '&'],
        ['8', '*'],
        ['9', '('],
        ['0', ')']
      ]
    ],
    'lang': ['de-CH']
  }
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GameComponent,
    PinpartComponent,
    AddaccountComponent,
    EditaccountComponent,
    RemoveaccountComponent,
    InsertbillsComponent,
    ManagerreportComponent,
    EmployeereportComponent,
    PopupsComponent,
    AddtruckComponent,
    CreatestoreComponent,
    StandbankComponent,
    ChangedoordenominationsComponent,
    StandbankdoordenominationsComponent,
    ChangerequestComponent,
    DenominationsComponent,
    IntersafechangeComponent,
    ChangetruckconfirmrequestComponent,
    AddtruckComponent,
    PhoneMaskDirective,
    ReportsComponent,
    CreatekioskComponent
  ],
  exports: [
    PhoneMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialSharedModule,
    BrowserAnimationsModule,
    FormsModule,HttpClientModule,
    MatKeyboardModule,
    CommonModule,
    FormsModule, 
    NgIdleKeepaliveModule.forRoot(),
    ReactiveFormsModule,
    NgxLoaderModule,
    RouterModule.forRoot([
      { 
        path: 'standbank/StandbankComponent', component: StandbankComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] 
      },
      { 
        path: 'components/changedoordenominations', component: ChangedoordenominationsComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] 
      },
      { 
        path: 'components/standbankdoordenominations', component: StandbankdoordenominationsComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] 
      },
      { 
        path: 'components/changerequest', component: ChangerequestComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] 
      },
      { 
        path: 'components/denominations', component: DenominationsComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] 
      },
      { 
        path: 'components/intersafechange', component: IntersafechangeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] 
      },
      { 
        path: 'components/changetruckconfirmrequest', component: ChangetruckconfirmrequestComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] 
      },
      { 
        path: 'components/addtruck', component: AddtruckComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] 
      },
      { 
        path: 'components/createstore', component: CreatestoreComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] 
      },
      {
       path:'components/reports',component:ReportsComponent,canActivate: [AuthGuard], canLoad: [AuthGuard] 
      }
    ])

    
  ],
  providers: [
  
    { provide: MAT_KEYBOARD_LAYOUTS, useValue: customLayouts }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
