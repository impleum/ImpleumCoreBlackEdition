import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MarketSummary } from "../models/txbit-marketsummary";
import { startWith, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TxbitService {
  constructor(http: HttpClient) {
    this.http = http;
  }

  private apiBaseUrl: string = "https://api.crex24.com";
  private http: HttpClient;
  private pollingInterval = interval(5000);

  public getMarketSummary(): Observable<MarketSummary> {
    return this.pollingInterval.pipe(
      startWith(0),
      switchMap(() => this.http.get<MarketSummary>(this.apiBaseUrl + '/v2/public/tickers?instrument=IMPL-BTC'))
    );
  }
}
