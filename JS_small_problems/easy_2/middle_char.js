/*
  Receiving non empty striNG
  need to return midddle character
  1 character for odd length
  and 2 characters for even length

  Use length property of String to ddetimine if length is odd or even
  divide to get the middle index or indicies

  use something to extract the middle characters slice could work
*/

function centerOf(str) {
  let middleChars = '';
  let strLength = str.length;

  if (strLength % 2 === 0) {
    middleChars = str.slice((strLength / 2) - 1, (strLength / 2) + 1);
  } else {
    middleChars = str[Math.floor(strLength / 2)];
  }

  return middleChars
}



console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"