import { Component, OnInit, Inject, LOCALE_ID, Input } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Item } from '../../../core/models/item';
import { NewsFeed } from '../../../core/models/news-feed';
import { NewsService } from '../../../core/services/news.service';
import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss', '../home.component.scss']
})
export class NewsComponent implements OnInit {
  newsFeed: NewsFeed[];       // This is the object straight from the API
  items: Item[];      // This is the new "flattened" article feed that combines all articles from each rss channel
  articlesToShow: number;
  newsError: boolean = false;
  newsErrorMessage: string;

  constructor(private newsService: NewsService, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.articlesToShow = 15;  // Only show the top 5 stories by default

    this.getNewsFeed();

  }

  getNewsFeed(): void {
    this.newsService.getNewsFeed().subscribe(
      (newsFeed) => {
        this.newsError = false;
        this.newsErrorMessage = '';

        this.newsFeed = newsFeed;

        // flatten the news items out into a single list of new-items and order by date
        try {

          if (newsFeed === null) {
            this.newsError = true;
            this.newsErrorMessage = 'Nothing was returned from the news feed';
            return;
          }

          for (let feed of newsFeed) {
            feed.items.forEach(x => x.feedDisplayName = feed.feedDisplayName);
            if (this.items === undefined) {
              this.items = feed.items;
            } else {
              this.items = this.items.concat(feed.items);
            }
          }

          // sort descending
          this.items.sort((a, b) => a.publishDate > b.publishDate ? -1 : a.publishDate < b.publishDate ? 1 : 0);
        }
        catch (err) {
          // do something
          this.newsError = true;
          this.newsErrorMessage = 'News feed error: ' + err;
          console.log('caught news feed error: ' + err);
        }

      },
      (err) => {
        //alert('error: ' + err);
        this.newsError = true;
        this.newsErrorMessage = 'News feed error: ' + err;

        if (!navigator.onLine) this.newsErrorMessage = 'There is no internet connection';

        if (err.name === "HttpErrorResponse") {
          switch (err.status) {
            case 404:
              this.newsErrorMessage = "That info wasn't found (404)";
              break;
            case 401:
              this.newsErrorMessage = 'The news feed server is refusing our connection!';
              break;
            case 0:
            default:
              this.newsErrorMessage = "We can't connect to the news feed server";
              break;
          }
        }

        console.log('news feed error: ' + err);
      });
  }

  getDynamicDateLabel(modifiedDate: Date): string {
    var magicNumber = (1000 * 60 * 60 * 24); // Days
    var now: Date = new Date(Date.now());
    var dayDiff = Math.floor((now.valueOf() - modifiedDate.valueOf()) / magicNumber);
    var timeSpanLabel = 'days';

    if (dayDiff == 1) {   // 
      //if (dayDiff === 1) timeSpanLabel = 'day';
      return "yesterday";
    } else if (dayDiff === 0) {         // today
      dayDiff = Math.floor((now.valueOf() - modifiedDate.valueOf()) / (1000 * 60 * 60));  // for hours
      if (dayDiff > 10) {               // more than 10 hours ago
        return "today";
      } else {                          // less than 10 hours ago - show hour count
        timeSpanLabel = (dayDiff === 1) ? 'hour' : 'hours';
        return `${dayDiff} ${timeSpanLabel} ago`;
      }
    } else if (dayDiff > 1 && dayDiff < 6) {
      return `${dayDiff} ${timeSpanLabel} ago`;
    }
    else {
      return formatDate(modifiedDate, 'MMM dd, yyyy', this.locale);
    }

    return formatDate(modifiedDate, 'MMM dd, yyyy', this.locale);
  }

  showMoreArticles(): void {
    this.articlesToShow += 5;
  }

}
