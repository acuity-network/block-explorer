export function getUnitPrefix(number) {
  const prefixes = ['k', 'M', 'G', 'T', 'P'];
  const prefixesLength = prefixes.length;
  let prefix = '', exponent = 0;

  for (let i = 0; i < prefixesLength; i++) {
    if (number > Math.pow(10, exponent + 3)) {
      prefix = prefixes[i];
      exponent += 3;
    } else {
      break;
    }
  }

  return {
    prefix,
    number: (number / Math.pow(10, exponent)).toFixed(3),
  };
}
