/*
  input:
    integer
  output:
    array with digits 1 to n where n is the input integer

  if 0 empty array
  inclusive of integer

  define empty array
  loop the number of times from 1 to integer
  adding each integer to the array
  return the array
*/

let sequence = function (max) {
  let result = [];

  for (let count = 1; count <= max; count++) {
    result.push(count);
  }

  return result;
};

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]