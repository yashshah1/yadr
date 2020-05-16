/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import { TrieNodeChildren } from './TrieInterfaces';

export default class TrieNode {
  private _children: TrieNodeChildren;
  private _endOfWordFlag: boolean;
  private _char: string;

  constructor(character: string, isComplete: boolean = false) {
    this._children = {};
    this._endOfWordFlag = isComplete;
    this._char = character;
  }

  get endOfWord(): boolean {
    return this._endOfWordFlag;
  }

  set endOfWord(flag: boolean) {
    this._endOfWordFlag = flag;
  }

  get children(): TrieNodeChildren {
    return this._children;
  }

  get childrenCount(): number {
    return Object.keys(this._children).length;
  }

  get isComplete(): boolean {
    return this._endOfWordFlag;
  }

  getChild(key: string): TrieNode | null {
    key = key[0];
    return this._children[key] ? this._children[key] : null;
  }

  hasChild(key: string): boolean {
    key = key[0];
    return !!this._children[key];
  }

  get value(): string {
    return this._char;
  }

  addChild(character: string, isComplete: boolean = false): TrieNode {
    character = character[0]; // sanity
    let childNode = this._children[character];
    if (!childNode) {
      childNode = new TrieNode(character, isComplete);
      this._children[character] = childNode;
    }

    childNode._endOfWordFlag = childNode.isComplete || isComplete;
    return childNode;
  }

  removeChild(character: string) {
    character = character[0];
    delete this._children[character];
  }
}
