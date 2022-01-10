import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStockEntryComponent } from './inventory-stock-entry.component';

describe('InventoryStockEntryComponent', () => {
  let component: InventoryStockEntryComponent;
  let fixture: ComponentFixture<InventoryStockEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryStockEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryStockEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
