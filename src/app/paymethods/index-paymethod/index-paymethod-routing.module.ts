import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPaymethodPage } from './index-paymethod.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPaymethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPaymethodPageRoutingModule {}
