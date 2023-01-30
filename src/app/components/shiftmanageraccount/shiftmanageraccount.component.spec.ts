import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftmanageraccountComponent } from './shiftmanageraccount.component';

describe('ShiftmanageraccountComponent', () => {
  let component: ShiftmanageraccountComponent;
  let fixture: ComponentFixture<ShiftmanageraccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftmanageraccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftmanageraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
