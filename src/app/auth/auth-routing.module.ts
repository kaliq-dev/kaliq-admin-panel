import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {KqLoginComponent} from './kq-login/kq-login.component';

const generalRoutes = [
  {
    path: '',
    component: KqLoginComponent
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
export class AuthRoutingModule {
}
