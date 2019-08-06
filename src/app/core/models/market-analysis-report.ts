import { MarketAnalysisReportData } from './market-analysis-report-data';

export class MarketAnalysisReport {
  effectiveDate?: Date;
  currentToThreeMonth?: MarketAnalysisReportData;
  fourToSixMonth?: MarketAnalysisReportData;
  sevenToTwelveMonth?: MarketAnalysisReportData;
}
