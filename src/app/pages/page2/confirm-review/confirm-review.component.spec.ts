import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReviewComponent } from './confirm-review.component';

describe('ConfirmReviewComponent', () => {
  let component: ConfirmReviewComponent;
  let fixture: ComponentFixture<ConfirmReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
