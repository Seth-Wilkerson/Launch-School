/*
  input:
    string of lowercase letters
  output:
    array with shorest substring and the number of times it repeats
  
  get every substring possible
  filter out substrings that don't add up to length of string

  while getting list of substrings
  track if substring was seen before and how many times
  if the length of substring * the number of appearances is equal to the string length
  then it is a valid fit for output
  look for the shortest substring that fits that criteria
*/

function repeatedSubstring(str) {
  let seenSubStr = {};

  for (let subStrLen = 1; subStrLen <= str.length; subStrLen++) {
    for (let idx = 0; idx <= str.length - subStrLen; idx++) {
      let subStr = str.slice(idx, idx + subStrLen);

      if (seenSubStr.hasOwnProperty(subStr)) {
        seenSubStr[subStr] += 1;
      } else {
        seenSubStr[subStr] = 1;
      }
    }
  }

  let validSubStr = Object.entries(seenSubStr).filter(entry => {
    let subStr = entry[0];
    let count = entry[1];

    return (subStr.length * count) === str.length;
  });

  validSubStr.sort((a, b) => {
    return a[0].length - b[0].length;
  });

  return validSubStr[0];
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));