import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FlexLayoutModule } from "@angular/flex-layout";

const modules = [
  FlexLayoutModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule
]

@NgModule({
  declarations: [],
  imports: [],
  exports: [modules]
})
export class MaterialModule { }
