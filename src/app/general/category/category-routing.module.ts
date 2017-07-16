import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {KqCategoryCreateEditComponent} from './kq-category-create-edit/kq-category-create-edit.component';

const categoryRoutes: Routes = [
  {
    path: '',
    component: KqCategoryCreateEditComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(categoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoryRoutingModule {
}
