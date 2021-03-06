import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatIconRegistry } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AuthService } from './auth/auth.service';
import { AuthInMemoryService } from './auth/auth-in-memory.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    {
      provide: AuthService, useClass: AuthInMemoryService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) { 
      iconRegistry.addSvgIcon('lemon', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg'))
    }
}
