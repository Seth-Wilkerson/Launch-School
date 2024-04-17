/*
  Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

  input of a string with x number of duplicate characters
  spaces and periods count
  return a string with all consecutive duplicates removed

  aaa -> a
  ... -> .
  aa..aa -> a.a

  if '' then return ''
  I will say case does matter based here

  need some way of storing the current character and checking if each next character is the same
  if it isn't then make that character the next one to compare with (current)


  create an empty  string for result or assign first char if it exists
  define a current character variable set to first char in string currentCharToCompare

  iterate over every character
  on each iteration compare the currentCharToCompare to the current iteration char
  if different add the next char to the result and update the compareChar to the next char

  return result
*/


function crunch(str) {
  let result = str[0] || '';
  let currentCharToCompare = str[0];

  str.split('').forEach(char => {
    if (currentCharToCompare !== char) {
      result += char;
      currentCharToCompare = char;
    }
  });

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""