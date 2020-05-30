/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import BaseHeap from './BaseHeap';

/**
 * @class MinHeap
 */
export default class MinHeap<T> extends BaseHeap<T> {
  isOrderedCorrectly(first: T, second: T): boolean {
    return this._compare.isLesserThanOrEqual(first, second);
  }

  static fromArray<U>(array: U[]): MinHeap<U> {
    const heap = new MinHeap<U>();
    array.forEach((e) => heap.insert(e));
    return heap;
  }
}
