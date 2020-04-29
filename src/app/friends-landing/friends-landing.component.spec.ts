import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsLandingComponent } from './friends-landing.component';

describe('FriendsLandingComponent', () => {
  let component: FriendsLandingComponent;
  let fixture: ComponentFixture<FriendsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
