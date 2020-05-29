/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import SinglyLinkedListNode from './SinglyLinkedListNode';
import ComparatorClass from '../../utils/Comparator';

// TODO: Add documentation
// TODO: Add find, reverse

/**
 * @class SinglyLinkedList
 * Implementation of the Singly Linked List
 */
export default class SinglyLinkedList<T> {
  private _count: number;
  private _head: SinglyLinkedListNode<T> | null;
  private _tail: SinglyLinkedListNode<T> | null;
  private _compare: ComparatorClass<T>;

  /**
   * @param compareFunction
   * User can have its own custom compare function
   * Has to return a number
   * Read: http://www.cplusplus.com/reference/cstdlib/qsort/
   * Or it will by default be set to "a - b"
   */

  constructor(compareFunction?: (x: T, y: T) => number) {
    this._head = null;
    this._tail = null;
    this._count = 0;
    this._compare = new ComparatorClass(compareFunction);
  }

  static fromArray<U>(elements: U[]): SinglyLinkedList<U> {
    const list: SinglyLinkedList<U> = new SinglyLinkedList();
    elements.forEach((element) => list.append(element));
    return list;
  }

  prepend(value: T): void {
    const nodeToBeAdded: SinglyLinkedListNode<T> = new SinglyLinkedListNode(
      value,
      this._head,
    );
    this._head = nodeToBeAdded;
    this._tail = this._tail || nodeToBeAdded;
    this._count++;
  }

  append(value: T): void {
    const nodeToBeAdded: SinglyLinkedListNode<T> = new SinglyLinkedListNode(
      value,
    );

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

  deleteFirstOccurence(value: T): boolean {
    // if (typeof value === 'undefined') throw new Error('Value must be passed');
    if (this.isEmpty()) return false;
    let prev: SinglyLinkedListNode<T> | null = null;
    let curr: SinglyLinkedListNode<T> | null = this._head;
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

  deleteAllOccurences(value: T): number {
    // if (typeof value === 'undefined') throw new Error('Value must be passed');
    if (this.isEmpty()) return 0;
    let prev: SinglyLinkedListNode<T> | null = null;
    let curr: SinglyLinkedListNode<T> | null = this._head;
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

  deleteFirst(): T | null {
    if (this.isEmpty()) return null;
    const tempNode = this._head;
    this._head = tempNode!.next;

    if (this._head === null) this._tail = null;
    this._count--;
    return tempNode!.value;
  }

  deleteLast(): T | null {
    if (this.isEmpty()) return null;

    let prev: SinglyLinkedListNode<T> | null = null;
    let curr: SinglyLinkedListNode<T> | null = this._head;
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

  toArray(): T[] {
    const returnValue: T[] = [];
    if (!this.isEmpty()) {
      let curr: SinglyLinkedListNode<T> | null = this._head;

      while (curr) {
        returnValue.push(curr.value);
        curr = curr.next;
      }
    }
    return returnValue;
  }

  get head(): T | null {
    if (this._head) return this._head.value;
    else return null;
  }

  get tail(): T | null {
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

  filter(callback: (value: T) => boolean): SinglyLinkedList<T> | null {
    // TODO: Isolate the loop into a foreach function
    // if (typeof callback !== 'function') throw new Error('callback must be a function');
    if (this.isEmpty()) return null;

    const returnValue: SinglyLinkedList<T> = new SinglyLinkedList();
    let curr: SinglyLinkedListNode<T> | null = this._head;
    while (curr) {
      if (callback(curr.value)) returnValue.append(curr.value);
      curr = curr.next;
    }
    return returnValue;
  }
}
