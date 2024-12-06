/*
  input:
    string of a number
  output:
    the number of even numbered substrings
  
  substring is not any order or arrangement of numbers
  123 -> 12 or count of 1
  length of 1 digit counts as a substring


  get every substring
  and check if it is an even number
  if it is add to list of even num substr
  count that list
  return count

  get every substring
  start by getting every 1 length substr
  up to every input str length substr

  '123' -> every 1, then 2, finally 3

  deinfe substring list
  itereate over each substr size 1-str.length
  iterate over string and add substr of current length to list
  only if the substr is even number
  return length of list
*/

function evenSubstrings(str) {
  let subStrList = [];

  for (let subStrLength = 1; subStrLength <= str.length; subStrLength++) {
    for (let idx = 0; idx <= str.length - subStrLength; idx++) {
      let subStr = str.slice(idx, idx + subStrLength);
      
      if (Number(subStr) % 2 === 0) {
        subStrList.push(subStr);
      }
    }
  }

  return subStrList.length;
}

const p = console.log;
p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);