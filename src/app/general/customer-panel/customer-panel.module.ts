import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KqCustomerDashboardComponent} from './kq-customer-dashboard/kq-customer-dashboard.component';
import {CustomerPanelRoutingModule} from './customer-panel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerPanelRoutingModule
  ],
  declarations: [
    KqCustomerDashboardComponent
  ],
  providers: []
})
export class CustomerPanelModule {
}
