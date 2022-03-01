// There are N stables on the vertical line.
// Each stable has coordinates of x1, x2, x3, ......, xN, and there is no overlapping coordinates in the stable.
// Bob has M horses, and these horses don't like to be close to each other. Each stable can only contain one horse,
// and he wants to place the horse in the stable so that the distance between the two nearest horses is the maximum.
// Write a program that outputs the maximum distance between the two nearest horses when M horses are placed in N stables.
// Ex) INPUT: coordinates = [1, 2, 8, 4, 9], number of horses = 3
//     OUTPUT: 3

const solution = (coordinates, numberOfHorses) => {
  coordinates.sort((a, b) => a - b);
  let low = coordinates[1] - coordinates[0];
  let high = coordinates[coordinates.length - 1] - coordinates[0];
  let maxNearestDistance = 0;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    let horseCount = 1;
    let entryPoint = coordinates[0];
    for (let i = 1; i < coordinates.length; i++) {
      if (coordinates[i] - entryPoint >= mid) {
        horseCount++;
        entryPoint = coordinates[i];
      }
    }
    if (horseCount >= numberOfHorses) {
      maxNearestDistance = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return maxNearestDistance;
};

let t = performance.now();
let a1 = solution([1, 2, 8, 4, 9], 3);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
