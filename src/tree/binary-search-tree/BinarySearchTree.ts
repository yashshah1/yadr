/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import BinarySearchTreeNode from './BinarySearchTreeNode';
// import { ArrayStack as Stack } from '../../stack';
import Stack from '../../stack/ArrayStack';

export default class BinarySearchTree {
  private _root: BinarySearchTreeNode | null;
  constructor() {
    this._root = null;
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
        if (value < tempNode!.value) {
          if (tempNode!.left) tempNode = tempNode!.left;
          else {
            tempNode!.left = nodeToBeInserted;
            break;
          }
        } else if (value > tempNode!.value) {
          if (tempNode!.right) tempNode = tempNode!.right;
          else {
            tempNode!.right = nodeToBeInserted;
            break;
          }
        } else break;
      }
    }
  }

  find(value: any) {
    if (this.isEmpty()) return null;
    let tempNode: BinarySearchTreeNode | null = this.root;
    while (tempNode) {
      if (value < tempNode.value) tempNode = tempNode.left;
      else if (value > tempNode.value) tempNode = tempNode.right;
      else return tempNode.value;
    }
  }

  isEmpty(): boolean {
    return this.root === null;
  }

  remove(value: any): any | null {
    if (this.isEmpty()) return null;
    let tempNode: BinarySearchTreeNode | null = this.root;
    let isLeftChild: boolean = false;
    while (tempNode && tempNode.value !== value) {
      if (value < tempNode.value) {
        tempNode = tempNode.left;
        isLeftChild = true;
      } else {
        tempNode = tempNode.right;
        isLeftChild = false;
      }
    }
    if (!tempNode) return null;

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
    return tempNode.value;
  }

  static fromArray(values: any[]): BinarySearchTree {
    const tree = new BinarySearchTree();
    values.forEach((element) => tree.insert(element));
    return tree;
  }

  inOrder(): any[] {
    if (this.isEmpty()) return [];
    const stack = new Stack();
    let outputArray = [];
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
