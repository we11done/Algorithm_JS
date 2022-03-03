// Bob tries to take his cabinets to the market.
// However, his truck cannot carry more than K kilograms.
// Bob wants to load his cabinets the heaviest without exceeding K kilograms.
// Given the weight of each cow as an array W.
// Write a function to find the heaviest weight that Bob can carry on the truck.
// Ex) INPUT: K = 259, W = [81, 58, 42, 33, 61]
//     OUTPUT: 242

const solution = (limitWeight, cabinets) => {
  let maxLoad = Number.MIN_SAFE_INTEGER;
  const getMaxLoadRecursive = (position, sum) => {
    if (sum > limitWeight) return;
    if (position === cabinets.length) {
      maxLoad = Math.max(maxLoad, sum);
    } else {
      getMaxLoadRecursive(position + 1, sum + cabinets[position]);
      getMaxLoadRecursive(position + 1, sum);
    }
  };
  getMaxLoadRecursive(0, 0);
  return maxLoad;
};

let t = performance.now();
let a1 = solution(259, [81, 58, 42, 33, 61]);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
