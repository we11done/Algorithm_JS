// Bob's dad runs a bakery.
// Bob's dad told Bob to give him an N-day sales record
// and find the maximum sales in consecutive K-day.
// Write a function to help Bob.
// Ex) INPUT: records = [12 ,15 ,11 ,20 ,25 ,10 ,20 ,19 ,13 ,15], k = 3
//     OUPUT: 56 ( 11 + 20 + 25)

// Nested for loop: O(N^2)
const solution = (records, k) => {
  let maxSales = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < records.length - 2; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += records[j];
    }
    maxSales < sum && (maxSales = sum);
  }
  return maxSales;
};

// Sliding window algorithm: O(N);
const solution2 = (records, k) => {
  let maxSales = (window = records
    .slice(0, k)
    .reduce((acc, current) => acc + current, 0));
  let leftIndex = 0;
  for (let i = k; i < records.length; i++) {
    let currentSales = window + records[i] - records[leftIndex++];
    if (maxSales < currentSales) maxSales = currentSales;
    window = currentSales;
  }
  return maxSales;
};

let t = performance.now();
let a1 = solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3);
console.log('Solution 1 took ', performance.now() - t, ' seconds');
console.log('Solution 1 answer:', a1);
let t2 = performance.now();
let a2 = solution2([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3);
console.log('Solution 2 took ', performance.now() - t2, ' seconds');
console.log('Solution 2 answer:', a2);
