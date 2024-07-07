/*
  input:
    array of numbers
  output:
    array of numbers with each element being a ruinning total of the input

  [1, 3, 4] -> [1, 4, 7]
  [] -> []

  create an empty array for result output return
  crate a current sum variable or running total
  loop through each element in the input
  add the elements value to the running total
  add the running  tottal to the result array
  return the resuilting array
*/

function runningTotal(arrayOfNumbers) {
  let result = [];
  let runningTotal = 0;

  arrayOfNumbers.forEach(num => {
    runningTotal += num;
    result.push(runningTotal);
  });

  return result;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []