import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

const MODULES = [
  MatToolbarModule,
  MatButtonModule,FormsModule
];
@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialSharedModule {}