/*
  input:
    string of characters, digits, whitespace
  output:
    new string with every consonant doubled or repeated

  if empty return empty
  avoid whitespace and numbers

  define an empty string
  iterate over each character and identify wether or not it is a consonant
  if it is repeat the character in new string
  if it is not do not repeat it in new stirng
  return the new string
*/

const CONSONANTS = "bcdfghjklmnpqrstvwxyz";

function doubleConsonants(str) {
  let doubleCon = "";

  str.split('').forEach(char => {
    if (CONSONANTS.includes(char.toLowerCase())) {
      doubleCon += char.repeat(2);
    } else {
      doubleCon += char;
    }
  });

  return doubleCon;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""