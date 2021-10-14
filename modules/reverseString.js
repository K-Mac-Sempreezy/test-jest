function reverseString(str) {
  if(typeof str !== 'string') {
    throw new Error('only strings allowed')
  }
  return str.split('').reverse().join('');
}

module.exports = reverseString;