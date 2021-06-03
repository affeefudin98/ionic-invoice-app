import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexInvoicePage } from './index-invoice.page';

const routes: Routes = [
  {
    path: '',
    component: IndexInvoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexInvoicePageRoutingModule {}
