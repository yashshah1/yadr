/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import AVLTreeNode from './AVLTreeNode';
import ComparatorClass from '../../utils/Comparator';

export default class AVLTree {
  private _root: AVLTreeNode | null;
  private _compare: ComparatorClass;
  constructor(compareFunction?: (x: any, y: any) => number) {
    this._root = null;
    this._compare = new ComparatorClass(compareFunction);
  }

  get root(): AVLTreeNode | null {
    return this._root;
  }

  insert(value: any): void {
    const nodeToBeInserted = new AVLTreeNode(value);
    let tempNode: AVLTreeNode | null = this.root;
    if (this.isEmpty()) {
      this._root = nodeToBeInserted;
    } else {
      while (tempNode) {
        if (this._compare.isLesserThan(value, tempNode!.value)) {
          if (tempNode.left) tempNode = tempNode.left;
          else {
            tempNode.left = nodeToBeInserted;
            tempNode = tempNode.left;
            let nodeToUpdateBalances = tempNode.parent;
            while (nodeToUpdateBalances) {
              nodeToUpdateBalances.updateHeight();
              nodeToUpdateBalances = nodeToUpdateBalances.parent;
            }
            break;
          }
        } else if (this._compare.isGreaterThan(value, tempNode!.value)) {
          if (tempNode.right) tempNode = tempNode.right;
          else {
            tempNode.right = nodeToBeInserted;
            tempNode = tempNode.right;
            let nodeToUpdateBalances = tempNode.parent;
            while (nodeToUpdateBalances) {
              nodeToUpdateBalances.updateHeight();
              nodeToUpdateBalances = nodeToUpdateBalances.parent;
            }
            break;
          }
        } else break;
      }
    }
    while (tempNode) {
      this.balance(tempNode);
      tempNode = tempNode.parent;
    }
  }

  balance(node: AVLTreeNode) {
    if (node.balance > 1) {
      // L
      if (node.left!.balance > 0) this.rotateLeftLeft(node);
      else if (node.left!.balance < 0) this.rotateLeftRight(node);
    } else if (node.balance < -1) {
      if (node.right!.balance < 0) this.rotateRightRight(node);
      else if (node.right!.balance > 0) this.rotateRightLeft(node);
    }
  }

  rotateLeftLeft(node: AVLTreeNode) {
    const left = node.left;
    node.left = null;

    if (node.parent) {
      node.parent.left = left;
    } else if (node === this.root) {
      this._root = left;
    }

    if (left!.right) {
      node.left = left!.right;
    }

    left!.right = node;
  }

  rotateLeftRight(node: AVLTreeNode) {
    const left = node.left;
    node.left = null;

    const leftRight = left!.right;
    left!.right = null;

    if (leftRight!.left) {
      left!.right = leftRight!.left;
      leftRight!.left = null;
    }

    node.left = leftRight;

    leftRight!.left = left;

    this.rotateLeftLeft(node);
  }

  rotateRightLeft(node: AVLTreeNode) {
    const right = node.right;
    node.right = null;

    const rightLeft = right!.left;
    right!.left = null;

    if (rightLeft!.right) {
      right!.left = rightLeft!.right;
      rightLeft!.right = null;
    }

    node.right = rightLeft;

    rightLeft!.right = right;

    this.rotateRightRight(node);
  }

  rotateRightRight(node: AVLTreeNode) {
    const right = node.right;
    node.right = null;

    if (node.parent) {
      node.parent.right = right;
    } else if (node === this.root) {
      this._root = right;
    }

    if (right!.left) {
      node.right = right!.left;
    }

    right!.left = node;
  }

  remove(value: any): boolean {
    if (this.isEmpty()) return false;
    let tempNode: AVLTreeNode | null = this.root;
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
      let replacementNode: AVLTreeNode | null = tempNode.left;
      let replacementValue: any;
      while (replacementNode.right) replacementNode = replacementNode.right;
      replacementValue = replacementNode.value;
      this.remove(replacementValue);

      tempNode.value = replacementValue;
    }
    if (!this.isEmpty()) this.balance(this.root as AVLTreeNode);
    return true;
  }

  isEmpty(): boolean {
    return this.root === null;
  }

  find(value: any): boolean {
    if (this.isEmpty()) return false;
    let tempNode: AVLTreeNode | null = this.root;
    while (tempNode) {
      if (this._compare.isLesserThan(value, tempNode!.value))
        tempNode = tempNode.left;
      else if (this._compare.isGreaterThan(value, tempNode!.value))
        tempNode = tempNode.right;
      else return true;
    }
    return false;
  }

  static fromArray(values: any[]): AVLTree {
    const tree = new AVLTree();
    values.forEach((elem) => tree.insert(elem));
    return tree;
  }
}
