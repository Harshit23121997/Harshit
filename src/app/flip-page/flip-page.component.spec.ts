import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipPageComponent } from './flip-page.component';

describe('FlipPageComponent', () => {
  let component: FlipPageComponent;
  let fixture: ComponentFixture<FlipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
