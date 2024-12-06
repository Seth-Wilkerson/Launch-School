/*
  input:
    number of digists to look for
  output:
    index of the first fibonacci number with that many digits

  index startis counting at 1

  will need to continue to find the next number in sequence
  until we hit the specified number of digits
  continue to iterate the index

  To find the next number in sequence
  previousNumber starting at 1
  currentNumber starting at 1
  while the currentNumber num of digits is under the input amount
  continue to find next numbers by adding the previous and current number
  to update the current number
   
  if input is 1 then return 1
*/

function findFibonacciIndexByLength(numOfDigits) {
  if (numOfDigits === 1n) {
    return 1n;
  }

  let previousNumber = 1n;
  let currentNumber = 1n;
  let index = 2n

  while (String(currentNumber).length < numOfDigits) {
    let copyOfPreNum = previousNumber;
    previousNumber = currentNumber;
    currentNumber = currentNumber + copyOfPreNum;
    index += 1n;
  }

  return index;
}

console.log(findFibonacciIndexByLength(1n) === 1n); 
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.