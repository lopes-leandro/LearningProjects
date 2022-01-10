import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

//#region imports 
import { MediaObserver } from "@angular/flex-layout";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {
  DomSanitizerFake,
  MatIconRegistryFake,
  MediaObserverFake,
  commonTestingModules,
  commonTestingProviders
} from "./common/common.testing";
//#endregion

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat([
        {
          provide: MediaObserver, useClass: MediaObserverFake
        },
        {
          provide: MatIconRegistry, useClass: MatIconRegistryFake
        },
        {
          provide: DomSanitizer, useClass: DomSanitizerFake
        }
      ]),
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'LemonMart'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('LemonMart');
  });
});
