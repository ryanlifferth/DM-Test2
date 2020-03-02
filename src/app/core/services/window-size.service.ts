import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent, Subject } from 'rxjs';
import { WindowSize } from '../models/window-size';
import { map } from 'rxjs/operators';
import { EventManager } from '@angular/platform-browser';
import { ScreenSize } from '../enums/screen-size';

// This service example taken from https://stackblitz.com/edit/angular-window-size-observable?file=app%2Fwindow.component.ts
@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {

  private windowSize = new Subject<WindowSize>();
  screenSize = new Subject<ScreenSize>();

  constructor() {}

  getWindowSize(): Observable<WindowSize> {
    return this.windowSize.asObservable();
  }

  getScreenSize(): Observable<ScreenSize> {
    return this.screenSize.asObservable();
  }

  setWindowSize(value: WindowSize): void {
    this.windowSize.next(value);
    this.setScreenSize(value);
  }

  private setScreenSize(value: WindowSize): void {
    
    this.screenSize.next(ScreenSize.LG);  // Default value

    if (value.width >= 1400) {
      this.screenSize.next(ScreenSize.XXL);
    } else if (value.width < 1400 && value.width >= 1200) {
      this.screenSize.next(ScreenSize.XL);
    } else if (value.width < 1200 && value.width >= 992) {
      this.screenSize.next(ScreenSize.LG);
    } else if (value.width < 992 && value.width >= 768) {
      this.screenSize.next(ScreenSize.MD);
    } else if (value.width < 768 && value.width >= 576) {
      this.screenSize.next(ScreenSize.SM);
    } else if (value.width < 576 && value.width >= 0) {
      this.screenSize.next(ScreenSize.XS);
    }

  }
}
