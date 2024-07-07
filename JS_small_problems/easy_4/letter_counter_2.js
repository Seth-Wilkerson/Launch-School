/*
  input:
    string with words separated by spaces
  output:
    object containing every word length and count of how many words per length

  
  'hi yes no' -> {'2': 2, '3': 1}

  Need to split the the sentence up into words and get the length of each word
  store that length in the result object or increment an existing count

  split string input into separate words
  define an empty result oject
  loop through each word
    add length to result object or increment count if length already exists
  return result object



  ---------------------------------------------------------
  part 2

  same input
  output is a bit different now
    need to only count lettersas part of length of word

  space separator is the same
  add new function numberofLetters
  that will get the length of each word only letters

  define a constant with all letters
  define a count or length starting at 0
  loop through each letter
  lowercase letter is in the constant list or string
  add to the count
  else do nothing
  return the count
*/

function numberofLetters(word) {
  const LETTERS = 'abcddefghijklmnopqrstuvwxyz';
  let length = 0;

  word.split('').forEach(character => {
    if (LETTERS.includes(character.toLowerCase())) {
      length += 1;
    }
  });

  return length;
}

function wordSizes(sentence) {
  let result = {};
  let words = sentence.length > 0 ? sentence.split(' ') : [];

  words.forEach(word => {
    let wordLength = numberofLetters(word);

    if (result.hasOwnProperty(wordLength)) {
      result[wordLength] += 1;
    } else {
      result[wordLength] = 1;
    }
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}