import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {GeneralRoutingModule} from './general-routing.module';
import {KqProductListComponent} from './products/kq-product-list/kq-product-list.component';
import {KqAdminDashboardComponent} from './dashboard/kq-admin-dashboard/kq-admin-dashboard.component';
import {KqCategoryListComponent} from './category/kq-category-list/kq-category-list.component';
import {KqCategoryCreateEditComponent} from './category/kq-category-create-edit/kq-category-create-edit.component';
import {KqSupplierCreateEditComponent} from './supplier/kq-supplier-create-edit/kq-supplier-create-edit.component';
import {KqSupplierListComponent} from './supplier/kq-supplier-list/kq-supplier-list.component';
import {KqBrandCreateEditComponent} from './brand/kq-brand-create-edit/kq-brand-create-edit.component';
import {KqBrandListComponent} from './brand/kq-brand-list/kq-brand-list.component';
import {KqProductCreateEditComponent} from './products/kq-product-create-edit/kq-product-create-edit.component';
import {UploadService} from './upload.service';
import {BrandService} from './brand/brand.service';
import {CustomHttpService} from '../custom-http.service';
import {SupplierService} from './supplier/supplier.service';
import {CategoryService} from './category/category.service';
import {ProductService} from './products/product.service';
import {KqCustomerDashboardComponent} from './customer-panel/kq-customer-dashboard/kq-customer-dashboard.component';
import {KqSupplierDashboardComponent} from './supplier-panel/kq-supplier-dashboard/kq-supplier-dashboard.component';
import {KqAdminPanelDashboardComponent} from './admin-panel/kq-admin-panel-dashboard/kq-admin-panel-dashboard.component';
import {DisplaySingleImageComponent} from './display-image/display-single-image/display-single-image.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    KqProductListComponent,
    KqAdminDashboardComponent,
    KqCategoryListComponent,
    KqCategoryCreateEditComponent,
    KqSupplierCreateEditComponent,
    KqSupplierListComponent,
    KqBrandCreateEditComponent,
    KqBrandListComponent,
    KqProductCreateEditComponent,
    KqCustomerDashboardComponent,
    KqSupplierDashboardComponent,
    KqAdminPanelDashboardComponent,
    DisplaySingleImageComponent,
  ],
  exports: [],
  providers: [
    UploadService,
    BrandService,
    CustomHttpService,
    SupplierService,
    CategoryService,
    ProductService
  ]
})
export class GeneralModule {
}
