import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from '../models/data-source';
import { DATASOURCES } from '../models/mocks/mock-data-source';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor() { }

  getDataSources(): Observable<DataSource[]> {
    // TODO: Get this from an API
    return of(DATASOURCES);
  }

}
