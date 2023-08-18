import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAmountComponent } from './sale-amount.component';

describe('SaleAmountComponent', () => {
  let component: SaleAmountComponent;
  let fixture: ComponentFixture<SaleAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
