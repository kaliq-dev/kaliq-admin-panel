import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

const generalRoutes = [
  {
    path: '',
    component: DashboardComponent,
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
export class GeneralRoutingModule {}
