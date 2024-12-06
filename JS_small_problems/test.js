/*
  input:
    string of characters
  output:
    object with 3 properties lowercase, uppercase, and neither counts
  
  Need a way to check if a character is a letter or not
  if it is lowercase or uppercase
  and then increment the corresponding count

  define constant with all letters lowercase
  define constant with all letters uppercase
  create empty object with three props set to 0
  iterate on each character of input
  check if it is in upper or lower case
  or not
  increment correct property
  return object
*/

// const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';

// function letterCaseCount(str) {
//   let countObj = {
//     lowercase: 0,
//     uppercase: 0,
//     neither: 0
//   };

//   str.split('').forEach(char => {
//     if (upperAlpha.includes(char)) {
//       countObj["uppercase"] += 1;
//     } else if (lowerAlpha.includes(char)) {
//       countObj["lowercase"] += 1;
//     } else {
//       countObj["neither"] += 1;
//     }
//   });

//   return countObj;
// }


// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


/*
  input:
    string of chars
  output:
    same string but upper and lower case characters alternate

  non letter fields count even though they can't change case
  first we need to set a blank canvas meaning set the entire string to upper or lower case
  that way we can then alter every other character

  create a new string that is the same one in uppercase
  iterate over each character of the new string
  track the index and make every other index lowercase in a new string (transformation on some characters)
  return the new string
  

  technical:
    When using toUpperCase or toLowerCase it will only covert letters
    so it can be used on all character swithout checking type
    although that might not be the most explict design
*/

// function staggeredCase(str) {
//   let upperStr = str.toUpperCase();

//   let staggeredStr = upperStr.split('').map((char, idx) => {
//     if (idx % 2 === 1) {
//       return char.toLowerCase();
//     }

//     return char;
//   }).join('');

//   return staggeredStr
// }


// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

/*
  input:
    stirng of words
  output:
    array of strings with the string and the length of the string in each element
  
  Need to look at each word and get length
  combine the word and the length to a string
  and add that to an array

  implmentation details:
    need a array that has the same number of elements as words
    map makes sense here
*/

// function wordLengths(wordStr) {
//   if (typeof wordStr !== 'string' || wordStr.length < 1) {
//     return [];
//   }

//   return wordStr.split(' ').map(word => {
//     return word + ' ' + word.length;
//   });
// }


// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []

/*
  input:
    word to search for
    string of words
  output:
    string of words with the word to searh for bolded
  
  'test', 'test this is a word'
  -> '**TEST** this is a word'
  
  Does case matter?
  Should punctuation be included in word?

  Need to check wether each word is equal to the word to search
  let's try case insensitve
  if it is update the result string with it bolded
  which means we need a result string that contains the same things as the input

  define empty result string
  get list of each word from input string
  iterate on the list of each word
    compare to the searchWord in uppercase
    if it matches add to result string bolded
    else add to the result string normal
  return the result string
*/

function searchWord(findWord, text) {
  let wordArray = text.split(' ');

  let boldedWordArray = wordArray.map(word => {
    let upperCaseWord = word.toUpperCase();

    if (findWord.toUpperCase() === upperCaseWord) {
      return '**' + upperCaseWord + '**';
    }

    return word;
  });

  return boldedWordArray.join(' ');
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"