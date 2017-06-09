import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralRoutingModule} from './general-routing.module';
import {KqProductCreateComponent} from './products/kq-product-create/kq-product-create.component';
import {KqProductListComponent} from './products/kq-product-list/kq-product-list.component';
import { KqAdminDashboardComponent } from './dashboard/kq-admin-dashboard/kq-admin-dashboard.component';
import { KqCategoryListComponent } from './category/kq-category-list/kq-category-list.component';
import { KqCategoryCreateEditComponent } from './category/kq-category-create-edit/kq-category-create-edit.component';
import { KqSupplierCreateEditComponent } from './supplier/kq-supplier-create-edit/kq-supplier-create-edit.component';
import { KqSupplierListComponent } from './supplier/kq-supplier-list/kq-supplier-list.component';
import { KqBrandCreateEditComponent } from './brand/kq-brand-create-edit/kq-brand-create-edit.component';
import { KqBrandListComponent } from './brand/kq-brand-list/kq-brand-list.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule
  ],
  declarations: [
    KqProductCreateComponent,
    KqProductListComponent,
    KqAdminDashboardComponent,
    KqCategoryListComponent,
    KqCategoryCreateEditComponent,
    KqSupplierCreateEditComponent,
    KqSupplierListComponent,
    KqBrandCreateEditComponent,
    KqBrandListComponent,
  ],
  exports: [
  ],
  providers: []
})
export class GeneralModule {
}
