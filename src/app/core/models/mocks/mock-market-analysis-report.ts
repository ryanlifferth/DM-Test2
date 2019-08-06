import { MarketAnalysisReportData } from '../market-analysis-report-data';
import { MarketAnalysisReport } from '../market-analysis-report';

export const MARKETANALYSISREPORT: MarketAnalysisReport = {
  effectiveDate: new Date(),
  currentToThreeMonth: {
    totalSales: 33,
    absorptionRate: 0.67,
    totalListings: 22,
    housingSupply: 4,
    medianSalesPrice: 330500,
    medianSalesDOM: 16.5,
    medianListPrice: 337500,
    medianListingDOM: 18,
    medianSaleToListRatio: 99.55
  },
  fourToSixMonth: {
    totalSales: 22,
    absorptionRate: 2.33,
    totalListings: 18,
    housingSupply: 0.43,
    medianSalesPrice: 343000,
    medianSalesDOM: 22,
    medianListPrice: 349900,
    medianListingDOM: 23,
    medianSaleToListRatio: 99.8
  },
  sevenToTwelveMonth: {
    totalSales: 42,
    absorptionRate: 1.33,
    totalListings: 33,
    housingSupply: 3.44,
    medianSalesPrice: 335250,
    medianSalesDOM: 12,
    medianListPrice: 341000,
    medianListingDOM: 14,
    medianSaleToListRatio: 101.46
  }
}
