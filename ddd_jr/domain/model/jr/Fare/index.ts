import { Money } from "./Money";

export class Fare {
  private readonly _money: number;
  private readonly _totalMoney: number;

  static create(money: number, totalMoney: number) {
    return new Fare(money, totalMoney);
  }

  public get getMoney(): number {
    return this._money;
  }

  public get getTotalMoney(): number {
    return this._totalMoney;
  }

  private constructor(money: number, totalMoney: number) {
    this._money = Money.new(money);
    this._totalMoney = totalMoney;
  }
}
