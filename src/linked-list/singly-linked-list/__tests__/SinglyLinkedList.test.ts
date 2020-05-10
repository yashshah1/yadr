import SinglyLinkedList from '../SinglyLinkedList';

describe('Singly Linked List', () => {
  it('Should get created', () => {
    const testList = new SinglyLinkedList();
    expect(testList.head).toBeNull();
    expect(testList.tail).toBeNull();
  });

  it('Should get created from array', () => {
    const testList = SinglyLinkedList.fromArray([1, 1, 3, 4, 5, 6]);
    expect(testList.isEmpty()).toBeFalsy();
    expect(testList.head).toEqual(1);
    expect(testList.tail).toEqual(6);
  });
});
