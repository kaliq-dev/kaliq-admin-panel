import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqCategoryCreateComponent } from './kq-category-create.component';

describe('KqCategoryCreateComponent', () => {
  let component: KqCategoryCreateComponent;
  let fixture: ComponentFixture<KqCategoryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqCategoryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
