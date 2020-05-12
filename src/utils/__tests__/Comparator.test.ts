import Comparator from '../Comparator';

describe('Comparator Class', () => {
  describe('default comparator class', () => {
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
});
