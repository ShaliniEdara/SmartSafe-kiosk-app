import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedoordenominationsComponent } from './changedoordenominations.component';

describe('ChangedoordenominationsComponent', () => {
  let component: ChangedoordenominationsComponent;
  let fixture: ComponentFixture<ChangedoordenominationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangedoordenominationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedoordenominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
