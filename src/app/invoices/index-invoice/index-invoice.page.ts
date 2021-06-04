import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-invoice',
  templateUrl: './index-invoice.page.html',
  styleUrls: ['./index-invoice.page.scss'],
})
export class IndexInvoicePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  invoiceCreate() {
    this.router.navigate(['/create-invoice']);
  }

}
