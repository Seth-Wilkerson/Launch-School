let numbers = [1, 5, 2, 4, 3];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let copyOfNumbers = Object.assign([], numbers);
copyOfNumbers.reverse();
console.log(copyOfNumbers);

let copyOfNumbers2 = Object.assign([], numbers);
copyOfNumbers2.sort((num1, num2) => num2 - num1);
console.log(copyOfNumbers2);