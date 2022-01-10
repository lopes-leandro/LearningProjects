import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { InventoryStockEntryComponent } from './inventory-stock-entry/inventory-stock-entry.component';
import { InventoryProductsComponent } from './inventory-products/inventory-products.component';
import { InventoryCategoriesComponent } from './inventory-categories/inventory-categories.component';


@NgModule({
  declarations: [
    InventoryComponent,
    InventoryHomeComponent,
    InventoryStockEntryComponent,
    InventoryProductsComponent,
    InventoryCategoriesComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MaterialModule,
  ]
})
export class InventoryModule { }
