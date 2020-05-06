/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

//TODO: Add documentation

/**
 * @class DoublyLinkedListNode
 * A node to be used by the Doubly Linked List
 */
class DoublyLinkedListNode {
  /**
   * @constructor
   * @param {*} value Value stored in the node
   * * @param {(DoublyLinkedListNode|null)} prev The prev node in the Linked List
   * @param {(DoublyLinkedListNode|null)} next The next node in the Linked List
   */
  constructor(value, prev, next) {
    this._value = value;
    this._prev = prev || null;
    this._next = next || null;
  }

  /**
   * returns the value of the node
   * @return {*} Value stored in the node
   */
  getValue() {
    return this._value;
  }

  /**
   * sets the value of the node
   * @param {*} value Value to be stored in the node
   */
  setValue(value) {
    this._value = value;
  }

  /**
   * returns the next node
   * @return {(DoublyLinkedListNode|null)} Value stored in the node
   */
  getNext() {
    return this._next;
  }

  /**
   * sets the next node
   * @param {(DoublyLinkedListNode|null)} next Reference to the next node
   */
  setNext(next) {
    this._next = next;
  }

  /**
   * returns the prev node
   * @return {(DoublyLinkedListNode|null)} Value stored in the node
   */
  getPrev() {
    return this._prev;
  }

  /**
   * sets the prev node
   * @param {(DoublyLinkedListNode|null)} prev Reference to the prev node
   */
  setPrev(prev) {
    this._prev = prev;
  }
}

module.exports = DoublyLinkedListNode;
