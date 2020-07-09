import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NewsComponent } from './news/news.component';
import { WindowSize } from '../../core/models/window-size';
import { WindowSizeService } from '../../core/services/window-size.service';
import { ScreenSize } from '../../core/enums/screen-size';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('news', { static: true }) newsChild: NewsComponent;
  newsToggleStateClass: string;
  private window: WindowSize;
  private screenSize: ScreenSize;
  private screenSizeName: string;

  constructor(private windowSizeService: WindowSizeService) { }

  ngOnInit() {

    // Example of how to use screen size
    //this.windowSizeService.screenSize.subscribe(val => {
    //  this.screenSize = val;
    //  this.screenSizeName = this.getEnumKeyByEnumValue(val);
    //})

  }

  onToggleNews(event: string) {
    this.newsToggleStateClass = this.newsToggleStateClass === 'news-toggled' ? '' : 'news-toggled';
  }


  //getEnumKeyByEnumValue(enumValue: number): string {
  //  let keys = Object.keys(ScreenSize).filter(x => ScreenSize[x] === enumValue);
  //  return keys.length > 0 ? keys[0] : '';
  //}

  //onAddressResults(event: PropertySearchResult[]) {
  //  //this.clearSearchResults();

  //  this.searchResults = event;
  //  this.showResults()  // show the modal with the results
  //  this.searchType = PropertySearchType.PublicRecords;
  //  this.TEMPsearchSource = "CoreLogic";
  //}

}
