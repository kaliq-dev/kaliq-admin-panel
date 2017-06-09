import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqCategoryCreateEditComponent } from './kq-category-create-edit.component';

describe('KqCategoryCreateEditComponent', () => {
  let component: KqCategoryCreateEditComponent;
  let fixture: ComponentFixture<KqCategoryCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqCategoryCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqCategoryCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
