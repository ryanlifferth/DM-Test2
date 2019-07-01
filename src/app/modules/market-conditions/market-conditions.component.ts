import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-market-conditions',
  templateUrl: './market-conditions.component.html',
  styleUrls: ['./market-conditions.component.scss', '../../ui/header/header.component.scss']
})
export class MarketConditionsComponent implements OnInit {
  isActiveLink: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isActiveLink = this.isActive();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((value: NavigationEnd) => {
        //this.isActiveLink = this.activatedRoute.firstChild.routeConfig.path === '' || this.activatedRoute.firstChild.routeConfig.path === 'grid' ? 'active' : '';
        this.isActiveLink = value.url === '/market-conditions' || value.url === '/market-conditions/report' ? 'active' : '';
      });
  }

  private isActive(): string {
    // This seems like a hack
    // Just to get two routes to show active on the same tab
    return this.router.isActive('/market-conditions', true) || this.router.isActive('/market-conditions/report', false) ? 'active' : '';
  }

}
