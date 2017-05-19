import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {KqProductCreateComponent} from './products/kq-product-create/kq-product-create.component';
import {KqProductListComponent} from './products/kq-product-list/kq-product-list.component';

const generalRoutes = [
  {
    path: 'admin/product/create',
    component: KqProductCreateComponent,
  },
  {
    path: 'admin/product/list',
    component: KqProductListComponent
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
