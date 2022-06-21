import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySolidComponent } from './display-solid.component';

describe('DisplaySolidComponent', () => {
  let component: DisplaySolidComponent;
  let fixture: ComponentFixture<DisplaySolidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySolidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
