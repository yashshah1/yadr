export default class Comparator<T> {
  private _compare: (x: T, y: T) => number;
  /**
   *
   * @param compareFunction returns a +ve number if a > b, 0 if they are equal, -ve number if b > a
   */
  constructor(compareFunction?: (x: T, y: T) => number) {
    this._compare = compareFunction || Comparator.defaultCompareFunction;
  }

  static defaultCompareFunction<U>(x: U, y: U): number {
    return ((x as unknown) as number) - ((y as unknown) as number);
  }

  isEqual(x: T, y: T): boolean {
    return this._compare(x, y) === 0;
  }

  isLesserThan(x: T, y: T): boolean {
    return this._compare(x, y) < 0;
  }

  isLesserThanOrEqual(x: T, y: T): boolean {
    return this._compare(x, y) <= 0;
  }

  isGreaterThan(x: T, y: T): boolean {
    return this._compare(x, y) > 0;
  }

  isGreaterThanOrEqual(x: T, y: T): boolean {
    return this._compare(x, y) >= 0;
  }
}
