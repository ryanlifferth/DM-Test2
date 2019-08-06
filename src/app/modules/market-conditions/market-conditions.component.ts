import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { SidebarLogoService } from '../../core/services/sidebar-logo.service';

@Component({
  selector: 'app-market-conditions',
  templateUrl: './market-conditions.component.html',
  styleUrls: ['./market-conditions.component.scss', '../../ui/header/header.component.scss']
})
export class MarketConditionsComponent implements OnInit {
  isActiveLink: string;
  sidebarWidth: string = '-92px';  // default width of the sidebar (1/2 of the width)

  constructor(private router: Router, private sidebarLogoService: SidebarLogoService) { }

  ngOnInit() {
    this.isActiveLink = this.isActive();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((value: NavigationEnd) => {
        //this.isActiveLink = this.activatedRoute.firstChild.routeConfig.path === '' || this.activatedRoute.firstChild.routeConfig.path === 'grid' ? 'active' : '';
        this.isActiveLink = value.url === '/market-conditions' || value.url === '/market-conditions/report' ? 'active' : '';
      });

    this.sidebarWidth = '-' + (this.sidebarLogoService.currentSidebarWidth.getValue() / 2) + 'px';  // Get the initial value (BehaviorSubject)
    this.sidebarLogoService.getSidebarWidth().subscribe(width => {
      this.sidebarWidth = '-' + (width/2) + 'px';
    });
  }

  private isActive(): string {
    // This seems like a hack
    // Just to get two routes to show active on the same tab
    return this.router.isActive('/market-conditions', true) || this.router.isActive('/market-conditions/report', false) ? 'active' : '';
  }

}
