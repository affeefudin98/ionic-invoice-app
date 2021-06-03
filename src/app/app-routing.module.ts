import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
   {
     path: 'companies-create',
     loadChildren: () => import('./companies/create/create.module').then( m => m.CreatePageModule)
   },
  {
    path: 'companies-index',
    loadChildren: () => import('./companies/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'create-product',
    loadChildren: () => import('./products/create-product/create-product.module').then( m => m.CreateProductPageModule)
  },
  {
    path: 'index-product',
    loadChildren: () => import('./products/index-product/index-product.module').then( m => m.IndexProductPageModule)
  },
  {
    path: 'create-paymethod',
    loadChildren: () => import('./paymethods/create-paymethod/create-paymethod.module').then( m => m.CreatePaymethodPageModule)
  },
  {
    path: 'index-paymethod',
    loadChildren: () => import('./paymethods/index-paymethod/index-paymethod.module').then( m => m.IndexPaymethodPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
