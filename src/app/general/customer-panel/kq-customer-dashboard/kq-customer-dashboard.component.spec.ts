import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqCustomerDashboardComponent } from './kq-customer-dashboard.component';

describe('KqCustomerDashboardComponent', () => {
  let component: KqCustomerDashboardComponent;
  let fixture: ComponentFixture<KqCustomerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqCustomerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqCustomerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
