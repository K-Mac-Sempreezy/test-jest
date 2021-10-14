import caesarCipher from "./caesarCipher";

test('returns B when given string A and shift 1', () => {
  expect(caesarCipher('A', 1)).toBe('B');
});

test('returns FREE PIZZA when given string SERR CVMMN and shift 13', () => {
  expect(caesarCipher('FREE PIZZA', 13)).toBe('SERR CVMMN');
});

test('returns the same case as input string', () => {
  expect(caesarCipher('Free Pizza', 13)).toBe('Serr Cvmmn');
});

test('returns valid result with negative shift', () => {
  expect(caesarCipher('A', -2)).toBe('Y');
});

test('return valid result with included punctuation', () => {
  expect(caesarCipher('Hey!', 1)).toBe('Ifz!');
});