/*
  input:
    array of numbers
  output:
    number that is different
  
  array will have at least three numbers always
  and there will always be one different number

  get the count of each appearance in array
  filter to the count with 1
  retunr that number
*/

function whatIsDifferent(numArr) {
  let countObj = {};

  numArr.forEach(num => {
    if (countObj.hasOwnProperty(num)) {
      countObj[num] += 1;
    } else {
      countObj[num] = 1;
    }
  });

  let oddManOut = Object.entries(countObj).filter(entry => entry[1] === 1)[0][0];

  return Number(oddManOut);
}




const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);