import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertbillsComponent } from './insertbills.component';

describe('InsertbillsComponent', () => {
  let component: InsertbillsComponent;
  let fixture: ComponentFixture<InsertbillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertbillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
