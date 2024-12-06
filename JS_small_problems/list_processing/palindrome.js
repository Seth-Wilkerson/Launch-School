/*
  input:
    string
  output:
    list of all palindromes within the input
  
  palindrome measn same forward as backwards
  all characters count
  case matters
  1 character does not count

  Will need to get all substrings (function from last exercise)
  filter out all 1 character substrings
  filter down to only substrings that equal themsleves reversed
  return result

  technical note
  You could implement a loop that compares each character
  with two iterators
  one at the beginnning and one at the end of the characters
  and check if they are equal all the way through

  easier to just split reverse join
*/

function leadingSubstrings(string) {
  let substrings = [];

  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

function substrings(str) {
  let subStrArr = [];

  for (let i = 0; i < str.length; i++) {
    subStrArr = subStrArr.concat(leadingSubstrings(str.slice(i)));
  }

  return subStrArr;
}

function palindromes(str) {
  let substringArray = substrings(str);
  let removeOneSubStrings = substringArray.filter(subStr => subStr.length > 1);
  let palindromeStrArray = removeOneSubStrings.filter(subStr => subStr === subStr.split('').reverse().join(''));

  return palindromeStrArray;
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]