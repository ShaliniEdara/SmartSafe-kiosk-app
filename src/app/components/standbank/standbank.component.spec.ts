import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandbankComponent } from './standbank.component';

describe('StandbankComponent', () => {
  let component: StandbankComponent;
  let fixture: ComponentFixture<StandbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
