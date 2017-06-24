import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {KqAdminDashboardComponent} from './dashboard/kq-admin-dashboard/kq-admin-dashboard.component';
import {KqCategoryCreateEditComponent} from './category/kq-category-create-edit/kq-category-create-edit.component';
import {KqSupplierCreateEditComponent} from './supplier/kq-supplier-create-edit/kq-supplier-create-edit.component';
import {KqBrandCreateEditComponent} from './brand/kq-brand-create-edit/kq-brand-create-edit.component';
import {KqProductCreateEditComponent} from './products/kq-product-create-edit/kq-product-create-edit.component';
import {KqCustomerDashboardComponent} from './customer-panel/kq-customer-dashboard/kq-customer-dashboard.component';
import {KqSupplierDashboardComponent} from './supplier-panel/kq-supplier-dashboard/kq-supplier-dashboard.component';
import {KqAdminPanelDashboardComponent} from './admin-panel/kq-admin-panel-dashboard/kq-admin-panel-dashboard.component';

const generalRoutes = [
  {
    path: 'kq/dashboard/home',
    component: KqAdminDashboardComponent
  },
  {
    path: 'kq/category',
    component: KqCategoryCreateEditComponent
  },
  {
    path: 'kq/supplier',
    component: KqSupplierCreateEditComponent
  },
  {
    path: 'kq/brand',
    component: KqBrandCreateEditComponent
  },
  {
    path: 'kq/product',
    component: KqProductCreateEditComponent
  },
  {
    path: 'kq/customer-panel',
    children: [
      {
        path: 'dashboard/:slug',
        component: KqCustomerDashboardComponent
      }
    ]
  },
  {
    path: 'kq/supplier-panel',
    children: [
      {
        path: 'dashboard/:slug',
        component: KqSupplierDashboardComponent
      }
    ]
  },
  {
    path: 'kq/admin-panel',
    children: [
      {
        path: 'dashboard/:slug',
        component: KqAdminPanelDashboardComponent
      }
    ]
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
