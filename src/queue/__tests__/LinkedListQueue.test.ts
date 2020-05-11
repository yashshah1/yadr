import LinkedListQueue from '../LinkedListQueue';

describe('Array Queue', () => {
  it('Should be created', () => {
    const queue = new LinkedListQueue();
    expect(queue.size()).toEqual(0);
    expect(queue.front()).toBeNull();
    expect(queue.back()).toBeNull();
  });

  describe('Should enqueue', () => {
    it('one element', () => {
      const queue = new LinkedListQueue();
      queue.enqueue(1);
      expect(queue.size()).toEqual(1);
      expect(queue.front()).toEqual(1);
      expect(queue.back()).toEqual(1);
    });

    it('multiple elements', () => {
      const queue = new LinkedListQueue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.size()).toEqual(2);
      expect(queue.front()).toEqual(1);
      expect(queue.back()).toEqual(2);
    });
  });

  describe('Should dequeue', () => {
    it('Empty Queue', () => {
      expect(new LinkedListQueue().dequeue()).toBeNull();
    });
    it('one element', () => {
      const queue = new LinkedListQueue();
      queue.enqueue(1);

      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toBeNull();
      expect(queue.size()).toEqual(0);
      expect(queue.front()).toBeNull();
      expect(queue.back()).toBeNull();
    });
    it('multiple elements', () => {
      const queue = new LinkedListQueue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.size()).toEqual(1);
      expect(queue.front()).toEqual(3);
      expect(queue.back()).toEqual(3);
    });
  });

  it('Should reset', () => {
    const queue = new LinkedListQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.reset();
    expect(queue.size()).toEqual(0);
    expect(queue.front()).toBeNull();
    expect(queue.back()).toBeNull();
  });

  describe('Should return array', () => {
    it('Empty Queue', () => {
      expect(new LinkedListQueue().toArray()).toEqual([]);
    });
    it('Not Empty Queue', () => {
      const queue = new LinkedListQueue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.toArray()).toEqual([1, 2, 3]);
    });
  });
});
