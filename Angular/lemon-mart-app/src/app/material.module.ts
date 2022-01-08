import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

const modules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: [],
  exports: [modules]
})
export class MaterialModule { }
