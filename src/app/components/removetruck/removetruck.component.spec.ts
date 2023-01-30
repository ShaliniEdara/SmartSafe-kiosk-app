import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovetruckComponent } from './removetruck.component';

describe('RemovetruckComponent', () => {
  let component: RemovetruckComponent;
  let fixture: ComponentFixture<RemovetruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovetruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovetruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
