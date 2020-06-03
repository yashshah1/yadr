import MaxHeap from '../MaxHeap';

describe('MaxHeap', () => {
  it('should create an empty max heap', () => {
    const maxHeap = new MaxHeap<number>();

    expect(maxHeap).toBeDefined();
    expect(maxHeap.peek()).toBeNull();
    expect(maxHeap.isEmpty()).toBe(true);
  });

  it('should insert items to the heap and heapify it up', () => {
    const maxHeap = new MaxHeap<number>();

    maxHeap.insert(5);
    expect(maxHeap.isEmpty()).toBe(false);
    expect(maxHeap.peek()).toBe(5);
    expect(maxHeap.toString()).toBe('5');

    maxHeap.insert(3);
    expect(maxHeap.peek()).toBe(5);
    expect(maxHeap.toString()).toBe('5,3');

    maxHeap.insert(10);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe('10,3,5');

    maxHeap.insert(1);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe('10,3,5,1');

    maxHeap.insert(1);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe('10,3,5,1,1');

    expect(maxHeap.poll()).toBe(10);
    expect(maxHeap.toString()).toBe('5,3,1,1');

    expect(maxHeap.poll()).toBe(5);
    expect(maxHeap.toString()).toBe('3,1,1');

    expect(maxHeap.poll()).toBe(3);
    expect(maxHeap.toString()).toBe('1,1');
  });

  it('should poll items from the heap and heapify it down', () => {
    const maxHeap = new MaxHeap<number>();

    maxHeap.insert(5).insert(3).insert(10).insert(11).insert(1);

    expect(maxHeap.toString()).toBe('11,10,5,3,1');

    expect(maxHeap.poll()).toBe(11);
    expect(maxHeap.toString()).toBe('10,3,5,1');

    expect(maxHeap.poll()).toBe(10);
    expect(maxHeap.toString()).toBe('5,3,1');

    expect(maxHeap.poll()).toBe(5);
    expect(maxHeap.toString()).toBe('3,1');

    expect(maxHeap.poll()).toBe(3);
    expect(maxHeap.toString()).toBe('1');

    expect(maxHeap.poll()).toBe(1);
    expect(maxHeap.toString()).toBe('');

    expect(maxHeap.poll()).toBeNull();
    expect(maxHeap.toString()).toBe('');
  });

  it('should heapify down through the right branch as well', () => {
    const maxHeap = new MaxHeap<number>();

    maxHeap.insert(3);
    maxHeap.insert(12);
    maxHeap.insert(10);

    expect(maxHeap.toString()).toBe('12,3,10');

    maxHeap.insert(11);
    expect(maxHeap.toString()).toBe('12,11,10,3');

    expect(maxHeap.poll()).toBe(12);
    expect(maxHeap.toString()).toBe('11,3,10');
  });

  it('should be possible to removeAll items from heap with heapify down', () => {
    const maxHeap = new MaxHeap<number>();

    maxHeap.insert(3).insert(12).insert(10).insert(11).insert(11);

    expect(maxHeap.toString()).toBe('12,11,10,3,11');

    expect(maxHeap.removeAll(12).toString()).toEqual('11,11,10,3');
    expect(maxHeap.removeAll(12).peek()).toEqual(11);
    expect(maxHeap.removeAll(11).toString()).toEqual('10,3');
    expect(maxHeap.removeAll(10).peek()).toEqual(3);
  });

  it('should be possible to removeAll items from heap with heapify up', () => {
    const maxHeap = new MaxHeap<number>();

    maxHeap
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

    expect(maxHeap.toString()).toBe('10,8,6,7,6,4,5,3,2,1');
    expect(maxHeap.removeAll(4).toString()).toEqual('10,8,6,7,6,1,5,3,2');
    expect(maxHeap.removeAll(3).toString()).toEqual('10,8,6,7,6,1,5,2');
    expect(maxHeap.removeAll(5).toString()).toEqual('10,8,6,7,6,1,2');
    expect(maxHeap.removeAll(10).toString()).toEqual('8,7,6,2,6,1');
    expect(maxHeap.removeAll(6).toString()).toEqual('8,7,1,2');
    expect(maxHeap.removeAll(2).toString()).toEqual('8,7,1');
    expect(maxHeap.removeAll(1).toString()).toEqual('8,7');
    expect(maxHeap.removeAll(7).toString()).toEqual('8');
    expect(maxHeap.removeAll(8).toString()).toEqual('');
  });

  it('should be possible to removeAll items from heap with custom finding comparator', () => {
    const comparator = (a: string, b: string) => a.length - b.length;
    const maxHeap = new MaxHeap<string>(comparator);
    maxHeap.insert('a').insert('bb').insert('ccc').insert('dddd');

    expect(maxHeap.toString()).toBe('dddd,ccc,bb,a');

    maxHeap.removeAll('hey');
    expect(maxHeap.toString()).toBe('dddd,a,bb');
  });
});
