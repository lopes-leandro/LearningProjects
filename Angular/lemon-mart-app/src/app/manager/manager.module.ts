import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { MaterialModule } from '../material.module';
import { ManagerUserComponent } from './manager-user/manager-user.component';
import { ManagerReceiptLookupComponent } from './manager-receipt-lookup/manager-receipt-lookup.component';


@NgModule({
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    ManagerUserComponent,
    ManagerReceiptLookupComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule
  ]
})
export class ManagerModule { }
