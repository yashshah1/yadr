/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import DoublyLinkedListNode from './DoublyLinkedListNode';

// TODO: Add documentation
// TODO: Add support for comparision by a custom function
// TODO: Add find, reverse

/**
 * @class DoublyLinkedList
 * Implementation of the Doubly Linked List
 */
export default class DoublyLinkedList {
  constructor(
    private _head: DoublyLinkedListNode | null = null,
    private _tail: DoublyLinkedListNode | null = null,
  ) {}

  prepend(value: any): void {
    const nodeToBeAdded: DoublyLinkedListNode = new DoublyLinkedListNode(
      value,
      null,
      this._head,
    );

    if (this.isEmpty()) this._tail = nodeToBeAdded;
    else this._head!.prev = nodeToBeAdded;

    this._head = nodeToBeAdded;
  }

  append(value: any): void {
    const nodeToBeAdded: DoublyLinkedListNode = new DoublyLinkedListNode(
      value,
      this._tail,
      null,
    );

    if (this.isEmpty()) this._head = nodeToBeAdded;
    else this._tail!.next = nodeToBeAdded;

    this._tail = nodeToBeAdded;
  }

  deleteFirst(): any {
    if (this.isEmpty()) return null;
    const tempNode: DoublyLinkedListNode | null = this._head;

    this._head = this._head!.next;
    if (this._head) this._head.prev = null;
    else this._tail = null;

    return tempNode!.value;
  }

  deleteLast(): any {
    if (this.isEmpty()) return null;
    const tempNode: DoublyLinkedListNode | null = this._tail;

    this._tail = this._tail!.prev;
    if (this._tail) this._tail.next = null;
    else this._head = null;

    return tempNode!.value;
  }

  deleteFirstOccurence(value: any) {
    // if (typeof value === 'undefined') throw new Error('Value must be passed');
    if (this.isEmpty()) return;
    let prev: DoublyLinkedListNode | null = null;
    let curr: DoublyLinkedListNode | null = this._head;
    let removedNodeValue: any = null;

    while (curr) {
      if (curr.value === value) {
        if (curr === this._head) {
          removedNodeValue = this.deleteFirst();
        } else {
          removedNodeValue = curr.value;
          prev!.next = curr.next;

          // Removed element is the last
          if (curr.next === null) this._tail = prev;
          else curr.next.prev = prev;
        }
        break;
      }
      prev = curr;
      curr = curr.next;
    }
    return removedNodeValue;
  }

  deleteAllOccurences(value: number) {
    // if (typeof value === 'undefined') throw new Error('Value must be passed');
    if (this.isEmpty()) return;
    let prev: DoublyLinkedListNode | null = null;
    let curr: DoublyLinkedListNode | null = this._head;
    let deletedCount: number = 0;

    while (curr) {
      if (curr.value === value) {
        if (curr === this._head) this.deleteFirst();
        else {
          prev!.next = curr.next;
          // Removed element is the last
          if (curr.next === null) this._tail = prev;
          else curr.next.prev = prev;
        }
        deletedCount++;
      } else prev = curr;
      curr = curr.next;
    }
    return deletedCount;
  }

  isEmpty(): boolean {
    return this._head === null;
  }

  toArray(): any[] {
    const returnValue: any[] = [];
    if (this.isEmpty()) return returnValue;
    let curr: DoublyLinkedListNode | null = this._head;

    while (curr) {
      returnValue.push(curr.value);
      curr = curr.next;
    }
    return returnValue;
  }

  get head(): DoublyLinkedListNode | any {
    return this._head;
  }

  get tail(): DoublyLinkedListNode | any {
    return this._tail;
  }

  get length(): number {
    let c: number = 0;
    if (this.isEmpty()) return c;
    let curr: DoublyLinkedListNode | null = this._head;
    while (curr) {
      c++;
      curr = curr.next;
    }
    return c;
  }

  reset(): void {
    this._head = null;
    this._tail = null;
  }

  filter(callback: (value: any) => boolean): DoublyLinkedList | null {
    // TODO: Isolate the loop into a foreach function
    // if (typeof callback !== 'function')
    //   throw new Error('callback must be a function');
    if (this.isEmpty()) return null;

    const returnValue: DoublyLinkedList = new DoublyLinkedList();
    let curr: DoublyLinkedListNode | null = this._head;
    while (curr) {
      if (callback(curr.value)) returnValue.append(curr.value);
      curr = curr.next;
    }
    return returnValue;
  }
}
