import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FountainpayAngularComponent } from './fountainpay-angular.component';

describe('FountainpayAngularComponent', () => {
  let component: FountainpayAngularComponent;
  let fixture: ComponentFixture<FountainpayAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FountainpayAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FountainpayAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
