import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbankdoorsComponent } from './sbankdoors.component';

describe('SbankdoorsComponent', () => {
  let component: SbankdoorsComponent;
  let fixture: ComponentFixture<SbankdoorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbankdoorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbankdoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
