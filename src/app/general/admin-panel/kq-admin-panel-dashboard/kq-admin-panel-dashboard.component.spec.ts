import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqAdminPanelDashboardComponent } from './kq-admin-panel-dashboard.component';

describe('KqAdminPanelDashboardComponent', () => {
  let component: KqAdminPanelDashboardComponent;
  let fixture: ComponentFixture<KqAdminPanelDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqAdminPanelDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqAdminPanelDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
