import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqSupplierCreateEditComponent } from './kq-supplier-create-edit.component';

describe('KqSupplierCreateEditComponent', () => {
  let component: KqSupplierCreateEditComponent;
  let fixture: ComponentFixture<KqSupplierCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqSupplierCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqSupplierCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
