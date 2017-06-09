import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {KqProductCreateComponent} from './products/kq-product-create/kq-product-create.component';
import {KqProductListComponent} from './products/kq-product-list/kq-product-list.component';
import {KqAdminDashboardComponent} from './dashboard/kq-admin-dashboard/kq-admin-dashboard.component';
import {KqCategoryCreateEditComponent} from './category/kq-category-create-edit/kq-category-create-edit.component';
import {KqSupplierCreateEditComponent} from './supplier/kq-supplier-create-edit/kq-supplier-create-edit.component';
import {KqBrandCreateEditComponent} from './brand/kq-brand-create-edit/kq-brand-create-edit.component';

const generalRoutes = [
  {
    path: 'admin/product/create',
    component: KqProductCreateComponent,
  },
  {
    path: 'admin/product/list',
    component: KqProductListComponent
  },
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
