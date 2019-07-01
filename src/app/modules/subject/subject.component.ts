import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss', '../../ui/header/header.component.scss']
})
export class SubjectComponent implements OnInit {
  isActiveLink: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isActiveLink = this.isActive();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((value: NavigationEnd) => {
        //this.isActiveLink = this.activatedRoute.firstChild.routeConfig.path === '' || this.activatedRoute.firstChild.routeConfig.path === 'grid' ? 'active' : '';
        this.isActiveLink = value.url === '/Subject' || value.url === '/Subject/detail' ? 'active' : '';
      });

  }

  private isActive(): string {
    // This seems like a hack
    // Just to get two routes to show active on the same tab
    return this.router.isActive('/Subject', true) || this.router.isActive('/Subject/detail', false) ? 'active' : '';
  }

}
