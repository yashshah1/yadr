/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

// TODO: ADD TESTS

import TrieNode from './TrieNode';
import Stack from '../stack/ArrayStack';

export default class Trie {
  private _root: TrieNode;
  constructor() {
    this._root = new TrieNode('*');
  }

  insert(word: string) {
    let nodeIterator = this._root;

    for (let i = 0; i < word.length; ++i) {
      const isComplete = i === word.length - 1;
      nodeIterator = nodeIterator.addChild(word[i], isComplete);
    }
  }

  remove(word: string): boolean {
    if (this.isEmpty()) return false;
    if (word.length === 0) return false;
    const stack = new Stack();
    let index = 0;
    let currentNode: TrieNode | null = this._root;

    stack.push(currentNode);
    while (index < word.length && currentNode) {
      currentNode = currentNode.getChild(word[index]);
      stack.push(currentNode);
      index++;
    }

    if (!!currentNode) return false;

    currentNode = stack.pop();
    if (currentNode!.childrenCount > 0) {
      currentNode!.endOfWord = false;
      return true;
    }
    while (currentNode!.value !== '*') {
      const parent = stack.pop();
      if (currentNode!.childrenCount === 0)
        (parent as TrieNode).removeChild(currentNode!.value);
      currentNode = parent as TrieNode;
    }
    return true;
  }

  isEmpty(): boolean {
    const children = this._root.children;
    return (
      Object.keys(children).length === 0 && children.constructor === Object
    );
  }

  exists(word: string): boolean {
    if (this.isEmpty()) return false;
    let nodeIterator: TrieNode | null = this._root;
    for (const character of word) {
      nodeIterator = nodeIterator!.getChild(character);
      if (!nodeIterator) return false;
    }
    return !!nodeIterator && nodeIterator.isComplete;
  }
}
