/*
  input:
    string of words and non-alphabetic characters
  output:
    string with all non-alphabetic characters replaced with a space
    only a single space do not repeat spaces even after

  We need to analyze each character of the string and determine if it is an alphabetic charcter or not
  (implementation detail we can  do this by having a array or string of all letters lower/upper for includes)
  if it is alphabetic add to the result/do nothing
  if it is non-alphabetic then replace with a space
  but only a single space for consecutive characters

  (in the case of a space being in the input just replace it with a space no harm done)

  '}{:>dfj}' => ' dfj '

  define a result string for output
  define a constant with all alphabetic characters
  loop through each character of input
    if it is alphabetic add to result as is
    else if it is non-alpha 
      if last character in the result is space then do nothing
      else add space to result
  return result string
*/

function cleanUp(messyString) {
  const APLHA = 'abcdefghijklmnopqrstuvwxyz';
  const SINGLE_SPACE = ' ';

  let result = '';

  for (let i = 0; i < messyString.length; i++) {
    let currentChar = messyString[i];

    if (APLHA.includes(currentChar.toLowerCase())) {
      result += currentChar;
    } else if (result[result.length - 1] !== SINGLE_SPACE) {
      result += SINGLE_SPACE;
    }
  }

  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp("-"));    // " "