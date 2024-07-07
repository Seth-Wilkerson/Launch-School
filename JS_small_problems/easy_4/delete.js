// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
console.log(palindromeSubstrings("palindrome"))
// should log: []
//
console.log(palindromeSubstrings(""))
// should log: []

/*
  input:
    string
  output:
    array of substrings that are palindromes

  What is a palindrome?
  What is a substring?
  How long is a substring?
  palindrromes are case sensitive
  empty input returns empty array
*/