/*
Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. 
If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. 
Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

Note that for this problem, the letters 'y' and 'w' should be treated as consonants.

// Problem
  Input
    - array of strings
  
  Output
    - sorted array of strings by the highest number of adjacent consonants

  Explict
    - If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other
    - Consonants are considered adjacent if they are next to each other in the same word
    - if there is a space between two consonants in adjacent words (WHAT?) Does this mean word ends with consonant and next wordd begins with one?
    - the letters 'y' and 'w' should be treated as consonants

    Single consonants in a string do not affect sort order in comparison to strings with no consonants. Only adjacent consonants affect sort order.

    The highest number of adjacent consonants in a string will be compared against all the other strings and sorted
    What is considered a word?
    (we could say that a consonant is a letter that is not a vowel)
    Direction of sort order?

    (Be better at edge case thinking in questions)
    Can strings contain a single word?
    Can strings be empty?
    Is it possible for a string to contain no adjacent consonants?


// Examples
  A string can have 1 word
  Can a string be empty? cannot be empty
  in decending order

  'salt pan' has 3 adjacent consonants for 'lt p'
  The space between words does not matter (Note for implemntaion replace all spaces to check adjacent consonants)
  This is sorting the strings not words a string can have multiple words (duh)

  Will the list ever be empty?
  What about a single string? (probably just the  single string array)
  Single  string with no consonants? (probably just the  single string array)

  Using strings and arrays
  no real abstract strucutre happneing here

  {
    'aa': 0,
    'baa': 0,
    'ccaa': 2,
    'dddaa': 3
  }
  (Tthink about model and map it even for a middle step like tracking)

  Will be analyzing the strtings by words meaning spaces between characters

  How to handle special characters (non lettters)?


// Algorithm
  We want to take the array of strings and get the number of adjacent consonants in each string
  following the rules of the problem and add them to a list in descending order

  Define an object to track the adjacent consoants
  Define what a consonant is because we are dealing with only letters we can say it is not a vowel
  Adjacent consonants can go across spaces to other words we should remove spaces in  each string(.replace or .split(' ').join(''))
  Get the count of adjacent consonant in each string (1 consonant does not count)
    - do that by analyzing the number of characters that are not vowels
  track the number of adjacent consonants while going through each string keep track of the greatest on (longest length)
  add the number to object to track by string
  create the result array by adding the strings in descending order
  refer back to original order for same count
  return the result array

*/

function countMaxAdjacentConsonants(str) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  let strNoSpaces = str.split(' ').join('');
  let count = 0;
  let tempStr = '';

  for (let i = 0; i < strNoSpaces.length; i++) {
    if (!VOWELS.includes(strNoSpaces[i])) {
      tempStr += strNoSpaces[i];
    } else {
      tempStr = '';
    }

    if (tempStr.length > 1 && tempStr.length > count) {
      count = tempStr.length;
    }
  }

  return count;
}

function sortStringsByConsonants(array) {
  let arrayCopy = array.slice();

  let sortedArray = arrayCopy.sort((a, b) => {
    return countMaxAdjacentConsonants(b) -
           countMaxAdjacentConsonants(a);
  });

  return sortedArray;

}


// console.log(countMaxAdjacentConsonants('dddaa')); // 3
// console.log(countMaxAdjacentConsonants('ccaa'));  // 2
// console.log(countMaxAdjacentConsonants('baa'));   // 0
// console.log(countMaxAdjacentConsonants('aa'));    // 0

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']