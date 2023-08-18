import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalTaxComponent } from './cal-tax.component';

describe('CalTaxComponent', () => {
  let component: CalTaxComponent;
  let fixture: ComponentFixture<CalTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
