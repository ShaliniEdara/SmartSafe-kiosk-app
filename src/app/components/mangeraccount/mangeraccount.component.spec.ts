import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeraccountComponent } from './mangeraccount.component';

describe('MangeraccountComponent', () => {
  let component: MangeraccountComponent;
  let fixture: ComponentFixture<MangeraccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeraccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
