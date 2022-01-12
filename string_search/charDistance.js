// Given a string and character (letter),
// Write a function that returns the shortest distance between each character and given character.
// Ex) INPUT: teachermode, e
//     OUTPUT: 1,0,1,2,1,0,1,2,2,1,0

const solution = (str, char) => {
  let distanceArray = [];
  let distance = Number.MAX_VALUE;
  for (let i = 0; i < str.length; i++) {
    str.charAt(i) !== char ? distance++ : (distance = 0);
    distanceArray.push(distance);
  }
  distance = Number.MAX_VALUE;
  for (let i = str.length - 1; i >= 0; i--) {
    str.charAt(i) !== char ? distance++ : (distance = 0);
    distanceArray[i] =
      distanceArray[i] > distance ? distance : distanceArray[i];
  }
  return distanceArray;
};

console.log(solution('teachermode', 'e'));
