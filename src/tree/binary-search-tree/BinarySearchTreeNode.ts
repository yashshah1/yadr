/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

/**
 * @class BinarySearchTreeNode
 * A node to be used by the Binary Search Tree
 */
export default class BinarySearchTreeNode<T> {
  private _value: T;
  private _left: BinarySearchTreeNode<T> | null;
  private _right: BinarySearchTreeNode<T> | null;
  private _parent: BinarySearchTreeNode<T> | null;
  constructor(value: T) {
    this._value = value;
    this._left = null;
    this._right = null;
    this._parent = null;
  }

  set value(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  set left(node: BinarySearchTreeNode<T> | null) {
    this._left = node;
    if (this._left) this._left._parent = this;
  }

  get left(): BinarySearchTreeNode<T> | null {
    return this._left;
  }

  set right(node: BinarySearchTreeNode<T> | null) {
    this._right = node;
    if (this._right) this._right._parent = this;
  }

  get right(): BinarySearchTreeNode<T> | null {
    return this._right;
  }

  set parent(node: BinarySearchTreeNode<T> | null) {
    this._parent = node;
  }

  get parent(): BinarySearchTreeNode<T> | null {
    return this._parent;
  }
}
