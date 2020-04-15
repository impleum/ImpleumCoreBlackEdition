export class MarketSummaryResult {
  constructor(Last: number, PrevDay: number, High: number, Low: number, BaseVolume: number, Volume: number) {
    this.Last = Last;
    this.PrevDay = PrevDay;
    this.High = High;
    this.Low = Low;
    this.BaseVolume = BaseVolume;
    this.Volume = Volume;
  }
  public Last: number = 0;
  public PrevDay: number = 0;
  public High: number = 0;
  public Low: number = 0;
  public Volume: number = 0;
  public BaseVolume: number = 0;
}

