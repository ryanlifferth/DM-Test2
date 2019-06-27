import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderNavService {
  isNavVisible = new Subject<boolean>();

  constructor() { }

  getShowNav(): Observable<boolean> {
    return this.isNavVisible.asObservable();
  }

  setShowNav(activatedParentRoute: string): void {
    switch (activatedParentRoute) {
      case 'Subject':
      case 'Comparables':
      case 'market-conditions':
      case 'Summary': {
        this.isNavVisible.next(true);
        break;
      }
      default:
        this.isNavVisible.next(false);
        break;
    }
  }

}
