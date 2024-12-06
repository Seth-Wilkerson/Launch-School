/*
  input:
    two stirng arguments
  output:
    true or false based on the letters in str1 can be arranged such that they make str2
  
  Can you repeat letters in str1? can they be used more than once?
    looks like no?
  
  if str2 is longer than str1 then str1 is unable to make up str2

  get the count of every letter in str1
  and str2

  then compare and make sure that every letter in str2 appears in str1 enough times

  seen letter:
  define seen/count object empty
  iterate on each letter
  check if it is in object
    if it is increase count
  otherwise
    initalize to 1 in object
  return object

  get letter counts for str1
  and str2
  check if each letter in str2 appears in str1 enough times
  if it does return true
  if not return false

  iterate on str2 count object
  and check if the same property exists for str1 counts
  and that the count in str1 is greater than str2
*/

function letterCount(str) {
  let countObj = {};

  str.split('').forEach(letter => {
    if (countObj.hasOwnProperty(letter)) {
      countObj[letter] += 1;
    } else {
      countObj[letter] = 1;
    }
  });

  return countObj;
}

function unscramble(str1, str2) {
  let str1Counts = letterCount(str1);
  let str2Counts = letterCount(str2);

  for (let letter in str2Counts) {
    if (!str1Counts.hasOwnProperty(letter)) {
      return false;
    } else if (str1Counts.hasOwnProperty(letter) && str1Counts[letter] < str2Counts[letter]) {
      return false;
    }
  }

  return true;
}


const p = console.log;
p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);

p(letterCount('ansucchlohlo'));