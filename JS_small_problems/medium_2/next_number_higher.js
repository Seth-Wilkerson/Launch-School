/*
  input:
    a number
  output:
    the next featured number
  
  need to iterate the current number
  check if it is odd
  if it is a multiple of seven
  and if all of its digits appear exactly once

  note that the maximum number is 9876543201

  iterate until featured number is found or current number equals 9876543201

  divide by 2 and check remainder is 1
  divide by 7 and check if remainder is 0

  convert to string
  add each digit to an object as the property
  if a property ever already exists then digit appears twice or more

  if the number passed in is a featured number then my code returns
  change to using a do while so it will iterate first rather than return
  because no matter what we want a bigger number

  refactor to be more efficent
*/

function hasUniqueDigits(num) {
  let strNum = String(num);
  let digitTracker = {};

  for (let idx = 0; idx < strNum.length; idx++) {
    if (digitTracker.hasOwnProperty(strNum[idx])) {
      return false;
    } else {
      digitTracker[strNum[idx]] = 1;
    }
  }

  return true;
}

console.log(hasUniqueDigits(123)); // true
console.log(hasUniqueDigits(144)); // false
console.log(hasUniqueDigits(457923566)); // false



function isFeaturedNumber(num) {
  let isOdd = num % 2 === 1;
  let isMultipleOfSeven = num % 7 === 0;

  return isOdd && isMultipleOfSeven && hasUniqueDigits(num);
}

console.log(isFeaturedNumber(35)); // true
console.log(isFeaturedNumber(144)); // false
console.log(isFeaturedNumber(1023547)); // true

function featured(currentNum) {
  do {
    currentNum += 1;
  } while (!isFeaturedNumber(currentNum) && currentNum < 9876543201)

  if (isFeaturedNumber(currentNum)) {
    return currentNum;
  } else {
    return 'There is no possible number that fulfills those requirements.';
  }
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."