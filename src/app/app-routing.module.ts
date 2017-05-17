import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: 'app/general/general.module#GeneralModule'
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
