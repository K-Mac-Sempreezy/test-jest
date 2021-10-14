import calculator from './calculator';
describe('calculator', () => {
  it('returns four when two added to two', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  it('returns four wheh two added to sixteen', () => {
    expect(calculator.add(2, 16)).toBe(18);
  });

  it('returns zero when two subtracted from two', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
  });

  it('returns negative two when zero subtracted from two', () => {
    expect(calculator.subtract(0, 2)).toBe(-2);
  });

  it('returns one when two is divided by two', () => {
    expect(calculator.divide(2, 2)).toBe(1);
  });

  it('returns two-thirds in decimal form when two divided by three', () => {
    expect(calculator.divide(2, 3)).toBe(parseFloat(2 / 3));
  });

  it('returns four when two is multiplied by two ', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  it('returns negative two when two is multiplied by negative one', () => {
    expect(calculator.multiply(2, -1)).toBe(-2);
  });
});

