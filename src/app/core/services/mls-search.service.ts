import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { PropertySearchResult } from '../models/property-search-result';
import { PROPERTYSEARCHRESULTS } from '../models/mocks/mock-property-search-result';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MlsSearchService {

    constructor(private http: HttpClient) { }

    search(mlsNumber: string): Observable<PropertySearchResult[]> {
        //return of(PROPERTYSEARCHRESULTS);    // Mock
        ////  .pipe(delay(1000));               // Pipe delay makes it mimic search/connection time

        ////1505252
        const url = environment.dataMasterApi + 'datasources/Wfr/mlsSearchShallow?mlsNumbers=' + mlsNumber;
        const requestOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' }) };
        const results = this.http.get<PropertySearchResult[]>(url, requestOptions);
        return results;

        //TODO:  - Add error handling
        //       - Handle no results 
    }

}
