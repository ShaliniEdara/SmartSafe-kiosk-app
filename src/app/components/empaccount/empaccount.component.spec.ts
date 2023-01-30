import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaccountComponent } from './empaccount.component';

describe('EmpaccountComponent', () => {
  let component: EmpaccountComponent;
  let fixture: ComponentFixture<EmpaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
