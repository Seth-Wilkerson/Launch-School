/*
  Write a function that takes one argument, an array of integers, 
  and returns the average of all the integers in the array, 
  rounded down to the integer component of the average. 
  The array will never be empty, and the numbers will always be positive integers.

  input:
    array of positive integers
  output:
    average of all integers in input array rounded down to an integer
  
  Will the input array always contain at least one element?
  What is average if empty?


  To get the average we need the sum of all the integers divided by the number
  of integers
  Round the average down to nearest integer

  Get the sum of all the integers
  Divide by the length/number of integers
  Round down to the nearest integer
  return average
*/

function average(arrOfInt) {
  let sumOfInt = arrOfInt.reduce((accum, int) => {
    return accum + int;
  });

  floatAverage = sumOfInt / arrOfInt.length;
  integerAverage = Math.floor(floatAverage);

  return integerAverage;
}


console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40