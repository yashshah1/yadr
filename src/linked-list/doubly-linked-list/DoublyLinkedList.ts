/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import DoublyLinkedListNode from './DoublyLinkedListNode';
import ComparatorClass from '../../utils/Comparator';

// TODO: Add documentation
// TODO: Add find, reverse

/**
 * @class DoublyLinkedList
 * Implementation of the Doubly Linked List
 */
export default class DoublyLinkedList<T> {
  private _count: number;
  private _head: DoublyLinkedListNode<T> | null;
  private _tail: DoublyLinkedListNode<T> | null;
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

  static fromArray<U>(elements: U[]): DoublyLinkedList<U> {
    const list: DoublyLinkedList<U> = new DoublyLinkedList();
    elements.forEach((element) => list.append(element));
    return list;
  }

  prepend(value: T): void {
    const nodeToBeAdded: DoublyLinkedListNode<T> = new DoublyLinkedListNode(
      value,
      null,
      this._head,
    );

    if (this.isEmpty()) this._tail = nodeToBeAdded;
    else this._head!.prev = nodeToBeAdded;
    this._count++;
    this._head = nodeToBeAdded;
  }

  append(value: T): void {
    const nodeToBeAdded: DoublyLinkedListNode<T> = new DoublyLinkedListNode(
      value,
      this._tail,
      null,
    );

    if (this.isEmpty()) this._head = nodeToBeAdded;
    else this._tail!.next = nodeToBeAdded;
    this._count++;
    this._tail = nodeToBeAdded;
  }

  deleteFirst(): T | null {
    if (this.isEmpty()) return null;
    const tempNode: DoublyLinkedListNode<T> | null = this._head;

    this._head = this._head!.next;
    if (this._head) this._head.prev = null;
    else this._tail = null;
    this._count--;
    return tempNode!.value;
  }

  deleteLast(): T | null {
    if (this.isEmpty()) return null;
    const tempNode: DoublyLinkedListNode<T> | null = this._tail;

    this._tail = this._tail!.prev;
    if (this._tail) this._tail.next = null;
    else this._head = null;
    this._count--;
    return tempNode!.value;
  }

  deleteFirstOccurence(value: T): boolean {
    // if (typeof value === 'undefined') throw new Error('Value must be passed');
    if (this.isEmpty()) return false;
    let prev: DoublyLinkedListNode<T> | null = null;
    let curr: DoublyLinkedListNode<T> | null = this._head;
    let deletedFlag = false;
    while (curr) {
      if (this._compare.isEqual(curr.value, value)) {
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

  deleteAllOccurences(value: T): number {
    // if (typeof value === 'undefined') throw new Error('Value must be passed');
    if (this.isEmpty()) return 0;
    let prev: DoublyLinkedListNode<T> | null = null;
    let curr: DoublyLinkedListNode<T> | null = this._head;
    let deletedCount: number = 0;

    while (curr) {
      if (this._compare.isEqual(curr.value, value)) {
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

  toArray(): T[] {
    const returnValue: T[] = [];
    if (this.isEmpty()) return returnValue;
    let curr: DoublyLinkedListNode<T> | null = this._head;

    while (curr) {
      returnValue.push(curr.value);
      curr = curr.next;
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

  map<U>(callback: (value: T) => U): DoublyLinkedList<U> {
    const returnValue: DoublyLinkedList<U> = new DoublyLinkedList<U>();
    if (this.isEmpty()) return returnValue;

    let curr: DoublyLinkedListNode<T> | null = this._head;
    while (curr) {
      returnValue.append(callback(curr.value));
      curr = curr.next;
    }
    return returnValue;
  }

  filter(callback: (value: any) => boolean): DoublyLinkedList<T> {
    // TODO: Isolate the loop into a foreach function
    // if (typeof callback !== 'function')
    //   throw new Error('callback must be a function');
    const returnValue: DoublyLinkedList<T> = new DoublyLinkedList();
    if (this.isEmpty()) return returnValue;

    let curr: DoublyLinkedListNode<T> | null = this._head;
    while (curr) {
      if (callback(curr.value)) returnValue.append(curr.value);
      curr = curr.next;
    }
    return returnValue;
  }
}
