/*
  Get six numbers from the user
  check if the sixth number appears in the first 5

  output wether the sixth apears or not

  1,2,3,4,5,6 -> 6 not in 1,2,3,4,5
  6,2,3,4,5,6 -> 6 in 6,2,3,4,5,6

  get readline-sync
  define an emtpy array
  loop six times to get six numbers
  and push each number on to an array

  create a slice of the first 5 elements and check if it includes the last element
  log based on that if else

  NOT DOING INPUT VALIDATION
*/

const readline = require('readline-sync');

let numbers = [];

for (let count = 1; count <= 6; count++) {
  let number = Number(readline.question("Enter a number: "));

  numbers.push(number);
}

let firstFive = numbers.slice(0, 5);
let lastNumber = numbers[numbers.length - 1];

if (firstFive.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${firstFive.join(',')}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${firstFive.join(',')}.`);
}



