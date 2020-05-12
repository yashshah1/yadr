import ArrayStack from '../ArrayStack';
describe('Array stack', () => {
  it('Should be created', () => {
    const stack = new ArrayStack();
    expect(stack.size()).toEqual(0);
  });
  describe('Should push', () => {
    it('one element', () => {
      const stack = new ArrayStack();
      stack.push(1);
      expect(stack.size()).toEqual(1);
      expect(stack.top()).toEqual(1);
    });
    it('multiple elements', () => {
      const stack = new ArrayStack();
      stack.push(1);
      stack.push(2);
      expect(stack.size()).toEqual(2);
      expect(stack.top()).toEqual(2);
    });
  });
  describe('Should pop', () => {
    it('Empty stack', () => {
      expect(new ArrayStack().pop()).toBeNull();
    });
    it('one element', () => {
      const stack = new ArrayStack();
      stack.push(1);
      expect(stack.pop()).toEqual(1);
      expect(stack.pop()).toBeNull();
      expect(stack.size()).toEqual(0);
      expect(stack.top()).toBeNull();
    });
    it('multiple elements', () => {
      const stack = new ArrayStack();
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
    const stack = new ArrayStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.reset();
    expect(stack.size()).toEqual(0);
    expect(stack.top()).toBeNull();
  });
  describe('Should return array', () => {
    it('Empty stack', () => {
      expect(new ArrayStack().toArray()).toEqual([]);
    });
    it('Not Empty stack', () => {
      const stack = new ArrayStack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.toArray()).toEqual([1, 2, 3]);
    });
  });
});
