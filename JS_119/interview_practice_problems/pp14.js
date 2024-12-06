/*
  input:
    integer number
  output:
    sum of all multiples of 7 and 11 below the input
  
  if 0 return 0
  if negative return negative
  if number is multiple of 7 AND 11 count only once in sum
  only numbers less than input number (exclude the input number)

  look at every number up to input not including input
  determine if it is a multiple of 7 or 11
  if it is track the number is a sum
  return that sum once all numbers are iterated over
*/

function sevenEleven(highestNum) {
  let sum = 0;

  for (let currNum = 7; currNum < highestNum; currNum++) {
    if ((currNum % 7 === 0) || (currNum % 11 === 0)) {
      sum += currNum;
    }
  }

  return sum;
}

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);