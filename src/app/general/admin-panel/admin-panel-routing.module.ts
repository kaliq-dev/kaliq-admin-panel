import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {KqAdminPanelDashboardComponent} from './kq-admin-panel-dashboard/kq-admin-panel-dashboard.component';

const adminPanelRoutes: Routes = [
  {
    path: 'dashboard/:slug',
    component: KqAdminPanelDashboardComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(adminPanelRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminPanelRoutingModule {
}

