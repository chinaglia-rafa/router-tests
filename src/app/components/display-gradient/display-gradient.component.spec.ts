import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGradientComponent } from './display-gradient.component';

describe('DisplayGradientComponent', () => {
  let component: DisplayGradientComponent;
  let fixture: ComponentFixture<DisplayGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGradientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
