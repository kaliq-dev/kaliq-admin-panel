import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {KqProductCreateEditComponent} from './kq-product-create-edit/kq-product-create-edit.component';

const productRoutes: Routes = [
  {
    path: '',
    component: KqProductCreateEditComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule {
}
