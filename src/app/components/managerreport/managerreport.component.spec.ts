import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerreportComponent } from './managerreport.component';

describe('ManagerreportComponent', () => {
  let component: ManagerreportComponent;
  let fixture: ComponentFixture<ManagerreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
