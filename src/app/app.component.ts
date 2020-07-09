import { Component, AfterViewChecked, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { WindowSizeService } from './core/services/window-size.service';
import { WindowSize } from './core/models/window-size';
import { SidebarLogoService } from './core/services/sidebar-logo.service';

//declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent implements AfterViewInit {
  title = 'dm-test2';
  @ViewChild('appContainer', { static: true }) appContainer: ElementRef;

  constructor(private windowSizeService: WindowSizeService, private sidebarLogoService: SidebarLogoService) {
    //console.log(window.innerWidth);
    this.windowSizeService.setWindowSize(<WindowSize>{
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  ngAfterViewInit() {
    const screenWidth = this.appContainer.nativeElement.offsetWidth;
    if (screenWidth >= 1400) {
      //this.sidebarLogoService.setSidebarExpanded(true);  // Throws an error
      console.log('screenSize: EXPANDED');
    }
    //this.oldNavbarWidth = this.sideNavbar.nativeElement.offsetWidth;
    //this.sidebarLogoService.setSidebarWidth(this.sideNavbar.nativeElement.offsetWidth);
  }
  
  onResize(event) {
    console.log(event.target.innerWidth);
    this.windowSizeService.setWindowSize(<WindowSize>{
      height: event.target.innerHeight,
      width: event.target.innerWidth
    });
  }
}
