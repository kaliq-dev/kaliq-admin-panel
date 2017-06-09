import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqSupplierListComponent } from './kq-supplier-list.component';

describe('KqSupplierListComponent', () => {
  let component: KqSupplierListComponent;
  let fixture: ComponentFixture<KqSupplierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqSupplierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqSupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
