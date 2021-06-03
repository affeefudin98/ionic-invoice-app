import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexInvoicePageRoutingModule } from './index-invoice-routing.module';

import { IndexInvoicePage } from './index-invoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexInvoicePageRoutingModule
  ],
  declarations: [IndexInvoicePage]
})
export class IndexInvoicePageModule {}
