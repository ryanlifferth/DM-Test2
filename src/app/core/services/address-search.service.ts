import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PropertySearchResult } from '../models/property-search-result';
import { Address } from '../models/address';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AddressSearchService {

    constructor(private http: HttpClient) { }

    search(address: Address): Observable<PropertySearchResult[]> {
        //return of(PROPERTYSEARCHRESULTS)    // Mock
        //  .pipe(delay(500));               // Pipe delay makes it mimic search/connection time

        const url = environment.dataMasterApi + 'datasources/CoreLogic/addressSearchShallow' +
            '?address=' + address.addressLine1 +
            '&city=' + address.city +
            '&state=' + address.state +
            '&zip=' + address.zip +
            '&county=' + address.county;
        const requestOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Controll-Allow-Origin': '*' }) };
        const results = this.http.get<PropertySearchResult[]>(url, requestOptions);
        return results;

        // TODO:  Add error handling and max search result window height
    }

}
