// Bob is getting married next month.
// Bob is going to rent a banquet reception place and do it for three days without a break.
// Bob asked his friends in advance for information on the time of 'N' friends attending the reception.
// Each friend informed Bob what time they arrived and what time they would leave.
// Based on this information,
// Bob wants to rent a place where he can accommodate the maximum number of people at the same time.
// If a friend comes at 13 and goes at 15 o'clock,
// assume that he exists at the reception hall at 13 o'clock sharp and leaves at 15 o'clock sharp.
// Print out the maximum number of people at the banquet reception at the same time.
// Ex) INPUT: [[14,18],[12,15],[15,20],[20,30],[5,14]]
//     OUTPUT: 2

const solution = matrix => {
  let max = Number.MIN_SAFE_INTEGER;
  let current = 0;
  const timeline = [];

  for (let [arrived, leaved] of matrix) {
    timeline.push([arrived, 'A']);
    timeline.push([leaved, 'L']);
  }

  timeline.sort((a, b) =>
    a[0] === b[0] ? b[1].charCodeAt() - a[1].charCodeAt() : a[0] - b[0]
  );

  for (let [time, status] of timeline) {
    status === 'A' ? current++ : current--;
    max = Math.max(max, current);
  }

  return max;
};

let t = performance.now();
let a1 = solution([
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
