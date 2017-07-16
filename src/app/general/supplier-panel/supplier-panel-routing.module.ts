import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {KqSupplierDashboardComponent} from './kq-supplier-dashboard/kq-supplier-dashboard.component';

const adminPanelRoutes: Routes = [
  {
    path: 'dashboard/:slug',
    component: KqSupplierDashboardComponent
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

export class SupplierPanelRoutingModule {
}

