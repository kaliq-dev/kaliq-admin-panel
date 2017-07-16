import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DisplayImageModule} from '../display-image/display-image.module';
import {KqCategoryListComponent} from './kq-category-list/kq-category-list.component';
import {KqCategoryCreateEditComponent} from './kq-category-create-edit/kq-category-create-edit.component';
import {CategoryRoutingModule} from './category-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DisplayImageModule,
    CategoryRoutingModule
  ],
  declarations: [
    KqCategoryCreateEditComponent,
    KqCategoryListComponent
  ],
  providers: []
})
export class CategoryModule {
}


