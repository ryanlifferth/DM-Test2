import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { SidebarLogoService } from '../../core/services/sidebar-logo.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss', '../../ui/header/header.component.scss']
})
export class SubjectComponent implements OnInit {
  isActiveLink: string;
  sidebarWidth: string;

  constructor(private router: Router, private sidebarLogoService: SidebarLogoService) {
    this.sidebarLogoService.sidebarWidth.subscribe(width => {
      this.sidebarWidth = '-' + (width / 2) + 'px';
    });
  }

  ngOnInit() {
    this.isActiveLink = this.isActive();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((value: NavigationEnd) => {
        //this.isActiveLink = this.activatedRoute.firstChild.routeConfig.path === '' || this.activatedRoute.firstChild.routeConfig.path === 'grid' ? 'active' : '';
        this.isActiveLink = value.url === '/Subject' || value.url === '/Subject/detail' ? 'active' : '';
      });

    // This is a display hack to make the submenu align left with main menu items, which is offset exactly by the width of the sidebar
    // since the main menu is 100% width of the visible area and the submenu is only the width of the component
    this.sidebarWidth = '-' + (this.sidebarLogoService.currentSidebarWidth.getValue() / 2) + 'px';  // Get the initial value (BehaviorSubject)
    this.sidebarLogoService.sidebarWidth.subscribe(width => {
      this.sidebarWidth = '-' + (width / 2) + 'px';  
    });

  }

  private isActive(): string {
    // This seems like a hack
    // Just to get two routes to show active on the same tab
    return this.router.isActive('/Subject', true) || this.router.isActive('/Subject/detail', false) ? 'active' : '';
  }

}
