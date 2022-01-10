// Write a function takes a string that will replace all letter to the upper case
// Ex) INPUT: ItisTimeToStudy
//     OUTPUT: ITISTIMETOSTUDY

const solution = str => {
  //using ASCII code
  let answer = '';
  for (let letter of str) {
    let ASCII_Code = letter.charCodeAt();
    ASCII_Code >= 97 && ASCII_Code <= 122
      ? (answer += String.fromCharCode(ASCII_Code - 32))
      : (answer += letter);
  }
  return answer;
  // Built-in
  //return str.toUpperCase();
};

console.log(solution('ItisTimeToStudy'));
