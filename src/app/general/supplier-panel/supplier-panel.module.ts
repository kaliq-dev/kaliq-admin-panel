import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KqSupplierDashboardComponent} from './kq-supplier-dashboard/kq-supplier-dashboard.component';
import {SupplierPanelRoutingModule} from './supplier-panel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SupplierPanelRoutingModule
  ],
  declarations: [
    KqSupplierDashboardComponent
  ],
  providers: []
})
export class SupplierPanelModule {
}


