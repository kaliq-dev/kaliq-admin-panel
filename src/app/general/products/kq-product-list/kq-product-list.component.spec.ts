import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqProductListComponent } from './kq-product-list.component';

describe('KqProductListComponent', () => {
  let component: KqProductListComponent;
  let fixture: ComponentFixture<KqProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
