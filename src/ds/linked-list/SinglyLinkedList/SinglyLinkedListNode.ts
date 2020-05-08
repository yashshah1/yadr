/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

//TODO: Add documentation

/**
 * @class SinglyLinkedListNode
 * A node to be used by the Singly Linked List
 */
export default class SinglyLinkedListNode {
  /**
   * @constructor
   * @param {*} value Value stored in the node
   * @param {(SinglyLinkedListNode|null)} next The next node in the Linked List
   */
  constructor(private _value: any, private _next: SinglyLinkedListNode | null = null) {}

  /**
   * returns the value of the node
   * @return {*} Value stored in the node
   */
  get value(): any {
    return this._value;
  }

  /**
   * sets the value of the node
   * @param {*} value Value to be stored in the node
   */
  set value(value: any) {
    this._value = value;
  }

  /**
   * returns the next node
   * @return {(SinglyLinkedListNode|null)} Value stored in the node
   */
  get next(): SinglyLinkedListNode | null {
    return this._next;
  }

  /**
   * sets the next node
   * @param {(SinglyLinkedListNode|null)} next Reference to the next node
   */
  set next(next: SinglyLinkedListNode | null) {
    this._next = next;
  }
}
