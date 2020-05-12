import BinarySearchTreeNode from '../BinarySearchTreeNode';

describe('Binary Search Tree Node', () => {
  it('Should get created with value', () => {
    const testNode = new BinarySearchTreeNode(5);
    expect(testNode.value).toBe(5);
    expect(testNode.left).toBeNull();
    expect(testNode.right).toBeNull();
  });
});
