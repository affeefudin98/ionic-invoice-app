import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePaymethodPageRoutingModule } from './create-paymethod-routing.module';

import { CreatePaymethodPage } from './create-paymethod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePaymethodPageRoutingModule
  ],
  declarations: [CreatePaymethodPage]
})
export class CreatePaymethodPageModule {}
