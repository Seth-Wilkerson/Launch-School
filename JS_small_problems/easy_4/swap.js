/*
  input:
    string of words separated by a space
  output:
    same string of words with the first andd last letter of each  word swapped

  
    oh -> ho
    load toad -> doal doat
  
  Will need to split up the string on spaces to get each word
  will need to go over each word and construct the output string with swapped letters
  matining the same spaces and same number of words

  implementation detail probably easiest to store words in an array
  to easily join on a space at the end

  define an empty array to stro swapped words
  split input string on spaces to get words
  loop over each word
  constuct the swapped string/word
  add to the array
  join the swapped words in the array and return
*/

function swap(sentence) {
  let swappedWords = [];
  let words = sentence.split(' ');

  words.forEach(word => {
    if (word.length > 1) {
      let swappedWord = word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
      swappedWords.push(swappedWord);
    } else {
      swappedWords.push(word);
    }
  });

  return swappedWords.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"