import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {KqSupplierCreateEditComponent} from './kq-supplier-create-edit/kq-supplier-create-edit.component';

const supplierRoutes: Routes = [
  {
    path: '',
    component: KqSupplierCreateEditComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(supplierRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SupplierRoutingModule {
}
