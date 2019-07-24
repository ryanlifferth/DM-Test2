import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Comparable } from '../models/comparable';
import { COMPARABLES } from '../models/mocks/mock-comparables';

@Injectable({
  providedIn: 'root'
})
export class ComparablesService {

  constructor() { }

  getComparables(): Observable<Comparable[]> {
    return of(COMPARABLES);
  }

}
