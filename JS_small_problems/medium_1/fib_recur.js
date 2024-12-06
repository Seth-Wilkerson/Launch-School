/*
  inoput:
    nth index of fibonacci sequence
  output:
    the nth number of the fibonacci sequence

  Have to use a recursive function
  need to find escape sequence
  and pattern of amller and smaller versions

  1 1 2 3 5 8 13

  when n is 1 or 2
  return 1

  fib = (n - 1) + (n - 2)

  next number equals previous number + previous previous number
*/

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765