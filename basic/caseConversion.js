// Write a function takes a string that will replace all upper case letter to lower case and vise versa
// Ex) INPUT: StuDY
//     OUTPUT: sTUdy

const solution = str => {
  let answer = '';
  for (let letter of str) {
    let ASCII_CODE = letter.charCodeAt();
    ASCII_CODE >= 97 && ASCII_CODE <= 122
      ? (answer += String.fromCharCode(ASCII_CODE - 32))
      : (answer += String.fromCharCode(ASCII_CODE + 32));
  }
  return answer;
};

console.log(solution('StuDY'));
