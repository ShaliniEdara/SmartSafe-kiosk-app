import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbankdenominationComponent } from './sbankdenomination.component';

describe('SbankdenominationComponent', () => {
  let component: SbankdenominationComponent;
  let fixture: ComponentFixture<SbankdenominationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbankdenominationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbankdenominationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
