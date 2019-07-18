import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { PropertySearchResult } from '../models/property-search-result';
import { Address } from '../models/address';
import { PROPERTYSEARCHRESULTS } from '../models/mocks/mock-property-search-result';

@Injectable({
  providedIn: 'root'
})
export class MlsSearchService {

  constructor() { }

  search(mlsNumber: string): Observable<PropertySearchResult[]> {
    return of(PROPERTYSEARCHRESULTS)    // Mock
      .pipe(delay(1000));               // Pipe delay makes it mimic search/connection time
  }

}
