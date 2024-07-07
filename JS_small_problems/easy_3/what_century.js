/*
  input:
    number representing a year
  output:
    is a string of the century

  2000 -> "21st"

  Need a formula to determine the century
  note century starts in 01 so 1901-2000 is 20th

  Need to handle th, st, rd, nd

  divide by 100 gets the digits you want and then just add one
  but need to handle case of 2000 being 20th not 21st

  if last digit is 1st

  I am dumb
*/

function century(year) {
  let centuryNum  = Math.floor(year / 100) + 1;

  if (year % 100 == 0) {
    centuryNum -= 1;
  }


}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

correct solution:


function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}