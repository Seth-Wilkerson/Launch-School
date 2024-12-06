/*
  inoput:
    number
  output:
    maximum rotation of the inputed number
  
  Drop leading zeros
  Should work for single digit (just return single digit)
  What happens if the number 0 is passed? I asssume return 0

  Rotate the first digit to the end
  then take that new number and rotate the second digit to the end
  and so on

  We will need to do n rotation where n is the length of the number passed

  length 3
  123 ->
    231
    213
    213 -- this is not necessary but makes thinking easier
  
  each rotation will take the next digit over and rotate it

  iterate over the length of the number input
  rotate the n - (number.length - iteration)
  save the result and contiunue to iterate with result being the new number

  return the new number
*/

function rotateRightmostDigits(num, digit) {
  let digitArray = String(num).split('');
  let removedDigit = digitArray.splice(digitArray.length - digit, 1);
  let updatedArray = digitArray.concat(removedDigit);
  let newNumber = Number(updatedArray.join(''));
  return newNumber;
}

function maxRotation(num) {
  let numLen = String(num).length;
  let currentNum = num;

  for (let count = 0; count <= numLen; count++) {
    currentNum = rotateRightmostDigits(currentNum, numLen - count);
  }

  return currentNum;
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845