import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { NewsFeed } from '../models/news-feed';
import { Item } from '../models/item';
import { NEWSFEED } from '../models/mocks/mock-news-feed';
import { Options } from 'selenium-webdriver/edge';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsFeed(): Observable<NewsFeed[]> {
    return of(NEWSFEED);  // Mock

    //const url = environment.newsFeedUrl + '/all';
    //const requestOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Controll-Allow-Origin': '*' }) };
    //const results = this.http.get<NewsFeed[]>(url, requestOptions);  // I don't think this will work - need to scrub the data
    //return results;  // TODO:  Need to normalize the results 
  }

}
