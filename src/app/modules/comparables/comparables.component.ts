import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comparables',
  templateUrl: './comparables.component.html',
  styleUrls: ['./comparables.component.scss', '../../ui/header/header.component.scss']
})
export class ComparablesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private isActive(): string {
    // This seems like a hack
    // Just to get two routes to show active on the same tab
    return this.router.isActive('/Comparables', true) || this.router.isActive('/Comparables/grid', false) ? 'active' : '';
  }

}
