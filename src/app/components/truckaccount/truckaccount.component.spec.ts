import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckaccountComponent } from './truckaccount.component';

describe('TruckaccountComponent', () => {
  let component: TruckaccountComponent;
  let fixture: ComponentFixture<TruckaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
