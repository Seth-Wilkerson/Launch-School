/*
  Sum of Sums? More like Scrum of Scrums!

  input:
   an array of numbers not empty
  output:
    a number which is the sum of sums of each sub-array
  
  [1,2,3] -> (1) + (1 + 2) + (1 + 2 + 3) = 10

  Notice that the total number of sub-arrays is the same as the array length
  We will alaways include index 0
  loop until the end index is array length - 1
  each iteration should get the sum of that sub-array
  
  input:
    array of numbers
  output:
    the sum of those numbers

  [1,2,3] -> 6

  loop over each number
  and add them together each iteration to create a sum
  return sum
  (reduce)

  loop over each sub-array (sub-array count equals the length o array)
  get the sum of the sub-array and add it to the overall sum of sums
  return the sum of sums
*/

function sum(numArr) {
  return numArr.reduce((accum, num) => accum + num);
}

console.log(sum([1,2,3])) // 6
console.log(sum([3]))

function sumOfSums(numArr) {
  return numArr.reduce((accum, _, idx) => {
    return accum + sum(numArr.slice(0, idx+1));
  });
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35