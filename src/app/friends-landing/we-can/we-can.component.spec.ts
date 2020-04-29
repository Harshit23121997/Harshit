import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeCanComponent } from './we-can.component';

describe('WeCanComponent', () => {
  let component: WeCanComponent;
  let fixture: ComponentFixture<WeCanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeCanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
