// Bob's dad runs a bakery.
// Bob's dad told Bob to give him an N-day sales record
// and find the maximum sales in consecutive K-day.
// Write a function to help Bob.
// Ex) INPUT: records = [12 ,15 ,11 ,20 ,25 ,10 ,20 ,19 ,13 ,15], k = 3
//     OUPUT: 56 ( 11 + 20 + 25)

const solution = (records, k) => {
  let maxSales = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < records.length; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += records[j];
    }
    maxSales < sum && (maxSales = sum);
  }
  return maxSales;
};

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
