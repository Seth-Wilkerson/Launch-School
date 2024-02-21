function factors(number) {
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }

    divisor -= 1;
  }

  return factors;
}

console.log(factors(8));
console.log(factors(0));
console.log(factors(-23));
console.log(factors(-8));
console.log(factors(1));
console.log(factors(56));
console.log(factors(51));
console.log(factors(67));