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
  @ViewChild('compHeader') compHeader: ElementRef;
  oldCompHeaderWidth: number = 0;
  isActiveLink: string;
  dataSources: DataSource[];
  formType: string;
  compCount: number;

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

    this.sidebarLogoService.isSbExpanded.subscribe(val => {
      // Kind of a hack - and I'm not sure why it does this but when the sidebar contracts
      // the value of compHeader is still the width *before* the sidebar contracts.  It doesn't
      // happen when the sidebar expands, so this is just a hack for that situation.  I set a
      // quick wait (setTimeout) and then get the width.
      // Just need this to trigger the compHeaderWidth calculation when the SB contracts
      let globalThis = this;
      if (val === false) {
        setTimeout(function () { globalThis.updateCompHeaderWidth(); }, 100);
        //this.updateCompHeaderWidth();
      }
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
