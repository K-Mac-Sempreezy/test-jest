import analyze from './analyze';

describe('analyze', () => {
  it('should return an object', () => {
    expect(typeof analyze([1, 2]) === 'object').toBe(true);
  });

  it('should return largest number in array of numbers', () => {
    expect(analyze([1, 2, 3, 4, 5]).max).toBe(5);
  });

  it('should return largest number in array of numbers regardless of order', () => {
    expect(analyze([5, 1, 3, 2, 4]).max).toBe(5);
  });

  it('should return smallest number in array of numbers', () => {
    expect(analyze([1, 2, 3, 4, 5]).min).toBe(1);
  });

  it('should return the average of an array of numbers', () => {
    expect(analyze([1, 2, 3, 4, 5]).average).toBe(3);
  });

  it('should return the correct length of the input array', () => {
    expect(analyze([1, 2, 3, 4, 5]).length).toBe(5);
  });

  it('should throw an error if any index of array is not a number', () => {
    expect(() => analyze([1, '2', 3])).toThrow(Error);
  });
});
