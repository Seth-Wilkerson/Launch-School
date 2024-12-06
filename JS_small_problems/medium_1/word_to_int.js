/*
  input:
    sentence with numbers spelled out as words
  output:
    same sentence with words coverted to numbers
  
  Need to find each word that is a number spelled out
  and convert it to the corresponding number

  Does case matter?

  need a way to store the word to number structure
  object literal would work
  one: 1
  two: 2

  Get a list of each word and iterate on it
  transforming the numbers to actual numbers

  get list of words
  iterate on each word
  check if it is a number
  if it is change it to a actaul number in the object
  join new list of words to make new sentence
  return new sentence

  implementation:
    use map to transform


  How to handle punctuation?

  We know we need to replace each instance of number words
  with the numbers specified in the data structure

  define a result string assigned to the current sentence
  iterate of the object of number words
  and replace those in the string if they exist
  update the result string and continue to edit that stirng
*/

const NUMBER_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

function wordToDigit(sentence) {
  let newSentence = sentence;

  for (let numWord in NUMBER_WORDS) {
    newSentence = newSentence.replaceAll(numWord, NUMBER_WORDS[numWord]);
  }

  return newSentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."