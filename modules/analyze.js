const analyze = arrayOfNumbers => {
  for (const i of arrayOfNumbers) {
    if (typeof i !== 'number') {
      throw new Error('only numbers allowed within input array')
    }
  }
  return {
    average: arrayOfNumbers.reduce((a, b) => a + b) / arrayOfNumbers.length,
    min: Math.min(...arrayOfNumbers),
    max: Math.max(...arrayOfNumbers),
    length: arrayOfNumbers.length,
  };
};


module.exports = analyze;