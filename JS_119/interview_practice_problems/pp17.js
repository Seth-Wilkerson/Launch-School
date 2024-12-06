/*
  input:
    array of numbers
      The array will always contain at least 2 integers.
      All values in the array must be positive (> 0).
      There may be multiple occurrences of the various numbers in the array.
  output:
    number to be added to the array such that the sum of all elements is the next prime
  
  current sum
  look at each number after that
  until we hit a prime number
  then subract the current sum from the prime number
  which will give the output number

  get the current sum
  iterate starting frum current sum + 1
  until current number is prime

  then do (current number) prime - current sum
  return that value

  how to determine prime?
  iterate on every number from 2 to number - 1
  and ensure that when number divided by n there is a remaninder > 0
  if all have a remainder return true
  otherwise false
*/

function isPrimeNumber(num) {
  for (let n = 2; n < num; n++) {
    if (num % n === 0) {
      return false;
    }
  }

  return true;
}

function nearestPrimeSum(numArr) {
  let currentSum = numArr.reduce((sum, num) => sum + num);
  let currentNumber = currentSum + 1;

  while (!isPrimeNumber(currentNumber)) {
    currentNumber++;
  }

  return currentNumber - currentSum;
}


const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);


p(isPrimeNumber(10));
p(isPrimeNumber(5));