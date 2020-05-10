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
  private _count: number;
  private _head: DoublyLinkedListNode | null;
  private _tail: DoublyLinkedListNode | null;
  constructor() {
    this._head = null;
    this._tail = null;
    this._count = 0;
  }

  static fromArray(elements: any[]): DoublyLinkedList {
    const list: DoublyLinkedList = new DoublyLinkedList();
    elements.forEach((element) => list.append(element));
    return list;
  }

  prepend(value: any): void {
    const nodeToBeAdded: DoublyLinkedListNode = new DoublyLinkedListNode(
      value,
      null,
      this._head,
    );

    if (this.isEmpty()) this._tail = nodeToBeAdded;
    else this._head!.prev = nodeToBeAdded;
    this._count++;
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
    this._count++;
    this._tail = nodeToBeAdded;
  }

  deleteFirst(): any {
    if (this.isEmpty()) return null;
    const tempNode: DoublyLinkedListNode | null = this._head;

    this._head = this._head!.next;
    if (this._head) this._head.prev = null;
    else this._tail = null;
    this._count--;
    return tempNode!.value;
  }

  deleteLast(): any {
    if (this.isEmpty()) return null;
    const tempNode: DoublyLinkedListNode | null = this._tail;

    this._tail = this._tail!.prev;
    if (this._tail) this._tail.next = null;
    else this._head = null;
    this._count--;
    return tempNode!.value;
  }

  deleteFirstOccurence(value: any): boolean {
    // if (typeof value === 'undefined') throw new Error('Value must be passed');
    if (this.isEmpty()) return false;
    let prev: DoublyLinkedListNode | null = null;
    let curr: DoublyLinkedListNode | null = this._head;
    let deletedFlag = false;
    while (curr) {
      if (curr.value === value) {
        if (curr === this._head) {
          this.deleteFirst();
        } else {
          prev!.next = curr.next;
          // Removed element is the last
          if (curr.next === null) this._tail = prev;
          else curr.next.prev = prev;

          this._count--;
        }
        deletedFlag = true;
        break;
      }
      prev = curr;
      curr = curr.next;
    }
    return deletedFlag;
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
          this._count--;
        }
        deletedCount++;
      } else prev = curr;
      curr = curr.next;
    }
    return deletedCount;
  }

  isEmpty(): boolean {
    return this._count === 0;
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
    return this._count;
  }

  reset(): void {
    this._head = null;
    this._tail = null;
    this._count = 0;
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
