/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import SinglyLinkedListNode from './SinglyLinkedListNode';

// TODO: Add documentation
// TODO: Add support for comparision by a custom function
// TODO: Add find, reverse

/**
 * @class SinglyLinkedList
 * Implementation of the Singly Linked List
 */
export default class SinglyLinkedList {
  constructor(
    private _head: SinglyLinkedListNode | null = null,
    private _tail: SinglyLinkedListNode | null = null,
  ) {}

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
  }

  append(value: any): void {
    const nodeToBeAdded: SinglyLinkedListNode = new SinglyLinkedListNode(value);

    if (!this._head) {
      this._head = nodeToBeAdded;
      this._tail = nodeToBeAdded;
      return;
    }
    this._tail!.next = nodeToBeAdded;
    this._tail = nodeToBeAdded;
  }

  deleteFirstOccurence(value: any): any {
    // if (typeof value === 'undefined') throw new Error('Value must be passed');
    if (this.isEmpty()) return;
    let prev: SinglyLinkedListNode | null = null;
    let curr: SinglyLinkedListNode | null = this._head;
    let removedNodeValue: any = null;

    while (curr) {
      if (curr.value === value) {
        if (curr === this._head) removedNodeValue = this.deleteFirst();
        else {
          removedNodeValue = curr.value;
          prev!.next = curr.next;

          if (curr.next === null) this._tail = prev; // Removed element is the last
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
    if (this.isEmpty()) return 0;
    let prev: SinglyLinkedListNode | null = null;
    let curr: SinglyLinkedListNode | null = this._head;
    let deletedCount: number = 0;

    while (curr) {
      if (curr.value === value) {
        if (curr === this._head) this.deleteFirst();
        else {
          prev!.next = curr.next;
          if (curr.next === null) this._tail = prev; // Removed element is the last
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

    if (tempNode!.next === null) this._tail = null;
    else this._head = tempNode!.next;

    return tempNode!.value;
  }

  deleteLast(): any | null {
    if (this.isEmpty()) return null;

    let prev: SinglyLinkedListNode | null = null;
    let curr: SinglyLinkedListNode | null = this._head;
    if (curr!.next === null) return this.deleteFirst();

    while (curr!.next) {
      prev = curr;
      curr = curr!.next;
    }

    prev!.next = null;
    return curr!.value;
  }

  isEmpty(): boolean {
    return this._head === null;
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
    let c: number = 0;
    if (this.isEmpty()) return c;
    let curr: SinglyLinkedListNode | null = this._head;
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
