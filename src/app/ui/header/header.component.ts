import { Component, OnInit } from '@angular/core';
//import { HeaderServiceService } from './core/services/header-service.service';
//import { SidebarLogoService } from '../../../core/services/sidebar-logo.service';
import { SidebarLogoService } from '../../core/services/sidebar-logo.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DistinctSubscriber } from 'rxjs/internal/operators/distinct';

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

  constructor(private sidebarLogoService: SidebarLogoService) { }

  ngOnInit() {

    const navBgColor = getComputedStyle(document.querySelector('nav.navbar')).backgroundColor;
    if (navBgColor === 'rgb(16, 42, 67)') {  // if theme is dark (rgb(16, 42, 67) is the dark bg color on the navbar)
      this.logoSrc = '/assets/images/dm-icon-white.png';
    }

    this.sidebarLogoService.isSbExpanded.subscribe(val => {
      this.logoSrc = val == true ? this.logoSrcExpanded : this.logoSrcCollapsed;
    });

    this.sidebarLogoService.sidebarWidth
      .subscribe(val => {
        //console.log(val);
        (document.querySelector('.logo') as HTMLElement).style.width = val + 'px';
        //(document.querySelector('.logo') as HTMLElement).style.minWidth = val + 'px';
      });


  }

}
