import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KqAdminPanelDashboardComponent} from './kq-admin-panel-dashboard/kq-admin-panel-dashboard.component';
import {AdminPanelRoutingModule} from './admin-panel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ],
  declarations: [
    KqAdminPanelDashboardComponent
  ],
  providers: []
})
export class AdminPanelModule {
}


