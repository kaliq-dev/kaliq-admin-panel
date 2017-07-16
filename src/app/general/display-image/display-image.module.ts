import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThumbImageComponent} from './thumb-image/thumb-image.component';
import {DisplaySingleImageComponent} from './display-single-image/display-single-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DisplaySingleImageComponent,
    ThumbImageComponent
  ],
  declarations: [
    ThumbImageComponent,
    DisplaySingleImageComponent
  ],
  providers: []
})
export class DisplayImageModule {
}
