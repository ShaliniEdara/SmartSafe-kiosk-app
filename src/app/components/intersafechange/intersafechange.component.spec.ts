import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersafechangeComponent } from './intersafechange.component';

describe('IntersafechangeComponent', () => {
  let component: IntersafechangeComponent;
  let fixture: ComponentFixture<IntersafechangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntersafechangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersafechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
