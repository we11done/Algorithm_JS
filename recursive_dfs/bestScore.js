// In order to perform well at this Information Olympiad competition,
// Bob is going to solve N problems given by his teacher.
// Each problem will be given the score you get when you solve it and the time it takes to solve it.
// The maximum score among N problems should be obtained within the time limit M.
// The problem is considered to be solved if it takes given time.
// Ex) INPUT: N (score, time) = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]] M = 20
//     OUTPUT: 41

const solution = (scoreAndTime, timeLimit) => {
  let bestScore = Number.MIN_SAFE_INTEGER;
  const getBestScoreRecursive = (position, scoreSum, timeSum) => {
    if (timeSum > timeLimit) return;
    if (position === scoreAndTime.length) {
      bestScore = Math.max(bestScore, scoreSum);
    } else {
      getBestScoreRecursive(
        position + 1,
        scoreSum + scoreAndTime[position][0],
        timeSum + scoreAndTime[position][1]
      );
      getBestScoreRecursive(position + 1, scoreSum, timeSum);
    }
  };
  getBestScoreRecursive(0, 0, 0);
  return bestScore;
};

const scoreAndTime = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
let t = performance.now();
let a1 = solution(scoreAndTime, 20);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
