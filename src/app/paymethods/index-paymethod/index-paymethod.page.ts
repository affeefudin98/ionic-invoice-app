import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-paymethod',
  templateUrl: './index-paymethod.page.html',
  styleUrls: ['./index-paymethod.page.scss'],
})
export class IndexPaymethodPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  paymethodCreate() {
    this.router.navigate(['/create-paymethod']);
  }

}
