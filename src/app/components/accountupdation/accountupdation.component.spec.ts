import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountupdationComponent } from './accountupdation.component';

describe('AccountupdationComponent', () => {
  let component: AccountupdationComponent;
  let fixture: ComponentFixture<AccountupdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountupdationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountupdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
