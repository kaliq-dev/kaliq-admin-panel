import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbImageComponent } from './thumb-image.component';

describe('ThumbImageComponent', () => {
  let component: ThumbImageComponent;
  let fixture: ComponentFixture<ThumbImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
