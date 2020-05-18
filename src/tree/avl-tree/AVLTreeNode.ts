/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

/**
 * @class AVLTreeNode
 * A node to be used by the Binary Search Tree
 */

export default class AVLTreeNode<T> {
  private _height: number;
  // private _balance: number;
  private _value: T;
  private _left: AVLTreeNode<T> | null;
  private _right: AVLTreeNode<T> | null;
  private _parent: AVLTreeNode<T> | null;
  constructor(value: T) {
    this._value = value;
    this._left = null;
    this._right = null;
    this._parent = null;
    this._height = 0;
    // this._balance = 0;
  }

  get height(): number {
    return this._height;
  }

  get leftHeight(): number {
    return this.left !== null ? this.left.height : 0;
  }

  get rightHeight(): number {
    return this.right !== null ? this.right.height : 0;
  }

  get balance() {
    return this.leftHeight - this.rightHeight;
  }

  set value(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  set left(node: AVLTreeNode<T> | null) {
    this._left = node;
    if (this._left) this._left._parent = this;
  }

  get left(): AVLTreeNode<T> | null {
    return this._left;
  }

  set right(node: AVLTreeNode<T> | null) {
    this._right = node;
    if (this._right) this._right._parent = this;
  }

  get right(): AVLTreeNode<T> | null {
    return this._right;
  }

  set parent(node: AVLTreeNode<T> | null) {
    this._parent = node;
  }

  get parent(): AVLTreeNode<T> | null {
    return this._parent;
  }

  updateHeight(): void {
    this._height = Math.max(this.leftHeight, this.rightHeight) + 1;
  }
}
