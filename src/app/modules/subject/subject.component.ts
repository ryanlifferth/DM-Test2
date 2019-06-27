import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss', '../../ui/header/header.component.scss']
})
export class SubjectComponent implements OnInit {
  defaultActive: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private isActive(): string {
    // This seems like a hack
    // Just to get two routes to show active on the same tab
    return this.router.isActive('/Subject', true) || this.router.isActive('/Subject/detail', false) ? 'active' : '';
  }

}
