import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySingleImageComponent } from './display-single-image.component';

describe('DisplaySingleImageComponent', () => {
  let component: DisplaySingleImageComponent;
  let fixture: ComponentFixture<DisplaySingleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySingleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySingleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
