import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  articles: any[] = [
    { title: 'Grails 4 Tutorial: Spring Security Core Login Example', image: './assets/images/cat1.jpg' },
    { title: 'Angular Material Form Controls, Form Field and Input Examples', image: './assets/images/cat2.jpg' },
    { title: 'Angular 8 Tutorial: Observable and RXJS Examples', image: './assets/images/cat3.jpg' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // companiesCreate() {
  //   this.router.navigate(['/companies-create']);
  // }
}
