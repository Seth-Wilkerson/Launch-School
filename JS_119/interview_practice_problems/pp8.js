/*
  input:
    string of lowercase letters
  output:
    length of longest vowel substring
  
  substring consecutive vowels?
    yes test cases
  string will not be empty
  1 is a valid substring length
  0 if no vowels

  define valid vowels
  identify vowels in substrings
  get consecutive vowels grouped
  
  get the length of the largest group


  define list of substrings (empty)
  define a empty substring
  look at each character
    if it is a vowel
      add to substring
      if next letter is consonant
        add substring to list of substrings
        set substring back to empty
  get the count of each substr in list
  sort in desc order
  return the first index or highest count
*/

const VOWELS = 'aeiou';

function longestVowelSubstring(text) {
  let subStrList = [];
  let currentSubStr = '';

  text.split('').forEach((letter, idx) => {
    if (VOWELS.includes(letter)) {
      currentSubStr += letter;

      if (!VOWELS.includes(text[idx+1])) {
        subStrList.push(currentSubStr);
        currentSubStr = '';
      }
    }
  });

  let highestCount = subStrList.map(subStr => subStr.length).sort((a, b) => b - a)[0];

  return highestCount ? highestCount : 0;
}

const p = console.log;
p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);