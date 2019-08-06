import { TestBed } from '@angular/core/testing';

import { MarketAnalysisReportService } from './market-analysis-report.service';

describe('MarketAnalysisReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketAnalysisReportService = TestBed.get(MarketAnalysisReportService);
    expect(service).toBeTruthy();
  });
});
