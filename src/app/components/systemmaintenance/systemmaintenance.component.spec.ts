import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemmaintenanceComponent } from './systemmaintenance.component';

describe('SystemmaintenanceComponent', () => {
  let component: SystemmaintenanceComponent;
  let fixture: ComponentFixture<SystemmaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemmaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
