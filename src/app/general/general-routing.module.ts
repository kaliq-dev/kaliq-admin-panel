import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {KqProductCreateComponent} from './products/kq-product-create/kq-product-create.component';

const generalRoutes = [
  {
    path: 'admin/product/create',
    component: KqProductCreateComponent,
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
