/*
  input:
    two strings
  output:
    number of times the second string appears in the first
  
  first string can be empty
  second string cannot

  overlapping does not count

  aoaoa, aoa is only 1

  loop until str1 does not contain an instance of str2
  check if str1 contains str2
  if it does
    increase count
    and remove that instance of str2
  
  return count

  to remove get indexOf the str2
  and use remove it from string (use array and splice)
  update the str1 to new string with str2 removed
*/

function countSubstrings(str1, str2) {
  let count = 0;

  while (str1.includes(str2)) {
    count++;

    let startingIdx = str1.indexOf(str2);
    let str1Arr = str1.split('');
    str1Arr.splice(startingIdx, str2.length)
    str1 = str1Arr.join('');
  }

  return count;
}

const p = console.log;
p(countSubstrings('babab', 'bab') === 1);
p(countSubstrings('babab', 'ba') === 2);
p(countSubstrings('babab', 'b') === 3);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('', 'x') === 0);
p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);