/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

/**
 * @class BinarySearchTreeNode
 * A node to be used by the Binary Search Tree
 */
export default class BinarySearchTreeNode {
  private _value: any;
  private _left: BinarySearchTreeNode | null;
  private _right: BinarySearchTreeNode | null;
  private _parent: BinarySearchTreeNode | null;
  constructor(value: any = null) {
    this._value = value;
    this._left = null;
    this._right = null;
    this._parent = null;
  }

  set value(value: any) {
    this._value = value;
  }

  get value(): any {
    return this._value;
  }

  set left(node: BinarySearchTreeNode | null) {
    this._left = node;
    if (this._left) this._left._parent = this;
  }

  get left(): BinarySearchTreeNode | null {
    return this._left;
  }

  set right(node: BinarySearchTreeNode | null) {
    this._right = node;
    if (this._right) this._right._parent = this;
  }

  get right(): BinarySearchTreeNode | null {
    return this._right;
  }

  set parent(node: BinarySearchTreeNode | null) {
    this._parent = node;
  }

  get parent(): BinarySearchTreeNode | null {
    return this._parent;
  }

  static copyNode(source: BinarySearchTreeNode): BinarySearchTreeNode {
    const node = new BinarySearchTreeNode(source.value);
    node.left = source.left;
    node.right = source.right;
    node.parent = source.parent;

    return node;
  }
}
