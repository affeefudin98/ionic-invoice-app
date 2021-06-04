import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.page.html',
  styleUrls: ['./index-product.page.scss'],
})
export class IndexProductPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  productCreate() {
    this.router.navigate(['/create-product']);
  }

}
