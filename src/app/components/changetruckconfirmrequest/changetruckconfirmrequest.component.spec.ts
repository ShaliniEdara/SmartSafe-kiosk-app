import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangetruckconfirmrequestComponent } from './changetruckconfirmrequest.component';

describe('ChangetruckconfirmrequestComponent', () => {
  let component: ChangetruckconfirmrequestComponent;
  let fixture: ComponentFixture<ChangetruckconfirmrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangetruckconfirmrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangetruckconfirmrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
