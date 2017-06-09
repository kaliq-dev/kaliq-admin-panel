import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqCategoryListComponent } from './kq-category-list.component';

describe('KqCategoryListComponent', () => {
  let component: KqCategoryListComponent;
  let fixture: ComponentFixture<KqCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
