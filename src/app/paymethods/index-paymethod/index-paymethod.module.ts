import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPaymethodPageRoutingModule } from './index-paymethod-routing.module';

import { IndexPaymethodPage } from './index-paymethod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPaymethodPageRoutingModule
  ],
  declarations: [IndexPaymethodPage]
})
export class IndexPaymethodPageModule {}
