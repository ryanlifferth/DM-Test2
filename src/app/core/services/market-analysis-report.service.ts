import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MarketAnalysisReport } from '../models/market-analysis-report';
import { MARKETANALYSISREPORT } from '../models/mocks/mock-market-analysis-report';

@Injectable({
  providedIn: 'root'
})
export class MarketAnalysisReportService {

  constructor() { }

  getReportData(): Observable<MarketAnalysisReport> {
    return of(MARKETANALYSISREPORT);
  }

}
