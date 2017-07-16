import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DisplayImageModule} from '../display-image/display-image.module';
import {KqProductListComponent} from './kq-product-list/kq-product-list.component';
import {KqProductCreateEditComponent} from './kq-product-create-edit/kq-product-create-edit.component';
import {ProductRoutingModule} from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DisplayImageModule,
    ProductRoutingModule
  ],
  declarations: [
    KqProductListComponent,
    KqProductCreateEditComponent
  ],
  providers: []
})
export class ProductModule {
}


