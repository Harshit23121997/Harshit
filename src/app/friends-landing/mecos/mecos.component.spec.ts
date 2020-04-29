import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecosComponent } from './mecos.component';

describe('MecosComponent', () => {
  let component: MecosComponent;
  let fixture: ComponentFixture<MecosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
