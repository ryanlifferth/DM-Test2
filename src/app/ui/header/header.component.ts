import { Component, OnInit } from '@angular/core';
//import { HeaderServiceService } from './core/services/header-service.service';
//import { SidebarLogoService } from '../../../core/services/sidebar-logo.service';
import { SidebarLogoService } from '../../core/services/sidebar-logo.service';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { DistinctSubscriber } from 'rxjs/internal/operators/distinct';
import { HeaderNavService } from '../../core/services/header-nav.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //logoSrc = '/assets/images/dm-icon.svg';
  logoSrc = '/assets/images/web-logo-white.png';
  logoSrcExpanded = '/assets/images/web-logo-white.png';
  logoSrcCollapsed = '/assets/images/dm-icon-white.png';
  logoSize = '30';
  navVisible: boolean = false;

  constructor(private sidebarLogoService: SidebarLogoService,
    private headerNavService: HeaderNavService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const navBgColor = getComputedStyle(document.querySelector('nav.navbar')).backgroundColor;
    if (navBgColor === 'rgb(16, 42, 67)') {  // if theme is dark (rgb(16, 42, 67) is the dark bg color on the navbar)
      this.logoSrc = '/assets/images/dm-icon-white.png';
    }

    this.sidebarLogoService.isSbExpanded.subscribe(val => {
      this.logoSrc = val == true ? this.logoSrcExpanded : this.logoSrcCollapsed;
    });

    this.headerNavService.isNavVisible.subscribe(val => {
      this.navVisible = val;
    });

    this.sidebarLogoService.sidebarWidth
      .subscribe(val => {
        //console.log(val);
        (document.querySelector('.logo') as HTMLElement).style.width = val + 'px';
        //(document.querySelector('.logo') as HTMLElement).style.minWidth = val + 'px';
      });

    // This is used to get the parent route to determine whether or not the top nav header menu should be shown
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((value: NavigationEnd) => {
        //https://stackoverflow.com/questions/48058681/how-to-get-active-child-route-in-parent-component-angular-2
        //console.log(value['url']);
        //console.log(this.activatedRoute.firstChild.routeConfig.path);
        this.headerNavService.setShowNav(this.activatedRoute.firstChild.routeConfig.path);
      });


  }

}
