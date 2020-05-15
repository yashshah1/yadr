/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import BinarySearchTreeNode from './BinarySearchTreeNode';
import Stack from '../../stack/ArrayStack';
import ComparatorClass from '../../utils/Comparator';

export default class BinarySearchTree {
  private _root: BinarySearchTreeNode | null;
  private _compare: ComparatorClass;
  constructor(compareFunction?: (x: any, y: any) => number) {
    this._root = null;
    this._compare = new ComparatorClass(compareFunction);
  }

  get root(): BinarySearchTreeNode | null {
    return this._root;
  }

  insert(value: any): void {
    const nodeToBeInserted = new BinarySearchTreeNode(value);
    if (!this.root) {
      this._root = nodeToBeInserted;
    } else {
      let tempNode: BinarySearchTreeNode | null = this.root;
      while (true) {
        if (this._compare.isLesserThan(value, tempNode!.value)) {
          if (tempNode!.left) tempNode = tempNode!.left;
          else {
            tempNode!.left = nodeToBeInserted;
            break;
          }
        } else if (this._compare.isGreaterThan(value, tempNode!.value)) {
          if (tempNode!.right) tempNode = tempNode!.right;
          else {
            tempNode!.right = nodeToBeInserted;
            break;
          }
        } else break;
      }
    }
  }

  find(value: any): boolean {
    if (this.isEmpty()) return false;
    let tempNode: BinarySearchTreeNode | null = this.root;
    while (tempNode) {
      if (this._compare.isLesserThan(value, tempNode!.value))
        tempNode = tempNode.left;
      else if (this._compare.isGreaterThan(value, tempNode!.value))
        tempNode = tempNode.right;
      else return true;
    }
    return false;
  }

  isEmpty(): boolean {
    return this.root === null;
  }

  remove(value: any): boolean {
    if (this.isEmpty()) return false;
    let tempNode: BinarySearchTreeNode | null = this.root;
    let isLeftChild: boolean = false;
    while (tempNode && tempNode.value !== value) {
      if (this._compare.isLesserThan(value, tempNode!.value)) {
        tempNode = tempNode.left;
        isLeftChild = true;
      } else {
        tempNode = tempNode.right;
        isLeftChild = false;
      }
    }
    if (!tempNode) return false;

    // No children
    if (!tempNode.left && !tempNode.right) {
      // tempNode is root
      if (!tempNode.parent) this._root = null;
      else if (isLeftChild) tempNode.parent.left = null;
      else tempNode.parent.right = null;
    }
    // no right child
    else if (!tempNode.right) {
      if (!tempNode.parent) this._root = tempNode.left;
      else if (isLeftChild) tempNode.parent.left = tempNode.left;
      else tempNode.parent.right = tempNode.left;
    }
    // no left child
    else if (!tempNode.left) {
      if (!tempNode.parent) this._root = tempNode.right;
      else if (isLeftChild) tempNode.parent.left = tempNode.right;
      else tempNode.parent.right = tempNode.right;
    }
    // has both children
    else {
      let replacementNode: BinarySearchTreeNode | null = tempNode.left;
      let replacementValue: any;
      while (replacementNode.right) replacementNode = replacementNode.right;
      replacementValue = replacementNode.value;
      this.remove(replacementValue);

      tempNode.value = replacementValue;
    }
    return true;
  }

  static fromArray(values: any[]): BinarySearchTree {
    const tree = new BinarySearchTree();
    values.forEach((element) => tree.insert(element));
    return tree;
  }

  inOrder(): any[] {
    if (this.isEmpty()) return [];
    const stack = new Stack();
    const outputArray = [];
    let currentNode = this.root;
    while (true) {
      if (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      } else if (!stack.isEmpty()) {
        currentNode = stack.pop();
        outputArray.push(currentNode!.value);
        currentNode = currentNode!.right;
      } else break;
    }
    return outputArray;
  }
}
