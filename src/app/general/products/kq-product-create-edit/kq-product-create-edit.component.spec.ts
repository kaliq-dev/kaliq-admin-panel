import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqProductCreateEditComponent } from './kq-product-create-edit.component';

describe('KqProductCreateEditComponent', () => {
  let component: KqProductCreateEditComponent;
  let fixture: ComponentFixture<KqProductCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqProductCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqProductCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
