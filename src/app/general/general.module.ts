import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralRoutingModule} from './general-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule
  ],
  declarations: [DashboardComponent],
  exports: [],
  providers: []
})
export class GeneralModule {
}
