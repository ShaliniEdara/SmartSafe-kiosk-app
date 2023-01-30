import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandbankdoordenominationsComponent } from './standbankdoordenominations.component';

describe('StandbankdoordenominationsComponent', () => {
  let component: StandbankdoordenominationsComponent;
  let fixture: ComponentFixture<StandbankdoordenominationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandbankdoordenominationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandbankdoordenominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
