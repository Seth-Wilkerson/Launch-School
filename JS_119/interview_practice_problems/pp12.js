/*
  input:
    string text
  output:
    true false for inf the text is panagram
  
  case does not matter
  check if string contains every letter
  
  define every letter
  iterate on each letter
  check if it is in text
  if all are in text
  return true
  ortherwise false
*/

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

function isPangram(text) {
  let loweredText = text.toLowerCase();

  return LETTERS.split('').every(letter => loweredText.includes(letter));
}


const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);