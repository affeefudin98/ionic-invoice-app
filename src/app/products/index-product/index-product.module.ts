import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexProductPageRoutingModule } from './index-product-routing.module';

import { IndexProductPage } from './index-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexProductPageRoutingModule
  ],
  declarations: [IndexProductPage]
})
export class IndexProductPageModule {}
