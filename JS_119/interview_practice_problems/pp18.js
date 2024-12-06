// UNSOLVED


/*
  input:
    array of integers
  output:
    the index which has all elements to the left sum to equal all elements to the right
  
  array is empty or less than two characters?
  return -1 if no possible answer
  left of index 0 is 0
  right of index length is 0

  Look at each number
  get the sum of the left
  and the sum of the right
  compare sums
  if they are equal then return index
  if none are equal return -1

  if it is first or last element
  the leftSum should be 0
  and the rightSUm should be 0


  given number array
  iterate onneach number
  add each number to sum
  return sum
*/

function getSum(numArr) {
  return numArr.reduce((sum, num) => sum + num, 0);
}

function equalSumIndex(numArr) {
  for (let idx = 0; idx < numArr.length; idx++) {
    let leftSum = getSum(numArr.slice(0, idx + 1));
    let rightSum = getSum(numArr.slice(idx + 1));

    if (idx === 0) {
      leftSum = 0;
    } else if (idx === numArr.length - 1) {
      rightSum = 0;
    }

    if (leftSum === rightSum) {
      return idx;
    }
  }

  return -1;
}

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);


p(getSum([1, 2, 3]));
p(getSum([4,5,6]));



//UNSOLVEDDD