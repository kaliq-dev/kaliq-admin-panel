import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {GeneralRoutingModule} from './general-routing.module';
import {KqAdminDashboardComponent} from './dashboard/kq-admin-dashboard/kq-admin-dashboard.component';
import {UploadService} from './upload.service';
import {BrandService} from './brand/brand.service';
import {CustomHttpService} from '../custom-http.service';
import {SupplierService} from './supplier/supplier.service';
import {CategoryService} from './category/category.service';
import {ProductService} from './products/product.service';
import {DisplayImageModule} from './display-image/display-image.module';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule,
    ReactiveFormsModule,
    DisplayImageModule
  ],
  declarations: [
    KqAdminDashboardComponent
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
