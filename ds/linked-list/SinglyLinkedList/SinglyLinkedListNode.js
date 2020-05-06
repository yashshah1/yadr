/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

//TODO: Add documentation

/**
 * @class SinglyLinkedListNode
 * A node to be used by the Singly Linked List
 */
class SinglyLinkedListNode {
  /**
   * @constructor
   * @param {*} value Value stored in the node
   * @param {(SinglyLinkedListNode|null)} next The next node in the Linked List
   */
  constructor(value, next) {
    this._value = value;
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
   * @return {(SinglyLinkedListNode|null)} Value stored in the node
   */
  getNext() {
    return this._next;
  }

  /**
   * sets the next node
   * @param {(SinglyLinkedListNode|null)} next Reference to the next node
   */
  setNext(next) {
    this._next = next;
  }
}

module.exports = SinglyLinkedListNode;
