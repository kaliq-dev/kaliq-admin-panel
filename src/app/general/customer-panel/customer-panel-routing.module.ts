import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {KqCustomerDashboardComponent} from './kq-customer-dashboard/kq-customer-dashboard.component';

const adminPanelRoutes: Routes = [
  {
    path: 'dashboard/:slug',
    component: KqCustomerDashboardComponent
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

export class CustomerPanelRoutingModule {
}

