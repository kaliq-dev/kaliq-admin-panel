import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DisplayImageModule} from '../display-image/display-image.module';
import {KqSupplierListComponent} from './kq-supplier-list/kq-supplier-list.component';
import {KqSupplierCreateEditComponent} from './kq-supplier-create-edit/kq-supplier-create-edit.component';
import {SupplierRoutingModule} from './supplier-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DisplayImageModule,
    SupplierRoutingModule
  ],
  declarations: [
    KqSupplierListComponent,
    KqSupplierCreateEditComponent
  ],
  providers: []
})
export class SupplierModule {
}


