import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { DataSource } from '../../core/models/data-source';
import { DataSourceService } from '../../core/services/data-source.service';
import { filter } from 'rxjs/operators';
import { CompHeaderService } from '../../core/services/comp-header.service';
import { SidebarLogoService } from '../../core/services/sidebar-logo.service';


@Component({
  selector: 'app-comparables',
  templateUrl: './comparables.component.html',
  styleUrls: ['./comparables.component.scss', '../../ui/header/header.component.scss']
})
export class ComparablesComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('compHeader', { static: true }) compHeader: ElementRef;
  oldCompHeaderWidth: number = 0;
  isActiveLink: string;
  dataSources: DataSource[];
  formType: string;
  compCount: number;
  sidebarWidth: string;  // default width of the sidebar (1/2 of the width)

  constructor(private router: Router,
    private dataSourceService: DataSourceService,
    private compHeaderService: CompHeaderService,
    private sidebarLogoService: SidebarLogoService) { }

  ngOnInit() {
    this.isActiveLink = this.isActive();
    this.getDataSources();
    this.formType = "1004 URAR - UAD";
    this.compCount = 6;

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((value: NavigationEnd) => {
        //this.isActiveLink = this.activatedRoute.firstChild.routeConfig.path === '' || this.activatedRoute.firstChild.routeConfig.path === 'grid' ? 'active' : '';
        this.isActiveLink = value.url === '/Comparables' || value.url === '/Comparables/grid' ? 'active' : '';
      });

    this.sidebarLogoService.getSidebarExpanded().subscribe(val => {
      if (val === false) {
        this.updateCompHeaderWidth();
      }
    });


    this.sidebarWidth = '-' + (this.sidebarLogoService.currentSidebarWidth.getValue() / 2) + 'px';  // Get the initial value (BehaviorSubject)
    this.sidebarLogoService.getSidebarWidth().subscribe(width => {
      this.sidebarWidth = '-' + (width / 2) + 'px';
    });

  }

  ngAfterViewInit() {
    this.oldCompHeaderWidth = this.compHeader.nativeElement.offsetWidth;
    this.compHeaderService.setCompHeaderWidth(this.compHeader.nativeElement.offsetWidth);
    console.log('width from DoCheck: ' + this.compHeader.nativeElement.offsetWidth);
  }

  ngAfterViewChecked() {
    this.updateCompHeaderWidth();
  }

  public onResize(event: Event) {
    this.updateCompHeaderWidth();
  }

  private updateCompHeaderWidth(): void {
    if (this.oldCompHeaderWidth !== this.compHeader.nativeElement.offsetWidth) {
      this.compHeaderService.setCompHeaderWidth(this.compHeader.nativeElement.offsetWidth);
      this.oldCompHeaderWidth = this.compHeader.nativeElement.offsetWidth;
      console.log('Width from updateCompHeaderWidth function: ' + this.compHeader.nativeElement.offsetWidth);
    }
  }


  private isActive(): string {
    // This seems like a hack
    // Just to get two routes to show active on the same tab
    return this.router.isActive('/Comparables', false) || this.router.isActive('/Comparables/grid', false) ? 'active' : '';
  }

  getDataSources(): void {
    this.dataSourceService.getDataSources()
      .subscribe(dataSources => {
        this.dataSources = dataSources;
      });
  }

}
