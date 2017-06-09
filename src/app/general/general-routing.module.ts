import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {KqProductCreateComponent} from './products/kq-product-create/kq-product-create.component';
import {KqProductListComponent} from './products/kq-product-list/kq-product-list.component';
import { KqAdminDashboardComponent } from './dashboard/kq-admin-dashboard/kq-admin-dashboard.component';
import { KqCategoryCreateComponent } from './category/kq-category-create/kq-category-create.component';

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
    component: KqCategoryCreateComponent
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
