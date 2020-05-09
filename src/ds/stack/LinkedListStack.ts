/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

// Doubly to reduce time complexity of Pop from O(N) to O(1)
import { DoublyLinkedList as LinkedList } from '../linked-list';

/**
 * @class LinkedListStack
 * implements LIFO using LinkedList
 */
export default class LinkedListStack {
  /**
   * Initialise the class
   * @constructor
   */
  constructor(private _s: LinkedList = new LinkedList()) {}

  /**
   * Pushes an element
   * @param {*} e Element to be pushed
   * @return {undefined}
   */
  push(e: any): void {
    this._s.append(e);
  }

  /**
   * Pops an element
   * @return {*}
   */
  pop(): any | null {
    return this._s.deleteLast();
  }

  /**
   * Returns the number of elements
   * @return {number}
   */
  size(): number {
    return this._s.length;
  }

  /**
   * Returns the top element of the stack without deleting
   * @return {*}
   */
  top(): any | null {
    return this._s.tail;
  }

  /**
   * Returns true if queue is empty
   * @return {Boolean}
   */
  isEmpty(): boolean {
    return this._s.isEmpty();
  }

  /**
   * Re initialises the queue
   * @return {void}
   */
  reset(): void {
    this._s.reset();
  }

  /**
   * Returns the elements in the stack, without
   * modifying the stack.
   * First element of the list will be the oldest
   * element in the stack.
   */
  toArray(): any[] {
    return this._s.toArray();
  }
}
