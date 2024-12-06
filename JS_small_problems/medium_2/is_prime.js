/*
  input:
    number
  output:
    true or false based on if input is prime

  positive number that is only divisble by 1 and itself
  all even numbers are not prime
  
  starting from 2 divide the input by 2 to input - 1  
  if it has no remainder return false
  if all have a remaninder return true
*/

function is_prime(num) {
  if (num === 1 || num === 0) {
    return false;
  }

  for (let n = 2; n < num; n++) {
    if (num % n === 0) {
      return false;
    }
  }

  return true;
}

console.log(is_prime(1) === false)            // true
console.log(is_prime(2) === true)             // true
console.log(is_prime(3) === true)             // true
console.log(is_prime(4) === false)            // true
console.log(is_prime(5) === true)             // true
console.log(is_prime(6) === false)            // true
console.log(is_prime(7) === true)             // true
console.log(is_prime(8) === false)            // true
console.log(is_prime(9) === false)            // true
console.log(is_prime(10) === false)           // true
console.log(is_prime(23) === true)            // true
console.log(is_prime(24) === false)           // true
console.log(is_prime(997) === true)           // true
console.log(is_prime(998) === false)          // true
console.log(is_prime(3_297_061) === true)     // true
console.log(is_prime(23_297_061) === false)   // true