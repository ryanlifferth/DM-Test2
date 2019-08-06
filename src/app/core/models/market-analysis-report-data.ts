import { MarketAnalysisTrend } from '../enums/market-analysis-trend';

export class MarketAnalysisReportData {
  totalSales?: number;
  totalSalesTrend?: MarketAnalysisTrend;
  absorptionRate?: number;
  absorptionRateTrend?: MarketAnalysisTrend;
  totalListings?: number;
  totalListingsTrend?: MarketAnalysisTrend;
  housingSupply?: number;
  housingSupplyTrend?: MarketAnalysisTrend;
  medianSalesPrice?: number;
  medianSalesPriceTrend?: MarketAnalysisTrend;
  medianSalesDOM?: number;
  medianSalesDOMTrend?: MarketAnalysisTrend;
  medianListPrice?: number;
  medianListPriceTrend?: MarketAnalysisTrend;
  medianListingDOM?: number;
  medianListingDOMTrend?: MarketAnalysisTrend;
  medianSaleToListRatio?: number;
  medianSaleToListRatioTrend?: MarketAnalysisTrend;
}
