// Person A and B is playing rock, paper, scissors for N times.
// If A wins the game, print A.
// If B wins the games, print B.
// Print D for the draw game.
// The data is following: scissors = 1, rock = 2, paper = 3
// ex) INPUT:
//     N: 1  2  3  4  5
//     A: 2  3  3  1  3
//     B: 1  1  2  2  3
//     Output:
//     A  B  A  B  D

const solution = (arrayA, arrayB) => {
  if (arrayA.length === arrayB.length) {
    let gameRecords = [];
    for (let i = 0; i < arrayA.length; i++) {
      arrayA[i] - arrayB[i] === 1
        ? gameRecords.push('A')
        : arrayA[i] - arrayB[i] === -1
        ? gameRecords.push('B')
        : arrayA[i] - arrayB[i] === 2
        ? gameRecords.push('B')
        : arrayA[i] - arrayB[i] === -2
        ? gameRecords.push('A')
        : gameRecords.push('D');
    }
    return gameRecords;
  } else {
    return 'invalid game records';
  }
};

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
