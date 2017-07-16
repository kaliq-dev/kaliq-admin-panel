import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

export const appRoutes: Routes = [
  {
    path: 'kq/dashboard',
    loadChildren: 'app/general/general.module#GeneralModule'
  },
  {
    path: 'kq/brand',
    loadChildren: 'app/general/brand/brand.module#BrandModule'
  },
  {
    path: 'kq/category',
    loadChildren: 'app/general/category/category.module#CategoryModule'
  },
  {
    path: 'kq/supplier',
    loadChildren: 'app/general/supplier/supplier.module#SupplierModule'
  },
  {
    path: 'kq/product',
    loadChildren: 'app/general/products/product.module#ProductModule'
  },
  {
    path: 'kq/customer-panel',
    loadChildren: 'app/general/customer-panel/customer-panel.module#CustomerPanelModule'
  },
  {
    path: 'kq/admin-panel',
    loadChildren: 'app/general/admin-panel/admin-panel.module#AdminPanelModule'
  },
  {
    path: 'kq/supplier-panel',
    loadChildren: 'app/general/supplier-panel/supplier-panel.module#SupplierPanelModule'
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

export class AppRoutingModule {
}
