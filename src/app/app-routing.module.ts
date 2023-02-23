import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { HomenavComponent } from './components/homenav/homenav.component';
import { InsertbillsComponent } from './components/insertbills/insertbills.component';
import { AdminaccessComponent } from './components/adminaccess/adminaccess.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ManagerreportComponent } from './components/managerreport/managerreport.component';
import { EmployeereportComponent } from './components/employeereport/employeereport.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { EmpaccountComponent } from './components/empaccount/empaccount.component';
import { MangeraccountComponent } from './components/mangeraccount/mangeraccount.component';
import { AddaccountComponent } from './components/addaccount/addaccount.component';
import { EditaccountComponent } from './components/editaccount/editaccount.component';
import { RemoveaccountComponent } from './components/removeaccount/removeaccount.component';
import { DoorsComponent } from './components/doors/doors.component';
import { DoortypesComponent } from './components/doortypes/doortypes.component';
import { TruckmainComponent } from './components/truckmain/truckmain.component';
import { ChangerequestComponent } from './components/changerequest/changerequest.component';
import { DenominationsComponent } from './components/denominations/denominations.component';
import { SbankdoorsComponent } from './components/sbankdoors/sbankdoors.component';
import { SbankdenominationComponent } from './components/sbankdenomination/sbankdenomination.component';
import { StandbankComponent } from './components/standbank/standbank.component';
import { SystemmaintenanceComponent } from './components/systemmaintenance/systemmaintenance.component';
import { EmployeemaintenanceComponent } from './components/employeemaintenance/employeemaintenance.component';
import { PinpartComponent } from './components/pinpart/pinpart.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PopupsComponent } from './components/popups/popups.component';
import { TruckaccountComponent } from './components/truckaccount/truckaccount.component';
import { AddtruckComponent } from './components/addtruck/addtruck.component';
import { EdittruckComponent } from './components/edittruck/edittruck.component';
import { RemovetruckComponent } from './components/removetruck/removetruck.component';
import { CreatestoreComponent } from './components/createstore/createstore.component';
import { ChangedoordenominationsComponent } from './components/changedoordenominations/changedoordenominations.component';
import { StandbankdoordenominationsComponent } from './components/standbankdoordenominations/standbankdoordenominations.component';
import { ChangetruckconfirmrequestComponent } from './components/changetruckconfirmrequest/changetruckconfirmrequest.component';
import { DoorsexeComponent } from './components/doorsexe/doorsexe.component';
import { SubmitotpComponent } from './components/submitotp/submitotp.component';
import { ShiftmanageraccountComponent } from './components/shiftmanageraccount/shiftmanageraccount.component';
import { IntersafechangeComponent } from './components/intersafechange/intersafechange.component';
import { CreatekioskComponent } from './components/createkiosk/createkiosk.component';

const routes: Routes = [
  { path: "", redirectTo: "/homenav", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "game", component: GameComponent },
  { path: "homenav", component: HomenavComponent },
  { path: "insertbills", component: InsertbillsComponent },
  { path: "adminaccess", component: AdminaccessComponent },
  { path: "reports", component: ReportsComponent },
  { path: "managerreport", component: ManagerreportComponent },
  { path: "employeereport", component: EmployeereportComponent },
  { path: "accounts", component: AccountsComponent },
  { path: "empaccount", component: EmpaccountComponent },
  { path: "mangeraccount", component: MangeraccountComponent },
  { path: "addaccount", component: AddaccountComponent },
  { path: "editaccount", component: EditaccountComponent },
  { path: "removeaccount", component: RemoveaccountComponent },
  { path: "doors", component: DoorsComponent },
  { path: "doortypes", component: DoortypesComponent },
  { path: "truckmain", component: TruckmainComponent },
  { path: "changerequest", component: ChangerequestComponent },
  { path: "denominations", component: DenominationsComponent },
  { path: "sbankdoors", component: SbankdoorsComponent },
  { path: "sbankdenomination", component: SbankdenominationComponent },
  { path: "standbank", component: StandbankComponent },
  { path: "systemmaintenance", component: SystemmaintenanceComponent },
  { path: "employeemaintenance", component: EmployeemaintenanceComponent },
  { path: "pinpart", component: PinpartComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "popups", component: PopupsComponent },
  { path: "truckaccount", component: TruckaccountComponent },
  { path: "addtruck", component: AddtruckComponent },
  { path: "edittruck", component: EdittruckComponent },
  { path: "removetruck", component: RemovetruckComponent },
  { path: "createstore", component: CreatestoreComponent },
  { path: "createkiosk", component: CreatekioskComponent },
  { path: "changedoordenominations", component: ChangedoordenominationsComponent },
  { path: "standbankdoordenominations", component: StandbankdoordenominationsComponent },
  { path: "changetruckconfirmrequest", component: ChangetruckconfirmrequestComponent },
  { path: "doorsexe", component: DoorsexeComponent } ,
  { path: "submitotp", component: SubmitotpComponent },
  { path: "shiftmanageraccount", component: ShiftmanageraccountComponent }  ,
  {path:"intersafechange",component:IntersafechangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
