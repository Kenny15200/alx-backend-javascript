function calculateNumber (type, a, b) {
  const resultA = Math.round(a);
  const resultB = Math.round(b);

  if (type === 'SUM') {
    return resultA + resultB;
  } else if (type === 'SUBTRACT') {
    return resultA - resultB;
  } else if (type === 'DIVIDE') {
    if (resultB === 0) {
      return 'Error';
    }
    return resultA / resultB;
  }
}

module.exports = calculateNumber;
