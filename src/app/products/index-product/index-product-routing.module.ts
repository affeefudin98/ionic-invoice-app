import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexProductPage } from './index-product.page';

const routes: Routes = [
  {
    path: '',
    component: IndexProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexProductPageRoutingModule {}
