function generateOddSeries(a) {
  let result = [];
  let num = 1;
  for (let i = 0; i < a; i++) {
    result.push(num);
    num += 2;
  }
  return result;
}

// Example:
console.log(generateOddSeries(4)); // Output: [1, 3, 5, 7]
