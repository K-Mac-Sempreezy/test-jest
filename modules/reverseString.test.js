import reverseString from './reverseString';

test('returns a string in reverse letter order', () => {
  expect(reverseString('hello')).toBe('olleh');
})

test('returns a multi-word string in reverse order', () => {
  expect(reverseString('hello there')).toBe('ereht olleh');
})

test('returns a string with numbers in reverse order', () => {
  expect(reverseString('hello 41 there')).toBe('ereht 14 olleh');
})

test('throws an error when not a string', () => {
  expect(() => reverseString(41)).toThrow(Error);
})