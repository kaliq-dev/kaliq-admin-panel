import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqAdminDashboardComponent } from './kq-admin-dashboard.component';

describe('KqAdminDashboardComponent', () => {
  let component: KqAdminDashboardComponent;
  let fixture: ComponentFixture<KqAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
