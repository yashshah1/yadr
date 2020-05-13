import BinarySearchTree from '../BinarySearchTree';

describe('Binary Search Tree', () => {
  describe('gets created', () => {
    it('from constructor', () => {
      const tree = new BinarySearchTree();
      expect(tree.root).toBeNull();
      expect(tree.isEmpty()).toBeTruthy();
    });
    describe('fromArray', () => {
      it('empty array', () => {
        const tree = BinarySearchTree.fromArray([]);
        expect(tree.root).toBeNull();
      });
      it('not empty array', () => {
        const tree = BinarySearchTree.fromArray([4, 3, 5]);
        expect(tree.root!.value).toEqual(4);
        expect(tree.root!.left!.value).toEqual(3);
        expect(tree.root!.right!.value).toEqual(5);
      });
    });
  });

  describe(' can insert', () => {
    it('small tree', () => {
      const tree = new BinarySearchTree();
      tree.insert(2);
      tree.insert(1);
      tree.insert(3);
      expect(tree.root!.value).toEqual(2);
      expect(tree.root!.left!.value).toEqual(1);
      expect(tree.root!.right!.value).toEqual(3);
    });
    it('large example', () => {
      const tree = new BinarySearchTree();
      tree.insert(4);
      tree.insert(2);
      tree.insert(1);
      tree.insert(3);
      tree.insert(6);
      tree.insert(5);
      tree.insert(7);
      tree.insert(7);

      expect(tree.root!.value).toEqual(4);

      expect(tree.root!.left!.value).toEqual(2);
      expect(tree.root!.right!.value).toEqual(6);

      expect(tree.root!.left!.left!.value).toEqual(1);
      expect(tree.root!.left!.right!.value).toEqual(3);
      expect(tree.root!.right!.left!.value).toEqual(5);
      expect(tree.root!.right!.right!.value).toEqual(7);
    });
  });

  it('can find', () => {
    const tree = new BinarySearchTree();
    tree.insert(4);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(6);
    tree.insert(5);
    tree.insert(7);
    expect(tree.find(7)).toBeTruthy();
    expect(tree.find(5)).toBeTruthy();
    expect(tree.find(8)).toBeFalsy();
  });

  describe('can remove', () => {
    it('empty tree', () => {
      expect(new BinarySearchTree().remove(1)).toBeFalsy();
    });
    it('single root node', () => {
      const tree = new BinarySearchTree();
      tree.insert(2);
      expect(tree.remove(2)).toBeTruthy();
      expect(tree.root).toBeNull();
    });
    it('removing leaf node', () => {
      const tree = new BinarySearchTree();
      tree.insert(2);
      tree.insert(1);
      tree.insert(3);
      expect(tree.remove(1)).toBeTruthy();
      expect(tree.root!.left).toBeNull();
    });

    it('removing node with one child', () => {
      const tree = new BinarySearchTree();
      tree.insert(4);
      tree.insert(2);
      tree.insert(3);
      tree.insert(6);
      tree.insert(5);
      expect(tree.remove(6)).toBeTruthy();
      expect(tree.remove(2)).toBeTruthy();
      expect(tree.root!.right!.value).toEqual(5);
      expect(tree.root!.left!.value).toEqual(3);
    });

    it('removing node with both children', () => {
      const tree = new BinarySearchTree();
      tree.insert(4);
      tree.insert(2);
      tree.insert(1);
      tree.insert(3);
      tree.insert(6);
      tree.insert(5);
      tree.insert(7);
      expect(tree.remove(6)).toBeTruthy();
      expect(tree.root!.right!.value).toEqual(5);
    });

    it('removing root node in a big tree', () => {
      const tree = new BinarySearchTree();
      tree.insert(4);
      tree.insert(2);
      tree.insert(1);
      tree.insert(3);
      tree.insert(6);
      tree.insert(5);
      tree.insert(7);
      expect(tree.remove(4)).toBeTruthy();
      expect(tree.root!.value).toEqual(3);
    });
  });

  it('inorder', () => {
    const tree = new BinarySearchTree();
    tree.insert(4);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(6);
    tree.insert(5);
    tree.insert(7);
    expect(tree.inOrder()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
