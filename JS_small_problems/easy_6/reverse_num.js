/*
  input:
    positive number
  output:
    number reversed

  Not that trailing zeros do NOT become leading zeros

  could loop on each char in reverse as string or array
  and add gaurd clause for 0
  or coerce to number after constructing in string

  best way is to convert to string
  split to array
  reverse the array
  join the array
  coerce the string to number
*/

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1