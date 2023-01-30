import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorsexeComponent } from './doorsexe.component';

describe('DoorsexeComponent', () => {
  let component: DoorsexeComponent;
  let fixture: ComponentFixture<DoorsexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorsexeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorsexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
