/*
  inoput:
    a string
  output:
    an array with every possible substring within the string input ordered by position

  Because we need the order of the array to be by position
  we need to get each substring starting at index 0 first

  0-1
  0-2
  0-3
  1-2
  1-3

  We can use the function from the previous exercise to get all the substrings
  in order like above
  if we pass in the our string starting with 0-end
  then 1-end
  and so on

  define empty subStr array
  loop over each starting character which is 0 to length - 2
  call the function with the current slice of the string
  append the return value to the result subStr array
  return the subStr array
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

console.log(substrings('abcde'));