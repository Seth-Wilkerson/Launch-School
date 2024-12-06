/*
  input:
    number
  output:
    difference of sum squared and squares summed
  
  starting from 1
  get each number up to the provided number
  calculate the sum
  and get the squared sum with the same loop to be efficient
  return the sum squared minus the squares summed
*/

function sumSquareDifference(num) {
  let sum = 0;
  let squaredSum = 0;

  for (let count = 1; count <= num; count++) {
    sum += count;
    squaredSum += count ** 2;
  }

  return (sum ** 2) - squaredSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150