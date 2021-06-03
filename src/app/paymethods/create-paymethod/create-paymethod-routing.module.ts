import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePaymethodPage } from './create-paymethod.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePaymethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePaymethodPageRoutingModule {}
