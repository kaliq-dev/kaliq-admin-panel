import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralRoutingModule} from './general-routing.module';
import {KqProductCreateComponent} from './products/kq-product-create/kq-product-create.component';
import {KqProductListComponent} from './products/kq-product-list/kq-product-list.component';
import { KqAdminDashboardComponent } from './dashboard/kq-admin-dashboard/kq-admin-dashboard.component';
import { KqCategoryCreateComponent } from './category/kq-category-create/kq-category-create.component';
import { KqCategoryListComponent } from './category/kq-category-list/kq-category-list.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule
  ],
  declarations: [
    KqProductCreateComponent,
    KqProductListComponent,
    KqAdminDashboardComponent,
    KqCategoryCreateComponent,
    KqCategoryListComponent,
  ],
  exports: [
  ],
  providers: []
})
export class GeneralModule {
}
