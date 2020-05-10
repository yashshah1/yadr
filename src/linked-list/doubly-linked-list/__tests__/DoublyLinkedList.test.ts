import DoublyLinkedList from '../DoublyLinkedList';

describe('Doubly Linked List', () => {
  describe('Should get created', () => {
    it('Empty Linked List', () => {
      const testList = new DoublyLinkedList();
      expect(testList.head).toBeNull();
      expect(testList.tail).toBeNull();
    });

    it('From Array of length 1', () => {
      const testList = DoublyLinkedList.fromArray([1]);
      expect(testList.isEmpty()).toBeFalsy();
      expect(testList.head).toEqual(1);
      expect(testList.tail).toEqual(1);
      expect(testList.length).toEqual(1);
    });

    it('From Array of length n', () => {
      const testList = DoublyLinkedList.fromArray([1, 1, 3, 4, 5, 6]);
      expect(testList.isEmpty()).toBeFalsy();
      expect(testList.head).toEqual(1);
      expect(testList.tail).toEqual(6);
      expect(testList.length).toEqual(6);
    });
  });

  describe('Should be able to deleteFirst', () => {
    it('From Empty List', () => {
      const testList = new DoublyLinkedList();
      expect(testList.deleteFirst()).toBeNull();
    });

    it('From list with one element', () => {
      const testList = DoublyLinkedList.fromArray([1]);
      expect(testList.head).toEqual(1);
      expect(testList.deleteFirst()).toEqual(1);
      expect(testList.deleteFirst()).toBeNull();
      expect(testList.head).toBeNull();
      expect(testList.tail).toBeNull();
      expect(testList.length).toEqual(0);
    });

    it('from list with n elements', () => {
      const testList = DoublyLinkedList.fromArray([1, 1, 3, 4, 5, 6]);
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
      const testList = new DoublyLinkedList();
      expect(testList.deleteLast()).toBeNull();
    });

    it('from list with one element', () => {
      const testList = DoublyLinkedList.fromArray([1]);
      expect(testList.tail).toEqual(1);
      expect(testList.deleteLast()).toEqual(1);
      expect(testList.deleteLast()).toBeNull();
      expect(testList.head).toBeNull();
      expect(testList.tail).toBeNull();
      expect(testList.length).toEqual(0);
    });

    it('from list with n elements', () => {
      const testList = DoublyLinkedList.fromArray([1, 1, 3, 4, 5, 6]);
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
      const testList = new DoublyLinkedList();
      expect(testList.deleteFirstOccurence(1)).toBeFalsy();
    });

    it('from list with one element', () => {
      const testList = DoublyLinkedList.fromArray([5]);
      expect(testList.tail).toEqual(5);
      expect(testList.deleteFirstOccurence(1)).toBeFalsy();
      expect(testList.deleteFirstOccurence(5)).toBeTruthy();
      expect(testList.deleteFirstOccurence(5)).toBeFalsy();
      expect(testList.head).toBeNull();
      expect(testList.tail).toBeNull();
    });

    it('from list with n elements', () => {
      const testList = DoublyLinkedList.fromArray([1, 1, 3, 4, 5, 6]);
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
      const testList = new DoublyLinkedList();
      expect(testList.deleteAllOccurences(1)).toEqual(0);
    });

    it('from list with one element', () => {
      const testList = DoublyLinkedList.fromArray([5]);
      expect(testList.tail).toEqual(5);
      expect(testList.deleteAllOccurences(1)).toEqual(0);
      expect(testList.deleteAllOccurences(5)).toEqual(1);
      expect(testList.deleteAllOccurences(5)).toEqual(0);
      expect(testList.head).toBeNull();
      expect(testList.tail).toBeNull();
    });

    it('from list with n elements', () => {
      const testList = DoublyLinkedList.fromArray([1, 1, 3, 4, 5, 6]);
      expect(testList.tail).toEqual(6);
      expect(testList.deleteAllOccurences(1)).toEqual(2);
      expect(testList.deleteAllOccurences(5)).toEqual(1);
      expect(testList.deleteAllOccurences(5)).toEqual(0);
      expect(testList.deleteAllOccurences(1)).toEqual(0);
      expect(testList.head).toEqual(3);
      expect(testList.tail).toEqual(6);
    });
  });

  // it('Should be able to prepend', () => {
  //   const testList = DoublyLinkedList.fromArray([1, 1, 1, 4, 5, 6]);
  //   expect(testList.length).toEqual(6);
  //   testList.prepend(9);
  //   expect(testList.head).toEqual(9);
  //   expect(testList.length).toEqual(7);
  // });
});
