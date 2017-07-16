import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {KqBrandCreateEditComponent} from './kq-brand-create-edit/kq-brand-create-edit.component';

const brandRoutes: Routes = [
  {
    path: '',
    component: KqBrandCreateEditComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(brandRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BrandRoutingModule {
}
