/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import MaxHeap from '../heap/MaxHeap';
import { getComparatorFunction, PriorityQueueObject } from './utils';

/**
 * @class PriorityQueue
 * implements LIFO using JS Arrays
 */
export default class PriorityQueue<T> extends MaxHeap<PriorityQueueObject<T>> {
  constructor() {
    super(getComparatorFunction());
  }

  getSize(): number {
    return super.getSize();
  }

  isEmpty(): boolean {
    return super.isEmpty();
  }

  add(value: T, priority: number = 0): this {
    this.insert({ value, priority });
    return this;
  }

  getHighestPriority(): T | null {
    if (this.isEmpty()) return null;
    return super.peek()!.value;
  }

  extractHighestPriority(): T | null {
    if (this.isEmpty()) return null;
    return super.poll()!.value;
  }
}
