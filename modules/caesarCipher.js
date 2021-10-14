// Caesar Cipher
const caesarCipher = (string, shift) => {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabet = ALPHABET.toLowerCase();
  const mod = 26;
  let encodedText = '';

  if (shift > mod) {
    shift = shift % mod;
  } else if (shift < 0) {
    shift = ((shift * -1) % mod) * -1 + mod;
  } else if (shift === 0) {
    throw new Error('What\'s the point?');
  }

  const checkCase = char => (char === char.toLowerCase() ? alphabet : ALPHABET);

  let i = 0;
  while (i < string.length) {
    const alphaRef = checkCase(string[i]);

    if (alphaRef.indexOf(string[i]) !== -1) {
      const alphabetIndex = alphaRef.indexOf(string[i]);

      if (alphaRef[alphabetIndex + shift]) {
        encodedText += alphaRef[alphabetIndex + shift];
      } else {
        encodedText += alphaRef[alphabetIndex + shift - 26];
      }
    } else {
      encodedText += string[i];
    }
    i++;
  }

  return encodedText;
};

module.exports = caesarCipher;