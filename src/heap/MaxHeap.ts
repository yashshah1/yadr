/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import BaseHeap from './BaseHeap';

/**
 * @class MaxHeap
 */
export default class MaxHeap<T> extends BaseHeap<T> {
  isOrderedCorrectly(first: T, second: T): boolean {
    return this._compare.isGreaterThanOrEqual(first, second);
  }

  static fromArray<U>(array: U[]): MaxHeap<U> {
    const heap = new MaxHeap<U>();
    array.forEach((e) => heap.insert(e));
    return heap;
  }
}
