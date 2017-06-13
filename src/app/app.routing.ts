import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {path: '', redirectTo: 'kq/dashboard/home', pathMatch: 'full'},
  {path: '**', redirectTo: 'pages/page-404'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
