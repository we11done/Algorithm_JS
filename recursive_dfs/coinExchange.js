// Exchange the change for the smallest number of coins
// when given several units of coins as follows.
// Each unit of coin can be used indefinitely.
// number of units of coins = 3
// units of coins = [1, 2, 5]
// amount of changes  = 15
// Write a function that returns the minimum number of coins when giving changes

const solution = (numberOfUnits, units, amount) => {
  let minCoins = Number.MAX_SAFE_INTEGER;
  units.sort((a, b) => b - a);
  const getChangeRecursive = (currentAmount, currentCoins) => {
    if (currentAmount > amount || currentCoins > minCoins) return;
    if (currentAmount === amount) {
      minCoins = Math.min(minCoins, currentCoins);
    } else {
      for (let i = 0; i < numberOfUnits; i++) {
        getChangeRecursive(currentAmount + units[i], currentCoins + 1);
      }
    }
  };
  getChangeRecursive(0, 0);
  return minCoins;
};

let t = performance.now();
let a1 = solution(3, [1, 2, 5], 15);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
