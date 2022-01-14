// The teacher is trying to create a mentoring system to improve students' math scores.
// Mentoring is a pair of mentors and mentees to help mentees study math.
// The teacher decides the mentor and mentee based on the rank of the M number of math test.
// If student A is a mentor and student B is a mentee, the student A must be ahead of student B in all math tests.
// Write a program that outputs a total of how many pairs can be made between mentors and mentees given M number of math tests.
// The first line is given N (1<=N<=20) and M (1<=M<=10).
// Mathematical test results are given as student numbers across M lines from the second line. Student number is the most...
// From the top, 1st, 2nd...It is expressed in the order of Nth place.
// If N = 4 per line and the test results are entered as [3 ,4 ,1 ,2],
// it means that student 3 is first, student 4 is second, student 1 is third, and student 2 is fourth.
// Ex) INPUT: [[3 ,4 ,1 ,2],
//             [4 ,3 ,2 ,1],
//             [3 ,1 ,4 ,2]]
//     OUTPUT: 3 ([3,1],[3,2],[4,2])

const solution = matrix => {
  let numOfStudents = matrix[0].length;
  let numOfTests = matrix.length;
  let pairCount = 0;
  let result = [];
  for (let i = 1; i <= numOfStudents; i++) {
    for (let j = 1; j <= numOfStudents; j++) {
      if (i !== j) {
        let flag = true;
        for (let k = 0; k < numOfTests; k++) {
          if (matrix[k].indexOf(i) > matrix[k].indexOf(j)) {
            flag = false;
            break;
          }
        }
        flag && pairCount++;
        flag && result.push([i, j]);
      }
    }
  }
  console.log(result); // To match the OUPUT;
  return pairCount;
};

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
