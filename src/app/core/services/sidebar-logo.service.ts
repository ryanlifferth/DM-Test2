import { Injectable, ElementRef } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidebarLogoService {
  isSbExpanded = new Subject<boolean>();
  sidebarWidth = new Subject<number>();
  currentSidebarWidth = new BehaviorSubject<number>(0);  // to emit the current value

  constructor() { }

  getSidebarExpanded(): Observable<boolean> {
    return this.isSbExpanded.asObservable().pipe(delay(1));
  }


  getSidebarWidth(): Observable<number> {
    return this.sidebarWidth.asObservable().pipe(delay(1));
  }

  getSidebarWidthInitial(): any {
    return this.sidebarWidth;
  }

  setSidebarExpanded(isExpanded: boolean): void {
    this.isSbExpanded.next(isExpanded);
  }

  setSidebarWidth(sidebarWidth: number): void {
    this.sidebarWidth.next(sidebarWidth);
    this.currentSidebarWidth.next(sidebarWidth);
  }

}
