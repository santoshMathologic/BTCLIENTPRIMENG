import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlanComponent } from './user-plan.component';

describe('UserPlanComponent', () => {
  let component: UserPlanComponent;
  let fixture: ComponentFixture<UserPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
