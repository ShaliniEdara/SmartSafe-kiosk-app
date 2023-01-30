import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckmainComponent } from './truckmain.component';

describe('TruckmainComponent', () => {
  let component: TruckmainComponent;
  let fixture: ComponentFixture<TruckmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
