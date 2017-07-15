import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KqLoginComponent} from './kq-login/kq-login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    KqLoginComponent
  ],
  exports: [
    KqLoginComponent
  ],
  providers: []
})
export class AuthModule {
}
