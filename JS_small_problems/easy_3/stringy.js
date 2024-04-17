/*
  Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. 
  The length of the string should match the given integer.

  input positive integer
  output is string of alternating 1s and 0s with a length of input
  start with 1

  if input is 0 return ''

  2 -> '10'
  3 -> '101'

  define result empty string
  loop the number of times as the given integer
  on each iteration add a character to the result string
  need a  way to alternate characters between '1' and '0'

  return the result string

  for loop use odd and even count to ddetirmine 1 or 0
  start looping from 1 that way we can use remainder of dividing by 2
  as the character odds would be 1 an evens would be 0
  will need to coerce the number to string to append concatenate with result (not necessary with binary + operator but explcit is better)
*/

function stringy(length) {
  let result = '';

  for (let count = 1; count <= length; count++) {
    result += count % 2;
  }

  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"