function capitalizeFirstLetter(str) {
  if (typeof str !== 'string') {
    throw new Error('error');
  }
  return str[0].toUpperCase() + str.substring(1);
}

module.exports = capitalizeFirstLetter;