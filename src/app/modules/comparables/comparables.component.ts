import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataSource } from '../../core/models/data-source';
import { DataSourceService } from '../../core/services/data-source.service';

@Component({
  selector: 'app-comparables',
  templateUrl: './comparables.component.html',
  styleUrls: ['./comparables.component.scss', '../../ui/header/header.component.scss']
})
export class ComparablesComponent implements OnInit {
  isActiveLink: string;
  dataSources: DataSource[];
  formType: string;
  compCount: number;

  constructor(private router: Router, private dataSourceService: DataSourceService) { }

  ngOnInit() {
    this.isActiveLink = this.isActive();
    this.getDataSources();
    this.formType = "1004 URAR - UAD";
    this.compCount = 5;
  }

  private isActive(): string {
    // This seems like a hack
    // Just to get two routes to show active on the same tab
    return this.router.isActive('/Comparables', true) || this.router.isActive('/Comparables/grid', false) ? 'active' : '';
  }

  getDataSources(): void {
    this.dataSourceService.getDataSources()
      .subscribe(dataSources => {
        this.dataSources = dataSources;
      });
  }

}
