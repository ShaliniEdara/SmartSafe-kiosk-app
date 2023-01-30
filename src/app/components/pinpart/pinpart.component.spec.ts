import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinpartComponent } from './pinpart.component';

describe('PinpartComponent', () => {
  let component: PinpartComponent;
  let fixture: ComponentFixture<PinpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinpartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
