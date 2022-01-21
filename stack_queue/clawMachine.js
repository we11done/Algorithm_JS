// Game developer Jordi is going to turn a crane claw machine into a mobile game.
// In order to increase the fun of the game,
// Jordi intends to reflect the screen composition and rules in the game logic as follows.
// The game screen is an N×N-sized square grid consisting of 1×1 squares,
// with a crane on the top and a basket on the right.
// Each grid compartment contains various dolls, and the compartment without dolls is empty.
// All dolls occupy a 1 by 1 grid and are stacked one by one from the bottom of the grid.
// Game users can move the crane left and right to pick up the top doll in the stopped position.
// The dolls picked up are piled up in the basket,
// and the dolls are piled up in order from the bottom compartment of the basket.
// If two dolls of the same shape are piled up in a row in the basket,
// the two dolls will burst and disappear from the basket.
//  When a two-dimensional array board containing the grid state of the game screen
// and an array moves containing the location where the crane was operated to pick up the doll are given as variables,
// complete the solution function to return the number of dolls that burst and disappeared.
// Ex) INPUT :
//     board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
//     moves = [1,5,3,5,1,2,1,4]
//    OUTPUT: 4

const solution = (board, moves) => {
  const dollStack = [];
  let count = 0;
  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        let doll = board[i][move - 1];
        board[i][move - 1] = 0;
        doll === dollStack[dollStack.length - 1]
          ? dollStack.pop() && (count += 2)
          : dollStack.push(doll);
        break;
      }
    }
  }
  return count;
};

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
let t = performance.now();
let a1 = solution(board, moves);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
