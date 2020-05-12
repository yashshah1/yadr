export default class Comparator {
  private _compare: (x: any, y: any) => number;
  /**
   *
   * @param compareFunction returns a +ve number if a > b, 0 if they are equal, -ve number if b > a
   */
  constructor(compareFunction?: (x: any, y: any) => number) {
    this._compare = compareFunction || Comparator.defaultCompareFunction;
  }

  static defaultCompareFunction(x: any, y: any): number {
    return x - y;
  }

  isEqual(x: any, y: any): boolean {
    return this._compare(x, y) === 0;
  }

  isLesserThan(x: any, y: any): boolean {
    return this._compare(x, y) < 0;
  }

  isLesserThanOrEqual(x: any, y: any): boolean {
    return this._compare(x, y) <= 0;
  }

  isGreaterThan(x: any, y: any): boolean {
    return this._compare(x, y) > 0;
  }

  isGreaterThanOrEqual(x: any, y: any): boolean {
    return this._compare(x, y) >= 0;
  }
}
