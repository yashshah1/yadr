import LinkedListStack from '../LinkedListStack';
describe('LinkedList stack', () => {
  it('Should be created', () => {
    const stack = new LinkedListStack();
    expect(stack.size()).toEqual(0);
    expect(stack.isEmpty()).toBeTruthy();
  });
  describe('Should push', () => {
    it('one element', () => {
      const stack = new LinkedListStack();
      stack.push(1);
      expect(stack.size()).toEqual(1);
      expect(stack.top()).toEqual(1);
    });
    it('multiple elements', () => {
      const stack = new LinkedListStack();
      stack.push(1);
      stack.push(2);
      expect(stack.size()).toEqual(2);
      expect(stack.top()).toEqual(2);
    });
  });
  describe('Should pop', () => {
    it('Empty stack', () => {
      expect(new LinkedListStack().pop()).toBeNull();
    });
    it('one element', () => {
      const stack = new LinkedListStack();
      stack.push(1);
      expect(stack.pop()).toEqual(1);
      expect(stack.pop()).toBeNull();
      expect(stack.size()).toEqual(0);
      expect(stack.top()).toBeNull();
    });
    it('multiple elements', () => {
      const stack = new LinkedListStack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.size()).toEqual(1);
      expect(stack.top()).toEqual(1);
    });
  });
  it('Should reset', () => {
    const stack = new LinkedListStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.reset();
    expect(stack.size()).toEqual(0);
    expect(stack.top()).toBeNull();
  });
  describe('Should return array', () => {
    it('Empty stack', () => {
      expect(new LinkedListStack().toArray()).toEqual([]);
    });
    it('Not Empty stack', () => {
      const stack = new LinkedListStack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.toArray()).toEqual([1, 2, 3]);
    });
  });
});
