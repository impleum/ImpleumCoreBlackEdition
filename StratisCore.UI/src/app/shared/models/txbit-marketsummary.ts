import { MarketSummaryResult } from './txbit-marketsummaryresult';

export class MarketSummary {
  constructor(success: boolean, result: MarketSummaryResult) {
    this.success = success;
    this.result = result;
  }
  public success: boolean;
  public result: MarketSummaryResult;
}
