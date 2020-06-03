import MinHeap from '../MinHeap';

describe('Min Heap', () => {
  it('should create an empty min heap', () => {
    const minHeap = new MinHeap<number>();

    expect(minHeap).toBeDefined();
    expect(minHeap.peek()).toBeNull();
    expect(minHeap.isEmpty()).toBe(true);
  });

  it('should insert items to the heap and heapify it up', () => {
    const minHeap = new MinHeap<number>();

    minHeap.insert(5);
    expect(minHeap.isEmpty()).toBe(false);
    expect(minHeap.peek()).toBe(5);
    expect(minHeap.toString()).toBe('5');

    minHeap.insert(3);
    expect(minHeap.peek()).toBe(3);
    expect(minHeap.toString()).toBe('3,5');

    minHeap.insert(10);
    expect(minHeap.peek()).toBe(3);
    expect(minHeap.toString()).toBe('3,5,10');

    minHeap.insert(1);
    expect(minHeap.peek()).toBe(1);
    expect(minHeap.toString()).toBe('1,3,10,5');

    minHeap.insert(1);
    expect(minHeap.peek()).toBe(1);
    expect(minHeap.toString()).toBe('1,1,10,5,3');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.toString()).toBe('1,3,10,5');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.toString()).toBe('3,5,10');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.toString()).toBe('5,10');
  });

  it('should poll items from the heap and heapify it down', () => {
    const minHeap = new MinHeap<number>();

    minHeap.insert(5).insert(3).insert(10).insert(11).insert(1);

    expect(minHeap.toString()).toBe('1,3,10,11,5');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.toString()).toBe('3,5,10,11');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.toString()).toBe('5,11,10');

    expect(minHeap.poll()).toBe(5);
    expect(minHeap.toString()).toBe('10,11');

    expect(minHeap.poll()).toBe(10);
    expect(minHeap.toString()).toBe('11');

    expect(minHeap.poll()).toBe(11);
    expect(minHeap.toString()).toBe('');

    expect(minHeap.poll()).toBeNull();
    expect(minHeap.toString()).toBe('');
  });

  it('should heapify down through the right branch as well', () => {
    const minHeap = new MinHeap<number>();

    minHeap.insert(3).insert(12).insert(10);

    expect(minHeap.toString()).toBe('3,12,10');

    minHeap.insert(11);
    expect(minHeap.toString()).toBe('3,11,10,12');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.toString()).toBe('10,11,12');
  });

  it('should be possible to removeAll items from heap with heapify down', () => {
    const minHeap = new MinHeap<number>();

    minHeap.insert(3).insert(12).insert(10).insert(11).insert(11);

    expect(minHeap.toString()).toBe('3,11,10,12,11');

    expect(minHeap.removeAll(3).toString()).toEqual('10,11,11,12');
    expect(minHeap.removeAll(3).peek()).toEqual(10);
    expect(minHeap.removeAll(11).toString()).toEqual('10,12');
    expect(minHeap.removeAll(3).peek()).toEqual(10);
  });

  it('should be possible to removeAll items from heap with heapify up', () => {
    const minHeap = new MinHeap<number>();

    minHeap
      .insert(3)
      .insert(10)
      .insert(5)
      .insert(6)
      .insert(7)
      .insert(4)
      .insert(6)
      .insert(8)
      .insert(2)
      .insert(1);

    expect(minHeap.toString()).toBe('1,2,4,6,3,5,6,10,8,7');
    expect(minHeap.removeAll(8).toString()).toEqual('1,2,4,6,3,5,6,10,7');
    expect(minHeap.removeAll(7).toString()).toEqual('1,2,4,6,3,5,6,10');
    expect(minHeap.removeAll(1).toString()).toEqual('2,3,4,6,10,5,6');
    expect(minHeap.removeAll(2).toString()).toEqual('3,6,4,6,10,5');
    expect(minHeap.removeAll(6).toString()).toEqual('3,5,4,10');
    expect(minHeap.removeAll(10).toString()).toEqual('3,5,4');
    expect(minHeap.removeAll(5).toString()).toEqual('3,4');
    expect(minHeap.removeAll(3).toString()).toEqual('4');
    expect(minHeap.removeAll(4).toString()).toEqual('');
  });

  it('should be possible to removeAll items from heap with custom finding comparator', () => {
    const comparator = (a: string, b: string) => a.length - b.length;
    const minHeap = new MinHeap<string>(comparator);
    minHeap.insert('dddd').insert('ccc').insert('bb').insert('a');

    expect(minHeap.toString()).toBe('a,bb,ccc,dddd');
    minHeap.removeAll('hey');
    expect(minHeap.toString()).toBe('a,bb,dddd');
  });

  it('should removeAll values from heap and correctly re-order the tree', () => {
    const minHeap = new MinHeap<number>();

    minHeap
      .insert(1)
      .insert(2)
      .insert(3)
      .insert(4)
      .insert(5)
      .insert(6)
      .insert(7)
      .insert(8)
      .insert(9);

    expect(minHeap.toString()).toBe('1,2,3,4,5,6,7,8,9');

    minHeap.removeAll(2);
    expect(minHeap.toString()).toBe('1,4,3,8,5,6,7,9');

    minHeap.removeAll(4);
    expect(minHeap.toString()).toBe('1,5,3,8,9,6,7');
  });
});
