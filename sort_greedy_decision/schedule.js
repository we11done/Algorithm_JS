// There is one conference room,
// and the company is tring to make a conference room time table for N meetings,
// find the maximum number of meetings where you can use the conference
// room without overlapping each meeting with the start time and end time.
// However, once the meeting starts, it cannot be interrupted in the middle,
// and the next meeting may begin at the same time as one meeting ends.
// Ex) INPUT:[[1,4],[2,3],[3,5],[4,6],[5,7]]
//     OUTPUT: 3 (2-3, 3-5, 5-7)
// Ex2) INPUT: [[3,3],[1,3],[2,3]]
//      OUTPUT: 2

const solution = matrix => {
  const sortedMatrix = [
    ...matrix.sort(([start, end], [start2, end2]) =>
      end === end2 ? start - start2 : end - end2
    ),
  ];
  let mostSchedules = 1;
  let [start, end] = sortedMatrix[0];
  for (let i = 1; i < sortedMatrix.length; i++) {
    let [nextStart, nextEnd] = sortedMatrix[i];
    if (end <= nextStart) {
      mostSchedules++;
      end = nextEnd;
    }
  }
  return mostSchedules;
};

const firstTimeTable = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
const secondTimeTable = [
  [3, 3],
  [1, 3],
  [2, 3],
];

let t = performance.now();
let a1 = solution(firstTimeTable);
console.log('Solution 1 took ', performance.now() - t, ' seconds');
console.log('Solution 1 answer:', a1);
let t2 = performance.now();
let a2 = solution(secondTimeTable);
console.log('Solution 2 took ', performance.now() - t2, ' seconds');
console.log('Solution 2 answer:', a2);
