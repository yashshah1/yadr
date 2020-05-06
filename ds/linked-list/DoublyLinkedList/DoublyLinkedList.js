/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

const DoublyLinkedListNode = require("./DoublyLinkedListNode");

//TODO: Add documentation
//TODO: Add support for comparision by a custom function
//TODO: Add find, reverse

/**
 * @class DoublyLinkedList
 * Implementation of the Doubly Linked List
 */
class DoublyLinkedList {
  constructor() {
    /** @type {SinglyLinkedListNode} */
    this._head = null;

    /** @type {SinglyLinkedListNode} */
    this._tail = null;
  }

  prepend(value) {
    const nodeToBeAdded = new DoublyLinkedListNode(value, null, this._head);

    if (this.isEmpty()) this._tail = nodeToBeAdded;
    else this._head.setPrev(nodeToBeAdded);

    this._head = nodeToBeAdded;
  }

  append(value) {
    const nodeToBeAdded = new DoublyLinkedListNode(value, this._tail, null);

    if (this.isEmpty()) this._head = nodeToBeAdded;
    else this._tail.setNext(nodeToBeAdded);

    this._tail = nodeToBeAdded;
  }

  deleteFirst() {
    if (this.isEmpty()) return null;
    let tempNode = this._head;

    this._head = this._head.getNext();
    if (this.head) this._head.setPrev(null);
    else this._tail = null;

    return tempNode.getValue();
  }

  deleteLast() {
    if (this.isEmpty()) return null;
    let tempNode = this._tail;

    this._tail = this._tail.getPrev();
    if (this._tail) this._tail.setNext(null);
    else this._head = null;

    return tempNode.getValue();
  }

  deleteFirstOccurence(value) {
    if (typeof value === "undefined") throw new Error("Value must be passed");
    if (this.isEmpty()) return;
    let prev = null,
      curr = this._head,
      removedNodeValue = null;

    while (curr) {
      if (curr.getValue() == value) {
        if (curr === this._head) {
          removedNodeValue = this.deleteFirst();
        } else {
          removedNodeValue = curr.getValue();
          prev.setNext(curr.getNext());

          // Removed element is the last
          if (curr.getNext() === null) this._tail = prev;
          else curr.getNext().setPrev(prev);
        }
        break;
      }
      prev = curr;
      curr = curr.getNext();
    }
    return removedNodeValue;
  }

  deleteAllOccurences(value) {
    if (typeof value === "undefined") throw new Error("Value must be passed");
    if (this.isEmpty()) return;
    let prev = null,
      curr = this._head,
      deletedCount = 0;

    while (curr) {
      if (curr.getValue() == value) {
        if (curr === this._head) this.deleteFirst();
        else {
          prev.setNext(curr.getNext());
          // Removed element is the last
          if (curr.getNext() === null) this._tail = prev;
          else curr.getNext().setPrev(prev);
        }
        deletedCount++;
      } else prev = curr;
      curr = curr.getNext();
    }
    return deletedCount;
  }

  isEmpty() {
    return this._head === null;
  }

  toArray() {
    let returnValue = [];
    if (this.isEmpty()) return returnValue;
    let curr = this._head;

    while (curr) {
      returnValue.push(curr.getValue());
      curr = curr.getNext();
    }
    return returnValue;
  }

  getHead() {
    return this._head;
  }

  getTail() {
    return this._tail;
  }

  length() {
    let c = 0;
    if (this.isEmpty()) return c;
    let curr = this._head;
    while (curr) {
      c++;
      curr = curr.getNext();
    }
    return c;
  }

  reset() {
    this._head = null;
    this._tail = null;
  }

  filter(callback) {
    //TODO: Isolate the loop into a foreach function
    if (typeof callback !== "function")
      throw new Error("callback must be a function");
    if (this.isEmpty()) return null;

    let returnValue = new SinglyLinkedList();
    let curr = this._head;
    while (curr) {
      if (callback(curr.getValue())) returnValue.append(curr.getValue);
      curr = curr.getNext();
    }
    return returnValue;
  }
}

module.exports = DoublyLinkedList;
