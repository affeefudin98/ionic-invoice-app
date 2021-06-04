import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

   companyCreate() {
     this.router.navigate(['/tabs/companies-create']);
   }

   productCreate() {
    this.router.navigate(['/tabs/create-product']);
  }

  paymethodCreate() {
    this.router.navigate(['/tabs/create-paymethod']);
  }

  invoiceCreate() {
    this.router.navigate(['/tabs/create-invoice']);
  }
}
