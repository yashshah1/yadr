import BaseHeap from '../BaseHeap';

describe('Base Heap', () => {
  it('Should not get instantiated', () => {
    expect(() => {
      new BaseHeap();
    }).toThrow(Error);
  });
});
