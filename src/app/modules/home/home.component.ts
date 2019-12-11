import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsComponent } from './news/news.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('news', { static: true }) newsChild: NewsComponent;

  newsToggleStateClass: string;

  constructor() { }

  ngOnInit() {
  }

  onToggleNews(event: string) {
    this.newsToggleStateClass = this.newsToggleStateClass === 'news-toggled' ? '' : 'news-toggled';
  }

  //onAddressResults(event: PropertySearchResult[]) {
  //  //this.clearSearchResults();

  //  this.searchResults = event;
  //  this.showResults()  // show the modal with the results
  //  this.searchType = PropertySearchType.PublicRecords;
  //  this.TEMPsearchSource = "CoreLogic";
  //}

}
