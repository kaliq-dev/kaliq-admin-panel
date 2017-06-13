import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {KqAdminDashboardComponent} from './dashboard/kq-admin-dashboard/kq-admin-dashboard.component';
import {KqCategoryCreateEditComponent} from './category/kq-category-create-edit/kq-category-create-edit.component';
import {KqSupplierCreateEditComponent} from './supplier/kq-supplier-create-edit/kq-supplier-create-edit.component';
import {KqBrandCreateEditComponent} from './brand/kq-brand-create-edit/kq-brand-create-edit.component';
import {KqProductCreateEditComponent} from './products/kq-product-create-edit/kq-product-create-edit.component';

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
