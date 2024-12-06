/*
  input:
    number
    which digit to move to the counting from right
  output:
    number with specified digit moved to the end
  
  What happens if the number is 0?
  What if the digit is greater than the number of digits?

  Start counting from the right most digit to the specified digit starting with 1
  1234, 1 -> move 4 to the end = 1234
  1234, 2 _> move 3 to the end = 1243

  Locate the specified digit
  remove it from the number
  save it
  add it to the end of the number
  return that new number

  Get each digit of the number in a list
  remove the specified digit from the list
  save it
  add it to the end of the list
  convert it back to a number
  return that number

  implemntation:
    to make a list convert to string then split
    to remove use splice which will return removed number in array and mutate
    to convert back join then convert to number
    to get the specified digit use length minus 1
*/

function rotateRightmostDigits(num, digit) {
  let digitArray = String(num).split('');
  let removedDigit = digitArray.splice(digitArray.length - digit, 1);
  let updatedArray = digitArray.concat(removedDigit);
  let newNumber = Number(updatedArray.join(''));
  return newNumber;
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917