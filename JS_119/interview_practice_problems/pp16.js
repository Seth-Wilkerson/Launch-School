/*
  input:
    aplhanumeric string of characters
  output:
    count of characters that are present more than once
  
  all character will be alphanumeric
  What if input is empty string?
    return 0
  case does not matter X = x
  
  get the count of each character in the string
  get only counts that are greater than 1
  count how many
  return count

  define a seen/count object
  iterate on each character
  if already in object increment count by 1
  if not define count at 1
  return count object

  lowercase string before getting counts
  once you have counts object
  filter to only counts greater than 1
  get the length of that new list
  return length
*/

function characterCount(str) {
  let countObj = {};

  str.split('').forEach(char => {
    if (countObj.hasOwnProperty(char)) {
      countObj[char] += 1;
    } else {
      countObj[char] = 1;
    }
  });

  return countObj;
}

function distinctMultiples(str) {
  let lowerStr = str.toLowerCase();
  let strCountObj = characterCount(lowerStr);
  let greaterThanOneList = Object.values(strCountObj).filter(count => count > 1);

  return greaterThanOneList.length;
}

const p = console.log;
p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5


p(characterCount('xxyypzzr'));
p(characterCount('3141592653589793'));