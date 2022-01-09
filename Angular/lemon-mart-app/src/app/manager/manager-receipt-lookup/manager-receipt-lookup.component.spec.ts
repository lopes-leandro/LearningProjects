import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerReceiptLookupComponent } from './manager-receipt-lookup.component';

describe('ManagerReceiptLookupComponent', () => {
  let component: ManagerReceiptLookupComponent;
  let fixture: ComponentFixture<ManagerReceiptLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerReceiptLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerReceiptLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
