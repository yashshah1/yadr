/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import ComparatorClass from '../utils/Comparator';

/**
 * @class BaseHeap
 * To be used by MinHeap and MaxHeap
 */
export default class BaseHeap<T> {
  protected _compare: ComparatorClass<T>;
  protected _heap: T[];
  constructor(compareFunction?: (x: T, y: T) => number) {
    if (new.target === BaseHeap)
      throw new Error('Base Heap Class cannot be instantiated');

    this._compare = new ComparatorClass<T>(compareFunction);
    this._heap = [];
  }

  getSize(): number {
    return this._heap.length;
  }

  hasLeftChild(parentIndex: number): boolean {
    return this.getLeftChildIndex(parentIndex) < this._heap.length;
  }

  getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  getLeftChild(parentIndex: number): T | undefined {
    return this._heap[this.getLeftChildIndex(parentIndex)];
  }

  hasRightChild(parentIndex: number): boolean {
    return this.getRightChildIndex(parentIndex) < this._heap.length;
  }

  getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  getRightChild(parentIndex: number): T | undefined {
    return this._heap[this.getRightChildIndex(parentIndex)];
  }

  hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) >= 0;
  }

  getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  getParent(childIndex: number): T | undefined {
    return this._heap[this.getParentIndex(childIndex)];
  }

  getFrequency(value: T): number {
    return this._heap.filter((e) => this._compare.isEqual(e, value)).length;
  }

  getFirstIndex(value: T): number {
    for (const [i, v] of this._heap.entries()) {
      if (this._compare.isEqual(v, value)) {
        return i;
      }
    }
    return -1;
  }

  swap(index1: number, index2: number): void {
    const first = this._heap[index1];
    this._heap[index1] = this._heap[index2];
    this._heap[index2] = first;
  }

  heapifyUp(startIndex: number = this._heap.length - 1): void {
    let curr = startIndex;
    while (
      this.hasParent(curr) &&
      !this.isOrderedCorrectly(this.getParent(curr) as T, this._heap[curr])
    ) {
      this.swap(curr, this.getParentIndex(curr));
      curr = this.getParentIndex(curr);
    }
  }

  heapifyDown(startIndex: number = 0): void {
    let curr = startIndex;
    let next = 0;

    while (this.hasLeftChild(curr)) {
      if (
        this.hasRightChild(curr) &&
        this.isOrderedCorrectly(
          this.getRightChild(curr) as T,
          this.getLeftChild(curr) as T,
        )
      ) {
        next = this.getRightChildIndex(curr);
      } else {
        next = this.getLeftChildIndex(curr);
      }

      // short circuit if we find nice results
      if (this.isOrderedCorrectly(this._heap[curr], this._heap[next])) {
        break;
      }

      this.swap(curr, next);
      curr = next;
    }
  }

  peek(): T | null {
    if (this._heap.length === 0) return null;
    return this._heap[0];
  }

  poll(): T | null {
    if (this._heap.length === 0) return null;
    if (this._heap.length === 1) return this._heap.pop() as T;

    const temp: T = this._heap[0];
    this._heap[0] = this._heap.pop() as T;
    this.heapifyDown();
    return temp;
  }

  insert(value: T): this {
    this._heap.push(value);
    this.heapifyUp();
    return this;
  }

  removeOne(value: T): this {
    const index = this.getFirstIndex(value);
    if (index > -1) {
      if (index === this._heap.length - 1) {
        this._heap.pop();
      } else {
        this._heap[index] = this._heap.pop() as T;
        const parent = this.getParent(index);

        if (
          this.hasLeftChild(index) &&
          (!parent || this.isOrderedCorrectly(parent, this._heap[index]))
        ) {
          this.heapifyDown(index);
        } else {
          this.heapifyUp(index);
        }
      }
    }
    return this;
  }

  removeAll(value: T): this {
    let frequency = this.getFrequency(value);
    while (frequency-- !== 0) this.removeOne(value);
    return this;
  }

  isOrderedCorrectly(first: T, second: T): boolean {
    throw new Error(`Must be implemented in derived class`);
    return false;
  }

  isEmpty(): boolean {
    return this._heap.length === 0;
  }

  toString(): string {
    return this._heap.toString();
  }
}
