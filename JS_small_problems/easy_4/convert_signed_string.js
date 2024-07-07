/*
  input:
    string of integers
  output:
    the number in the input string as an integer

  "123" -> 123
  "50" -> 50

  we are receiving a number in the form of a string and  need a way to convert to a int
  possible way

  use object literal
  to map each string number to an integer number
  this way we can look at each character and return the correct digit

  {
    "0": 0,
    "1", 1,
    and so on
  }

  Issue with this is perserving the place
  need to ensure that the 100s digit remains the 100s digt

  define our object number mapping
  create result number set to 0
  define a variable to track the numbers place set to length minus 1
  iterate each character of the input string
  get corresponding int value and multiply by 10 to the numbers place
  (if ones then multtiply by 1)
  add to result number
  subtract from numbers place
  return result number


  Or use the plus sign +
  unary operator
  +"1" -> 1


  Now receiving a string that could be a signed number meaning starting with + or -
  or no + or - and just the number
  will need to check first charcacter and change output accordingly

  "+123" -> 123
  "-123" -> -123
  "123" -> 123

  define a sigend result variable
  check the first character
  if it is a + call stringToInteger on subset of string with  + removed
  else if it is a - call stringToInteger on subset of string with - removedand multiply by -1
  else call stringToInteger on whole string
  return sigend result variable
*/

function stringToInteger(string) {
  const stringToIntegerMap = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }

  convertedNumber = 0;
  numbersPlace = string.length - 1;

  string.split('').forEach(number => {
    convertedNumber += stringToIntegerMap[number] * (10 ** numbersPlace);
    numbersPlace -= 1;
  });

  return convertedNumber;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true



function stringToSignedInteger(string) {
  let signedNumber = 0;

  if (string[0] === '+') {
    signedNumber = stringToInteger(string.slice(1));
  } else if (string[0] === '-') {
    signedNumber = stringToInteger(string.slice(1)) * -1;
  } else {
    signedNumber = stringToInteger(string);
  }

  return signedNumber;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true