import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemaintenanceComponent } from './employeemaintenance.component';

describe('EmployeemaintenanceComponent', () => {
  let component: EmployeemaintenanceComponent;
  let fixture: ComponentFixture<EmployeemaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeemaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeemaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
