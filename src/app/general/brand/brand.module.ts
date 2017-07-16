import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {KqBrandCreateEditComponent} from './kq-brand-create-edit/kq-brand-create-edit.component';
import {KqBrandListComponent} from './kq-brand-list/kq-brand-list.component';
import {BrandRoutingModule} from './brand-routing.module';
import {DisplayImageModule} from '../display-image/display-image.module';

@NgModule({
  imports: [
    CommonModule,

    BrandRoutingModule,
    ReactiveFormsModule,
    DisplayImageModule
  ],
  declarations: [
    KqBrandCreateEditComponent,
    KqBrandListComponent
  ],
  providers: []
})
export class BrandModule {
}


