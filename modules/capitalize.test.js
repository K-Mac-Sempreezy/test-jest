import capitalizeFirstLetter from './capitalize'

test('returns capitalized string', () => {
  expect(capitalizeFirstLetter('hello')).toBe('Hello')
})

test('returns capitalized first letter of string with multi word sentence', () => {
  expect(capitalizeFirstLetter('hi there')).toBe('Hi there')
})

test('returns same if first index is a number', () => {
  expect(capitalizeFirstLetter('1 is a number')).toBe('1 is a number')
})

test('throws an error for type num inputs', () => {
  expect(() => capitalizeFirstLetter(true)).toThrow(Error)
})