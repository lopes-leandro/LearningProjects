import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ManagerModule } from './manager/manager.module';
import { InventoryModule } from './inventory/inventory.module';
import { PosModule } from './pos/pos.module';
import { HomeComponent } from './home/home.component';
import { PegeNotFoundComponent } from './pege-not-found/pege-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PegeNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ManagerModule,
    InventoryModule,
    PosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
