import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveaccountComponent } from './removeaccount.component';

describe('RemoveaccountComponent', () => {
  let component: RemoveaccountComponent;
  let fixture: ComponentFixture<RemoveaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
