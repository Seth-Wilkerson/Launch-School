/*
  input:
    array of numbers
  output:
    count of unique pairs
  
  if empty or 1 number return 0
  if you use a number in a pair can't be in another pair
    meaning [1,1,1] -> 1 pair
  
  define a count at 0
  Look at each number
    compare each number to every other number in array
    if there is a match
    increment count
    remove or null out those indexes
  return count
*/

function pairs(numArr) {
  let count = 0;

  for (let idx = 0; idx < numArr.length; idx++) {
    if (numArr[idx] !== null) {
      for (let idx_two = 0; idx_two < numArr.length; idx_two++) {
        if (idx !== idx_two && numArr[idx_two] !== null) {
          if (numArr[idx] === numArr[idx_two]) {
            count++;
            numArr[idx] = null;
            numArr[idx_two] = null;
          }
        }
      }
    }
  }

  return count;
}

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);