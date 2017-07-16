import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {KqAdminDashboardComponent} from './dashboard/kq-admin-dashboard/kq-admin-dashboard.component';

const generalRoutes = [
  {
    path: 'kq/dashboard/home',
    component: KqAdminDashboardComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(generalRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GeneralRoutingModule {
}
