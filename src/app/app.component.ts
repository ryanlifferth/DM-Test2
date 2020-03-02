import { Component } from '@angular/core';
import { WindowSizeService } from './core/services/window-size.service';
import { WindowSize } from './core/models/window-size';

//declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent {
  title = 'dm-test2';

  constructor(private windowSizeService: WindowSizeService) {
    //console.log(window.innerWidth);
    this.windowSizeService.setWindowSize(<WindowSize>{
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  
  
  onResize(event) {
    console.log(event.target.innerWidth);
    this.windowSizeService.setWindowSize(<WindowSize>{
      height: event.target.innerHeight,
      width: event.target.innerWidth
    });
  }
}
