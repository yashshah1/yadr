/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

const { SinglyLinkedList: LinkedList } = require("../linked-list");

/**
 * @class LinkedListQueue
 * implements FIFO using LinkedList
 */
class LinkedListQueue {
  /**
   * Initialise the class
   * @constructor
   */
  constructor() {
    /** @type {SinglyLinkedList} */
    this._q = new LinkedList();
  }

  /**
   * Enqueues an element
   * @param {*} e Element to be enqueued
   * @return {undefined}
   */
  enqueue(e) {
    this._q.append(e);
  }

  /**
   * Dequeues an element
   * @return {*}
   */
  dequeue() {
    if (this.isEmpty()) return null;
    return this._q.deleteFirst();
  }

  /**
   * Returns the number of elements
   * @return {number}
   */
  size() {
    return this._q.length();
  }

  /**
   * Returns the oldest element still in the queue
   * @return {*}
   */
  front() {
    return this._q.getHead();
  }

  /**
   * Returns the newest element in the queue
   * @return {*}
   */
  back() {
    return this._q.getTail();
  }

  /**
   * Returns true if queue is empty
   * @return {Boolean}
   */
  isEmpty() {
    return this._q.isEmpty();
  }

  /**
   * Re initialises the queue
   * @return {undefined}
   */
  reset() {
    this._q.reset();
  }
}

module.exports = LinkedListQueue;
