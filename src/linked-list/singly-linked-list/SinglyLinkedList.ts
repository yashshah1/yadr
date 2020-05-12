/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import SinglyLinkedListNode from './SinglyLinkedListNode';
import ComparatorClass from '../../utils/Comparator';

// TODO: Add documentation
// TODO: Add support for comparision by a custom function - Done
// TODO: Add find, reverse

/**
 * @class SinglyLinkedList
 * Implementation of the Singly Linked List
 */
export default class SinglyLinkedList {
  private _count: number;
  private _head: SinglyLinkedListNode | null;
  private _tail: SinglyLinkedListNode | null;
  private _compare: ComparatorClass;

  /**
   * @param compareFunction
   * User can have its own custom compare function
   * Has to return a number
   * Read: http://www.cplusplus.com/reference/cstdlib/qsort/
   * Or it will by default be set to "a - b"
   */

  constructor(compareFunction?: (x: any, y: any) => number) {
    this._head = null;
    this._tail = null;
    this._count = 0;
    this._compare = new ComparatorClass(compareFunction);
  }

  static fromArray(elements: any[]): SinglyLinkedList {
    const list: SinglyLinkedList = new SinglyLinkedList();
    elements.forEach((element) => list.append(element));
    return list;
  }

  prepend(value: any): void {
    const nodeToBeAdded: SinglyLinkedListNode = new SinglyLinkedListNode(
      value,
      this._head,
    );
    this._head = nodeToBeAdded;
    this._tail = this._tail || nodeToBeAdded;
    this._count++;
  }

  append(value: any): void {
    const nodeToBeAdded: SinglyLinkedListNode = new SinglyLinkedListNode(value);

    if (!this._head) {
      this._head = nodeToBeAdded;
      this._tail = nodeToBeAdded;
    } else {
      this._tail!.next = nodeToBeAdded;
      this._tail = nodeToBeAdded;
    }
    this._count++;
    return;
  }

  deleteFirstOccurence(value: any): boolean {
    // if (typeof value === 'undefined') throw new Error('Value must be passed');
    if (this.isEmpty()) return false;
    let prev: SinglyLinkedListNode | null = null;
    let curr: SinglyLinkedListNode | null = this._head;
    let deletedFlag = false;

    while (curr) {
      if (this._compare.isEqual(curr.value, value)) {
        if (curr === this._head) this.deleteFirst();
        else {
          prev!.next = curr.next;
          if (curr.next === null) this._tail = prev; // Removed element is the last
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

  deleteAllOccurences(value: number): number {
    // if (typeof value === 'undefined') throw new Error('Value must be passed');
    if (this.isEmpty()) return 0;
    let prev: SinglyLinkedListNode | null = null;
    let curr: SinglyLinkedListNode | null = this._head;
    let deletedCount: number = 0;

    while (curr) {
      if (this._compare.isEqual(curr.value, value)) {
        if (curr === this._head) this.deleteFirst();
        else {
          prev!.next = curr.next;
          if (curr.next === null) this._tail = prev; // Removed element is the last
          this._count--;
        }
        deletedCount++;
      } else prev = curr;
      curr = curr.next;
    }
    return deletedCount;
  }

  deleteFirst(): any | null {
    if (this.isEmpty()) return null;
    const tempNode = this._head;
    this._head = tempNode!.next;

    if (this._head === null) this._tail = null;
    this._count--;
    return tempNode!.value;
  }

  deleteLast(): any | null {
    if (this.isEmpty()) return null;

    let prev: SinglyLinkedListNode | null = null;
    let curr: SinglyLinkedListNode | null = this._head;
    if (this._count === 1) return this.deleteFirst();

    while (curr!.next) {
      prev = curr;
      curr = curr!.next;
    }

    prev!.next = null;
    this._tail = prev;
    this._count--;
    return curr!.value;
  }

  isEmpty(): boolean {
    return this._count === 0;
  }

  toArray(): any[] {
    const returnValue: any[] = [];
    if (!this.isEmpty()) {
      let curr: SinglyLinkedListNode | null = this._head;

      while (curr) {
        returnValue.push(curr.value);
        curr = curr.next;
      }
    }
    return returnValue;
  }

  get head(): any | null {
    if (this._head) return this._head.value;
    else return null;
  }

  get tail(): any | null {
    if (this._tail) return this._tail.value;
    else return null;
  }

  get length(): number {
    return this._count;
  }
  reset(): void {
    this._head = null;
    this._tail = null;
    this._count = 0;
  }

  filter(callback: (value: any) => boolean): SinglyLinkedList | null {
    // TODO: Isolate the loop into a foreach function
    // if (typeof callback !== 'function') throw new Error('callback must be a function');
    if (this.isEmpty()) return null;

    const returnValue: SinglyLinkedList = new SinglyLinkedList();
    let curr: SinglyLinkedListNode | null = this._head;
    while (curr) {
      if (callback(curr.value)) returnValue.append(curr.value);
      curr = curr.next;
    }
    return returnValue;
  }
}
