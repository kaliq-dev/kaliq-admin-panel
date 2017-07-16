import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

export const appRoutes: Routes = [
  {
    path: 'kq/dashboard',
    loadChildren: 'app/general/general.module#GeneralModule'
  },
  {
    path: 'kq/login',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: '**', redirectTo: 'pages/page-404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
