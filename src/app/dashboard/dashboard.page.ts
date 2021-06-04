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

  companiesIndex() {
    this.router.navigate(['/tabs/companies-index']);
  }

   productsIndex() {
    this.router.navigate(['/tabs/index-product']);
  }

  paymethodsIndex() {
    this.router.navigate(['/tabs/index-paymethod']);
  }

  invoicesIndex() {
    this.router.navigate(['/tabs/index-invoice']);
  }
}
