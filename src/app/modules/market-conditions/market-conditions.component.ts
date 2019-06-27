import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market-conditions',
  templateUrl: './market-conditions.component.html',
  styleUrls: ['./market-conditions.component.scss', '../../ui/header/header.component.scss']
})
export class MarketConditionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private isActive(): string {
    // This seems like a hack
    // Just to get two routes to show active on the same tab
    return this.router.isActive('/market-conditions', true) || this.router.isActive('/market-conditions/report', false) ? 'active' : '';
  }

}
