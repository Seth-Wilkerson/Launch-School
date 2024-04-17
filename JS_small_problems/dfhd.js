function getStartingEvenNum(numOfRowsBefore) {
  let numOfElements = 0;

  for (let count = numOfRowsBefore; count > 0; count--) {
    numOfElements += count;
  }

  return (numOfElements * 2) + 2;
}

function evenSum(rowNum) {
  let sum = 0;
  let startingEvenNum = getStartingEvenNum(rowNum - 1);

  for (let count = 1; count <= rowNum; count++) {
    sum += startingEvenNum;
    startingEvenNum += 2;
  }

  return sum;
}

console.log(evenSum(0));  // 0
console.log(evenSum(1));  // 2
console.log(evenSum(2));  // 10
console.log(evenSum(3));  // 30
console.log(evenSum(4));  // 68
console.log(evenSum(5));  // 130
console.log(evenSum(20)); // 8020