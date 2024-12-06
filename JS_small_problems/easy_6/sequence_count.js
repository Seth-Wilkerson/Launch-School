/*
  input:
    count or number of elements
    starting element
  output:
    array with the number of elements specified
    with increasing multiples x1, x2,x3...so on

  0 count returns empty array

  define empty array
  loop the number of times of the count
  multiply the starting element by a number that will increase each loop
  push to empty array
  return array
*/

function sequence(count, startingElem) {
  let result = [];

  for (num = 1; num <= count; num++) {
    result.push(startingElem * num);
  }

  return result;
}


console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []