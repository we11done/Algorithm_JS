// Given length of each line A, B, C (A != B, B!= C, A!=C)
// Write a function that returns "YES" if A,B,C makes a triangle, "NO" if A,B,C can't make a triangle
// Ex) INPUT: A = 6, B = 7, C = 11, OUTPUT: "YES"
// Ex2) INPUT: A = 13, B= 33, C = 17, OUTPUT: "NO"

const validTriangle = (a, b, c) => {
  let max = a > b ? (a > c ? a : c) : b > c ? b : c; // Find max length of give 3 integer
  // If max value is less than the sum of other 2 values, triangle can be constructed with the given lines
  let output = max < a + b + c - max ? 'YES' : 'NO';
  return output;
};

console.log(validTriangle(6, 7, 11));
console.log(validTriangle(13, 33, 17));
