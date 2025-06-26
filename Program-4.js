function countMultiples(arr) {
  let result = {};
  for (let i = 1; i <= 9; i++) {
    result[i] = arr.filter(num => num % i === 0).length;
  }
  return result;
}

// Example:
let input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMultiples(input));
// Output: {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}
