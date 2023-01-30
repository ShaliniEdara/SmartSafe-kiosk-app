import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitotpComponent } from './submitotp.component';

describe('SubmitotpComponent', () => {
  let component: SubmitotpComponent;
  let fixture: ComponentFixture<SubmitotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitotpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
