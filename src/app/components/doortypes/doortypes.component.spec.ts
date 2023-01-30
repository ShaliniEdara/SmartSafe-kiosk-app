import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoortypesComponent } from './doortypes.component';

describe('DoortypesComponent', () => {
  let component: DoortypesComponent;
  let fixture: ComponentFixture<DoortypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoortypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoortypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
