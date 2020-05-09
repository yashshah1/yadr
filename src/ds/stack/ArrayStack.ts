/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

/**
 * @class ArrayStack
 * implements LIFO using JS Arrays
 */
export default class ArrayStack {
  /**
   * Initialise the class
   * @constructor
   * @param arr A list of elements to initialise the Queue
   */
  private _offset: number;
  constructor(private _s: any[] = []) {
    this._offset = 0; // To speed up pop
  }

  /**
   * Pushes an element
   * @param {*} e Element to be enqueued
   * @return {undefined}
   */
  push(e: any): void {
    this._s[this._offset++] = e;
  }

  /**
   * pops an element
   * @return {*}
   */
  pop(): any {
    if(this.isEmpty()) return null;

    const returnValue: any = this.top();
    this._offset--;

    if (this._offset * 2 > this._s.length) return returnValue;
    /*
     * If more than half the array is of deleted
     * elements, then remove the unnecessary ones.
     */
    this._s = this._s.slice(0, this._offset);
    return returnValue;
  }

  top(): any {
    if(this.isEmpty()) return null;
    return this._s[this._offset - 1]
  }
  
  /**
   * Returns the number of elements
   * @return {number}
   */
  size(): number {
    return this._offset;
  }

  /**
   * Returns true if queue is empty
   * @return {Boolean}
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * Re initialises the queue
   * @return {undefined}
   */
  reset(): void {
    this._s = [];
    this._offset = 0;
  }
}
