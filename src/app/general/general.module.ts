import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralRoutingModule} from './general-routing.module';
import {KqProductCreateComponent} from './products/kq-product-create/kq-product-create.component';
import { KqProductListComponent } from './products/kq-product-list/kq-product-list.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule
  ],
  declarations: [
    KqProductCreateComponent,
    KqProductListComponent
  ],
  exports: [],
  providers: []
})
export class GeneralModule {
}
