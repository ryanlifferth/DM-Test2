import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { PropertySearchResult } from '../models/property-search-result';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApnSearchService {

    constructor(private http: HttpClient) { }

    search(apn: string, state: string, county: string): Observable<PropertySearchResult[]> {
        //return of(PROPERTYSEARCHRESULTS);    // Mock
        //.pipe(delay(1000));               // Pipe delay makes it mimic search/connection time

        const url = environment.dataMasterApi + 'datasources/CoreLogic/apnSearchShallow?apn=' + apn + '&county=' + county + '&state=' + state;
        const requestOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*'}) };
        const results = this.http.get<PropertySearchResult[]>(url, requestOptions);
        return results;

        //TODO:  Add error handling
    }

}
