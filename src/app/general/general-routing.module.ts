import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {KqCategoryCreateEditComponent} from './category/kq-category-create-edit/kq-category-create-edit.component';
import {KqSupplierCreateEditComponent} from './supplier/kq-supplier-create-edit/kq-supplier-create-edit.component';
import {KqProductCreateEditComponent} from './products/kq-product-create-edit/kq-product-create-edit.component';
import {KqCustomerDashboardComponent} from './customer-panel/kq-customer-dashboard/kq-customer-dashboard.component';
import {KqSupplierDashboardComponent} from './supplier-panel/kq-supplier-dashboard/kq-supplier-dashboard.component';
import {KqAdminDashboardComponent} from './dashboard/kq-admin-dashboard/kq-admin-dashboard.component';


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
    loadChildren: 'app/general/brand/brand.module#BrandModule'
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
    loadChildren: 'app/general/admin-panel/admin-panel.module#AdminPanelModule'
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
