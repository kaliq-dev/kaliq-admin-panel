import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqSupplierDashboardComponent } from './kq-supplier-dashboard.component';

describe('KqSupplierDashboardComponent', () => {
  let component: KqSupplierDashboardComponent;
  let fixture: ComponentFixture<KqSupplierDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqSupplierDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqSupplierDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
