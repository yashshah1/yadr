/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

/**
 * @class Array Queue
 * implements FIFO using JS Arrays
 */
class Queue {
  /**
   * Initialise the class
   * @param arr A list of elements to initialise the Queue
   */
  constructor(arr) {
    this._q = Array.isArray(arr) ? arr : [];
    this._offset = 0; // To speed up dequeue
  }

  /**
   * Enqueues an element
   * @param {*} e Element to be enqueued
   * @return {undefined}
   */
  enqueue(e) {
    this._q.push(e);
  }

  /**
   * Dequeues an element
   * @return {*}
   */
  dequeue() {
    /*
     * There is a novice implementation
     * Where all we can do is `return this._q.pop()`
     * but, according to ECMA specs, runtime may exceed to
     * O(N) due to copy costs at engine defined boundaries
     *
     * This is why I have chosen the following implementation
     * Don't actually delete till enough elements need to be deleted.
     *
     * This should be easier to solve in the linked list version
     *
     */
    let returnValue = this.front();
    this._offset += 1;

    if (this._offset * 2 < this._q.length) return returnValue;
    /*
     * If more than half the array is of deleted
     * elements, then remove the unnecessary ones.
     */
    this._q = this._q.slice(this._offset);
    this._offset = 0;
    return returnValue;
  }

  /**
   * Returns the number of elements
   * @return {number}
   */
  size() {
    return this._q.length - this.offset;
  }

  /**
   * Returns the oldest element still in the queue
   * @return {*}
   */
  front() {
    return this._q[this._offset];
  }

  /**
   * Returns the newest element in the queue
   * @return {*}
   */
  back() {
    return this._q[this._q.length - 1];
  }
}
