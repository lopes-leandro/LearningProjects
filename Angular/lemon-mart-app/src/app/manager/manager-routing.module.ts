import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerReceiptLookupComponent } from './manager-receipt-lookup/manager-receipt-lookup.component';
import { ManagerUserComponent } from './manager-user/manager-user.component';
import { ManagerComponent } from './manager.component';

const routes: Routes = [
  {    
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: '',
        redirectTo: '/manager/home',
        pathMatch: 'full'    
      },
      {
        path: 'home',
        component: ManagerHomeComponent
      },
      {
        path: 'users',
        component: ManagerUserComponent
      },
      {
        path: 'receipts',
        component: ManagerReceiptLookupComponent
      }    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
