import { Injectable, ElementRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarLogoService {
  isSbExpanded = new Subject<boolean>();
  sidebarWidth = new Subject<number>();

  constructor() { }

  getSidebarExpanded(): Observable<boolean> {
    return this.isSbExpanded.asObservable();
  }

  getSidebarWidth(): Observable<number> {
    return this.sidebarWidth.asObservable();
  }

  setSidebarExpanded(isExpanded: boolean): void {
    this.isSbExpanded.next(isExpanded);
  }

  setSidebarWidth(sidebarWidth: number): void {
    this.sidebarWidth.next(sidebarWidth);
  }

}
