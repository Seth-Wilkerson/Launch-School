/*
  Given an array of numbers and a number multiply each number in the array by the number
  and return a new array of all the results

  Should not mutate the original array

  [1,2,3,4,5] and 2
  = [2,4,6,8,10]

  Define the multiplied numbers array for the result
  Multiply each element by the multiplier and add it to the result array
  return the result array
*/

function multiply(numbers, multiplier) {
  let multipliedNumbers = [];

  for (let i = 0; i < numbers.length; i++)  {
    multipliedNumbers.push(numbers[i] * multiplier);
  }

  return multipliedNumbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
console.log(myNumbers); // => [1, 4, 3, 7, 2, 6]