function generateConditionalOddSeries(a) {
  let count = a % 2 === 0 ? a - 1 : a;
  let result = [];
  let num = 1;
  for (let i = 0; i < count; i++) {
    result.push(num);
    num += 2;
  }
  return result;
}


console.log(generateConditionalOddSeries(6)); // Output: [1, 3, 5, 7, 9]
