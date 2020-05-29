import MinHeap from '../MinHeap';

describe('Min Heap', () => {
  it('Should get created', () => {
    const minHeap = new MinHeap();
    expect(minHeap.peek()).toBeNull();
    expect(minHeap.isEmpty).toBeTruthy();
  });

  describe('Should be able to insert elements', () => {
    it('should insert and heapify up', () => {
      const minHeap = new MinHeap<number>();

      minHeap.insert(6);
      expect(minHeap.isEmpty()).toBeFalsy();
      expect(minHeap.peek()).toBe(6);
      expect(minHeap.toString()).toBe('6');

      minHeap.insert(2);
      expect(minHeap.peek()).toBe(2);
      expect(minHeap.toString()).toBe('2,6');

      minHeap.insert(10);
      expect(minHeap.peek()).toBe(2);
      expect(minHeap.toString()).toBe('2,6,10');

      minHeap.insert(1);
      expect(minHeap.peek()).toBe(1);
      expect(minHeap.toString()).toBe('1,2,10,6');

      minHeap.insert(1);
      expect(minHeap.peek()).toBe(1);
      expect(minHeap.toString()).toBe('1,1,10,6,2');

      expect(minHeap.poll()).toBe(1);
      expect(minHeap.toString()).toBe('1,2,10,6');

      expect(minHeap.poll()).toBe(1);
      expect(minHeap.toString()).toBe('2,6,10');

      expect(minHeap.poll()).toBe(2);
      expect(minHeap.toString()).toBe('6,10');
    });
    it('Should insert by chaining', () => {
      const minHeap = new MinHeap<number>();
      minHeap.insert(6).insert(2).insert(10).insert(1).insert(1);
      expect(minHeap.toString()).toBe('1,1,10,6,2');
    });
  });
});
