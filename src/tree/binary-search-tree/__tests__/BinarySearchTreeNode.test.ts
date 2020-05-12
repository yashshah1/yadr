import BinarySearchTreeNode from '../BinarySearchTreeNode';
describe('Binary Search Tree Node', () => {
  it('Should get created with value', () => {
    const testNode = new BinarySearchTreeNode(5);
    expect(testNode.value).toBe(5);
    expect(testNode.left).toBeNull();
    expect(testNode.right).toBeNull();
  });
  it('sets value', () => {
    const testNode = new BinarySearchTreeNode(5);
    expect(testNode.value).toBe(5);
    testNode.value = 10;
    expect(testNode.value).toBe(10);
  });
  it('sets right', () => {
    const testNode = new BinarySearchTreeNode(5);
    const anotherTestNode = new BinarySearchTreeNode(10);
    testNode.right = anotherTestNode;
    expect(testNode.right!.value).toBe(10);
    expect(testNode.right!.parent!.value).toBe(5);
  });
  it('sets left', () => {
    const testNode = new BinarySearchTreeNode(5);
    const anotherTestNode = new BinarySearchTreeNode(1);
    testNode.left = anotherTestNode;
    expect(testNode.left!.value).toBe(1);
    expect(testNode.left!.parent!.value).toBe(5);
  });
});
