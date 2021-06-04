import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
       {
        path: 'companies-index',
        loadChildren: () => import('../companies/index/index.module').then( m => m.IndexPageModule)
      },
      {
        path: 'index-product',
        loadChildren: () => import('../products/index-product/index-product.module').then( m => m.IndexProductPageModule)
      },
      {
        path: 'index-paymethod',
        loadChildren: () => import('../paymethods/index-paymethod/index-paymethod.module').then( m => m.IndexPaymethodPageModule)
      },
      {
        path: 'index-invoice',
        loadChildren: () => import('../invoices/index-invoice/index-invoice.module').then( m => m.IndexInvoicePageModule)
      },
      // {
      //   path: 'tab1',
      //   loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      // },
      // {
      //   path: 'tab2',
      //   loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      // },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
