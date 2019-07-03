import { Injectable, ElementRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompHeaderService {
  compHeaderWidth = new Subject<number>();

  constructor() { }

  getCompHeaderWidth(): Observable<number> {
    return this.compHeaderWidth.asObservable();
  }

  setCompHeaderWidth(compHeaderWidth: number): void {
    this.compHeaderWidth.next(compHeaderWidth);
  }

}
