import SinglyLinkedList from '../SinglyLinkedList';

describe('Singly Linked List', () => {
  describe('Should get created', () => {
    it('Empty Linked List', () => {
      const testList = new SinglyLinkedList();
      expect(testList.head).toBeNull();
      expect(testList.tail).toBeNull();
    });

    it('From Array of length 1', () => {
      const testList = SinglyLinkedList.fromArray([1]);
      expect(testList.isEmpty()).toBeFalsy();
      expect(testList.head).toEqual(1);
      expect(testList.tail).toEqual(1);
      expect(testList.length).toEqual(1);
    });

    it('From Array of length n', () => {
      const testList = SinglyLinkedList.fromArray([1, 1, 3, 4, 5, 6]);
      expect(testList.isEmpty()).toBeFalsy();
      expect(testList.head).toEqual(1);
      expect(testList.tail).toEqual(6);
      expect(testList.length).toEqual(6);
    });
  });

  describe('Should be able to deleteFirst', () => {
    it('From Empty List', () => {
      const testList = new SinglyLinkedList();
      expect(testList.deleteFirst()).toBeNull();
    });

    it('From list with one element', () => {
      const testList = SinglyLinkedList.fromArray([1]);
      expect(testList.head).toEqual(1);
      expect(testList.deleteFirst()).toEqual(1);
      expect(testList.deleteFirst()).toBeNull();
      expect(testList.head).toBeNull();
      expect(testList.tail).toBeNull();
      expect(testList.length).toEqual(0);
    });

    it('from list with n elements', () => {
      const testList = SinglyLinkedList.fromArray([1, 1, 3, 4, 5, 6]);
      expect(testList.tail).toEqual(6);
      expect(testList.deleteFirst()).toEqual(1);
      expect(testList.head).toEqual(1);
      expect(testList.deleteFirst()).toEqual(1);
      expect(testList.head).toEqual(3);
      expect(testList.length).toEqual(4);
    });
  });

  describe('Should be able to deleteLast', () => {
    it('From Empty List', () => {
      const testList = new SinglyLinkedList();
      expect(testList.deleteLast()).toBeNull();
    });

    it('from list with one element', () => {
      const testList = SinglyLinkedList.fromArray([1]);
      expect(testList.tail).toEqual(1);
      expect(testList.deleteLast()).toEqual(1);
      expect(testList.deleteLast()).toBeNull();
      expect(testList.head).toBeNull();
      expect(testList.tail).toBeNull();
      expect(testList.length).toEqual(0);
    });

    it('from list with n elements', () => {
      const testList = SinglyLinkedList.fromArray([1, 1, 3, 4, 5, 6]);
      expect(testList.tail).toEqual(6);
      expect(testList.deleteLast()).toEqual(6);
      expect(testList.tail).toEqual(5);
      expect(testList.deleteLast()).toEqual(5);
      expect(testList.tail).toEqual(4);
      expect(testList.length).toEqual(4);
    });
  });

  describe('Should be able to deleteFirstOccurence', () => {
    it('From Empty List', () => {
      const testList = new SinglyLinkedList();
      expect(testList.deleteFirstOccurence(1)).toBeFalsy();
    });

    it('from list with one element', () => {
      const testList = SinglyLinkedList.fromArray([5]);
      expect(testList.tail).toEqual(5);
      expect(testList.deleteFirstOccurence(1)).toBeFalsy();
      expect(testList.deleteFirstOccurence(5)).toBeTruthy();
      expect(testList.deleteFirstOccurence(5)).toBeFalsy();
      expect(testList.head).toBeNull();
      expect(testList.tail).toBeNull();
    });

    it('delete last element', () => {
      const testList = SinglyLinkedList.fromArray([1, 1, 3, 4, 5, 6]);
      expect(testList.tail).toEqual(6);
      expect(testList.deleteFirstOccurence(6)).toBeTruthy();
      expect(testList.deleteFirstOccurence(5)).toBeTruthy();
      expect(testList.deleteFirstOccurence(5)).toBeFalsy();
      expect(testList.deleteFirstOccurence(6)).toBeFalsy();
      expect(testList.head).toEqual(1);
      expect(testList.tail).toEqual(4);
    });

    it('from list with n elements', () => {
      const testList = SinglyLinkedList.fromArray([1, 1, 3, 4, 5, 6]);
      expect(testList.tail).toEqual(6);
      expect(testList.deleteFirstOccurence(1)).toBeTruthy();
      expect(testList.deleteFirstOccurence(5)).toBeTruthy();
      expect(testList.deleteFirstOccurence(5)).toBeFalsy();
      expect(testList.deleteFirstOccurence(1)).toBeTruthy();
      expect(testList.head).toEqual(3);
      expect(testList.tail).toEqual(6);
    });
  });

  describe('Should be able to deleteAllOccurences', () => {
    it('From Empty List', () => {
      const testList = new SinglyLinkedList();
      expect(testList.deleteAllOccurences(1)).toEqual(0);
    });

    it('from list with one element', () => {
      const testList = SinglyLinkedList.fromArray([5]);
      expect(testList.tail).toEqual(5);
      expect(testList.deleteAllOccurences(1)).toEqual(0);
      expect(testList.deleteAllOccurences(5)).toEqual(1);
      expect(testList.deleteAllOccurences(5)).toEqual(0);
      expect(testList.head).toBeNull();
      expect(testList.tail).toBeNull();
    });

    it('from list with n elements', () => {
      const testList = SinglyLinkedList.fromArray([1, 1, 3, 4, 5, 6]);
      expect(testList.tail).toEqual(6);
      expect(testList.deleteAllOccurences(1)).toEqual(2);
      expect(testList.deleteAllOccurences(5)).toEqual(1);
      expect(testList.deleteAllOccurences(5)).toEqual(0);
      expect(testList.deleteAllOccurences(6)).toEqual(1);
      expect(testList.deleteAllOccurences(1)).toEqual(0);
      expect(testList.head).toEqual(3);
      expect(testList.tail).toEqual(4);
      expect(testList.length).toEqual(2);
    });
  });

  describe('Should be able to prepend', () => {
    it('empty List', () => {
      const testList = new SinglyLinkedList();
      testList.prepend(1);
      expect(testList.head).toEqual(1);
      expect(testList.tail).toEqual(1);
      expect(testList.length).toEqual(1);
    });
    it('non empty', () => {
      const testList = SinglyLinkedList.fromArray([1, 1, 1, 4, 5, 6]);
      expect(testList.length).toEqual(6);
      testList.prepend(9);
      expect(testList.head).toEqual(9);
      expect(testList.length).toEqual(7);
    });
  });

  describe('Should be able to exort to Array', () => {
    it('Empty Linked List', () => {
      const testList = new SinglyLinkedList();
      expect(testList.toArray()).toEqual([]);
    });

    it('Linked List with n elements', () => {
      const testList = SinglyLinkedList.fromArray([1, 2, 3, 4]);
      expect(testList.toArray()).toEqual([1, 2, 3, 4]);
    });
  });

  it('Should reset', () => {
    const testList = SinglyLinkedList.fromArray([1, 2, 3, 4]);
    testList.reset();
    expect(testList.head).toBeNull();
    expect(testList.tail).toBeNull();
    expect(testList.length).toEqual(0);
  });

  describe('Should work with filter', () => {
    it('Empty Linked List', () => {
      const testList = new SinglyLinkedList();
      expect(testList.filter(() => true)).toBeNull();
    });

    it('Linked List with real condition', () => {
      const testList = SinglyLinkedList.fromArray([1, 2, 3, 4]);
      const newTestList = testList.filter((e) => e > 2);
      expect(newTestList!.head).toEqual(3);
      expect(newTestList!.tail).toEqual(4);
      expect(newTestList!.length).toEqual(2);
    });

    it('Linked List with fake condition', () => {
      const testList = SinglyLinkedList.fromArray([1, 2, 3, 4]);
      const newTestList = testList.filter((e) => e > 5);
      expect(newTestList!.head).toBeNull();
      expect(newTestList!.tail).toBeNull();
      expect(newTestList!.length).toEqual(0);
    });
  });
});
