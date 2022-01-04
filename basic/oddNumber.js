// Find sum of odd numbers and the minimum odd number from a given array
// Ex) INPUT [12,77,38,41,53,92,85] OUTPUT: {SUM: 256, minOdd: 41}

const solution = array => {
  let minOdd = Number.MAX_VALUE;
  let oddSum = array.reduce((prev, current) => {
    let number = 0;
    if (current % 2 !== 0) {
      minOdd = current < minOdd ? current : minOdd;
      number = current;
    }
    return prev + number;
  }, 0);
  return { oddSum, minOdd };
};

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
