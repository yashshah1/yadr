import Comparator from '../Comparator';

describe('Comparator Class', () => {
  describe('default comparator function', () => {
    const comparator = new Comparator();
    it('equal', () => {
      expect(comparator.isEqual(0, 0)).toBeTruthy();
      expect(comparator.isEqual(0, 1)).toBeFalsy();
    });

    it('lesser than', () => {
      expect(comparator.isLesserThan(0, 1)).toBeTruthy();
      expect(comparator.isLesserThan(0, 0)).toBeFalsy();
      expect(comparator.isLesserThan(1, 0)).toBeFalsy();
    });

    it('lesser than or equal', () => {
      expect(comparator.isLesserThanOrEqual(0, 1)).toBeTruthy();
      expect(comparator.isLesserThanOrEqual(0, 0)).toBeTruthy();
      expect(comparator.isLesserThanOrEqual(1, 0)).toBeFalsy();
    });

    it('greater than', () => {
      expect(comparator.isGreaterThan(0, 1)).toBeFalsy();
      expect(comparator.isGreaterThan(0, 0)).toBeFalsy();
      expect(comparator.isGreaterThan(1, 0)).toBeTruthy();
    });

    it('greater than or equal', () => {
      expect(comparator.isGreaterThanOrEqual(0, 1)).toBeFalsy();
      expect(comparator.isGreaterThanOrEqual(0, 0)).toBeTruthy();
      expect(comparator.isGreaterThanOrEqual(1, 0)).toBeTruthy();
    });
  });

  describe('custom comparator function', () => {
    const compFunc: (x: any, y: any) => number = (x, y) => x.id - y.id;
    const comparator = new Comparator(compFunc);

    const xObj = { id: 1 };
    const yObj = { id: 1 };
    const zObj = { id: 0 };

    it('equal', () => {
      expect(comparator.isEqual(xObj, yObj)).toBeTruthy();
      expect(comparator.isEqual(xObj, zObj)).toBeFalsy();
    });

    it('lesser than', () => {
      expect(comparator.isLesserThan(zObj, yObj)).toBeTruthy();
      expect(comparator.isLesserThan(xObj, yObj)).toBeFalsy();
      expect(comparator.isLesserThan(xObj, zObj)).toBeFalsy();
    });

    it('lesser than or equal', () => {
      expect(comparator.isLesserThanOrEqual(zObj, xObj)).toBeTruthy();
      expect(comparator.isLesserThanOrEqual(xObj, yObj)).toBeTruthy();
      expect(comparator.isLesserThanOrEqual(xObj, zObj)).toBeFalsy();
    });

    it('greater than', () => {
      expect(comparator.isGreaterThan(zObj, xObj)).toBeFalsy();
      expect(comparator.isGreaterThan(zObj, zObj)).toBeFalsy();
      expect(comparator.isGreaterThan(xObj, zObj)).toBeTruthy();
    });

    it('greater than or equal', () => {
      expect(comparator.isGreaterThanOrEqual(zObj, xObj)).toBeFalsy();
      expect(comparator.isGreaterThanOrEqual(zObj, zObj)).toBeTruthy();
      expect(comparator.isGreaterThanOrEqual(xObj, zObj)).toBeTruthy();
    });
  });
});
