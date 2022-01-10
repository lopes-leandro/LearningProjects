import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryCategoriesComponent } from './inventory-categories/inventory-categories.component';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { InventoryProductsComponent } from './inventory-products/inventory-products.component';
import { InventoryStockEntryComponent } from './inventory-stock-entry/inventory-stock-entry.component';
import { InventoryComponent } from './inventory.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      {
        path: '',
        redirectTo: '/inventory/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: InventoryHomeComponent
      },
      {
        path: 'stock-entry',
        component: InventoryStockEntryComponent
      },
      {
        path: 'products',
        component: InventoryProductsComponent
      },
      {
        path: 'categories',
        component: InventoryCategoriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
